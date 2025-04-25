import { createHashHistory } from "@/lib/history";
import Router from "@/lib/react-router/components/Router";

/** 本质上是对Router的一层封装 */
export default function HashRouter({ children }: { children?: JSX.Element }) {
  return <Router history={createHashHistory({})}>{children}</Router>;
}
