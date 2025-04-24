import React from "react";
import { Match, RouterContext } from "../Router";
import matchPath from "../utils/matchPath";

/** 只渲染第一个 */
export default function Switch({
  children,
}: {
  children?: JSX.Element[] | JSX.Element;
}) {
  /** 归一化 */
  if (children && !Array.isArray(children)) {
    children = [children];
  }

  return (
    <RouterContext.Consumer>
      {({ location, match }) => {
        let matchedChild: Match | null = null;
        let element: JSX.Element | null = null;
        /** 找到第一个匹配的route */
        children?.forEach((child) => {
          if (!matchedChild) {
            const { exact, sensitive } = child.props; // from 处理redirect
            const path = child.props?.path || child.props?.from;
            matchedChild = path
              ? matchPath(location.pathname, {
                  path: path,
                  exact: child.props?.from ? true : exact,
                  sensitive,
                })
              : match;
            if (matchedChild) {
              element = child;
            }
          }
        });
        //  重新设置props
        return matchedChild
          ? React.cloneElement(element!, { location, computedMatch: match })
          : null;
      }}
    </RouterContext.Consumer>
  );
}
