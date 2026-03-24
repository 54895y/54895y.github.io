import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Matrix Product Docs',
  tagline: '把 Matrix 系列插件文档整理成可交接、可执行的产品 Brief 与实现说明。',
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
  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Matrix Product Docs',
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
              label: '插件索引',
              to: '/docs/plugins',
            },
            {
              label: '站点说明',
              to: '/docs/intro',
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
        {
          title: 'Quick Start',
          items: [
            {
              label: 'MatrixAuth 安装',
              to: '/docs/matrixauth/installation',
            },
            {
              label: 'MatrixCook 安装',
              to: '/docs/matrixcook/installation',
            },
            {
              label: 'MatrixShop 快速开始',
              to: '/docs/matrixshop/quick-start',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 54895y. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
