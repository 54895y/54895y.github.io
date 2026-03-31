import React, {useCallback, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {useHistory, useLocation} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';
import {
  DocsPreferredVersionContextProvider,
  useActivePlugin,
  useActiveVersion,
} from '@docusaurus/plugin-content-docs/client';
import {fetchIndexesByWorker, searchByWorker} from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/searchByWorker';
import {SuggestionTemplate} from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchBar/SuggestionTemplate';
import {EmptyTemplate} from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchBar/EmptyTemplate';
import {
  Mark,
  docsPluginIdForPreferredVersion,
  hideSearchBarWithNoSearchContext,
  searchBarPosition,
  searchBarShortcut,
  searchBarShortcutHint,
  searchBarShortcutKeymap,
  searchContextByPaths,
  useAllContextsWithNoSearchContext,
} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGenerated';
import {searchResultLimits} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGeneratedConstants';
import {normalizeContextByPath} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/normalizeContextByPath';
import {
  getKeymapHints,
  matchesKeymap,
  parseKeymap,
} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/keymap';
import {isMacPlatform} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/platform';
import LoadingRing from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/LoadingRing/LoadingRing';
import styles from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchBar/SearchBar.module.css';

async function fetchAutoCompleteJS() {
  const autoCompleteModule = await import('@easyops-cn/autocomplete.js');
  const autoComplete = autoCompleteModule.default;

  if (autoComplete.noConflict) {
    autoComplete.noConflict();
  } else if (autoCompleteModule.noConflict) {
    autoCompleteModule.noConflict();
  }

  return autoComplete;
}

const SEARCH_PARAM_HIGHLIGHT = '_highlight';

function buildAiSearchUrl(baseUrl, query) {
  const params = new URLSearchParams();
  params.set('q', query);
  return `${baseUrl}ai-search/?${params.toString()}`;
}

function createManagedLink({history, search, href, text}) {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = text;
  link.addEventListener('click', (event) => {
    if (!event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      search.current?.autocomplete.close();
      history.push(href);
    }
  });
  return link;
}

function buildSearchPageUrl({
  baseUrl,
  currentLocale,
  query,
  searchContext,
  searchContextByPaths,
  useAllContextsWithNoSearchContext,
  versionUrl,
}) {
  const params = new URLSearchParams();
  params.set('q', query);

  let linkText;
  if (searchContext) {
    const detailedSearchContext = Array.isArray(searchContextByPaths)
      ? searchContextByPaths.find((item) =>
          typeof item === 'string' ? item === searchContext : item.path === searchContext,
        )
      : searchContext;
    const translatedSearchContext = detailedSearchContext
      ? normalizeContextByPath(detailedSearchContext, currentLocale).label
      : searchContext;

    if (useAllContextsWithNoSearchContext) {
      linkText = translate(
        {
          id: 'theme.SearchBar.searchInContext',
          message: '查看“{context}”中的全部结果',
        },
        {context: translatedSearchContext},
      );
    } else {
      linkText = translate({
        id: 'theme.SearchBar.seeAll',
        message: '查看全部结果',
      });
    }
  } else {
    linkText = translate({
      id: 'theme.SearchBar.seeAll',
      message: '查看全部结果',
    });
  }

  if (
    searchContext &&
    Array.isArray(searchContextByPaths) &&
    (!useAllContextsWithNoSearchContext || searchContext !== '')
  ) {
    params.set('ctx', searchContext);
  }

  if (versionUrl !== baseUrl) {
    if (!versionUrl.startsWith(baseUrl)) {
      throw new Error(
        `Version url '${versionUrl}' does not start with base url '${baseUrl}', this is a bug of @easyops-cn/docusaurus-search-local.`,
      );
    }
    params.set('version', versionUrl.substring(baseUrl.length));
  }

  return {
    href: `${baseUrl}search/?${params.toString()}`,
    text: linkText,
  };
}

function buildFooterElement({
  baseUrl,
  currentLocale,
  history,
  isEmpty,
  query,
  search,
  searchContext,
  versionUrl,
}) {
  const container = document.createElement('div');
  container.className = styles.hitFooter;
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return null;
  }

  const shouldShowSearchPageLink = !(
    isEmpty &&
    (!searchContext || !useAllContextsWithNoSearchContext)
  );

  if (shouldShowSearchPageLink) {
    const searchPageLink = buildSearchPageUrl({
      baseUrl,
      currentLocale,
      query: trimmedQuery,
      searchContext,
      searchContextByPaths,
      useAllContextsWithNoSearchContext,
      versionUrl,
    });
    container.appendChild(
      createManagedLink({
        history,
        search,
        href: searchPageLink.href,
        text: searchPageLink.text,
      }),
    );
  }

  if (isEmpty) {
    if (container.childNodes.length > 0) {
      container.appendChild(document.createTextNode(' / '));
    }
    container.appendChild(
      createManagedLink({
        history,
        search,
        href: buildAiSearchUrl(baseUrl, trimmedQuery),
        text: translate({
          id: 'theme.SearchBar.openAiSearch',
          message: '试试 AI 搜索',
        }),
      }),
    );
  }

  return container.childNodes.length > 0 ? container : null;
}

