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
        'matrixshop/configuration-structure',
        'matrixshop/commands-and-permissions',
        'matrixshop/database-and-storage',
        'matrixshop/modules-overview',
        'matrixshop/system-shop',
        'matrixshop/player-economy-modules',
        'matrixshop/interaction-modules',
        'matrixshop/bindings-and-ui',
        'matrixshop/faq',
      ],
    },
  ],
};

export default sidebars;
