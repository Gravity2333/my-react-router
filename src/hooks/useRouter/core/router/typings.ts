import { History, Location } from "../history";

/** 简化处理 useRouter全部使用exact精确匹配 */
interface UseRouterMatch {
  path: string;
  url: string;
  params: Record<string, any>;
}

/** router incoming props 路由组件拿到的props */
export interface UseRouterIncomingProps {
  history: History;
  location: Location;
  match: UseRouterMatch;
}

/** context内容 */
export interface UseRouterContextType {
  history: History;
  location: Location;
  match: UseRouterMatch;
  // outlet占位符渲染内容
  outlet?: JSX.Element;
  // 默认Not Found路径
  loadingPage?: JSX.Element;
}

export type RouteTemplate = {
  redirect?: string;
  path?: string;
  component?: React.ComponentType<UseRouterIncomingProps>;
  children?: RouteTemplate[];
};
