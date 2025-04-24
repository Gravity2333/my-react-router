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

/** Route传入匹配组件的Props */
export type RouteInputProps = {
  location: Location;
  match: Match;
};

/** Route组件入参 */
export type RouteProps = {
  /** path的路径信息 */
  path?: string;
  /** 展示组件 */
  component?: React.ComponentType;
  /** 渲染器 */
  render?: (props: RouteInputProps) => JSX.Element;
  /** 子组件，展示顺序为 component > render > children (outlet) 注意，children默认放到 outlet */
  children?: any;
  /** 上层计算过的Match，配合Switch使用，传入computedMatch之后，Route内部就不用计算Match了，直接展示computedMatch内容 */
  computedMatch?: Match;
  /** 匹配参数，传入给 pathToRegexp */
  sensitive?: boolean;
  /** 是否精确匹配，对应 path-to-regexp的end参数  注意 V6去掉了这个属性 我们模仿的是 V5版本*/
  exact?: boolean;
};
