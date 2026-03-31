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
    title: 'MatrixAuth',
    summary: '认证、登录、档案绑定与兼容接入文档。',
    topics: ['安装与部署', '配置说明', '命令与占位符'],
    detail: '8 篇核心文档',
    to: '/docs/matrixauth/overview',
  },
  {
    title: 'MatrixCook',
    summary: '锅具、配方、燃料、分类与存储说明。',
    topics: ['安装与配置', '锅具与配方', '命令与 PAPI'],
    detail: '5 篇核心文档',
    to: '/docs/matrixcook/overview',
  },
  {
    title: 'MatrixShop',
    summary: '模块化商店系统的结构、命令、配置与运行边界。',
    topics: ['快速开始', '模块总览', '详细配置解读'],
    detail: '20+ 篇专题文档',
    to: '/docs/matrixshop',
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

function TelemetryIcon({kind}: {kind: 'shop' | 'auth' | 'cook'}): ReactNode {
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
    status: '预留位置',
    statusTone: 'pending',
    to: '/docs/matrixauth/overview',
    action: '查看 MatrixAuth 文档',
  },
  {
    icon: 'cook' as const,
    title: 'MatrixCook',
    status: '预留位置',
    statusTone: 'pending',
    to: '/docs/matrixcook/overview',
    action: '查看 MatrixCook 文档',
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
                集中维护 MatrixAuth、MatrixCook 和 MatrixShop 的使用、部署、配置与排障文档。
                站点提供插件索引、本地全文搜索与 AI 搜索入口，方便从概览一路进入到具体字段和命令级别。
              </p>
              <div className={styles.heroMeta}>
                <span>3 个插件文档入口</span>
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
            <p className={styles.sectionLead}>每个插件都按概览、安装、配置、命令和 FAQ 等主题拆分维护。</p>
          </div>
          <div className={styles.pluginGrid}>
            {pluginDocs.map((plugin) => (
              <article key={plugin.title} className={styles.pluginCard}>
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
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>插件统计</p>
            <h2>首页统计与预留位置</h2>
            <p className={styles.sectionLead}>
              MatrixShop 已经接入统计说明展示，MatrixAuth 和 MatrixCook 的首页卡位也已预留，后续收到代码后可直接补齐。
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
