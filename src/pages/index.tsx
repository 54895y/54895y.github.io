import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLogo}>
            <img src="/img/matrixshop_logo.png" alt="MatrixShop Logo" />
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--secondary button--lg', styles.button)}
                to="/docs/plugins">
                浏览插件
              </Link>
              <Link
                className={clsx('button button--primary button--lg', styles.button)}
                to="/docs/matrixshop/quick-start">
                快速开始
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function PluginsSection() {
  const plugins = [
    {
      name: 'MatrixShop',
      description: '多功能 Minecraft 商店插件，支持系统商店、玩家商店、拍卖行、全球市场等多种交易模式。功能强大，配置灵活，是服务器经济系统的理想选择。',
      icon: '🏪',
      color: '#667eea',
      features: ['系统商店', '玩家商店', '拍卖行', '全球市场', '箱子商店'],
    },
    {
      name: '更多插件',
      description: '更多优秀的 Matrix 系列插件，持续为您带来更好的服务器插件解决方案。',
      icon: '🎁',
      color: '#9ca3af',
      features: ['神秘新游', '即将发布'],
    },
  ];

  return (
    <section className={styles.pluginsSection}>
      <div className="container">
        <div className={styles.pluginsTitle}>
          <h2>Matrix 系列插件</h2>
          <p>为 Minecraft 服务器打造的全方位插件解决方案</p>
        </div>
        <div className={styles.pluginsGrid}>
          {plugins.map((plugin, index) => (
            <div key={index} className={styles.pluginCard}>
              <div className={styles.pluginCardHeader}>
                <div className={styles.pluginIcon}>{plugin.icon}</div>
                <h3 className={styles.pluginName}>{plugin.name}</h3>
              </div>
              <p className={styles.pluginDescription}>{plugin.description}</p>
              <div className={styles.pluginFeatures}>
                {plugin.features.map((feature, idx) => (
                  <span key={idx} className={styles.featureTag}>{feature}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const technologies = [
    {
      name: 'Java 21',
      description: '现代 Java 特性',
      color: '#f89820',
    },
    {
      name: 'Kotlin',
      description: '高效开发体验',
      color: '#7F52FF',
    },
    {
      name: 'TabooLib',
      description: '强大框架支持',
      color: '#667eea',
    },
    {
      name: 'YAML',
      description: '简洁配置管理',
      color: '#cb171e',
    },
  ];

  return (
    <section className={styles.techSection}>
      <div className="container">
        <div className={styles.techTitle}>
          <h2>技术栈</h2>
          <p>采用现代化技术栈，确保插件的稳定性和可扩展性</p>
        </div>
        <div className={styles.techGrid}>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={styles.techCard}
              style={{background: `linear-gradient(135deg, ${tech.color} 0%, ${tech.color}dd 100%)`}}>
              <h3 className={styles.techCardTitle}>{tech.name}</h3>
              <p className={styles.techCardDesc}>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStartSection}>
      <div className="container">
        <div className={styles.quickStartContent}>
          <div className={styles.quickStartText}>
            <h2>准备好开始了吗？</h2>
            <p>只需几分钟即可完成配置，让您的服务器拥有专业的插件系统</p>
            <div className={styles.quickStartButtons}>
              <Link
                className={clsx('button button--primary button--lg', styles.button)}
                to="/docs/plugins">
                了解所有插件
              </Link>
              <Link
                className={clsx('button button--secondary button--lg', styles.button)}
                to="/docs/matrixshop/quick-start">
                快速开始
              </Link>
            </div>
          </div>
          <div className={styles.quickStartCode}>
            <div className={styles.codeHeader}>
              <span className={styles.codeDot} style={{background: '#ff5f56'}}></span>
              <span className={styles.codeDot} style={{background: '#ffbd2e'}}></span>
              <span className={styles.codeDot} style={{background: '#27c93f'}}></span>
            </div>
            <pre className={styles.codeBlock}>
              <code>{`# 下载插件
wget https://github.com/your-name/matrixshop/releases

# 放入 plugins 文件夹
mv MatrixShop.jar plugins/

# 重启服务器
./start.sh

# 配置完成！`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <PluginsSection />
        <TechStackSection />
        <QuickStartSection />
      </main>
    </Layout>
  );
}


