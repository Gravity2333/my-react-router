import { useContext } from "react";
import { RouterContext } from "../contexts";

/** 获取location */
export default function useLocation() {
  const { location } = useContext(RouterContext);
  return location;
}
