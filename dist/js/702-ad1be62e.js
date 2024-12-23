"use strict";
(self.webpackChunkmy_react_router =
  self.webpackChunkmy_react_router || []).push([
  [702],
  {
    702: (e, s, n) => {
      n.r(s), n.d(s, { default: () => x });
      var c = n(471);
      var r = n(671);
      const i = function (e) {
          var s = e.items;
          return (0, r.jsxs)("div", {
            className: "E02DebYPNVPOXf7lTH1L",
            children: [
              (0, r.jsx)("h3", {
                className: "GvmtLk00C6eR3rWgDg82",
                children: "目录",
              }),
              (0, r.jsx)("ul", {
                className: "PQvall5WZchwNMQ_TQGF",
                children: s.map(function (e, s) {
                  return (0,
                  r.jsx)("li", { className: "aXo9wxtLsz2vMhkw97uU", children: (0, r.jsx)("a", { href: e.link, className: "UZgJicaI4jce0zqYyOsu", children: e.label }) }, s);
                }),
              }),
            ],
          });
        },
        o = function (e) {
          var s = e.id,
            n = e.title,
            c = e.content;
          return (0, r.jsxs)("div", {
            id: s,
            className: "wa5VGvIg4u7jXwlIq7UL",
            children: [
              (0, r.jsx)("h2", {
                className: "q6RxoxIRJo9qLLIG6ens",
                children: n,
              }),
              (0, r.jsx)("div", {
                className: "DELz2oFJ9Eb7h7HuOVCu",
                children: (0, r.jsx)("p", { children: c }),
              }),
            ],
          });
        },
        t = "pVX9KfkH7C4bdMGB1jxf",
        l = "kzEwppxcWuoEu0pQwiW7",
        h = function () {
          return (0, r.jsxs)("div", {
            className: "wMebx_s1uj6PnPgGY2uO",
            children: [
              (0, r.jsxs)("header", {
                className: "jXNnqkWYf0GAjqBu84Lw",
                children: [
                  (0, r.jsx)("h1", {
                    className: "wxPN71L8O2dhFyb_lYu0",
                    children: "项目文档与使用说明",
                  }),
                  (0, r.jsx)("p", {
                    className: "GuuNir9rQ3Du3gQr19ZB",
                    children:
                      "欢迎使用本项目！以下是如何在其他项目中集成本组件和配置路由的详细说明。",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "pS8VP56IrEWE0eodtLBc",
                children: [
                  (0, r.jsxs)("section", {
                    className: t,
                    children: [
                      (0, r.jsx)("h2", {
                        className: l,
                        children: "如何在其他项目中使用",
                      }),
                      (0, r.jsxs)("p", {
                        children: [
                          "1. **打包文件**: 运行 ",
                          (0, r.jsx)("code", { children: "npm run build" }),
                          " 来打包本项目。打包后，拷贝 ",
                          (0, r.jsx)("code", { children: "dist" }),
                          " 文件夹中的所有文件到目标项目。",
                        ],
                      }),
                      (0, r.jsxs)("p", {
                        children: [
                          "2. **导入到目标项目**: 将打包后的文件导入到目标项目的相应目录，并在目标项目中使用这些组件。例如，你可以将文件放置在 ",
                          (0, r.jsx)("code", { children: "src/assets/docs" }),
                          " 目录中。",
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("section", {
                    className: t,
                    children: [
                      (0, r.jsx)("h2", {
                        className: l,
                        children: "如何配置路由",
                      }),
                      (0, r.jsx)("p", {
                        children: "在目标项目中配置路由，参考如下代码：",
                      }),
                      (0, r.jsx)("pre", {
                        children:
                          '\n              // config/router.js\n              export default {\n                path: "/",\n                component: "../src/layouts/GlobalLayout",\n                children: [\n                  {\n                    path: "/",\n                    redirect: "/home",\n                  },\n                  {\n                    path: "/home",\n                    component: "../src/pages/Home",\n                  },\n                  {\n                    path: "/about",\n                    component: "../src/pages/About",\n                  },\n                  {\n                    path: "/docs",\n                    component: "../src/pages/Docs",\n                  },\n                  {\n                    component: "../src/components/NotFoundPage",\n                  },\n                ],\n              };\n            ',
                      }),
                    ],
                  }),
                  (0, r.jsxs)("section", {
                    className: t,
                    children: [
                      (0, r.jsx)("h2", {
                        className: l,
                        children: "如何实现路由懒加载",
                      }),
                      (0, r.jsxs)("p", {
                        children: [
                          "在项目构建时，使用 ",
                          (0, r.jsx)("code", {
                            children: "src/loader/router-loader.js",
                          }),
                          " 文件，将路由配置转换为",
                          (0, r.jsxs)("code", {
                            children: [
                              "React.lazy(() =",
                              ">",
                              " import('path'))",
                            ],
                          }),
                          " 形式，以实现懒加载。",
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("section", {
                    className: t,
                    children: [
                      (0, r.jsx)("h2", {
                        className: l,
                        children: "如何使用 withRoutes",
                      }),
                      (0, r.jsxs)("p", {
                        children: [
                          "在 ",
                          (0, r.jsx)("code", { children: "App.js" }),
                          " 中，使用 ",
                          (0, r.jsx)("code", { children: "withRoutes" }),
                          " 高阶组件导入配置的路由文件：",
                        ],
                      }),
                      (0, r.jsx)("pre", {
                        children:
                          "\n              import { withRoutes } from 'your-router-lib';\n              import routerConfig from './config/router';\n\n              function App() {\n                return (\n                  <div className=\"App\">\n                    {withRoutes(routerConfig)}\n                  </div>\n                );\n              }\n\n              export default App;\n            ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        d = "lDkJXSecChKVLTWEu9dA",
        a = function () {
          return (0, r.jsxs)("div", {
            className: "EsJYimDxbAoulaYwuPqH",
            children: [
              (0, r.jsx)("h1", { children: "React Router API 介绍" }),
              (0, r.jsxs)("div", {
                className: d,
                children: [
                  (0, r.jsx)("h2", { children: "HashRouter" }),
                  (0, r.jsxs)("p", {
                    children: [
                      (0, r.jsx)("strong", { children: "HashRouter" }),
                      " 是 React Router 提供的一个路由器，它使用 URL 中的 hash 值来进行路由管理。适用于那些没有服务端支持 HTML5 History API 的环境。比如，当应用部署在静态文件服务器上时，可以使用 HashRouter 来避免浏览器的 404 错误。",
                    ],
                  }),
                  (0, r.jsx)("h3", { children: "用法" }),
                  (0, r.jsx)("p", {
                    children:
                      "你可以像这样使用 HashRouter 来包裹你的路由配置：",
                  }),
                  (0, r.jsx)("code", {
                    children:
                      '<HashRouter>\n  <Route path="/home" component={Home} />\n  <Route path="/about" component={About} />\n</HashRouter>',
                  }),
                  (0, r.jsx)("h3", { children: "参数说明" }),
                  (0, r.jsx)("ul", {
                    children: (0, r.jsxs)("li", {
                      children: [
                        (0, r.jsx)("strong", { children: "loadingPage" }),
                        ": 可选的，传入一个加载组件，当路由懒加载时显示该组件。",
                      ],
                    }),
                  }),
                  (0, r.jsx)("p", {
                    children:
                      "HashRouter 会根据 URL 中的哈希值来选择显示不同的路由内容。例如，URL 为 `http://example.com/#/home` 时，`/home` 路径下的组件会被渲染。",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: d,
                children: [
                  (0, r.jsx)("h2", { children: "Route" }),
                  (0, r.jsxs)("p", {
                    children: [
                      (0, r.jsx)("strong", { children: "Route" }),
                      " 是用来定义 URL 路径和组件之间的映射关系。当 URL 路径与 Route 中的 `path` 匹配时，Route 会渲染指定的组件。",
                    ],
                  }),
                  (0, r.jsx)("h3", { children: "用法" }),
                  (0, r.jsx)("p", {
                    children:
                      "Route 组件接受两个重要的 props：`path` 和 `component`。你可以通过设置 `path` 来指定匹配的 URL 路径，`component` 用来指定需要渲染的组件。",
                  }),
                  (0, r.jsx)("code", {
                    children: '<Route path="/home" component={Home} />',
                  }),
                  (0, r.jsx)("h3", { children: "参数说明" }),
                  (0, r.jsxs)("ul", {
                    children: [
                      (0, r.jsxs)("li", {
                        children: [
                          (0, r.jsx)("strong", { children: "path" }),
                          ": 路由匹配的路径。支持静态路径和动态路径参数。",
                        ],
                      }),
                      (0, r.jsxs)("li", {
                        children: [
                          (0, r.jsx)("strong", { children: "component" }),
                          ": 当路由匹配时要渲染的组件。",
                        ],
                      }),
                      (0, r.jsxs)("li", {
                        children: [
                          (0, r.jsx)("strong", { children: "render" }),
                          ": 可选的，替代 `component`，你可以通过 `render` 渲染一个内联的 JSX。",
                        ],
                      }),
                      (0, r.jsxs)("li", {
                        children: [
                          (0, r.jsx)("strong", { children: "children" }),
                          ": 可选的，传入一个函数，根据路由状态返回渲染内容。",
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("h3", { children: "示例" }),
                  (0, r.jsx)("code", {
                    children:
                      '<Route path="/user/:id" component={UserProfile} />',
                  }),
                  (0, r.jsx)("p", {
                    children:
                      "上述代码会在访问路径 `/user/:id` 时渲染 `UserProfile` 组件，`:id` 是一个动态路由参数。",
                  }),
                  (0, r.jsxs)("div", {
                    className: d,
                    children: [
                      (0, r.jsx)("h2", { children: "Switch" }),
                      (0, r.jsxs)("p", {
                        children: [
                          (0, r.jsx)("strong", { children: "Switch" }),
                          " 是 React Router 中用于包裹多个 `Route` 或 `Redirect` 组件的容器。它会遍历所有子路由，直到找到第一个匹配的路由并渲染对应的组件。这样可以确保一次只渲染一个路由。",
                        ],
                      }),
                      (0, r.jsx)("h3", { children: "用法" }),
                      (0, r.jsx)("p", {
                        children:
                          "Switch 会根据路径优先级匹配路由，并只渲染第一个匹配的路由，避免多个路由同时渲染的情况。",
                      }),
                      (0, r.jsx)("code", {
                        children:
                          '<Switch>\n  <Route path="/home" component={Home} />\n  <Route path="/about" component={About} />\n</Switch>',
                      }),
                      (0, r.jsx)("h3", { children: "参数说明" }),
                      (0, r.jsx)("ul", {
                        children: (0, r.jsxs)("li", {
                          children: [
                            (0, r.jsx)("strong", { children: "children" }),
                            ": Switch 的子路由，通常是多个 Route 或 Redirect 组件。Switch 会根据路径匹配规则，渲染第一个匹配的路由。",
                          ],
                        }),
                      }),
                      (0, r.jsx)("h3", { children: "示例" }),
                      (0, r.jsx)("code", {
                        children:
                          '<Switch>\n  <Route exact path="/" component={Home} />\n  <Route path="/about" component={About} />\n  <Redirect from="/old-path" to="/new-path" />\n  <Route component={NotFoundPage} />\n</Switch>',
                      }),
                      (0, r.jsx)("p", {
                        children:
                          "上述代码确保了只有路径 `/home` 和 `/about` 匹配时会渲染对应的组件，其它路径则会跳转到 `NotFoundPage`。",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: d,
                    children: [
                      (0, r.jsx)("h2", { children: "Redirect" }),
                      (0, r.jsxs)("p", {
                        children: [
                          (0, r.jsx)("strong", { children: "Redirect" }),
                          " ",
                          "用于在路由匹配到某个路径时，自动将用户重定向到另一个路径。它可以用来做路由的重定向或路由的别名。",
                        ],
                      }),
                      (0, r.jsx)("h3", { children: "用法" }),
                      (0, r.jsx)("p", {
                        children:
                          "使用 Redirect 可以快速实现页面跳转，通常用于路由路径的重命名或用户认证失败时跳转到登录页。",
                      }),
                      (0, r.jsx)("code", {
                        children:
                          '<Redirect from="/old-path" to="/new-path" />',
                      }),
                      (0, r.jsx)("h3", { children: "参数说明" }),
                      (0, r.jsxs)("ul", {
                        children: [
                          (0, r.jsxs)("li", {
                            children: [
                              (0, r.jsx)("strong", { children: "from" }),
                              ": 要重定向的原路径，用户访问此路径时会跳转到新的路径。",
                            ],
                          }),
                          (0, r.jsxs)("li", {
                            children: [
                              (0, r.jsx)("strong", { children: "to" }),
                              ": 跳转的目标路径。",
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("h3", { children: "示例" }),
                      (0, r.jsx)("code", {
                        children: '<Redirect from="/home" to="/dashboard" />',
                      }),
                      (0, r.jsx)("p", {
                        children:
                          "上述代码会在访问 `/home` 时自动跳转到 `/dashboard` 路径。",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: d,
                    children: [
                      (0, r.jsx)("h2", { children: "React.lazy" }),
                      (0, r.jsxs)("p", {
                        children: [
                          (0, r.jsx)("strong", { children: "React.lazy" }),
                          " 是 React 提供的懒加载功能，允许你将组件异步加载。当组件需要渲染时，它才会被加载。这可以大大提高页面的性能，尤其是当应用程序较大时。",
                        ],
                      }),
                      (0, r.jsx)("h3", { children: "用法" }),
                      (0, r.jsx)("p", {
                        children:
                          "React.lazy 只能与 Suspense 组件一起使用，用于包裹异步加载的组件，直到组件加载完成，才会渲染。",
                      }),
                      (0, r.jsx)("code", {
                        children:
                          'const Home = React.lazy(() => import("./pages/Home"));',
                      }),
                      (0, r.jsx)("h3", { children: "参数说明" }),
                      (0, r.jsx)("ul", {
                        children: (0, r.jsxs)("li", {
                          children: [
                            (0, r.jsx)("strong", { children: "import" }),
                            ": React.lazy 接受一个函数，该函数需要返回一个动态 `import` 的 Promise，加载指定的模块。",
                          ],
                        }),
                      }),
                      (0, r.jsx)("h3", { children: "示例" }),
                      (0, r.jsx)("code", {
                        children:
                          "<Suspense fallback={<Loading />}>\n  <Home />\n</Suspense>",
                      }),
                      (0, r.jsx)("p", {
                        children:
                          "上述代码会在加载 `Home` 组件时，显示一个 `Loading` 组件，直到 `Home` 加载完成后再渲染。",
                      }),
                    ],
                  }),
                ],
              }),
              " ",
            ],
          });
        },
        x = function () {
          return (
            (0, c.useEffect)(function () {
              var e = function () {
                console.log(11);
                var e = document.getElementById(window.location.hash.slice(1));
                e && e.scrollIntoView({ behavior: "smooth" });
              };
              return (
                window.addEventListener("hashchange", e),
                function () {
                  window.removeEventListener("hashchange", e);
                }
              );
            }, []),
            (0, r.jsxs)("div", {
              className: "mTKnst0wuMAGMxidjpoi",
              children: [
                (0, r.jsx)(i, {
                  items: [
                    { label: "介绍", link: "#introduce" },
                    { label: "安装", link: "#install" },
                    { label: "API", link: "#api" },
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "eZKZwEnHEdvp4Yg8Ka1t",
                  children: [
                    (0, r.jsx)(o, {
                      id: "introduce",
                      title: "React Router 简介",
                      content:
                        "本项目是一个轻量级的React-Router实现，旨在帮助你理解React Router的核心概念。",
                    }),
                    (0, r.jsx)(o, {
                      id: "install",
                      title: "安装",
                      content: (0, r.jsx)(h, {}),
                    }),
                    (0, r.jsx)(o, {
                      id: "api",
                      title: "API",
                      content: (0, r.jsx)(a, {}),
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
  },
]);
