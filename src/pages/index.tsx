import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const pluginCards = [
  {
    title: 'MatrixAuth',
    status: '已校对',
    description:
      '混合登录、档案绑定、SQLite/MySQL、PlaceholderAPI、Geyser/Floodgate 与 EasyBot 查询接口都已按当前源码整理。',
    tags: ['1.12+', 'TabooLib', 'Folia', 'EasyBot'],
    to: '/docs/matrixauth/overview',
  },
  {
    title: 'MatrixCook',
    status: '新增',
    description:
      '围绕锅具、配方、燃料、分类和放置状态构建的烹饪系统文档，覆盖配置、命令、占位符与多存储后端。',
    tags: ['Cooking', 'GUI', 'CraftEngine', 'ItemsAdder'],
    to: '/docs/matrixcook/overview',
  },
  {
    title: 'MatrixShop',
    status: '已重写',
    description:
      '按当前模块化实现重写，覆盖 Menu、SystemShop、PlayerShop、GlobalMarket、Auction、ChestShop、Transaction、Cart、Record。',
    tags: ['Shop', 'Auction', 'Economy', 'JDBC'],
    to: '/docs/matrixshop',
  },
  {
    title: 'Wiki 仓库',
    status: 'GitHub Pages',
    description:
      '站点使用 `54895y.github.io` 仓库发布，当前文档目录已经作为 Matrix 系列插件的统一知识入口。',
    tags: ['Docusaurus', 'GitHub Pages', 'Docs'],
    href: 'https://github.com/54895y/54895y.github.io',
  },
];

const highlights = [
  'Docs 目录现在统一承载 MatrixAuth、MatrixCook、MatrixShop 三套文档',
  'MatrixCook 页面已补齐锅具、配方、燃料、存储与命令说明',
  'MatrixShop 页面已切换到当前模块化结构，不再沿用旧版目录和旧版配置描述',
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="插件文档总览"
      description="Matrix 系列插件统一文档站点，当前维护 MatrixAuth、MatrixCook 与 MatrixShop。">
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={styles.heroPanel}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>MATRIX PLUGIN WIKI</p>
              <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
              <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
              <p className={styles.heroDescription}>
                这里不再区分旧仓库文档和临时记录，而是把三款插件的源码信息统一整理到一个站点里。
                页面内容优先依据当前代码、默认配置与默认资源文件生成。
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryAction} to="/docs/plugins">
                  查看插件列表
                </Link>
                <Link className={styles.secondaryAction} to="/docs/matrixshop">
                  从 MatrixShop 开始
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
                  <strong>3</strong>
                  <span>已收录插件</span>
                </div>
                <div className={styles.statCard}>
                  <strong>3</strong>
                  <span>插件分区</span>
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
