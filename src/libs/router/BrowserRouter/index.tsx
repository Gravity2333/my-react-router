import { createBrowserHistory } from "@/libs/history";
import Router from "../Router";

/**
 * 封装Browser Router
 * @param param0 
 * @returns 
 */
export default function BrowserRouter({ children }: { children?: React.ReactNode }) {
    return <Router history={createBrowserHistory({})}>{children}</Router>
}