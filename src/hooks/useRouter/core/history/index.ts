import EventCenter from "./EventCenter";
import generateUniqueKey from "./generateUniqueKey";
import TruncateStack from "./trunkStack";

export enum Action {
  // 历史变动 不分方向 默认
  POP = "POP",
  // 新增动作
  PUSH = "PUSH",
  // 替换动作
  REPLACE = "REPLACE",
}

/** 路径 */
export type Pathname = string;
/** 搜索参数 ? 后 */
export type Search = string;
/** hash #后 */
export type Hash = string;
/** 唯一的key */
export type Key = string | number;
/** state 表示每个history位置携带的信息 类型任意 */
export type State = any;
/** 表示当前路由路径，包含pathname, search, hash */
export interface Path {
  pathname: Pathname;
  search: Search;
  hash: Hash;
}
/** 部分的path */
export type PartialPath = Partial<Path>;
/** to 目的路径 */
export type To = string | PartialPath;
/** Location 一个位置，继承Path 包含Path信息和携带的state 以及一个Key */
export interface Location extends Path {
  state: any;
  key: Key;
}

/** 更新，包含动作action和新的Location */
export type Update = {
  action: Action;
  location: Location;
};

/** 表示一个事务 block时用 */
export interface Transition extends Update {
  retry: () => void;
}

/** 监听事件函数 */
export type Listener = (updates: Update) => void;
/** 阻塞事件函数 */
export type Blocker = (transition: Transition) => void;

/** History对象 */
export interface History {
  /** 最近的一个Action */
  action: Action;

  /** 当前的Location */
  location: Location;

  /** createHref 创建href */
  /** Returns a string suitable for use as an <a href> value that will navigate to the given destination. */
  createHref: (to: To) => string;

  /** push */
  push: (to: To, state?: State) => void;

  /** replace */
  replace: (to: To, state?: State) => void;

  /** go */
  go: (delta: number) => void;

  /** forward */
  forward: () => void;

  /** back */
  back: () => void;

  /** listen  returns unlisten*/
  listen: (listener: Listener) => () => void;

  /** black returns unblock*/
  block: (blocker: Blocker) => () => void;
}

/** readonly函数 */
function readOnly<T>(obj: T) {
  return Object.freeze(obj) as T;
}

/**
 * createPath 解析Path对象 => path字符串
 * @param param0 Partial<Path>
 * @returns string
 */
function createPath({
  /** 需要给参数设置初始值，以保证获得一个完整的Path对象 */
  pathname = "/",
  search = "",
  hash = "",
}: PartialPath): string {
  let pathStr = pathname;
  if (search) {
    if (search?.startsWith("?")) {
      pathStr += search;
    } else {
      pathStr += `?${search}`;
    }
  }

  if (hash) {
    if (hash?.startsWith("#")) {
      pathStr += hash;
    } else {
      pathStr += `#${hash}`;
    }
  }

  return pathStr;
}

/**
 * parsePath: 根据path路径 创建path对象
 * @param pathStr string
 * @returns Path
 */
function parsePath(pathStr: string): Path {
  const pathObj: Path = { pathname: "/", hash: "", search: "" };
  /** 从后向前解析 */
  const hashIndex = pathStr.indexOf("#");
  if (hashIndex >= 0) {
    pathObj.hash = pathStr.slice(hashIndex);
    pathStr = pathStr.slice(0, hashIndex);
  }

  const searchIndex = pathStr.indexOf("?");
  if (searchIndex >= 0) {
    pathObj.search = pathStr.slice(searchIndex);
    pathStr = pathStr.slice(0, searchIndex);
  }

  /** 赋值patiname */
  pathObj.pathname = pathStr;
  return pathObj;
}