function SearchBarImpl({handleSearchBarToggle}) {
  const isBrowser = useIsBrowser();
  const {
    siteConfig: {baseUrl},
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const activePlugin = useActivePlugin();
  let versionUrl = baseUrl;
  const activeVersion = useActiveVersion(activePlugin?.pluginId ?? docsPluginIdForPreferredVersion);

  if (activeVersion && !activeVersion.isLast) {
    versionUrl = `${activeVersion.path}/`;
  }

  const history = useHistory();
  const location = useLocation();
  const searchBarRef = useRef(null);
  const indexStateMap = useRef(new Map());
  const focusAfterIndexLoaded = useRef(false);
  const [loading, setLoading] = useState(false);
  const [inputChanged, setInputChanged] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [focused, setFocused] = useState(false);
  const search = useRef(null);
  const prevSearchContext = useRef('');
  const prevVersionUrl = useRef(baseUrl);
  const [searchContext, setSearchContext] = useState('');

  useEffect(() => {
    if (!Array.isArray(searchContextByPaths)) {
      if (prevVersionUrl.current !== versionUrl) {
        indexStateMap.current.delete('');
        prevVersionUrl.current = versionUrl;
      }
      return;
    }

    let nextSearchContext = '';
    if (location.pathname.startsWith(versionUrl)) {
      const uri = location.pathname.substring(versionUrl.length);
      let matchedPath;

      for (const entry of searchContextByPaths) {
        const path = typeof entry === 'string' ? entry : entry.path;
        if (uri === path || uri.startsWith(`${path}/`)) {
          matchedPath = path;
          break;
        }
      }

      if (matchedPath) {
        nextSearchContext = matchedPath;
      }
    }

    if (prevSearchContext.current !== nextSearchContext) {
      indexStateMap.current.delete(nextSearchContext);
      prevSearchContext.current = nextSearchContext;
    }

    setSearchContext(nextSearchContext);
  }, [location.pathname, versionUrl]);

  const hidden =
    Boolean(hideSearchBarWithNoSearchContext) &&
    Array.isArray(searchContextByPaths) &&
    searchContext === '';

  const loadIndex = useCallback(async () => {
    if (hidden || indexStateMap.current.get(searchContext)) {
      return;
    }

    indexStateMap.current.set(searchContext, 'loading');
    search.current?.autocomplete.destroy();
    setLoading(true);

    const [autoComplete] = await Promise.all([
      fetchAutoCompleteJS(),
      fetchIndexesByWorker(versionUrl, searchContext),
    ]);

    search.current = autoComplete(
      searchBarRef.current,
      {
        hint: false,
        autoselect: true,
        openOnFocus: true,
        cssClasses: {
          root: clsx(styles.searchBar, {
            [styles.searchBarLeft]: searchBarPosition === 'left',
          }),
          noPrefix: true,
          dropdownMenu: styles.dropdownMenu,
          input: styles.input,
          hint: styles.hint,
          suggestions: styles.suggestions,
          suggestion: styles.suggestion,
          cursor: styles.cursor,
          dataset: styles.dataset,
          empty: styles.empty,
        },
      },
      [
        {
          source: async (input, callback) => {
            const result = await searchByWorker(versionUrl, searchContext, input, searchResultLimits);
            callback(result);
          },
          templates: {
            suggestion: SuggestionTemplate,
            empty: EmptyTemplate,
            footer: ({query, isEmpty}) =>
              buildFooterElement({
                baseUrl,
                currentLocale,
                history,
                isEmpty,
                query,
                search,
                searchContext,
                versionUrl,
              }),
          },
        },
      ],
    )
      .on('autocomplete:selected', (event, {document: {u, h}, tokens}) => {
        searchBarRef.current?.blur();

        let url = u;
        if (Mark && tokens.length > 0) {
          const params = new URLSearchParams();
          for (const token of tokens) {
            params.append(SEARCH_PARAM_HIGHLIGHT, token);
          }
          url += `?${params.toString()}`;
        }
        if (h) {
          url += h;
        }
        history.push(url);
      })
      .on('autocomplete:closed', () => {
        searchBarRef.current?.blur();
      });

    indexStateMap.current.set(searchContext, 'done');
    setLoading(false);

    if (focusAfterIndexLoaded.current) {
      const input = searchBarRef.current;
      if (input.value) {
        search.current?.autocomplete.open();
      }
      input.focus();

      if (window.matchMedia('(max-width: 576px)').matches) {
        input.setSelectionRange(input.value.length, input.value.length);
      }
    }
  }, [baseUrl, currentLocale, hidden, history, searchContext, versionUrl]);

  useEffect(() => {
    if (!Mark) {
      return;
    }

    const keywords = isBrowser ? new URLSearchParams(location.search).getAll(SEARCH_PARAM_HIGHLIGHT) : [];
    setTimeout(() => {
      const root = document.querySelector('article');
      if (!root) {
        return;
      }

      const mark = new Mark(root);
      mark.unmark();
      if (keywords.length !== 0) {
        mark.mark(keywords, {
          exclude: ['.theme-doc-toc-mobile > button'],
        });
      }

      setInputValue(keywords.join(' '));
      search.current?.autocomplete.setVal(keywords.join(' '));
    });
  }, [isBrowser, location.pathname, location.search]);

  const onInputFocus = useCallback(() => {
    focusAfterIndexLoaded.current = true;
    loadIndex();
    setFocused(true);
    handleSearchBarToggle?.(true);

    if (window.matchMedia('(max-width: 576px)').matches) {
      const input = searchBarRef.current;
      if (input) {
        setTimeout(() => {
          input.setSelectionRange(input.value.length, input.value.length);
        }, 0);
      }
    }
  }, [handleSearchBarToggle, loadIndex]);

  const onInputBlur = useCallback(() => {
    setFocused(false);
    handleSearchBarToggle?.(false);
  }, [handleSearchBarToggle]);

  const onInputMouseEnter = useCallback(() => {
    loadIndex();
  }, [loadIndex]);

  const onInputChange = useCallback((event) => {
    setInputValue(event.target.value);
    if (event.target.value) {
      setInputChanged(true);
    }
  }, []);

  useEffect(() => {
    const searchBar = searchBarRef.current;
    const domValue = searchBar?.value;
    if (domValue) {
      setInputValue(domValue);
    }
    if (searchBar && document.activeElement === searchBar) {
      focusAfterIndexLoaded.current = true;
      loadIndex();
      setFocused(true);
      handleSearchBarToggle?.(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!searchBarShortcut || !searchBarShortcutKeymap) {
      return undefined;
    }

    const parsedKeymap = parseKeymap(searchBarShortcutKeymap);
    const handleShortcut = (event) => {
      if (matchesKeymap(event, parsedKeymap)) {
        event.preventDefault();
        searchBarRef.current?.focus();
        onInputFocus();
      }
    };

    document.addEventListener('keydown', handleShortcut);
    return () => {
      document.removeEventListener('keydown', handleShortcut);
    };
  }, [onInputFocus]);

  const onClearSearch = useCallback(() => {
    const params = new URLSearchParams(location.search);
    params.delete(SEARCH_PARAM_HIGHLIGHT);
    const paramsStr = params.toString();
    const searchUrl = location.pathname + (paramsStr !== '' ? `?${paramsStr}` : '') + location.hash;

    if (searchUrl !== location.pathname + location.search + location.hash) {
      history.push(searchUrl);
    }

    setInputValue('');
    search.current?.autocomplete.setVal('');
  }, [history, location.hash, location.pathname, location.search]);

  const isMac = isBrowser ? isMacPlatform() : false;
  const searchLabel = translate({
    id: 'theme.SearchBar.label',
    message: '搜索',
    description: 'The ARIA label and placeholder for search button',
  });

  return (
    <div
      className={clsx('navbar__search', styles.searchBarContainer, {
        [styles.searchIndexLoading]: loading && inputChanged,
        [styles.focused]: focused,
      })}
      hidden={hidden}
      dir="ltr">
      <input
        placeholder={searchLabel}
        aria-label={searchLabel}
        className={`navbar__search-input ${styles.searchInput}`}
        onMouseEnter={onInputMouseEnter}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChange={onInputChange}
        ref={searchBarRef}
        value={inputValue}
      />
      <LoadingRing className={styles.searchBarLoadingRing} />
      {searchBarShortcut && searchBarShortcutHint ? (
        inputValue !== '' ? (
          <button className={styles.searchClearButton} onClick={onClearSearch} type="button">
            x
          </button>
        ) : (
          isBrowser &&
          searchBarShortcutKeymap && (
            <div className={styles.searchHintContainer}>
              {getKeymapHints(searchBarShortcutKeymap, isMac).map((hint, index) => (
                <kbd key={index} className={styles.searchHint}>
                  {hint}
                </kbd>
              ))}
            </div>
          )
        )
      ) : null}
    </div>
  );
}

export default function SearchBarWrapper(props) {
  return (
    <DocsPreferredVersionContextProvider>
      <SearchBarImpl {...props} />
    </DocsPreferredVersionContextProvider>
  );
}
