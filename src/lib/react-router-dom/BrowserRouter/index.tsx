import { createBrowserHistory } from "@/lib/history";
import Router from "@/lib/react-router/components/Router";

/** 本质上是对Router的一层封装 */
export default function BrowserRouter({
  children,
}: {
  children?: any;
}) {
  return <Router history={createBrowserHistory({})}>{children}</Router>;
}
