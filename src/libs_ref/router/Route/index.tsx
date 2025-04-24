import { pathToRegexp } from "path-to-regexp";
import { Match, RouterContext } from "../Router";
import { Location } from "@/libs/history";
import React, { Suspense } from "react";
import matchPath from "../utils/matchPath";

export default function Route(props: {
  path?: string;
  render?: (...props: any) => React.ReactNode;
  component?: React.ComponentType;
  exact?: boolean;
  sensitive?: boolean;
  children?: React.ReactNode;
  // 上层传下来的location
  location?: Location;
  // switch传递额computedMatch
  computedMatch?: Match;
}) {
  return (
    <RouterContext.Consumer>
      {(context) => {
        /** 获得传递下来的location */
        const location = props.location || context.location;

        /** 计算match
         *   如果没有传递path参数，直接算是匹配上上层match
         *   传递了，直接调用matchPath计算是否匹配
         */
        const match = props.computedMatch
          ? props.computedMatch
          : props.path
          ? matchPath(location.pathname, props)
          : context.match;
        /** 匹配上了渲染，并且重新下发新的match 嵌套router*/
        return match ? (
          <RouteCore
            location={location}
            match={match}
            render={props.render}
            component={props.component}
            children={props.children}
          />
        ) : null;
      }}
    </RouterContext.Consumer>
  );
}

function RouteCore({
  location,
  match,
  render,
  component,
  children,
}: {
  location: Location;
  match: Match;
  render?: Function;
  component?: React.ComponentType;
  children?: any;
}) {
  const props = {
    location,
    match,
  };
  /** 原版的渲染使用三元运算 不直观，这里改成if */
  const outlet = (() => {
    /** 如果route有children 直接渲染 */
    if (children) {
      /** <Route>()=>JSX</Route>的情况 */
      if (typeof children === "function") {
        return children(props);
      } else {
        /** <Route>JSX</Route>的情况
         * 此时路由信息需要通过withRouter获得
         */
        return children;
      }
    }
    return null;
  })();

  return (
    <RouterContext.Consumer>
      {(context) => {
        /** 支持outlet后，component / render的渲染，需要在前面
         * 即 有component/render时 把children内容保存
         * route的children必须用Outlet渲染
         */
        let content = outlet;
        if (component) {
          /** 由于是JSX.ELEMENT 需要借助compoent */
          /** 加入suspense，支持懒加载 */
          content = (
            <Suspense fallback={context?.loadingPage || "loading..."}>
              {React.createElement(component, props as any)}
            </Suspense>
          );
        }

        if (render) {
          content = <Suspense fallback="loading..."> {render(props)}</Suspense>;
        }

        return (
          <RouterContext.Provider
            value={{
              ...context,
              match: match,
              outlet,
            }}
          >
            {content}
          </RouterContext.Provider>
        );
      }}
    </RouterContext.Consumer>
  );
}
