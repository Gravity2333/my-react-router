"use strict";
(self.webpackChunkmy_react_router =
  self.webpackChunkmy_react_router || []).push([
  [347],
  {
    347: (e, n, a) => {
      a.r(n), a.d(n, { default: () => t });
      const r = {
        "page-container": "Jcvf9MxMJoWRQpGY4OeP",
        header: "qJnPlvDam1P1rXUO8so3",
        header__tab: "MJslx8pjlQ85E6uLhXTh",
        header__navigation: "_2yueRYErBb1W7NH9UVR",
        content: "wQjx6odf_aLIVKdqEP2R",
        header__content: "HVTHflfvXzjr0QQsSwXs",
      };
      var s = a(429),
        c = a(671);
      function t(e) {
        var n = e.history;
        return (0, c.jsxs)("div", {
          className: r["page-container"],
          children: [
            (0, c.jsxs)("header", {
              className: r.header,
              children: [
                (0, c.jsxs)("div", {
                  className: r.header__tab,
                  children: [
                    (0, c.jsx)("a", {
                      href: "#",
                      onClick: function (e) {
                        e.preventDefault(), n.push("/home");
                      },
                      children: "首页",
                    }),
                    (0, c.jsx)("a", {
                      href: "#",
                      onClick: function (e) {
                        e.preventDefault(), n.push("/user");
                      },
                      children: "用户",
                    }),
                    (0, c.jsx)("a", {
                      href: "#",
                      onClick: function (e) {
                        e.preventDefault(), n.push("/about");
                      },
                      children: "关于作者",
                    }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  className: r.header__navigation,
                  children: [
                    (0, c.jsx)("button", {
                      onClick: function () {
                        n.back();
                      },
                      children: "后退",
                    }),
                    (0, c.jsx)("button", {
                      onClick: function () {
                        n.forward();
                      },
                      children: "前进",
                    }),
                  ],
                }),
              ],
            }),
            (0, c.jsx)("div", {
              className: r.content,
              children: (0, c.jsx)(s.sv, {}),
            }),
          ],
        });
      }
    },
  },
]);
