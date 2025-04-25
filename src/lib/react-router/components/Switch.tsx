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
  children?: any;
}) {
  /** 归一化 */
  if(!Array.isArray(children)){
    children = [children]
  }
  const routerContext = useContext(RouterContext);
  console.log(children)
  for (const child of children) {
    const childProps = child.props;
    let { exact = false, sensitive = false } = childProps;
    // 考虑到Router和Redirect两种情况
    const path = childProps.path || childProps.from;
    if(path === childProps.from){
      exact = true
    }
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
