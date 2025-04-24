import { Match } from "../typings";

/** 获取根Match对象 */
export function computeRootMatch(): Match {
  return {
    url: "/",
    path: "/",
    isExact: false,
    params: {},
  };
}
