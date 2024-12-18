import React from "react";
import styles from "./index.less";

const ApiDoc: React.FC = () => {
  return (
    <div className={styles.apiDoc}>
      <h1>React Router API 介绍</h1>
      {/* HashRouter */}
      <div className={styles.apiSection}>
        <h2>HashRouter</h2>
        <p>
          <strong>HashRouter</strong> 是 React Router 提供的一个路由器，它使用
          URL 中的 hash 值来进行路由管理。适用于那些没有服务端支持 HTML5 History
          API 的环境。比如，当应用部署在静态文件服务器上时，可以使用 HashRouter
          来避免浏览器的 404 错误。
        </p>
        <h3>用法</h3>
        <p>你可以像这样使用 HashRouter 来包裹你的路由配置：</p>
        <code>
          {`<HashRouter>
  <Route path="/home" component={Home} />
  <Route path="/about" component={About} />
</HashRouter>`}
        </code>
        <h3>参数说明</h3>
        <ul>
          <li>
            <strong>loadingPage</strong>:
            可选的，传入一个加载组件，当路由懒加载时显示该组件。
          </li>
        </ul>
        <p>
          HashRouter 会根据 URL 中的哈希值来选择显示不同的路由内容。例如，URL 为
          `http://example.com/#/home` 时，`/home` 路径下的组件会被渲染。
        </p>
      </div>
      {/* Route */}
      <div className={styles.apiSection}>
        <h2>Route</h2>
        <p>
          <strong>Route</strong> 是用来定义 URL 路径和组件之间的映射关系。当 URL
          路径与 Route 中的 `path` 匹配时，Route 会渲染指定的组件。
        </p>
        <h3>用法</h3>
        <p>
          Route 组件接受两个重要的 props：`path` 和 `component`。你可以通过设置
          `path` 来指定匹配的 URL 路径，`component` 用来指定需要渲染的组件。
        </p>
        <code>{`<Route path="/home" component={Home} />`}</code>
        <h3>参数说明</h3>
        <ul>
          <li>
            <strong>path</strong>: 路由匹配的路径。支持静态路径和动态路径参数。
          </li>
          <li>
            <strong>component</strong>: 当路由匹配时要渲染的组件。
          </li>
          <li>
            <strong>render</strong>: 可选的，替代 `component`，你可以通过
            `render` 渲染一个内联的 JSX。
          </li>
          <li>
            <strong>children</strong>:
            可选的，传入一个函数，根据路由状态返回渲染内容。
          </li>
        </ul>
        <h3>示例</h3>
        <code>{`<Route path="/user/:id" component={UserProfile} />`}</code>
        <p>
          上述代码会在访问路径 `/user/:id` 时渲染 `UserProfile` 组件，`:id`
          是一个动态路由参数。
        </p>
        {/* Switch */}
        <div className={styles.apiSection}>
          <h2>Switch</h2>
          <p>
            <strong>Switch</strong> 是 React Router 中用于包裹多个 `Route` 或
            `Redirect`
            组件的容器。它会遍历所有子路由，直到找到第一个匹配的路由并渲染对应的组件。这样可以确保一次只渲染一个路由。
          </p>
          <h3>用法</h3>
          <p>
            Switch
            会根据路径优先级匹配路由，并只渲染第一个匹配的路由，避免多个路由同时渲染的情况。
          </p>
          <code>
            {`<Switch>
  <Route path="/home" component={Home} />
  <Route path="/about" component={About} />
</Switch>`}
          </code>
          <h3>参数说明</h3>
          <ul>
            <li>
              <strong>children</strong>: Switch 的子路由，通常是多个 Route 或
              Redirect 组件。Switch 会根据路径匹配规则，渲染第一个匹配的路由。
            </li>
          </ul>
          <h3>示例</h3>
          <code>
            {`<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Redirect from="/old-path" to="/new-path" />
  <Route component={NotFoundPage} />
</Switch>`}
          </code>
          <p>
            上述代码确保了只有路径 `/home` 和 `/about`
            匹配时会渲染对应的组件，其它路径则会跳转到 `NotFoundPage`。
          </p>
        </div>

        {/* Redirect */}
        <div className={styles.apiSection}>
          <h2>Redirect</h2>
          <p>
            <strong>Redirect</strong>{" "}
            用于在路由匹配到某个路径时，自动将用户重定向到另一个路径。它可以用来做路由的重定向或路由的别名。
          </p>
          <h3>用法</h3>
          <p>
            使用 Redirect
            可以快速实现页面跳转，通常用于路由路径的重命名或用户认证失败时跳转到登录页。
          </p>
          <code>{`<Redirect from="/old-path" to="/new-path" />`}</code>
          <h3>参数说明</h3>
          <ul>
            <li>
              <strong>from</strong>:
              要重定向的原路径，用户访问此路径时会跳转到新的路径。
            </li>
            <li>
              <strong>to</strong>: 跳转的目标路径。
            </li>
          </ul>
          <h3>示例</h3>
          <code>{`<Redirect from="/home" to="/dashboard" />`}</code>
          <p>上述代码会在访问 `/home` 时自动跳转到 `/dashboard` 路径。</p>
        </div>

        {/* React.lazy */}
        <div className={styles.apiSection}>
          <h2>React.lazy</h2>
          <p>
            <strong>React.lazy</strong> 是 React
            提供的懒加载功能，允许你将组件异步加载。当组件需要渲染时，它才会被加载。这可以大大提高页面的性能，尤其是当应用程序较大时。
          </p>
          <h3>用法</h3>
          <p>
            React.lazy 只能与 Suspense
            组件一起使用，用于包裹异步加载的组件，直到组件加载完成，才会渲染。
          </p>
          <code>
            {`const Home = React.lazy(() => import("./pages/Home"));`}
          </code>
          <h3>参数说明</h3>
          <ul>
            <li>
              <strong>import</strong>: React.lazy
              接受一个函数，该函数需要返回一个动态 `import` 的
              Promise，加载指定的模块。
            </li>
          </ul>
          <h3>示例</h3>
          <code>
            {`<Suspense fallback={<Loading />}>
  <Home />
</Suspense>`}
          </code>
          <p>
            上述代码会在加载 `Home` 组件时，显示一个 `Loading` 组件，直到 `Home`
            加载完成后再渲染。
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default ApiDoc;
