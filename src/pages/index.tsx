import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const pluginDocs = [
  {
    title: 'MatrixAuth',
    summary: '认证、登录、档案绑定与兼容接入文档。',
    topics: ['安装与部署', '配置说明', '命令与占位符'],
    to: '/docs/matrixauth/overview',
  },
  {
    title: 'MatrixCook',
    summary: '锅具、配方、燃料、分类与存储说明。',
    topics: ['安装与配置', '锅具与配方', '命令与 PAPI'],
    to: '/docs/matrixcook/overview',
  },
  {
    title: 'MatrixShop',
    summary: '模块化商店系统的结构、命令与运行边界。',
    topics: ['快速开始', '模块总览', '数据库与权限'],
    to: '/docs/matrixshop',
  },
];

const quickLinks = [
  {
    label: '插件索引',
    description: '查看当前站点纳入维护的插件列表。',
    to: '/docs/plugins',
  },
  {
    label: '站点说明',
    description: '了解本 Wiki 的维护范围与组织方式。',
    to: '/docs/intro',
  },
  {
    label: 'MatrixAuth 安装',
    description: '从部署和依赖开始接入 MatrixAuth。',
    to: '/docs/matrixauth/installation',
  },
  {
    label: 'MatrixCook 安装',
    description: '从默认资源和依赖开始部署 MatrixCook。',
    to: '/docs/matrixcook/installation',
  },
  {
    label: 'MatrixShop 快速开始',
    description: '从模块启用和命令校验开始接入 MatrixShop。',
    to: '/docs/matrixshop/quick-start',
  },
  {
    label: 'Wiki 仓库',
    description: '查看文档源码与发布仓库。',
    href: 'https://github.com/54895y/54895y.github.io',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title="Matrix 官方文档" description="Matrix 系列插件的统一官方文档入口。">
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={styles.heroShell}>
            <div className={styles.heroCard}>
              <p className={styles.kicker}>Official Documentation</p>
              <h1 className={styles.heroTitle}>Matrix 官方文档</h1>
              <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
              <p className={styles.heroDescription}>
                本站统一维护 MatrixAuth、MatrixCook、MatrixShop 的安装、配置、命令、模块说明与常见问题。
                页面内容以当前代码、默认配置和内置资源文件为准。
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryAction} to="/docs/plugins">
                  查看插件索引
                </Link>
                <Link className={styles.secondaryAction} href="https://github.com/54895y/54895y.github.io">
                  打开 GitHub
                </Link>
              </div>
            </div>

            <aside className={styles.infoCard}>
              <h2 className={styles.infoTitle}>站点信息</h2>
              <dl className={styles.infoList}>
                <div>
                  <dt>维护范围</dt>
                  <dd>MatrixAuth、MatrixCook、MatrixShop</dd>
                </div>
                <div>
                  <dt>内容来源</dt>
                  <dd>当前代码与默认资源文件</dd>
                </div>
                <div>
                  <dt>发布方式</dt>
                  <dd>GitHub Pages</dd>
                </div>
                <div>
                  <dt>文档结构</dt>
                  <dd>Overview、Installation、Configuration、Commands、FAQ</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Documentation Scope</p>
            <h2>当前文档范围</h2>
            <p>首页只保留实际可用入口。每个插件文档都按部署和维护流程组织，便于直接查阅与交接。</p>
          </div>
          <div className={styles.pluginGrid}>
            {pluginDocs.map((plugin) => (
              <article key={plugin.title} className={styles.pluginCard}>
                <div className={styles.pluginHeader}>
                  <h3>{plugin.title}</h3>
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
            <p className={styles.kicker}>Quick Access</p>
            <h2>常用入口</h2>
          </div>
          <div className={styles.linkGrid}>
            {quickLinks.map((item) => {
              const linkProps = item.to ? {to: item.to} : {href: item.href};
              return (
                <Link key={item.label} className={styles.linkCard} {...linkProps}>
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
}
