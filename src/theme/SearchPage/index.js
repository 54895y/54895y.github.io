import React, {useCallback, useEffect, useMemo, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import {usePluralForm} from '@docusaurus/theme-common';
import clsx from 'clsx';
import useSearchQuery from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/hooks/useSearchQuery';
import {fetchIndexesByWorker, searchByWorker} from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/searchByWorker';
import {SearchDocumentType} from '@easyops-cn/docusaurus-search-local/dist/client/shared/interfaces';
import {highlight} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlight';
import {highlightStemmed} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlightStemmed';
import {getStemmedPositions} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/getStemmedPositions';
import LoadingRing from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/LoadingRing/LoadingRing';
import {concatDocumentPath} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/concatDocumentPath';
import {
  Mark,
  searchContextByPaths,
  useAllContextsWithNoSearchContext,
} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGenerated';
import {normalizeContextByPath} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/normalizeContextByPath';
import searchStyles from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/SearchPage.module.css';
import styles from './styles.module.css';

function buildAiSearchUrl(baseUrl, query) {
  const params = new URLSearchParams();
  params.set('q', query);
  return `${baseUrl}ai-search/?${params.toString()}`;
}

export default function SearchPage() {
  return (
    <Layout>
      <SearchPageContent />
    </Layout>
  );
}

function SearchPageContent() {
  const {
    siteConfig: {baseUrl},
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const {selectMessage} = usePluralForm();
  const searchLabel = translate({
    id: 'theme.SearchBar.label',
    message: '搜索',
    description: 'The ARIA label and placeholder for the search page input',
  });
  const {searchValue, searchContext, searchVersion, updateSearchPath, updateSearchContext} =
    useSearchQuery();
  const [searchQuery, setSearchQuery] = useState(searchValue);
  const [searchResults, setSearchResults] = useState();
  const versionUrl = `${baseUrl}${searchVersion}`;
  const pageTitle = useMemo(
    () =>
      searchQuery
        ? translate(
            {
              id: 'theme.SearchPage.existingResultsTitle',
              message: 'Search results for "{query}"',
              description: 'The search page title for non-empty query',
            },
            {
              query: searchQuery,
            },
          )
        : translate({
            id: 'theme.SearchPage.emptyResultsTitle',
            message: 'Search the documentation',
            description: 'The search page title for empty query',
          }),
    [searchQuery],
  );

  useEffect(() => {
    updateSearchPath(searchQuery);
    if (searchQuery) {
      (async () => {
        const results = await searchByWorker(versionUrl, searchContext, searchQuery, 100);
        setSearchResults(results);
      })();
    } else {
      setSearchResults(undefined);
    }
  }, [searchContext, searchQuery, versionUrl]); // `updateSearchPath` is intentionally omitted to match plugin behavior.

  const handleSearchInputChange = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, []);

  useEffect(() => {
    if (searchValue && searchValue !== searchQuery) {
      setSearchQuery(searchValue);
    }
  }, [searchQuery, searchValue]);

  const [searchWorkerReady, setSearchWorkerReady] = useState(false);

  useEffect(() => {
    async function doFetchIndexes() {
      if (!Array.isArray(searchContextByPaths) || searchContext || useAllContextsWithNoSearchContext) {
        await fetchIndexesByWorker(versionUrl, searchContext);
      }
      setSearchWorkerReady(true);
    }

    doFetchIndexes();
  }, [searchContext, versionUrl]);

  const aiSearchUrl = searchQuery.trim() ? buildAiSearchUrl(baseUrl, searchQuery.trim()) : `${baseUrl}ai-search`;
  const hasResults = Boolean(searchResults && searchResults.length > 0);
  const showAiCallout = Boolean(searchQuery.trim()) && searchWorkerReady;

  return (
    <>
      <Head>
        <meta property="robots" content="noindex, follow" />
        <title>{pageTitle}</title>
      </Head>

      <div className="container margin-vert--lg">
        <h1>{pageTitle}</h1>

        <div className="row">
          <div
            className={clsx('col', {
              [searchStyles.searchQueryColumn]: Array.isArray(searchContextByPaths),
              'col--9': Array.isArray(searchContextByPaths),
              'col--12': !Array.isArray(searchContextByPaths),
            })}>
            <input
              type="search"
              name="q"
              className={searchStyles.searchQueryInput}
              aria-label={searchLabel}
              onChange={handleSearchInputChange}
              value={searchQuery}
              autoComplete="off"
              autoFocus
            />
          </div>
          {Array.isArray(searchContextByPaths) ? (
            <div
              className={clsx(
                'col',
                'col--3',
                'padding-left--none',
                searchStyles.searchContextColumn,
              )}>
              <select
                name="search-context"
                className={searchStyles.searchContextInput}
                id="context-selector"
                value={searchContext}
                onChange={(event) => updateSearchContext(event.target.value)}>
                {useAllContextsWithNoSearchContext ? (
                  <option value="">
                    {translate({
                      id: 'theme.SearchPage.searchContext.everywhere',
                      message: 'Everywhere',
                    })}
                  </option>
                ) : null}
                {searchContextByPaths.map((context) => {
                  const {label, path} = normalizeContextByPath(context, currentLocale);
                  return (
                    <option key={path} value={path}>
                      {label}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : null}
        </div>

        {!searchWorkerReady && searchQuery ? (
          <div>
            <LoadingRing />
          </div>
        ) : null}

        {searchResults ? (
          hasResults ? (
            <p>
              {selectMessage(
                searchResults.length,
                translate(
                  {
                    id: 'theme.SearchPage.documentsFound.plurals',
                    message: '1 document found|{count} documents found',
                    description:
                      'Pluralized label for "{count} documents found". Use as much plural forms as your language supports.',
                  },
                  {count: searchResults.length},
                ),
              )}
            </p>
          ) : process.env.NODE_ENV === 'production' ? (
            <p>
              {translate({
                id: 'theme.SearchPage.noResultsText',
                message: 'No documents were found',
                description: 'The paragraph for empty search result',
              })}
            </p>
          ) : (
            <p>⚠️ 本地搜索索引只会在执行 `docusaurus build` 后生成。</p>
          )
        ) : null}

        {showAiCallout ? (
          <section className={styles.aiCallout}>
            <div className={styles.aiCopy}>
              <p className={styles.aiKicker}>手动 AI 搜索</p>
              <h2 className={styles.aiTitle}>没找到想要的结果？</h2>
              <p className={styles.aiDescription}>
                {hasResults
                  ? '本地搜索已经返回当前索引中的匹配项。如果结果仍不够准确，可以手动进入 AI 搜索继续追问。'
                  : '当前本地索引没有命中结果。你可以手动启动 AI 搜索，继续基于文档片段向 DeepSeek 提问。'}
              </p>
            </div>
            <Link className={styles.aiAction} to={aiSearchUrl}>
              AI 搜索
            </Link>
          </section>
        ) : null}

        <section>
          {searchResults ? (
            searchResults.map((item) => <SearchResultItem key={item.document.i} searchResult={item} />)
          ) : null}
        </section>
      </div>
    </>
  );
}

function SearchResultItem({searchResult: {document, type, page, tokens, metadata}}) {
  const isTitle = type === SearchDocumentType.Title;
  const isKeywords = type === SearchDocumentType.Keywords;
  const isDescription = type === SearchDocumentType.Description;
  const isDescriptionOrKeywords = isDescription || isKeywords;
  const isTitleRelated = isTitle || isDescriptionOrKeywords;
  const isContent = type === SearchDocumentType.Content;
  const pathItems = (isTitle ? document.b : page.b).slice();
  const articleTitle = isContent || isDescriptionOrKeywords ? document.s : document.t;
  if (!isTitleRelated) {
    pathItems.push(page.t);
  }

  let search = '';
  if (Mark && tokens.length > 0) {
    const params = new URLSearchParams();
    for (const token of tokens) {
      params.append('_highlight', token);
    }
    search = `?${params.toString()}`;
  }

  return (
    <article className={searchStyles.searchResultItem}>
      <h2>
        <Link
          to={document.u + search + (document.h || '')}
          dangerouslySetInnerHTML={{
            __html:
              isContent || isDescriptionOrKeywords
                ? highlight(articleTitle, tokens)
                : highlightStemmed(articleTitle, getStemmedPositions(metadata, 't'), tokens, 100),
          }}
        />
      </h2>
      {pathItems.length > 0 ? (
        <p className={searchStyles.searchResultItemPath}>{concatDocumentPath(pathItems)}</p>
      ) : null}
      {isContent || isDescription ? (
        <p
          className={searchStyles.searchResultItemSummary}
          dangerouslySetInnerHTML={{
            __html: highlightStemmed(document.t, getStemmedPositions(metadata, 't'), tokens, 100),
          }}
        />
      ) : null}
    </article>
  );
}
