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
  url: 'https://matrixplugin.github.io',
  baseUrl: '/',
  organizationName: 'MatrixPlugin',
  projectName: 'matrixplugin.github.io',
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
          editUrl: 'https://github.com/MatrixPlugin/matrixplugin.github.io/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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
    metadata: [
      {
        name: 'description',
        content: 'MatrixAuth、MatrixCook、MatrixShop 官方文档，包含插件索引、本地搜索与 AI 搜索入口。',
      },
      {
        name: 'keywords',
        content: 'MatrixAuth, MatrixCook, MatrixShop, Minecraft, Paper, Bukkit, 插件文档',
      },
      {
        property: 'og:description',
        content: 'Matrix 系列插件官方文档站点，覆盖概览、安装、配置、命令与常见问题。',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
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
          label: '文档目录',
        },
        {to: '/docs/matrixauth/overview', label: 'MatrixAuth', position: 'left'},
        {to: '/docs/matrixcook/overview', label: 'MatrixCook', position: 'left'},
        {to: '/docs/matrixshop', label: 'MatrixShop', position: 'left'},
        {to: '/docs/matrixstorage', label: 'MatrixStorage', position: 'left'},
        {type: 'search', position: 'right'},
        {to: '/ai-search', label: 'AI 搜索', position: 'right'},
        {
          href: 'https://github.com/MatrixPlugin/matrixplugin.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '站点总览',
              to: '/docs/intro',
            },
            {
              label: '插件列表',
              to: '/docs/plugins',
            },
            {
              label: 'AI 搜索',
              to: '/ai-search',
            },
          ],
        },
        {
          title: '插件',
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
            {
              label: 'MatrixStorage',
              to: '/docs/matrixstorage',
            },
          ],
        },
        {
          title: '仓库',
          items: [
            {
              label: 'matrixplugin.github.io',
              href: 'https://github.com/MatrixPlugin/matrixplugin.github.io',
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
