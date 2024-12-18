# my-react-router

`my-react-router` 是一个轻量级的 React 路由实现，旨在帮助你理解 React 路由的核心原理。它提供了对路由的基本功能支持，包括 `HashRouter` 和 `BrowserRouter`，以及用于组件懒加载的 `React.lazy` 支持。

## 功能特点

- 支持基本的路由功能：`Route`, `Switch`, `Redirect`, `Router`, `BrowserRouter`, `HashRouter` 等。
- 支持路由懒加载（通过 `React.lazy` 实现）。
- 简单易用，能够帮助你理解 React 路由的工作机制。

## 安装

```bash
npm install my-react-router
```

## 使用方法
### 配置路由
在 config/router.js 中配置路由（约定大于配置）：

```js
Copy code
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
}
```

## 使用路由
在你的项目中，你可以通过 withRoutes 高阶组件导入并使用这些路由配置。

``` tsx
Copy code
import { withRoutes } from "my-react-router";
import routerConfig from "./config/router";

const App = () => {
  return (
    <div>
      {withRoutes(routerConfig)}
    </div>
  );
};

export default App;
```


## 打包
使用 npm run build 打包
在本项目根目录下运行以下命令来打包项目：

```bash
Copy code
npm run build
```

打包完成后，你可以将 dist 文件夹中的文件导入到其他项目中进行使用。

## 运行 Demo
使用 npm run start 运行本地开发环境
你可以使用以下命令启动本地开发环境来查看演示：

``` bash
Copy code
npm run start
``` 
启动后，打开浏览器并访问 http://localhost:3000，你将看到一个包含基本路由的示例应用。

