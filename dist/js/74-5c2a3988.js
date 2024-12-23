"use strict";
(self.webpackChunkmy_react_router =
  self.webpackChunkmy_react_router || []).push([
  [74],
  {
    74: (e, n, t) => {
      t.r(n), t.d(n, { default: () => l });
      var a = t(471),
        r = t(12),
        c = t(671),
        s = (0, a.createContext)({ context: null });
      function o(e) {
        return (
          (n = e.context),
          (t = (0, a.useContext)(r.zA)),
          (o = t.outlet),
          t.location,
          (0, c.jsx)(
            s.Provider,
            { value: { context: n }, children: o },
            +new Date()
          )
        );
        var n, t, o;
      }
      const i = {
        "page-container": "guLSWGfSTKszn1B6ki8G",
        header: "m0wfDGKzhMX73yS5Rsmq",
        header__tab: "pcVSJp70EUZOC3BNOIyP",
        header__navigation: "h1s5YMK3QDhkAvmeTSUN",
        content: "MtHcvgjnHsgo2SEKbSZ4",
        header__content: "vT4kIStmq2o8BIB9554s",
      };
      var h = t(118);
      function l() {
        var e = (0, h.A)();
        return (0, c.jsxs)("div", {
          className: i["page-container"],
          children: [
            (0, c.jsxs)("header", {
              className: i.header,
              children: [
                (0, c.jsxs)("div", {
                  className: i.header__tab,
                  children: [
                    (0, c.jsx)("a", {
                      href: "#",
                      onClick: function (n) {
                        n.preventDefault(), e.push("/home");
                      },
                      children: "首页",
                    }),
                    (0, c.jsx)("a", {
                      href: "#",
                      onClick: function (n) {
                        n.preventDefault(), e.push("/docs");
                      },
                      children: "文档",
                    }),
                    (0, c.jsx)("a", {
                      href: "#",
                      onClick: function (n) {
                        n.preventDefault(), e.push("/embed");
                      },
                      children: "内嵌 useRouter展示",
                    }),
                    (0, c.jsx)("a", {
                      href: "#",
                      onClick: function (n) {
                        n.preventDefault(), e.push("/about");
                      },
                      children: "关于作者",
                    }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  className: i.header__navigation,
                  children: [
                    (0, c.jsx)("button", {
                      onClick: function () {
                        e.back();
                      },
                      children: "后退",
                    }),
                    (0, c.jsx)("button", {
                      onClick: function () {
                        e.forward();
                      },
                      children: "前进",
                    }),
                  ],
                }),
              ],
            }),
            (0, c.jsx)("div", {
              className: i.content,
              children: (0, c.jsx)(o, {}),
            }),
          ],
        });
      }
    },
  },
]);
