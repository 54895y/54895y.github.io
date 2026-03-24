import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Matrix Wiki',
  tagline: 'Matrix 系列插件官方文档',
  favicon: 'img/logo.svg',
  future: {
    v4: true,
  },
  url: 'https://54895y.github.io',
  baseUrl: '/',
  organizationName: '54895y',
  projectName: '54895y.github.io',
  deploymentBranch: 'main',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  customFields: {
    aiSearch: {
      provider: 'deepseek',
      endpoint: 'https://api.deepseek.com/chat/completions',
      model: 'deepseek-chat',
      storageKey: 'matrixWiki.deepseekApiKey',
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/54895y/54895y.github.io/tree/main/',
          exclude: ['**/tutorial-basics/**', '**/tutorial-extras/**'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        docsRouteBasePath: '/docs',
        indexBlog: false,
        indexPages: false,
        language: ['zh', 'en'],
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarShortcut: true,
        searchBarShortcutKeymap: 'mod+k',
        searchBarPosition: 'right',
        searchResultLimits: 8,
        searchResultContextMaxLength: 100,
      },
    ],
  ],
  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Matrix Wiki',
      logo: {
        alt: 'Matrix Wiki Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/docs/plugins', label: 'Plugins', position: 'left'},
        {to: '/docs/matrixauth/overview', label: 'MatrixAuth', position: 'left'},
        {to: '/docs/matrixcook/overview', label: 'MatrixCook', position: 'left'},
        {to: '/docs/matrixshop', label: 'MatrixShop', position: 'left'},
        {type: 'search', position: 'right'},
        {to: '/ai-search', label: 'AI 搜索', position: 'right'},
        {
          href: 'https://github.com/54895y/54895y.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: '插件列表',
              to: '/docs/plugins',
            },
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'MatrixAuth',
              to: '/docs/matrixauth/overview',
            },
            {
              label: 'MatrixCook',
              to: '/docs/matrixcook/overview',
            },
            {
              label: 'MatrixShop',
              to: '/docs/matrixshop',
            },
          ],
        },
        {
          title: 'Repository',
          items: [
            {
              label: '54895y.github.io',
              href: 'https://github.com/54895y/54895y.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 54895y. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
