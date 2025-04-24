import { createBrowserHistory } from "@/libs/history";
import Router, { IRouter } from "../Router";
interface IBrowserRouter extends Omit<IRouter, "history"> {}
/**
 * 封装Browser Router
 * @param param0
 * @returns
 */
export default function BrowserRouter(props: IBrowserRouter) {
  return <Router history={createBrowserHistory({})} {...props} />;
}
