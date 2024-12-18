import { createHashHistory, History, Location } from "@/libs/history";
import { createContext, useLayoutEffect, useState } from "react";
import { compareLocation } from "../utils/compareLocation";

export interface Match {
  // Route的传参 path，比如 /list/:id
  path: string;
  // 匹配的路径 如  /list/UWIDUHDHBWB
  url: string;
  // 动态路由param
  params: Record<string, any>;
  // 是否匹配上
  isExact: boolean;
}

/** 下发router信息 包含
 *  match
 *  location
 *  history
 */
export const RouterContext = createContext<{
  match: Match | null;
  history: History;
  location: Location;
  outlet?: JSX.Element;
  loadingPage?: JSX.Element;
}>({} as any);

/* 下发 history */
export const HistoryContext = createContext<History>({} as any);

/**
 * 计算跟match 避免Route没有match可用
 * @param pathname
 */
function computeRootMatch(pathname: string): Match {
  return {
    path: "/",
    url: "/",
    params: {},
    isExact: pathname === "/",
  };
}

export interface IRouter {
  children?: React.ReactNode;
  history?: History;
  loadingPage?: JSX.Element;
}

export default function Router({
  children,
  /** 默认创建hash histroy */
  history = createHashHistory({}),
  loadingPage,
}: IRouter) {
  const [location, setLocation] = useState<Location>(history.location);

  useLayoutEffect(() => {
    /** 监听history的改变 更新location */
    history.listen(({ location: _location }) => {
      setLocation((prev) => {
        if (!compareLocation(prev, _location)) {
          return _location;
        } else {
          return prev;
        }
      });
    });
    if(history.location.pathname === ''){
      history.push('/')
    }
  }, []);

  return (
    <RouterContext.Provider
      value={{
        history,
        location,
        match: computeRootMatch(location.pathname),
        loadingPage,
      }}
    >
      {/* 单独给histroy */}
      <HistoryContext.Provider value={history}>
        {children}
      </HistoryContext.Provider>
    </RouterContext.Provider>
  );
}
