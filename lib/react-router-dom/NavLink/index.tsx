import { To } from "lib/history";
import { RouterContext } from "lib/react-router/contexts";
import useHistory from "lib/react-router/hooks/useHistory";
import useLocation from "lib/react-router/hooks/useLocation";
import { RouteInputProps } from "lib/react-router/typings";
import { useContext } from "react";

export default function NavLink({
  to,
  children,
  replace = false,
  activeClassName = "",
  activeStyle = {},
  isActive,
}: {
  to: To;
  children?: any;
  replace?: boolean;
  /** 当链接激活时添加的类名 */
  activeClassName?: string;
  /** 当链接激活时应用的内联样式 */
  activeStyle?: Record<string, any>;
  /** 自定义激活逻辑的函数 */
  isActive?: (props: RouteInputProps) => boolean;
}) {
  const history = useHistory();
  const jumpFn = replace ? history.replace : history.push;
  const location = useLocation();
  const { match } = useContext(RouterContext);

  const href = history.createHref(to);
  const isMatched = isActive
    ? isActive({ location, match })
    : (href?.startsWith("#")
    ? href.slice(1)
    : href) === location.pathname;
  return (
    <a
      style={{
        display: "block",
        cursor: "pointer",
        ...(() => {
          return isMatched ? activeStyle : {};
        })(),
      }}
      onClick={(e) => {
        e.preventDefault();
        jumpFn(to);
      }}
      className={isMatched ? activeClassName : ""}
    >
      {children}
    </a>
  );
}
