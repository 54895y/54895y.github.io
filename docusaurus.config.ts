import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Matrix Wiki',
  tagline: '统一维护 Matrix 系列插件的部署、配置与使用文档',
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
      disableSwitch: false,
      respectPrefersColorScheme: false,
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
          label: '文档',
        },
        {to: '/docs/plugins', label: '插件列表', position: 'left'},
        {to: '/docs/matrixauth/overview', label: 'MatrixAuth', position: 'left'},
        {to: '/docs/matrixcook/overview', label: 'MatrixCook', position: 'left'},
        {to: '/docs/matrixshop', label: 'MatrixShop', position: 'left'},
        {
          href: 'https://github.com/54895y/54895y.github.io',
          label: 'Wiki GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '插件列表',
              to: '/docs/plugins',
            },
            {
              label: '站点说明',
              to: '/docs/intro',
            },
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
          ],
        },
        {
          title: '仓库',
          items: [
            {
              label: 'Wiki',
              href: 'https://github.com/54895y/54895y.github.io',
            },
          ],
        },
        {
          title: '入口',
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
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
