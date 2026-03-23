import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'plugins',
    'intro',
    {
      type: 'category',
      label: 'MatrixAuth',
      link: {
        type: 'doc',
        id: 'matrixauth/overview',
      },
      items: [
        'matrixauth/installation',
        'matrixauth/configuration',
        'matrixauth/commands',
        'matrixauth/placeholders',
        'matrixauth/easybot',
        'matrixauth/development',
        'matrixauth/faq',
      ],
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
