import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const pluginBriefs = [
  {
    title: 'MatrixAuth',
    stage: 'Reviewed',
    summary: '混合登录、档案绑定、兼容 AuthMe / Geyser / Floodgate 的认证文档，聚焦部署、迁移与运行边界。',
    deliverables: ['安装与接入', '配置说明', '命令与占位符'],
    to: '/docs/matrixauth/overview',
  },
  {
    title: 'MatrixCook',
    stage: 'New',
    summary: '围绕锅具、配方、燃料、分类与放置存储整理的完整使用说明，适合直接交付服务器配置人员。',
    deliverables: ['锅具与配方', '多后端存储', '命令与 PAPI'],
    to: '/docs/matrixcook/overview',
  },
  {
    title: 'MatrixShop',
    stage: 'Refreshed',
    summary: '按当前模块化实现重写文档结构，覆盖 Menu、SystemShop、Auction、ChestShop、Transaction 等核心模块。',
    deliverables: ['目录结构', '命令与权限', '数据库与模块边界'],
    to: '/docs/matrixshop',
  },
];

const readingFlow = [
  {
    index: '01',
    title: 'Executive Summary',
    text: '先看每个插件的总览页，快速判断它负责什么、依赖什么、当前文档覆盖到哪里。',
  },
  {
    index: '02',
    title: 'Implementation Notes',
    text: '进入安装、配置、命令与模块页，按服务器落地顺序完成部署和参数调整。',
  },
  {
    index: '03',
    title: 'Operational Boundaries',
    text: '最后核对 FAQ、存储方式、权限与兼容性，避免把旧版本习惯带入新实现。',
  },
];

const principles = [
  '文档入口像产品 Brief，而不是纯文件索引。',
  '每个插件先给结论，再展开安装、配置、运行边界。',
  '保留可执行信息，减少无效装饰和模板噪音。',
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="Matrix 产品文档"
      description="把 Matrix 系列插件文档整理成可交接、可执行的产品 Brief 风格知识库。">
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={styles.heroShell}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>MATRIX DOCUMENT BRIEF</p>
              <h1 className={styles.heroTitle}>把插件 Wiki 写成可以直接交接的 Product Brief。</h1>
              <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
              <p className={styles.heroDescription}>
                这套文档站不再只是罗列页面，而是按产品说明书的方式组织内容。每个插件都优先说明目标、范围、
                安装方式、配置结构和运行边界，让服主、开发者和维护者可以直接拿来落地。
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryAction} to="/docs/plugins">
                  查看插件索引
                </Link>
                <Link className={styles.secondaryAction} to="/docs/matrixshop">
                  打开 MatrixShop
                </Link>
                <Link className={styles.ghostAction} href="https://github.com/54895y/54895y.github.io">
                  查看仓库
                </Link>
              </div>
            </div>
            <aside className={styles.briefPanel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelLabel}>Project Brief</span>
                <span className={styles.panelVersion}>v2</span>
              </div>
              <div className={styles.metaGrid}>
                <div className={styles.metaItem}>
                  <span>Scope</span>
                  <strong>MatrixAuth / MatrixCook / MatrixShop</strong>
                </div>
                <div className={styles.metaItem}>
                  <span>Format</span>
                  <strong>Overview, Config, Commands, FAQ</strong>
                </div>
                <div className={styles.metaItem}>
                  <span>Source of Truth</span>
                  <strong>Current code and bundled resources</strong>
                </div>
                <div className={styles.metaItem}>
                  <span>Status</span>
                  <strong>Live on GitHub Pages</strong>
                </div>
              </div>
              <div className={styles.principleBox}>
                <p className={styles.principleTitle}>Documentation Principles</p>
                <ul className={styles.principleList}>
                  {principles.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Included Briefs</p>
            <h2>当前纳入统一 Wiki 的插件</h2>
            <p>
              首页不再展示泛泛的卡片介绍，而是像项目立项文档那样，先告诉你每个插件已经整理了什么，以及该从哪里开始读。
            </p>
          </div>
          <div className={styles.briefGrid}>
            {pluginBriefs.map((plugin) => (
              <article key={plugin.title} className={styles.briefCard}>
                <div className={styles.cardTop}>
                  <span className={styles.cardStage}>{plugin.stage}</span>
                  <h3>{plugin.title}</h3>
                </div>
                <p className={styles.cardSummary}>{plugin.summary}</p>
                <ul className={styles.deliverableList}>
                  {plugin.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className={styles.cardAction} to={plugin.to}>
                  阅读文档
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Reading Flow</p>
            <h2>建议的阅读顺序</h2>
            <p>先看结论，再看部署，再看运行边界。这样能最快完成接入，也能减少被旧版本文档误导的风险。</p>
          </div>
          <div className={styles.flowGrid}>
            {readingFlow.map((item) => (
              <article key={item.index} className={styles.flowCard}>
                <span className={styles.flowIndex}>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
