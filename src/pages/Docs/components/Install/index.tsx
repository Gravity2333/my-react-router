import React from 'react';
import styles from './index.less';

const DocsPage: React.FC = () => {
  return (
    <div className={styles['docs-page']}>
      <header className={styles['header']}>
        <h1 className={styles['title']}>项目文档与使用说明</h1>
        <p className={styles['description']}>
          欢迎使用本项目！以下是如何在其他项目中集成本组件和配置路由的详细说明。
        </p>
      </header>

      <div className={styles['content']}>
        <section className={styles['section']}>
          <h2 className={styles['section-title']}>如何在其他项目中使用</h2>
          <p>
            1. **打包文件**: 运行 <code>npm run build</code> 来打包本项目。打包后，拷贝 <code>dist</code> 文件夹中的所有文件到目标项目。
          </p>
          <p>
            2. **导入到目标项目**: 将打包后的文件导入到目标项目的相应目录，并在目标项目中使用这些组件。例如，你可以将文件放置在 <code>src/assets/docs</code> 目录中。
          </p>
        </section>

        <section className={styles['section']}>
          <h2 className={styles['section-title']}>如何配置路由</h2>
          <p>在目标项目中配置路由，参考如下代码：</p>
          <pre>
            {`
              // config/router.js
              export default {
                path: "/",
                component: "../src/layouts/GlobalLayout",
                children: [
                  {
                    path: "/",
                    redirect: "/home",
                  },
                  {
                    path: "/home",
                    component: "../src/pages/Home",
                  },
                  {
                    path: "/about",
                    component: "../src/pages/About",
                  },
                  {
                    path: "/docs",
                    component: "../src/pages/Docs",
                  },
                  {
                    component: "../src/components/NotFoundPage",
                  },
                ],
              };
            `}
          </pre>
        </section>

        <section className={styles['section']}>
          <h2 className={styles['section-title']}>如何实现路由懒加载</h2>
          <p>
            在项目构建时，使用 <code>src/loader/router-loader.js</code> 文件，将路由配置转换为 
            <code>React.lazy(() ={'>'} import('path'))</code> 形式，以实现懒加载。
          </p>
        </section>

        <section className={styles['section']}>
          <h2 className={styles['section-title']}>如何使用 withRoutes</h2>
          <p>
            在 <code>App.js</code> 中，使用 <code>withRoutes</code> 高阶组件导入配置的路由文件：
          </p>
          <pre>
            {`
              import { withRoutes } from 'your-router-lib';
              import routerConfig from './config/router';

              function App() {
                return (
                  <div className="App">
                    {withRoutes(routerConfig)}
                  </div>
                );
              }

              export default App;
            `}
          </pre>
        </section>
      </div>
    </div>
  );
};

export default DocsPage;
