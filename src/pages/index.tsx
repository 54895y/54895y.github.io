import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const quickLinks = [
  {
    title: '插件索引',
    summary: '从统一入口查看当前已维护的插件、文档范围和主阅读路径。',
    label: '查看插件列表',
    to: '/docs/plugins',
  },
  {
    title: 'AI 搜索',
    summary: '先走本地文档检索，再基于命中结果生成中文回答，减少来回翻页。',
    label: '打开 AI 搜索',
    to: '/ai-search',
  },
  {
    title: '站点总览',
    summary: '快速了解站点约定、文档组织方式，以及首次阅读某个插件的建议顺序。',
    label: '阅读总览',
    to: '/docs/intro',
  },
  {
    title: 'GitHub 仓库',
    summary: '直接进入源码与文档仓库，提交问题、补充内容或追踪站点改动。',
    label: '前往 GitHub',
    href: 'https://github.com/54895y/54895y.github.io',
  },
];

const pluginDocs = [
  {
    title: 'MatrixLib',
    summary: 'Matrix 系列共享前置、稳定 API 基线、更新器与遥测封装。',
    topics: ['共享运行时', '开发者 API', '自动更新与审批'],
    detail: '共享前置与基础能力',
    to: '/docs/matrixlib',
  },
  {
    title: 'MatrixAuth',
    summary: '认证、登录、档案绑定、挂钩状态与稳定 API 文档。',
    topics: ['安装与部署', '配置说明', '开发者 API'],
    detail: '认证与档案系统',
    to: '/docs/matrixauth/overview',
  },
  {
    title: 'MatrixCook',
    summary: '锅具、配方、燃料、运行态快照与稳定 API 文档。',
    topics: ['安装与配置', '锅具与配方', '开发者 API'],
    detail: '烹饪与锅具系统',
    to: '/docs/matrixcook/overview',
  },
  {
    title: 'MatrixShop',
    summary: '模块化交易系统、仓库 SPI、运行态快照与稳定 API 文档。',
    topics: ['快速开始', '模块总览', '开发者 API'],
    detail: '交易与商业系统',
    to: '/docs/matrixshop',
  },
  {
    title: 'MatrixStorage',
    summary: '邮箱、仓库、桥接状态、块仓库快照与稳定 API 文档。',
    topics: ['安装与依赖', '仓储能力', '开发者 API'],
    detail: '仓储与桥接系统',
    to: '/docs/matrixstorage',
  },
];

const workflowSteps = [
  {
    title: '先确定插件',
    summary: '从插件索引进入目标插件，再用概览页确认功能边界和适用场景。',
  },
  {
    title: '按顺序阅读',
    summary: '优先看概览、安装、配置和命令页，避免直接从零散配置项开始。',
  },
  {
    title: '遇到细节再搜索',
    summary: '用本地搜索或 AI 搜索定位字段、模块、命令和典型问题页面。',
  },
];

function TelemetryIcon({kind}: {kind: 'shop' | 'auth' | 'cook' | 'lib' | 'storage'}): ReactNode {
  if (kind === 'lib') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6.5h14" />
        <path d="M5 12h14" />
        <path d="M5 17.5h9" />
        <path d="M18 17.5h1.5" />
      </svg>
    );
  }
  if (kind === 'shop') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 10.5h16" />
        <path d="M6 10.5v7.5h12v-7.5" />
        <path d="M3.5 10.5 5 6h14l1.5 4.5" />
        <path d="M10 18v-4h4v4" />
      </svg>
    );
  }
  if (kind === 'auth') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5 18.5 6v5c0 4.2-2.3 7.1-6.5 9.5-4.2-2.4-6.5-5.3-6.5-9.5V6L12 3.5Z" />
        <path d="M9.5 11.5 11 13l3.5-3.5" />
      </svg>
    );
  }
  if (kind === 'storage') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 7.5h15v9h-15z" />
        <path d="M8 11h8" />
        <path d="M8 14h5" />
        <path d="M7 7.5V5.5h10v2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 9h10l1.2 7H5.8L7 9Z" />
      <path d="M9 9V7.8A3 3 0 0 1 12 5a3 3 0 0 1 3 2.8V9" />
      <path d="M18 6.5c1.6.8 2.5 2.2 2.5 4.1 0 2.7-1.8 4.4-4.5 4.4" />
    </svg>
  );
}

