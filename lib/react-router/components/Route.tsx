import React, { useContext } from "react";
import { Match, RouteInputProps, RouteProps } from "../typings";
import { RouterContext } from "../contexts";
import { matchPath } from "../utils";
import { Location } from "lib/history";

export default function Route(props: RouteProps) {
  const {
    path = "",
    component,
    render,
    children,
    computedMatch,
  } = props;
  /** 获得当前location */
  const routerContext = useContext(RouterContext);

  /** 计算match */
  const match: Match | null = computedMatch
    ? computedMatch
    : !!path
    ? matchPath(routerContext.location.pathname, props)
    : routerContext.match;

  /** 匹配到了则展示内容，匹配不到展示null */
  return match ? (
    <RouterCore
      location={routerContext.location}
      match={match}
      render={render}
      children={children}
      component={component}
    />
  ) : null;
}

/** 用来生成 outlet 以及真正展示的内容 */
function RouterCore({
  children,
  location,
  match,
  component,
  render,
}: {
  location: Location;
  match: Match;
  component?: RouteProps["component"];
  render?: RouteProps["render"];
  children?: RouteProps["children"];
}) {
  /** 传入给渲染组件的参数 */
  const routeInputProps: RouteInputProps = {
    location,
    match,
  };

  /** 生成outlet */
  const outlet =
    typeof children === "function" ? children(routeInputProps) : children;

  /** 生成content */
  let content = outlet;

  /** 如果有component则覆盖 */
  if (component) {
    content = React.createElement(component, routeInputProps as any);
  }

  /** 如果有render 则执行后覆盖 */
  if (render) {
    content = render(routeInputProps);
  }

  return (
    <RouterContext.Consumer>
      {(contextValue) => {
        return (
          <RouterContext.Provider
            value={{
              ...contextValue,
              // 更新outlet
              outlet,
              // 更新match
              match,
            }}
          >
            {content}
          </RouterContext.Provider>
        );
      }}
    </RouterContext.Consumer>
  );
}
