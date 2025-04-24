import { createContext } from "react";
import { HistoryContextType, RouterContextType } from "./typings";

/** 全局 Router Context */
export const RouterContext = createContext<RouterContextType>({} as any);

/** 全局 History Context
 *  说明，为什么要单独给history？ 因为RouterContext中的变动比较多，比如location match这些
 *  有些组件只需要使用history，没有使用location match，但是这些变动的时候，只使用history的组件也需要重新渲染。
 *  这样做的目的就是减少渲染次数！
 */
export const HistoryContext = createContext<HistoryContextType>({} as any);
