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
  children: JSX.Element;
}) {
  const [routerContextValue, setRouterContextValue] =
    useState<RouterContextType>({
      history,
      location: history.location,
      match: computeRootMatch(),
    } as any);

  useEffect(() => {
    const unlisten = history.listen(({ location }) => {
      setRouterContextValue((prev) => ({
        ...prev,
        location,
      }));
    });

    // 初始化
    history.push("/");

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
