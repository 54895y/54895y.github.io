import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
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
    summary: '模块化商店系统的结构、命令、配置与运行边界。',
    topics: ['快速开始', '模块总览', '详细配置解读'],
    to: '/docs/matrixshop',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout title="Matrix 官方文档" description="Matrix 系列插件官方文档站点。">
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={styles.heroShell}>
            <div className={styles.heroCard}>
              <p className={styles.kicker}>Official Documentation</p>
              <h1 className={styles.heroTitle}>Matrix 官方文档</h1>
              <div className={styles.actions}>
                <Link className={styles.primaryAction} to="/docs/plugins">
                  插件索引
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
            <p className={styles.kicker}>Plugin List</p>
            <h2>插件列表</h2>
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
      </main>
    </Layout>
  );
}
