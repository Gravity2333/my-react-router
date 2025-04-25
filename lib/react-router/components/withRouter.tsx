import { useContext } from "react";
import { RouteInputProps } from "../typings";
import { RouterContext } from "../contexts";
import React from "react";

/** 注入路由属性 */
export default function withRouter(Comp: React.ComponentType) {
  return (props: any) => {
    const { location, match } = useContext(RouterContext);
    const routeInputProps: RouteInputProps = {
      location,
      match,
    };

    return React.createElement(Comp, {
      ...props,
      ...routeInputProps,
    });
  };
}
