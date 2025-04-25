import { PartialPath, To } from "lib/history";
import { useEffect, useRef } from "react";
import useHistory from "../hooks/useHistory";

/** Redirect 这个组件不返回任何JSX
 * redirect的作用是，to变动，就执行push操作
 */
export default function Redirect({
  to,
  push = false,
}: {
  /** from 这个属性Redirect本身不用，是给Switch用的 */
  from?: string;
  to: To;
  /** 默认用的是place 是否使用push */
  push?: boolean;
}) {
  /** 存储之前的 to */
  const previousToRef = useRef<To>();
  /** 获得当前history */
  const history = useHistory();
  /** 跳转函数 */
  const jumpFn = push ? history.push : history.replace;
  useEffect(() => {
    const currentToType = typeof to;
    const previouseToType = typeof previousToRef.current;

    if (currentToType !== previouseToType) {
      jumpFn(to);
    } else {
      /** 类型相同 */
      if (currentToType === "string" && to !== previousToRef.current) {
        jumpFn(to);
      } else if (
        (to as PartialPath).search !==
          (previousToRef.current as PartialPath)?.search ||
        (to as PartialPath).pathname !==
          (previousToRef.current as PartialPath)?.pathname ||
        (to as PartialPath).hash !==
          (previousToRef.current as PartialPath)?.hash
      ) {
        jumpFn(to);
      }
    }
  }, [to]);
  return null;
}
