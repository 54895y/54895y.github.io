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
      label: 'MatrixCook',
      link: {
        type: 'doc',
        id: 'matrixcook/overview',
      },
      items: [
        'matrixcook/installation',
        'matrixcook/configuration',
        'matrixcook/cookers-and-recipes',
        'matrixcook/commands-and-placeholders',
        'matrixcook/faq',
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
        'matrixshop/quick-start',
        'matrixshop/release-notes-1-2-0',
        'matrixshop/release-notes-1-1-1',
        'matrixshop/release-notes-1-1-0',
        'matrixshop/configuration-structure',
        'matrixshop/economy',
        'matrixshop/economy-reference',
        'matrixshop/economy-examples',
        'matrixshop/commands-and-permissions',
        'matrixshop/database-and-storage',
        'matrixshop/modules-overview',
        {
          type: 'category',
          label: '商店与模块详解',
          link: {
            type: 'doc',
            id: 'matrixshop/shop-types/index',
          },
          items: [
            'matrixshop/shop-types/menu',
            'matrixshop/shop-types/system-shop',
            'matrixshop/shop-types/player-shop',
            'matrixshop/shop-types/global-market',
            'matrixshop/shop-types/auction',
            'matrixshop/shop-types/chest-shop',
            'matrixshop/shop-types/transaction',
            'matrixshop/shop-types/cart',
            'matrixshop/shop-types/record',
          ],
        },
        'matrixshop/bindings-and-ui',
        'matrixshop/bindings-help-and-hints',
        'matrixshop/faq',
      ],
    },
  ],
};

export default sidebars;