const telemetryCards = [
  {
    icon: 'lib' as const,
    title: 'MatrixLib',
    status: '已接入',
    statusTone: 'active',
    chart: 'https://bstats.org/signatures/bukkit/MatrixLib.svg',
    to: '/docs/matrixlib/bstats-and-telemetry',
    action: '查看 MatrixLib 统计',
  },
  {
    icon: 'shop' as const,
    title: 'MatrixShop',
    status: '已接入',
    statusTone: 'active',
    chart: 'https://bstats.org/signatures/bukkit/MatrixShop.svg',
    to: '/docs/matrixshop/bstats-and-telemetry',
    action: '查看 MatrixShop 统计',
  },
  {
    icon: 'auth' as const,
    title: 'MatrixAuth',
    status: '已接入',
    statusTone: 'active',
    chart: 'https://bstats.org/signatures/bukkit/MatrixAuth.svg',
    to: '/docs/matrixauth/bstats-and-telemetry',
    action: '查看 MatrixAuth 统计',
  },
  {
    icon: 'cook' as const,
    title: 'MatrixCook',
    status: '已接入',
    statusTone: 'active',
    chart: 'https://bstats.org/signatures/bukkit/MatrixCook.svg',
    to: '/docs/matrixcook/bstats-and-telemetry',
    action: '查看 MatrixCook 统计',
  },
  {
    icon: 'storage' as const,
    title: 'MatrixStorage',
    status: '已接入',
    statusTone: 'active',
    chart: 'https://bstats.org/signatures/bukkit/MatrixStorage.svg',
    to: '/docs/matrixstorage/bstats-and-telemetry',
    action: '查看 MatrixStorage 统计',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout title="Matrix 官方文档" description="Matrix 系列插件官方文档站点。">
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={styles.heroShell}>
            <div className={styles.heroCard}>
              <p className={styles.kicker}>官方文档</p>
              <h1 className={styles.heroTitle}>Matrix 官方文档</h1>
              <p className={styles.heroDescription}>
                集中维护 MatrixLib、MatrixAuth、MatrixCook、MatrixShop 与 MatrixStorage 的使用、部署、
                配置、稳定 API 与运维文档。站点提供统一插件入口、本地全文搜索与 AI 搜索能力，
                便于从概览进入到发布说明、开发者 API 和具体字段说明。
              </p>
              <div className={styles.heroMeta}>
                <span>5 个插件文档入口</span>
                <span>稳定 API 命名空间</span>
                <span>本地全文搜索</span>
                <span>AI 辅助检索</span>
              </div>
              <div className={styles.actions}>
                <Link className={styles.primaryAction} to="/docs/plugins">
                  插件索引
                </Link>
                <Link className={styles.secondaryAction} to="/ai-search">
                  AI 搜索
                </Link>
                <Link className={styles.secondaryAction} href="https://github.com/54895y/54895y.github.io">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>快速入口</p>
            <h2>快速入口</h2>
            <p className={styles.sectionLead}>如果你是第一次进入这个站点，先从这里选择最短路径。</p>
          </div>
          <div className={styles.quickGrid}>
            {quickLinks.map((entry) => (
              <article key={entry.title} className={styles.quickCard}>
                <p className={styles.quickTitle}>{entry.title}</p>
                <p className={styles.quickSummary}>{entry.summary}</p>
                <Link
                  className={styles.cardAction}
                  {...('href' in entry
                    ? {href: entry.href, target: '_blank', rel: 'noreferrer'}
                    : {to: entry.to})}>
                  {entry.label}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>插件列表</p>
            <h2>插件列表</h2>
            <p className={styles.sectionLead}>集中提供 Matrix 系列插件的统一入口，覆盖文档、发布说明、开发者 API 与统计面板。</p>
          </div>
          <div className={styles.pluginBanner}>
            <div className={styles.pluginStrip}>
              {pluginDocs.map((plugin) => (
              <article key={plugin.title} className={`${styles.pluginCard} ${styles.pluginCardBanner}`}>
                <div className={styles.pluginHeader}>
                  <div>
                    <h3>{plugin.title}</h3>
                    <p className={styles.pluginDetail}>{plugin.detail}</p>
                  </div>
                  <span className={styles.pluginBadge}>已收录</span>
                </div>
                <p className={styles.pluginSummary}>{plugin.summary}</p>
                <ul className={styles.topicList}>
                  {plugin.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <Link className={styles.cardAction} to={plugin.to}>
                  进入文档
                </Link>
              </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>插件统计</p>
            <h2>bStats 统计总览</h2>
            <p className={styles.sectionLead}>
              全系列插件当前都已经补齐 bStats 页面，首页这里同步提供统一统计入口与签名图预览。
            </p>
          </div>
          <div className={styles.telemetryGrid}>
            {telemetryCards.map((card) => (
              <article key={card.title} className={styles.telemetryCard}>
                <div className={styles.telemetryHeader}>
                  <span className={styles.telemetryIcon} aria-hidden="true">
                    <TelemetryIcon kind={card.icon} />
                  </span>
                  <div>
                    <h3>{card.title}</h3>
                  </div>
                  <span
                    className={
                      card.statusTone === 'active' ? styles.telemetryBadgeActive : styles.telemetryBadgePending
                    }>
                    {card.status}
                  </span>
                </div>
                {'chart' in card ? (
                  <div className={styles.telemetryChart}>
                    <img src={card.chart} alt={`${card.title} bStats usage chart`} loading="lazy" />
                  </div>
                ) : null}
                <Link className={styles.cardAction} to={card.to}>
                  {card.action}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>阅读路径</p>
            <h2>推荐使用方式</h2>
            <p className={styles.sectionLead}>按这个顺序读，通常能更快定位到真正需要的页面。</p>
          </div>
          <div className={styles.flowGrid}>
            {workflowSteps.map((step, index) => (
              <article key={step.title} className={styles.flowCard}>
                <span className={styles.flowStep}>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
