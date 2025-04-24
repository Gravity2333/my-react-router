import { History, Location } from "../history";

type Params = Record<string, any>;

/** 匹配对象Match */
export type Match = {
  /** 当前匹配到的路径 */
  path: string;
  /** 当前url路径 */
  url: string;
  /** 是否精确匹配 */
  isExact: boolean;
  /** params 参数 */
  params: Params;
};

/** Router全局上下文 */
export interface RouterContextType {
  location: Location;
  history: History;
  match: Match;
  outlet?: JSX.Element;
}

/** History全局上下文 */
export type HistoryContextType = History;
