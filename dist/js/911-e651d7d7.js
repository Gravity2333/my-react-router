"use strict";
(self.webpackChunkmy_react_router =
  self.webpackChunkmy_react_router || []).push([
  [911],
  {
    429: (t, e, n) => {
      n.d(e, { sv: () => _, Ay: () => L });
      var r = n(471),
        o = n(916);
      function i() {
        for (
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 8,
            e = "",
            n = 0;
          n < t;
          n++
        )
          e +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
              Math.floor(62 * Math.random())
            );
        return e;
      }
      var a = n(671);
      function u(t) {
        return (
          (u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          u(t)
        );
      }
      function c(t, e) {
        return (
          p(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          v(t, e) ||
          h()
        );
      }
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                f(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function f(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t) {
              if ("object" != u(t) || !t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != u(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == u(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function h() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function p(t) {
        if (Array.isArray(t)) return t;
      }
      function y(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = v(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (u = !0), (i = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function v(t, e) {
        if (t) {
          if ("string" == typeof t) return m(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? m(t, e)
              : void 0
          );
        }
      }
      function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var b = (0, r.createContext)({});
      function d(t, e) {
        "string" == typeof e && (e = { path: e, exact: !0 });
        var n = e,
          r = n.path,
          i = n.exact;
        if ("/" === r && !1 === i && ("" === t || t.startsWith(r)))
          return { path: r, url: t, params: {} };
        var a = (0, o.MM)(r, { end: i, sensitive: !0 }),
          u = a.keys,
          c = a.regexp,
          l = t.match(c);
        if (!l) return null;
        var y,
          m =
            p((y = l)) ||
            (function (t) {
              if (
                ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
                null != t["@@iterator"]
              )
                return Array.from(t);
            })(y) ||
            v(y) ||
            h(),
          b = m[0],
          d = m.slice(1);
        return {
          path: r,
          url: b,
          params: u.reduce(function (t, e, n) {
            var r = e.name;
            return s(s({}, t), {}, f({}, r, d[n]));
          }, {}),
        };
      }
      var g = r.memo(function (t) {
        var e = (0, r.useContext)(b),
          n = t.location || e.location,
          o = (0, r.useMemo)(
            function () {
              return t.computedMatch
                ? t.computedMatch
                : t.path
                ? d(n.pathname, { path: t.path, exact: !t.children })
                : e.match;
            },
            [n.pathname, t.path, t.children, e.match]
          );
        if (!o) return null;
        var i = { history: e.history, location: n, match: o },
          u = c((0, r.useState)((0, a.jsx)(a.Fragment, {})), 2),
          l = u[0],
          f = u[1];
        return (
          (0, r.useEffect)(function () {
            var n = (function () {
              if (t.children)
                return "function" == typeof t.children
                  ? t.children()
                  : t.children;
            })();
            f(
              (0, a.jsx)(b.Provider, {
                value: s(s({}, e), {}, { outlet: n }),
                children: (0, a.jsx)(r.Suspense, {
                  fallback: e.loadingPage,
                  children: t.render
                    ? t.render(i)
                    : t.component
                    ? r.createElement(t.component, i)
                    : n,
                }),
              })
            );
          }, []),
          l
        );
      });
      function j(t) {
        var e = t.children,
          n = void 0 === e ? [] : e;
        return (
          Array.isArray(n) || (n = [n]),
          (0, a.jsx)(b.Consumer, {
            children: function (t) {
              var e,
                o = t.location,
                i = y(n);
              try {
                var a,
                  u = function () {
                    var n = e.value,
                      i = n.props.from,
                      a = n.props.path || i,
                      u = a
                        ? d(o.pathname, { path: a, exact: !!i || !n })
                        : t.match;
                    if (u)
                      return {
                        v: r.cloneElement(n, { location: o, computedMatch: u }),
                      };
                  };
                for (i.s(); !(e = i.n()).done; ) if ((a = u())) return a.v;
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              return null;
            },
          })
        );
      }
      function P(t) {
        var e = t.to,
          n = (0, r.useContext)(b).history,
          o = (0, r.useRef)();
        return (
          (0, r.useEffect)(function () {
            return u(o.current) !== u(e)
              ? ((o.current = e), void n.push(e))
              : "string" == typeof o.current &&
                "string" == typeof e &&
                o.current !== e
              ? ((o.current = e), n.push(e))
              : "object" != u(o.current) ||
                "object" !== u(e) ||
                ((null === (t = o.current) || void 0 === t
                  ? void 0
                  : t.pathname) == e.pathname &&
                  (null === (r = o.current) || void 0 === r
                    ? void 0
                    : r.search) === e.search &&
                  o.current.hash === e.hash)
              ? void 0
              : ((o.current = e), n.push(e));
            var t, r;
          }),
          (0, a.jsx)(a.Fragment, {})
        );
      }
      function O(t) {
        return t.redirect
          ? (0, a.jsx)(P, { from: t.path, to: t.redirect }, +new Date())
          : (0, a.jsx)(
              g,
              {
                path: t.path,
                component: t.component,
                children: (function (e) {
                  if (
                    t.children &&
                    (null === (e = t.children) || void 0 === e
                      ? void 0
                      : e.length) > 0
                  )
                    return (0, a.jsx)(j, {
                      children: (t.children || []).map(function (t) {
                        return O(t);
                      }),
                    });
                })(),
              },
              +new Date()
            );
      }
      const S = function (t) {
          var e = t.history,
            n = t.loadingPage,
            o =
              void 0 === n
                ? (0, a.jsx)(a.Fragment, { children: "loading...." })
                : n,
            u = t.children,
            l = c((0, r.useState)(e.location), 2),
            s = l[0],
            f = l[1];
          return (
            (0, r.useLayoutEffect)(function () {
              e.listen(function (t) {
                var e = t.location;
                f(function (t) {
                  return (function (t, e) {
                    var n = Object.keys(t).filter(function (t) {
                        return "key" !== t;
                      }),
                      r = Object.keys(e).filter(function (t) {
                        return "key" !== t;
                      });
                    if (n.length !== r.length) return !1;
                    var o,
                      i = !0,
                      a = y(n);
                    try {
                      for (a.s(); !(o = a.n()).done; ) {
                        var u = o.value;
                        if (t[u] !== e[u]) {
                          i = !1;
                          break;
                        }
                      }
                    } catch (t) {
                      a.e(t);
                    } finally {
                      a.f();
                    }
                    return i;
                  })(t, e)
                    ? t
                    : e;
                });
              }),
                e.push("/");
            }, []),
            (0, a.jsx)(b.Provider, {
              value: {
                history: e,
                location: s,
                match: { path: "/", url: "/", params: {} },
                outlet: void 0,
                loadingPage: o,
              },
              children: (0, a.jsxs)("div", { children: [" ", u] }, i()),
            })
          );
        },
        w = function () {
          return (0, a.jsx)(b.Consumer, {
            children: function (t) {
              return t.outlet;
            },
          });
        },
        x = function (t) {
          return O(t);
        };
      function k(t) {
        return (
          (k =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          k(t)
        );
      }
      function E(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, A(r.key), r);
        }
      }
      function A(t) {
        var e = (function (t) {
          if ("object" != k(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != k(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == k(e) ? e : e + "";
      }
      const C = (function () {
        return (
          (t = function t() {
            var e, n, r;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (e = this),
              (r = []),
              (n = A((n = "events"))) in e
                ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[n] = r);
          }),
          (e = [
            {
              key: "length",
              get: function () {
                return this.events.length;
              },
            },
            {
              key: "listen",
              value: function (t) {
                var e = this;
                return (
                  this.events.push(t),
                  function () {
                    e.events = e.events.filter(function (e) {
                      return e !== t;
                    });
                  }
                );
              },
            },
            {
              key: "call",
              value: function (t) {
                this.events.forEach(function (e) {
                  e && e(t);
                });
              },
            },
          ]),
          e && E(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function N(t) {
        return (
          (N =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          N(t)
        );
      }
      function I(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, F(r.key), r);
        }
      }
      function D(t, e, n) {
        return (
          (e = F(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function F(t) {
        var e = (function (t) {
          if ("object" != N(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != N(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == N(e) ? e : e + "";
      }
      var M = (function () {
        return (
          (t = function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              D(this, "list", []),
              D(this, "pointer", 0),
              this.list.push(e);
          }),
          (e = [
            {
              key: "pop",
              value: function () {
                var t,
                  e,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : -1;
                if (
                  ((this.pointer += n),
                  this.pointer < 0 && (this.pointer = 0),
                  0 ===
                    (null === (t = this.list) || void 0 === t
                      ? void 0
                      : t.length))
                )
                  this.pointer = 0;
                else if (
                  this.pointer >
                  (null === (e = this.list) || void 0 === e
                    ? void 0
                    : e.length) -
                    1
                ) {
                  var r;
                  this.pointer =
                    (null === (r = this.list) || void 0 === r
                      ? void 0
                      : r.length) - 1;
                }
                return this.list[this.pointer];
              },
            },
            {
              key: "push",
              value: function (t) {
                (0 === this.pointer && 0 === this.list.length) ||
                  (this.list = this.list.slice(0, ++this.pointer)),
                  this.list.push(t);
              },
            },
            {
              key: "replace",
              value: function (t) {
                var e;
                0 ===
                (null === (e = this.list) || void 0 === e ? void 0 : e.length)
                  ? this.list.push(t)
                  : this.list.splice(this.pointer, 1, t);
              },
            },
            {
              key: "length",
              get: function () {
                return this.list.length;
              },
            },
            {
              key: "current",
              get: function () {
                return this.list[this.pointer];
              },
            },
            {
              key: "pointerIndex",
              get: function () {
                return this.pointer;
              },
            },
            {
              key: "go",
              value: function (t) {
                var e = (this.pointer += t);
                return e <= 0
                  ? (this.pointer = 0)
                  : e >= this.length
                  ? (this.pointer = this.length > 0 ? this.length - 1 : 0)
                  : (this.pointer = e);
              },
            },
          ]),
          e && I(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function z(t) {
        return (
          (z =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          z(t)
        );
      }
      function B(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? B(Object(n), !0).forEach(function (e) {
                H(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function H(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t) {
              if ("object" != z(t) || !t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != z(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" == z(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var T = (function (t) {
        return (t.POP = "POP"), (t.PUSH = "PUSH"), (t.REPLACE = "REPLACE"), t;
      })({});
      function U(t) {
        return Object.freeze(t);
      }
      var _ = w;
      const L = function (t) {
        var e = t.routes,
          n = t.loadingPage,
          o =
            void 0 === n
              ? (0, a.jsx)(a.Fragment, { children: "loading..." })
              : n,
          u = (0, r.useRef)(
            (function () {
              var t = new M({
                pathname: "/",
                search: "",
                hash: "",
                state: {},
                key: "default",
              });
              function e() {
                var e = t.current;
                return U({
                  pathname: e.pathname,
                  hash: e.hash,
                  search: e.search,
                  state: e.state || null,
                  key: e.key || "default",
                });
              }
              function n() {
                return t.pointerIndex;
              }
              var r = new C(),
                o = new C(),
                a = e(),
                u = n(),
                c = T.POP;
              function l(e, n) {
                var r =
                  "string" == typeof e
                    ? (function (t) {
                        var e = { pathname: "/", hash: "", search: "" },
                          n = t.indexOf("#");
                        n >= 0 && ((e.hash = t.slice(n)), (t = t.slice(0, n)));
                        var r = t.indexOf("?");
                        return (
                          r >= 0 &&
                            ((e.search = t.slice(r)), (t = t.slice(0, r))),
                          (e.pathname = t),
                          e
                        );
                      })(e)
                    : e;
                return U(
                  R(
                    R(
                      { pathname: t.current.pathname, search: "", hash: "" },
                      r
                    ),
                    {},
                    { state: n, key: i() }
                  )
                );
              }
              function s(t) {
                return !o.length || o.call(t) || !1;
              }
              function f(t) {
                (c = t),
                  (a = e()),
                  (u = n()),
                  r.call({ location: a, action: c });
              }
              function h(e, n) {
                var r = l(e, n);
                s({
                  location: r,
                  action: T.PUSH,
                  retry: function () {
                    h(e, n);
                  },
                }) && (t.push(r), f(T.PUSH));
              }
              var p = null;
              function y(n) {
                t.go(n),
                  (function () {
                    if (p) o.call(p), (p = null);
                    else if (o.length > 0) {
                      var n = e(),
                        r = t.pointerIndex;
                      if (void 0 !== r) {
                        var i = u - r;
                        (p = {
                          location: n,
                          action: T.POP,
                          retry: function () {
                            y(-i);
                          },
                        }),
                          y(i);
                      }
                    } else f(T.POP);
                  })();
              }
              return {
                action: c,
                location: a,
                createHref: function (t) {
                  return "string" == typeof t
                    ? t
                    : ((r = void 0 === (n = (e = t).pathname) ? "/" : n),
                      (i = void 0 === (o = e.search) ? "" : o),
                      (u = void 0 === (a = e.hash) ? "" : a),
                      (c = r),
                      i &&
                        (null != i && i.startsWith("?")
                          ? (c += i)
                          : (c += "?".concat(i))),
                      u &&
                        (null != u && u.startsWith("#")
                          ? (c += u)
                          : (c += "#".concat(u))),
                      c);
                  var e, n, r, o, i, a, u, c;
                },
                push: h,
                replace: function (e, n) {
                  var r = l(e, n);
                  s({
                    location: r,
                    action: T.REPLACE,
                    retry: function () {
                      h(e, n);
                    },
                  }) && (t.replace(r), f(T.REPLACE));
                },
                go: y,
                forward: function () {
                  y(1);
                },
                back: function () {
                  y(-1);
                },
                listen: function (t) {
                  return r.listen(t);
                },
                block: function (t) {
                  return o.listen(t);
                },
              };
            })()
          );
        if (!e) throw Error("routes param is required!");
        return [
          (0, r.useMemo)(function () {
            var t = x(e);
            return (0,
            a.jsx)(S, { loadingPage: o, history: u.current, children: t });
          }, []),
          u.current,
        ];
      };
    },
    911: (t, e, n) => {
      n.r(e), n.d(e, { default: () => h });
      var r = n(51),
        o = n(471),
        i = n(429);
      const a = "JSryCW3_ePsQ4x1MHSc9",
        u = "D03V1qfVDuUsT6HLVfts";
      var c = n(671),
        l = function (t) {
          var e = t.children,
            n = t.history,
            r = (0, o.useRef)();
          return (
            (0, o.useEffect)(function () {
              n.listen(function (t) {
                var e = t.location;
                r.current.value = e.pathname + e.search + e.hash;
              });
            }, []),
            (0, c.jsx)("div", {
              className: "PuXmzQhk1m_RNsaF1bl6",
              children: (0, c.jsxs)("div", {
                className: "sUnLnj4yYxAxYWmboqIk",
                children: [
                  (0, c.jsxs)("div", {
                    className: "vUSBfwZxcRqQxzf9vbBk",
                    children: [
                      (0, c.jsxs)("div", {
                        className: "jGPyF64BwrFGmJ4d7gYc",
                        children: [
                          (0, c.jsx)("button", {
                            className: a,
                            style: { backgroundColor: "#FF5F57" },
                          }),
                          (0, c.jsx)("button", {
                            className: a,
                            style: { backgroundColor: "#FFBD2E" },
                          }),
                          (0, c.jsx)("button", {
                            className: a,
                            style: { backgroundColor: "#27C93F" },
                          }),
                        ],
                      }),
                      (0, c.jsxs)("div", {
                        className: "QHGuBspO8k3obczvc0hi",
                        children: [
                          (0, c.jsx)("button", {
                            className: u,
                            onClick: function () {
                              n.back();
                            },
                          }),
                          (0, c.jsxs)("form", {
                            style: { width: "80%", display: "flex" },
                            onSubmit: function (t) {
                              var e;
                              t.preventDefault();
                              var r =
                                null == t ||
                                null === (e = t.target) ||
                                void 0 === e ||
                                null === (e = e[0]) ||
                                void 0 === e
                                  ? void 0
                                  : e.value;
                              r && n.push(r);
                            },
                            children: [
                              (0, c.jsx)("input", {
                                type: "text",
                                ref: r,
                                placeholder: "Search or enter website",
                                className: "GpBWGpfxBN_Bwkv6CtMf",
                              }),
                              (0, c.jsx)("button", {
                                type: "submit",
                                className: "URXY_1j4I1MmyWSIKNNH",
                                children: "🔍",
                              }),
                            ],
                          }),
                          (0, c.jsx)("button", {
                            className: u,
                            onClick: function () {
                              n.forward();
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, c.jsx)("div", {
                    className: "_zm7cEunCNHzOXI2Bvpe",
                    children: (0, c.jsx)("div", {
                      className: "gRQ860ItychkZeB6FZBK",
                      children: e,
                    }),
                  }),
                ],
              }),
            })
          );
        };
      const s = o.memo(l);
      function f(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      const h = function () {
        console.log("embed");
        var t,
          e,
          a =
            ((t = (0, i.Ay)({
              loadingPage: (0, c.jsx)(r.A, {}),
              routes: {
                path: "/",
                component: o.lazy(function () {
                  return n.e(347).then(n.bind(n, 347));
                }),
                children: [
                  { path: "/", redirect: "/home" },
                  {
                    path: "/home",
                    component: o.lazy(function () {
                      return n.e(969).then(n.bind(n, 969));
                    }),
                  },
                  {
                    path: "/about",
                    component: o.lazy(function () {
                      return n.e(577).then(n.bind(n, 577));
                    }),
                  },
                  {
                    path: "/user",
                    children: [
                      { path: "/user", redirect: "/user/list" },
                      {
                        path: "/user/list",
                        component: o.lazy(function () {
                          return n.e(922).then(n.bind(n, 922));
                        }),
                      },
                      {
                        path: "/user/:id/info",
                        component: o.lazy(function () {
                          return n.e(712).then(n.bind(n, 712));
                        }),
                      },
                    ],
                  },
                  {
                    component: o.lazy(function () {
                      return n.e(410).then(n.bind(n, 410));
                    }),
                  },
                ],
              },
            })),
            (e = 2),
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
              (function (t, e) {
                var n =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != n) {
                  var r,
                    o,
                    i,
                    a,
                    u = [],
                    c = !0,
                    l = !1;
                  try {
                    if (((i = (n = n.call(t)).next), 0 === e)) {
                      if (Object(n) !== n) return;
                      c = !1;
                    } else
                      for (
                        ;
                        !(c = (r = i.call(n)).done) &&
                        (u.push(r.value), u.length !== e);
                        c = !0
                      );
                  } catch (t) {
                    (l = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !c &&
                        null != n.return &&
                        ((a = n.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw o;
                    }
                  }
                  return u;
                }
              })(t, e) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return f(t, e);
                  var n = {}.toString.call(t).slice(8, -1);
                  return (
                    "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(t)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? f(t, e)
                      : void 0
                  );
                }
              })(t, e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()),
          u = a[0],
          l = a[1];
        return (0, c.jsx)(s, { history: l, children: u });
      };
    },
  },
]);
