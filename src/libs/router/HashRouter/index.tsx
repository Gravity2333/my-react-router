import { createHashHistory } from "@/libs/history";
import Router from "../Router";

/**
 * 封装hash Router
 * @param param0 
 * @returns 
 */
export default function HashRouter({ children }: { children?: React.ReactNode }) {
    return <Router history={createHashHistory({})}>{children}</Router>
}