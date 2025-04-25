import { matchPath } from "../utils";
import { useContext } from "react";
import { RouterContext } from "../contexts";
import { Match } from "../typings";
import React from "react";

/**
 * switch组件，保证其children中，只有一个匹配到
 * @returns
 */
export default function Switch({
  children = [],
}: {
  children?: JSX.Element[];
}) {
  const routerContext = useContext(RouterContext);
  
  for (const child of children) {
    const childProps = child.props;
    const { exact = false, sensitive = false } = childProps;
    // 考虑到Router和Redirect两种情况
    const path = childProps.path || childProps.from;
    /** 计算computedMatch */
    const computedMatch: Match | null = path
      ? matchPath(routerContext.location.pathname, { path, exact, sensitive })
      : routerContext.match

    if (computedMatch) {
      return React.cloneElement(child, { computedMatch });
    }
  }
  return null;
}
