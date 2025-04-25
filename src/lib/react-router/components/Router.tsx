import { createHashHistory, History } from "@/lib/history";
import { HistoryContext, RouterContext } from "../contexts";
import { useEffect, useState } from "react";
import { RouterContextType } from "../typings";
import { computeRootMatch } from "../utils";

export default function Router({
  history = createHashHistory({}),
  children,
}: {
  history: History;
  children?: JSX.Element;
}) {
  /** 设置 routerContextValue 避免每次刷新的时候Context有不必要的更新 */
  const [routerContextValue, setRouterContextValue] =
    useState<RouterContextType>({
      history,
      location: history.location,
      match: computeRootMatch(),
    } as any);

  useEffect(() => {
    /** 初始化的时候注册监听事件 */
    const unlisten = history.listen(({ location }) => {
      setRouterContextValue((prev) => ({
        ...prev,
        location,
      }));
    });

    return unlisten;
  }, []);
  
  return (
    <RouterContext.Provider value={routerContextValue}>
      <HistoryContext.Provider value={history}>
        {children}
      </HistoryContext.Provider>
    </RouterContext.Provider>
  );
}
