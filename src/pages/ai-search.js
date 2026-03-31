import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useHistory, useLocation} from '@docusaurus/router';
import {fetchIndexesByWorker, searchByWorker} from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/searchByWorker';
import {SearchDocumentType} from '@easyops-cn/docusaurus-search-local/dist/client/shared/interfaces';
import styles from './ai-search.module.css';

const LOCAL_RESULT_LIMIT = 6;
const FALLBACK_STORAGE_KEY = 'matrixWiki.deepseekApiKey';

function getSearchParam(search, name) {
  return new URLSearchParams(search).get(name) ?? '';
}

function buildPageUrl(pathname, query) {
  const params = new URLSearchParams();
  if (query) {
    params.set('q', query);
  }
  const search = params.toString();
  return `${pathname}${search ? `?${search}` : ''}`;
}

function normalizeText(value) {
  return (value ?? '').toString().replace(/\s+/g, ' ').trim();
}

function getResultTitle(item) {
  const {document, page, type} = item;
  if (
    type === SearchDocumentType.Content ||
    type === SearchDocumentType.Description ||
    type === SearchDocumentType.Keywords
  ) {
    return normalizeText(document.s || page?.t || document.t || '未命名文档');
  }
  return normalizeText(document.t || page?.t || '未命名文档');
}

function getResultPath(item) {
  const {document, page, type} = item;
  const basePath = (type === SearchDocumentType.Title ? document.b : page?.b) ?? [];
  const parts = basePath.slice();

  if (type !== SearchDocumentType.Title && page?.t) {
    parts.push(page.t);
  }

  return parts.filter(Boolean).join(' / ');
}

function getResultSnippet(item) {
  return normalizeText(item.document.t || item.document.s || getResultTitle(item));
}

function getResultUrl(item) {
  return `${item.document.u}${item.document.h || ''}`;
}

function buildDeepSeekMessages(query, results) {
  const contextBlock =
    results.length > 0
      ? results
          .map((result, index) => {
            const title = getResultTitle(result);
            const path = getResultPath(result);
            const snippet = getResultSnippet(result);
            const url = getResultUrl(result);
            return [
              `[${index + 1}] ${title}`,
              path ? `路径：${path}` : null,
              `链接：${url}`,
              `摘要：${snippet}`,
            ]
              .filter(Boolean)
              .join('\n');
          })
          .join('\n\n')
      : '未找到本地文档命中结果。';

  return [
    {
      role: 'system',
      content:
        '你是 Matrix Wiki 的文档搜索助手。请使用中文回答，优先依据给定的本地文档片段作答。不要编造不存在的配置项、命令或权限节点；如果材料不足，请明确说明“当前文档未明确说明”。回答时先给出直接结论，再补充必要解释，最后列出参考页面链接。',
    },
    {
      role: 'user',
      content: [
        `用户问题：${query}`,
        '',
        '本地搜索命中结果：',
        contextBlock,
        '',
        '请按以下要求回答：',
        '1. 如果已有材料足够，请直接给出清晰答案。',
        '2. 如果涉及配置，请解释字段含义、适用场景和注意事项。',
        '3. 如果材料不够，请明确指出缺失信息，不要猜测。',
        '4. 结尾附上参考页面链接列表。',
      ].join('\n'),
    },
  ];
}

async function requestDeepSeek({apiKey, endpoint, model, query, results}) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      stream: false,
      max_tokens: 1000,
      messages: buildDeepSeekMessages(query, results),
    }),
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(payload?.error?.message || `DeepSeek 请求失败（${response.status}）`);
  }

  const content = payload?.choices?.[0]?.message?.content?.trim();
  if (!content) {
    throw new Error('DeepSeek 没有返回可用内容。');
  }

  return content;
}

