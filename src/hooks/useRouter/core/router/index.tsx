/** 简易实现@core/Router */
import {
  createContext,
  Suspense,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  RouteTemplate,
  UseRouterContextType,
  UseRouterIncomingProps,
} from "./typings";
import { History, Location, To } from "../history";
import { pathToRegexp } from "path-to-regexp";
import React from "react";
import generateUniqueKey from "../history/generateUniqueKey";

type _Match = UseRouterContextType["match"];

const UseRouterContext = createContext<UseRouterContextType>(
  {} as UseRouterContextType
);

/** 返回root match对象 */
function _computeRootMatch(): _Match {
  return {
    path: "/",
    url: "/",
    params: {},
  };
}

/**
 * 对比Location对象
 * @param prevLocation
 * @param currLocation
 * @returns
 */
function _compareLocation(prevLocation: Location, currLocation: Location) {
  const prevKeys = Object.keys(prevLocation).filter((f) => f !== "key");
  const currKeys = Object.keys(currLocation).filter((f) => f !== "key");

  if (prevKeys.length !== currKeys.length) {
    return false;
  }

  let same = true;
  for (let key of prevKeys) {
    if ((prevLocation as any)[key] !== (currLocation as any)[key]) {
      same = false;
      break;
    }
  }

  return same;
}

/**
 * 用来匹配path
 * @param pathname 需要和path匹配的pathname
 * @param config 需要匹配的path / 配置对象
 */
function _matchPath(
  pathname: string,
  config:
    | string
    | {
        path: string;
        exact?: boolean;
      }
): _Match | null {
  /** 归一化 */
  if (typeof config === "string") {
    config = {
      path: config,
      exact: true,
    } as any;
  }

  const { path, exact } = config as {
    path: string;
    exact?: boolean;
  };

  /** 由于 path-to-regexp 对于 / 默认都是end=true 所以如果path = / 并且exact=false 要单独判断 */
  if (path === "/" && exact === false) {
    if (pathname === "" || pathname.startsWith(path)) {
      return {
        path,
        url: pathname,
        params: {},
      };
    }
  }

  // 生成路径path对应的正则,以及keys 用来获取params
  const { keys, regexp } = pathToRegexp(path, {
    end: exact,
    sensitive: true,
  });

  const captures = pathname.match(regexp);
  if (!captures) {
    /** 没有匹配上 返回null */
    return null;
  }

  const [url, ...paramValues] = captures;
  /** 匹配上了，返回Match对象 */
  return {
    path,
    url,
    params: keys.reduce((memo, { name }, index) => {
      return {
        ...memo,
        [name]: paramValues[index],
      };
    }, {}),
  };
}

/** Router组件 */
function Router({
  history,
  loadingPage = <>loading....</>,
  children,
}: {
  history: History;
  loadingPage?: JSX.Element;
  children?: React.ReactNode;
}) {
  const [location, setLocation] = useState<Location>(history.location);

  useLayoutEffect(() => {
    history.listen(({ location: _location }) => {
      setLocation((prevLocation) => {
        /** 只有location改变时 才触发 */
        if (!_compareLocation(prevLocation, _location)) {
          return _location;
        }
        return prevLocation;
      });
    });

    history.push("/");
  }, []);

  return (
    <UseRouterContext.Provider
      value={{
        history,
        location,
        /** 给默认路径 */
        match: _computeRootMatch(),
        outlet: void 0,
        loadingPage,
      }}
    >
      <div key={generateUniqueKey()}> {children}</div>
    </UseRouterContext.Provider>
  );
}
/** Route组件 */
const Route = React.memo(function (props: {
  path?: string;
  component?: React.ComponentType<UseRouterIncomingProps>;
  /** 渲染函数 用来配置拦截 */
  render?: (props: UseRouterIncomingProps) => JSX.Element;

  /** 传入location 优先使用location 配合switch */
  location?: Location;
  /** 计算获得match 配合switch使用*/
  computedMatch?: _Match;

  /** 子节点 */
  children?: React.ReactNode;
}) {
  const context = useContext(UseRouterContext);
  const location = props.location || context.location;

  const match = useMemo(() => {
    if (props.computedMatch) return props.computedMatch;
    if (props.path) {
      return _matchPath(location.pathname, {
        path: props.path,
        exact: !props.children, // 如果有children，使用模糊匹配
      });
    }
    return context.match;
  }, [location.pathname, props.path, props.children, context.match]);

  if (!match) return null;

  const IncomingRouterProps = {
    history: context.history,
    location,
    match,
  };

  const [routeContent, setContent] = useState(<></>);

  useEffect(() => {
    // 生成outlet
    const outlet = (() => {
      /** 如果有children 直接渲染即可 不需要传入router incoming props
       * 因为如果children是普通组件 不需要传入
       * 如果是路由组件Route 其内部会传入
       */
      /** 判断一下 children是不是function，如果是就调用一下 */
      if (props.children) {
        if (typeof props.children === "function") {
          return (props.children as any)();
        } else {
          return props.children;
        }
      }
    })();
    /** 如果有component/render的情况下，还有子节点，说明子节点需要用outlet渲染，要保存到Context上 */
    setContent(
      <UseRouterContext.Provider
        value={{
          ...context,
          /** 挂载outlet返回 */
          outlet,
        }}
      >
        {/* Suspense用来支持React.lazy 实现路由懒加载 */}
        <Suspense fallback={context.loadingPage}>
          {props.render
            ? props.render(IncomingRouterProps)
            : props.component
            ? React.createElement(props.component, IncomingRouterProps)
            : outlet}
        </Suspense>
      </UseRouterContext.Provider>
    );
  }, []);

  return routeContent;
});

