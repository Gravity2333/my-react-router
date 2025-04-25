import { useContext } from "react";
import { RouterContext } from "../contexts";

/** 获取动态路由params */
export default function useParams() {
  const { match } = useContext(RouterContext);
  return match.params;
}