/** 创建memo路由 */
export function createMemoHistory(): History {
  /** 创建截断栈 */
  const truncateState = new TruncateStack<Location>({
    pathname: "/",
    search: "",
    hash: "",
    state: {},
    key: "default",
  });

  /** 获取当前的location  */
  function getCurrentLocation() {
    const { pathname, hash, search, state, key } = truncateState.current;
    return readOnly<Location>({
      pathname,
      hash,
      search,
      state: state || null,
      key: key || "default",
    }) as Location;
  }

  function getCurrentIndex() {
    return truncateState.pointerIndex;
  }

  /** 创建监听和block事件函数 */
  const listener = new EventCenter<Listener>();
  const blocker = new EventCenter<Blocker>();

  /** 获取当前的location和index 从当前window.location中取 */
  let location = getCurrentLocation();
  let index = getCurrentIndex();
  /** 设置默认Action 初始为POP */
  let action = Action.POP;

  /**
   * createHref方法 支持传入
   * @param {to} To
   * @returns href string
   */
  function createHref(to: To): string {
    return typeof to === "string" ? to : createPath(to);
  }

  /**
   * 生成下一个（新的 带插入的）Location对象
   * @param to
   * @param state
   * @returns Location
   */
  function getNextLocation(to: To, state: State): Location {
    /** 获得新的path */
    const nextPath = typeof to === "string" ? parsePath(to) : to;
    const { pathname } = truncateState.current;
    /** 以当前的pathname为base，生成location */
    return readOnly<Location>({
      pathname,
      search: "",
      hash: "",
      ...nextPath,
      state,
      key: generateUniqueKey(),
    });
  }

  /** 判断transition是否能执行 */
  function allowTx(transition: Transition) {
    return !blocker.length || blocker.call(transition) || false;
  }

  /** 应用 事务 变更内部状态 调用listener */
  function applyTx(nextAction: Action) {
    action = nextAction;
    /** 此时新的location已经被设置，需要调用listener 更新location和index状态 */
    location = getCurrentLocation();
    index = getCurrentIndex();
    listener.call({ location, action } as Update);
  }

  /**
   * push方法
   * @param to To
   * @param state any
   */
  function push(to: To, state: State) {
    /** 生成新的location */
    const nextLocation = getNextLocation(to, state);
    const retry = () => {
      push(to, state);
    };
    /** 判断transiton是否允许 */
    if (allowTx({ location: nextLocation, action: Action.PUSH, retry })) {
      truncateState.push(nextLocation);
      /**更新状态 调用listener */
      applyTx(Action.PUSH);
    }
  }

  /**
   * replace
   * @param to To
   * @param state any
   */
  function replace(to: To, state: State) {
    /** 生成新的location */
    const nextLocation = getNextLocation(to, state);
    const retry = () => {
      push(to, state);
    };
    /** 判断transiton是否允许 */
    if (allowTx({ location: nextLocation, action: Action.REPLACE, retry })) {
      truncateState.replace(nextLocation);
      /**更新状态 调用listener */
      applyTx(Action.REPLACE);
    }
  }

  let blockTx: Transition | null = null;
  const handleGo = () => {
    if (blockTx) {
      // 运行blocker逻辑
      blocker.call(blockTx);
      blockTx = null;
    } else {
      if (blocker.length > 0) {
        /** 回退 */
        const nextLocation = getCurrentLocation();
        const nextIndex = truncateState.pointerIndex;
        if (nextIndex !== void 0) {
          const backDelta = index - nextIndex;
          blockTx = {
            location: nextLocation,
            action: Action.POP,
            retry: () => {
              go(-backDelta);
            },
          };
          // 回退 触发下一次popstate
          go(backDelta);
        }
      } else {
        /** 更新状态 */
        applyTx(Action.POP);
      }
    }
  };

  function go(delta: number) {
    truncateState.go(delta);
    handleGo();
  }

  return {
    action,
    location,
    createHref,
    push,
    replace,
    go,
    forward: () => {
      go(1);
    },
    back: () => {
      go(-1);
    },
    listen: (fn: Listener) => {
      return listener.listen(fn);
    },
    block: (fn: Blocker) => {
      return blocker.listen(fn);
    },
  };
}
