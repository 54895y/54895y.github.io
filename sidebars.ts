import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'plugins',
    'intro',
    {
      type: 'category',
      label: 'MatrixAgentSkills',
      link: {
        type: 'doc',
        id: 'matrix-agent-skills/overview',
      },
      items: [
        'matrix-agent-skills/install-by-agent',
        'matrix-agent-skills/direct-link-examples',
        'matrix-agent-skills/matrix-series-config',
        'matrix-agent-skills/matrixshop-config',
        'matrix-agent-skills/migrating-other-shop-plugins',
        'matrix-agent-skills/anti-inflation-prompt-templates',
        'matrix-agent-skills/aichat-knowledge-base',
      ],
    },
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
        'matrixauth/developer-api',
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
        'matrixcook/developer-api',
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
        {
          type: 'category',
          label: '开始使用',
          link: {
            type: 'doc',
            id: 'matrixshop/getting-started/quick-start',
          },
          items: [
            'matrixshop/getting-started/commands-and-permissions',
            'matrixshop/getting-started/faq',
          ],
        },
        {
          type: 'category',
          label: '配置与系统',
          link: {
            type: 'doc',
            id: 'matrixshop/configuration/configuration-structure',
          },
          items: [
            'matrixshop/configuration/economy',
            'matrixshop/configuration/economy-reference',
            'matrixshop/configuration/economy-examples',
            'matrixshop/configuration/database-and-storage',
            'matrixshop/developer-api',
            'matrixshop/configuration/bindings-and-ui',
            'matrixshop/configuration/bindings-help-and-hints',
            'matrixshop/configuration/system-shop',
            'matrixshop/bstats-and-telemetry',
          ],
        },
        {
          type: 'category',
          label: '模块与机制',
          link: {
            type: 'doc',
            id: 'matrixshop/modules/modules-overview',
          },
          items: [
            'matrixshop/modules/player-economy-modules',
            'matrixshop/modules/interaction-modules',
          ],
        },
        {
          type: 'category',
          label: '更新日志',
          link: {
            type: 'doc',
            id: 'matrixshop/release-notes/index',
          },
          items: [
            'matrixshop/release-notes-1-7-0',
            'matrixshop/release-notes-1-6-2',
            'matrixshop/release-notes/release-notes-1-6-0',
            'matrixshop/release-notes/release-notes-1-5-0',
            'matrixshop/release-notes/release-notes-1-4-0',
            'matrixshop/release-notes/release-notes-1-3-0',
            'matrixshop/release-notes/release-notes-1-2-0',
            'matrixshop/release-notes/release-notes-1-1-1',
            'matrixshop/release-notes/release-notes-1-1-0',
          ],
        },
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
      ],
    },
    {
      type: 'category',
      label: 'MatrixStorage',
      link: {
        type: 'doc',
        id: 'matrixstorage/index',
      },
      items: [
        'matrixstorage/installation',
        'matrixstorage/commands-and-permissions',
        'matrixstorage/database-and-storage',
        'matrixstorage/developer-api',
        'matrixstorage/mailbox',
        'matrixstorage/warehouse-overview',
        'matrixstorage/block-warehouses',
        'matrixstorage/integrations',
        'matrixstorage/faq',
      ],
    },
  ],
};

export default sidebars;
