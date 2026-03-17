import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // 主侧边栏 - 按功能模块组织
  tutorialSidebar: [
    {
      type: 'doc',
      label: '插件列表',
      id: 'plugins',
    },
    {
      type: 'category',
      label: 'MatrixShop',
      link: {
        type: 'doc',
        id: 'matrixshop/index',
      },
      items: [
        'matrixshop/intro',
        'matrixshop/quick-start',
        'matrixshop/core-config',
        'matrixshop/currency',
        {
          type: 'category',
          label: '配置详解',
          items: [
            'matrixshop/module-layout',
            'matrixshop/commands-and-bindings',
            'matrixshop/placeholders-and-price-display',
          ],
        },
        {
          type: 'category',
          label: '模块功能',
          link: {
            type: 'doc',
            id: 'matrixshop/modules/index',
          },
          items: [
            'matrixshop/modules/player-shop',
            'matrixshop/modules/auction',
            'matrixshop/modules/global-market',
            'matrixshop/modules/chest-shop',
            'matrixshop/modules/player-trade',
            'matrixshop/modules/cart-mailbox-transaction',
          ],
        },
        {
          type: 'category',
          label: '系统商店',
          link: {
            type: 'doc',
            id: 'matrixshop/system-shop/index',
          },
          items: [
            'matrixshop/system-shop/goods',
            'matrixshop/system-shop/shops-and-modes',
            'matrixshop/system-shop/recycle-rules',
          ],
        },
        {
          type: 'category',
          label: 'UI 系统',
          link: {
            type: 'doc',
            id: 'matrixshop/ui/index',
          },
          items: [
            'matrixshop/ui/templates-and-actions',
            'matrixshop/ui/builtin-ui-index',
          ],
        },
        {
          type: 'category',
          label: '高级功能',
          link: {
            type: 'doc',
            id: 'matrixshop/advanced/index',
          },
          items: [
            'matrixshop/advanced/language-item-source-and-repo',
            'matrixshop/advanced/compatibility-and-best-practices',
            'matrixshop/advanced/faq-and-troubleshooting',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