/** Swicth组件 保证只运行一个 */
function Switch({ children = [] }: { children?: JSX.Element[] | JSX.Element }) {
  /** 归一化 */
  if (!Array.isArray(children)) {
    children = [children];
  }
  /** 遍历子组件，获取第一个匹配 */
  return (
    <UseRouterContext.Consumer>
      {(context) => {
        /** 当前location */
        const location = context.location;
        for (let childElem of children) {
          /** from来自于Redirect */
          const from = childElem.props.from;
          const path = childElem.props.path || from;
          /** 生成match */
          const match = path
            ? _matchPath(location.pathname, {
                path,

                exact: (() => {
                  if (from) {
                    /** redirect的情况下 要求exact:true */
                    return true;
                  }
                  return !childElem; /** 有childElem 就模糊匹配 */
                })(),
              })
            : context.match;
          if (match) {
            /** 匹配到了，直接渲染返回匹配到的组件，后面就不匹配了 */
            /** 由于childItem已经是JSX.ELEMENT类型了，直接渲染即可，这里使用cloneElement，主要是为了传递参数 */
            return React.cloneElement(childElem, {
              location,
              computedMatch: match,
            });
          }
        }

        /** 没匹配到 返回null */
        return null;
      }}
    </UseRouterContext.Consumer>
  );
}

/** Redirect 组件 */
function Redirect({ to }: { from: string; to: To }) {
  const { history } = useContext(UseRouterContext);
  const previouseVal = useRef<To>();
  useEffect(() => {
    if (typeof previouseVal.current !== typeof to) {
      previouseVal.current = to;
      history.push(to);
      return;
    }

    if (typeof previouseVal.current == "string" && typeof to === "string") {
      if (previouseVal.current !== to) {
        previouseVal.current = to;
        return history.push(to);
      }
    }

    if (typeof previouseVal.current == "object" && typeof to === "object") {
      if (
        previouseVal.current?.pathname != to.pathname ||
        previouseVal.current?.search !== to.search ||
        previouseVal.current.hash !== to.hash
      ) {
        previouseVal.current = to;
        return history.push(to);
      }
    }
  });

  return <></>;
}

/** outlet占位符*/
function Outlet() {
  return (
    <UseRouterContext.Consumer>
      {({ outlet }) => {
        return outlet;
      }}
    </UseRouterContext.Consumer>
  );
}

/** withRouter */
function withRouter({
  Component,
}: {
  Component: React.ComponentType<UseRouterIncomingProps>;
}) {
  return (props: any) => {
    return (
      <UseRouterContext.Consumer>
        {({ history, location, match }) => {
          return (
            <Component {...{ history, location, match }} {...(props || {})} />
          );
        }}
      </UseRouterContext.Consumer>
    );
  };
}

function _parseTemplateImpl(props: RouteTemplate) {
  if (props.redirect) {
    return (
      <Redirect key={+new Date()} from={props.path!} to={props.redirect} />
    );
  }

  return (
    <Route key={+new Date()} path={props.path} component={props.component!}>
      {(() => {
        if (props.children && props.children?.length > 0) {
          return (
            <Switch>
              {(props.children || []).map((child) => _parseTemplateImpl(child))}
            </Switch>
          );
        }
      })()}
    </Route>
  );
}

function parseTemplate(props: RouteTemplate) {
  return _parseTemplateImpl(props);
}

export default {
  Router,
  Route,
  Switch,
  Redirect,
  Outlet,
  withRouter,
  parseTemplate,
};
