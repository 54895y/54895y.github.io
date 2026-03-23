import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const pluginCards = [
  {
    title: 'MatrixAuth',
    status: '已上线',
    description:
      '混合登录、档案绑定、SQLite/MySQL、Folia 兼容、PlaceholderAPI 和 EasyBot 查询都已经整理进当前文档。',
    tags: ['1.12+', 'TabooLib', 'Folia', 'EasyBot'],
    to: '/docs/matrixauth/overview',
  },
  {
    title: 'MatrixShop',
    status: '已收录',
    description:
      '多功能服务器商店文档继续保留在同一站点，系统商店、玩家商店、拍卖行和 UI 配置仍按原结构维护。',
    tags: ['Shop', 'Auction', 'GUI', 'Economy'],
    to: '/docs/matrixshop/quick-start',
  },
  {
    title: 'Wiki 站点',
    status: 'GitHub Pages',
    description:
      '站点使用 54895y.github.io 仓库发布，后续插件可以继续沿用同一套 Docusaurus 结构接入。',
    tags: ['Docusaurus', 'GitHub Pages', 'Docs'],
    href: 'https://github.com/54895y/54895y.github.io',
  },
];

const highlights = [
  'Docs 根目录现在作为 Matrix 系列插件统一 Wiki 入口',
  'MatrixAuth 已补齐概览、部署、配置、命令、PAPI、EasyBot、开发与 FAQ',
  'MatrixShop 旧文档保留并并入同一套导航，不再被新站点覆盖',
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title="插件文档总览" description="Matrix 系列插件统一文档站，当前已收录 MatrixAuth 与 MatrixShop。">
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={styles.heroPanel}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>MATRIX PLUGIN WIKI</p>
              <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
              <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
              <p className={styles.heroDescription}>
                这里不是默认示例站点，而是你所有插件的统一知识库入口。
                当前站点已经先完成 MatrixAuth 文档，并把原有 MatrixShop 文档一并纳入统一导航。
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryAction} to="/docs/matrixauth/overview">
                  查看 MatrixAuth
                </Link>
                <Link className={styles.secondaryAction} to="/docs/plugins">
                  查看插件列表
                </Link>
              </div>
            </div>
            <aside className={styles.heroAside}>
              <span className={styles.asideLabel}>当前进度</span>
              <ul className={styles.highlightList}>
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.statRow}>
                <div className={styles.statCard}>
                  <strong>2</strong>
                  <span>已收录插件</span>
                </div>
                <div className={styles.statCard}>
                  <strong>8</strong>
                  <span>MatrixAuth 页面</span>
                </div>
                <div className={styles.statCard}>
                  <strong>1</strong>
                  <span>GitHub Pages 站点</span>
                </div>
              </div>
            </aside>
          </div>
        </section>
        <section className={styles.catalogSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>PLUGIN INDEX</p>
            <h2>当前站点内容</h2>
          </div>
          <div className={styles.cardGrid}>
            {pluginCards.map((card) => {
              const action = card.to ? (
                <Link className={styles.cardAction} to={card.to}>
                  进入页面
                </Link>
              ) : (
                <Link className={styles.cardAction} href={card.href}>
                  打开仓库
                </Link>
              );

              return (
                <article key={card.title} className={styles.catalogCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardStatus}>{card.status}</span>
                    <h3>{card.title}</h3>
                  </div>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <div className={styles.tagRow}>
                    {card.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {action}
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
}
