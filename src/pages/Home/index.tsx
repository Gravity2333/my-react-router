import React from 'react';
import styles from './index.less';  // 假设你有样式文件

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.mainContextHeader}>
        <h1>My-React-Router</h1>
        <p className={styles.subHeader}>一个简洁轻量化的React-Router实现</p>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.intro}>
          <h2 className={styles.sectionTitle}>关于本项目</h2>
          <p className={styles.sectionDescription}>
            本项目通过相对简单的代码，实现了React-Router-DOM的基本功能，你可以相对轻松地了解其工作原理
            你可以在项目目录/src/libs下找到源代码 并且通过 <strong>npm run build</strong> 对其进行打包
          </p>

          <div className={styles.features}>
            <h3>实现的组件</h3>
            <ul className={styles.featureList}>
              <li><strong>HashRouter</strong> — 路由模式</li>
              <li><strong>BrowserRouter</strong> — 支持HTML5历史记录</li>
              <li><strong>Router</strong> — 路由容器</li>
              <li><strong>Switch</strong> — 选择性渲染路由</li>
              <li><strong>Redirect</strong> — 重定向功能</li>
              <li><strong>Route</strong> — 路由定义</li>
            </ul>
          </div>

          <div className={styles.hooks}>
            <h3>实现的Hooks</h3>
            <ul className={styles.hookList}>
              <li><strong>useHistory</strong> — 路由历史管理</li>
              <li><strong>useRoutes</strong> — 动态路由配置</li>
              <li><strong>useOutlet</strong> — 嵌套路由渲染</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
