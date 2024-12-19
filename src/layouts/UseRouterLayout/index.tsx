import styles from "./index.less";
import { UseRouterIncomingProps } from "@/libs/useRouter/core/router/typings";
import {Outlet} from "@/hooks/useRouter";

export default function UseRouterLayout({ history }: UseRouterIncomingProps) {
  return (
    <div className={styles["page-container"]}>
      <header className={styles.header}>
        <div className={styles["header__tab"]}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              history.push("/home");
            }}
          >
            首页
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              history.push("/user");
            }}
          >
            用户
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              history.push("/about");
            }}
          >
            关于作者
          </a>
        </div>
        <div className={styles["header__navigation"]}>
          <button
            onClick={() => {
              history.back();
            }}
          >
            后退
          </button>
          <button
            onClick={() => {
              history.forward();
            }}
          >
            前进
          </button>
        </div>
      </header>

      <div className={styles["content"]}>
        <Outlet />
      </div>
    </div>
  );
}
