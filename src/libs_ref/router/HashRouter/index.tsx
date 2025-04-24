import { createHashHistory } from "@/libs/history";
import Router, { IRouter } from "../Router";

interface IHashRouter extends Omit<IRouter,'history'> {}
/**
 * 封装hash Router
 * @param param0
 * @returns
 */
export default function HashRouter(props: IHashRouter) {
  return <Router history={createHashHistory({})} {...props}/>;
}