export default function AiSearchPage() {
  const {siteConfig} = useDocusaurusContext();
  const location = useLocation();
  const history = useHistory();
  const aiSearchConfig = siteConfig.customFields?.aiSearch ?? {};
  const storageKey = aiSearchConfig.storageKey || FALLBACK_STORAGE_KEY;
  const endpoint = aiSearchConfig.endpoint || 'https://api.deepseek.com/chat/completions';
  const model = aiSearchConfig.model || 'deepseek-chat';
  const initialQuery = useMemo(() => getSearchParam(location.search, 'q'), [location.search]);
  const [query, setQuery] = useState(initialQuery);
  const [apiKey, setApiKey] = useState('');
  const [keyMessage, setKeyMessage] = useState('');
  const [localStatus, setLocalStatus] = useState(initialQuery ? 'loading' : 'idle');
  const [localError, setLocalError] = useState('');
  const [localResults, setLocalResults] = useState([]);
  const [aiStatus, setAiStatus] = useState('idle');
  const [aiError, setAiError] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const storedKey = window.localStorage.getItem(storageKey);
    if (storedKey) {
      setApiKey(storedKey);
    }
  }, [storageKey]);

  const updateUrl = useCallback(
    (nextQuery) => {
      history.replace(buildPageUrl(location.pathname, nextQuery));
    },
    [history, location.pathname],
  );

  const loadLocalResults = useCallback(
    async (nextQuery) => {
      const trimmed = nextQuery.trim();
      if (!trimmed) {
        setLocalStatus('idle');
        setLocalError('');
        setLocalResults([]);
        return [];
      }

      setLocalStatus('loading');
      setLocalError('');

      try {
        await fetchIndexesByWorker(siteConfig.baseUrl, '');
        const results = await searchByWorker(siteConfig.baseUrl, '', trimmed, LOCAL_RESULT_LIMIT);
        setLocalResults(results);
        setLocalStatus('ready');
        return results;
      } catch (error) {
        setLocalResults([]);
        setLocalStatus('error');
        setLocalError(error instanceof Error ? error.message : '本地搜索失败，请稍后重试。');
        return [];
      }
    },
    [siteConfig.baseUrl],
  );

  useEffect(() => {
    if (!initialQuery.trim()) {
      setLocalStatus('idle');
      setLocalError('');
      setLocalResults([]);
      return;
    }

    loadLocalResults(initialQuery);
  }, [initialQuery, loadLocalResults]);

  const handleLocalSearch = useCallback(
    async (event) => {
      event.preventDefault();
      const trimmed = query.trim();
      setAiAnswer('');
      setAiError('');
      setAiStatus('idle');
      updateUrl(trimmed);
      await loadLocalResults(trimmed);
    },
    [loadLocalResults, query, updateUrl],
  );

  const handleSaveKey = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const trimmed = apiKey.trim();
    if (!trimmed) {
      window.localStorage.removeItem(storageKey);
      setKeyMessage('已清除当前浏览器中保存的 DeepSeek Key。');
      return;
    }

    window.localStorage.setItem(storageKey, trimmed);
    setApiKey(trimmed);
    setKeyMessage('DeepSeek Key 已保存在当前浏览器。');
  }, [apiKey, storageKey]);

  const handleClearKey = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(storageKey);
    }
    setApiKey('');
    setKeyMessage('已清除当前浏览器中保存的 DeepSeek Key。');
  }, [storageKey]);

  const handleAiSearch = useCallback(async () => {
    const trimmedQuery = query.trim();
    const trimmedKey = apiKey.trim();

    setAiError('');
    setKeyMessage('');

    if (!trimmedQuery) {
      setAiStatus('error');
      setAiError('请输入搜索内容。');
      return;
    }

    if (!trimmedKey) {
      setAiStatus('error');
      setAiError('请先输入并保存 DeepSeek API Key。');
      return;
    }

    setAiStatus('loading');
    setAiAnswer('');
    updateUrl(trimmedQuery);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, trimmedKey);
    }

    const results = await loadLocalResults(trimmedQuery);

    try {
      const answer = await requestDeepSeek({
        apiKey: trimmedKey,
        endpoint,
        model,
        query: trimmedQuery,
        results,
      });
      setAiAnswer(answer);
      setAiStatus('ready');
    } catch (error) {
      setAiStatus('error');
      setAiError(error instanceof Error ? error.message : 'AI 搜索失败，请稍后重试。');
    }
  }, [apiKey, endpoint, loadLocalResults, model, query, storageKey, updateUrl]);

  return (
    <Layout title="AI 搜索" description="手动触发的 Matrix Wiki DeepSeek AI 搜索">
      <Head>
        <meta property="robots" content="noindex, follow" />
      </Head>
      <main className={styles.page}>
        <div className={styles.shell}>
          <section className={styles.heroCard}>
            <p className={styles.kicker}>手动 AI 搜索</p>
            <h1 className={styles.heroTitle}>AI 搜索</h1>
            <p className={styles.heroDescription}>
              先使用本地索引检索当前 Wiki；只有在你主动点击按钮后，才会调用 DeepSeek 继续回答。
            </p>
            <div className={styles.heroMeta}>
              <span>提供方：DeepSeek</span>
              <span>模型：{model}</span>
              <span>触发方式：手动</span>
            </div>
          </section>

          <section className={styles.controlGrid}>
            <article className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <p className={styles.sectionKicker}>第一步</p>
                  <h2>本地搜索</h2>
                </div>
                <Link className={styles.inlineLink} to="/search">
                  打开完整搜索页
                </Link>
              </div>

              <form className={styles.searchForm} onSubmit={handleLocalSearch}>
                <label className={styles.field}>
                  <span>搜索词</span>
                  <input
                    className={styles.textInput}
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="例如：玩家商店上架限制"
                    autoComplete="off"
                  />
                </label>
                <button className={styles.secondaryButton} type="submit">
                  本地搜索
                </button>
                <button className={styles.primaryButton} type="button" onClick={handleAiSearch}>
                  开始 AI 搜索
                </button>
              </form>

              <p className={styles.hint}>
                AI 搜索不会自动执行。只有点击 <strong>开始 AI 搜索</strong> 后，才会向 DeepSeek 发起请求。
              </p>
            </article>

            <article className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <p className={styles.sectionKicker}>第二步</p>
                  <h2>DeepSeek 密钥</h2>
                </div>
              </div>

              <label className={styles.field}>
                <span>API 密钥</span>
                <input
                  className={styles.textInput}
                  type="password"
                  value={apiKey}
                  onChange={(event) => {
                    setApiKey(event.target.value);
                    setKeyMessage('');
                  }}
                  placeholder="输入 DeepSeek API 密钥"
                  autoComplete="off"
                />
              </label>

              <div className={styles.buttonRow}>
                <button className={styles.secondaryButton} type="button" onClick={handleSaveKey}>
                  保存到当前浏览器
                </button>
                <button className={styles.ghostButton} type="button" onClick={handleClearKey}>
                  清除本地密钥
                </button>
              </div>

              <p className={styles.hint}>
                本站部署在 GitHub Pages 上，不能安全地把服务端密钥写进公开仓库。这里的密钥只会保存在你当前浏览器的本地存储中。
              </p>

              {keyMessage ? <p className={styles.notice}>{keyMessage}</p> : null}
            </article>
          </section>

          <section className={styles.contentGrid}>
            <article className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <p className={styles.sectionKicker}>本地结果</p>
                  <h2>本地命中结果</h2>
                </div>
                {localResults.length > 0 ? <span className={styles.badge}>{localResults.length} 条</span> : null}
              </div>

              {localStatus === 'loading' ? <p className={styles.statusText}>正在读取本地索引…</p> : null}
              {localStatus === 'error' ? <p className={styles.errorText}>{localError}</p> : null}
              {localStatus === 'ready' && localResults.length === 0 ? (
                <p className={styles.statusText}>当前本地索引没有找到直接命中结果。</p>
              ) : null}
              {localStatus === 'idle' ? (
                <p className={styles.statusText}>输入搜索词后，先查看本地命中结果，再决定是否启动 AI 搜索。</p>
              ) : null}

              {localResults.length > 0 ? (
                <div className={styles.resultList}>
                  {localResults.map((result) => (
                    <article key={`${result.document.i}-${result.document.h || ''}`} className={styles.resultCard}>
                      <h3>
                        <Link to={getResultUrl(result)}>{getResultTitle(result)}</Link>
                      </h3>
                      {getResultPath(result) ? <p className={styles.resultPath}>{getResultPath(result)}</p> : null}
                      <p className={styles.resultSnippet}>{getResultSnippet(result)}</p>
                    </article>
                  ))}
                </div>
              ) : null}
            </article>

            <article className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <p className={styles.sectionKicker}>AI 回答</p>
                  <h2>DeepSeek 回答</h2>
                </div>
                <span className={styles.badge}>
                  {aiStatus === 'loading' ? '生成中' : aiStatus === 'ready' ? '已完成' : '待触发'}
                </span>
              </div>

              {aiStatus === 'idle' ? (
                <p className={styles.statusText}>AI 还未启动。确认本地结果不够后，再手动点击开始。</p>
              ) : null}
              {aiStatus === 'loading' ? (
                <p className={styles.statusText}>DeepSeek 正在根据当前搜索词和本地文档片段生成回答…</p>
              ) : null}
              {aiStatus === 'error' ? <p className={styles.errorText}>{aiError}</p> : null}
              {aiAnswer ? <div className={styles.answerBody}>{aiAnswer}</div> : null}

              {localResults.length > 0 ? (
                <div className={styles.referenceBlock}>
                  <h3>参考页面</h3>
                  <ul className={styles.referenceList}>
                    {localResults.map((result) => (
                      <li key={`ref-${result.document.i}-${result.document.h || ''}`}>
                        <Link to={getResultUrl(result)}>{getResultTitle(result)}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
}
