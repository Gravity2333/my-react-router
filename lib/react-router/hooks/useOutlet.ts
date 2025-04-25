import { useContext } from "react";
import { RouterContext } from "../contexts";

/** 获取outlet */
export default function useOutlet() {
  const { outlet } = useContext(RouterContext);
  return outlet;
}
