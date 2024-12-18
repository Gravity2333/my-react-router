import Outlet from "@/libs/router/Outlet";
import styles from "./index.less";
import useHistory from "@/libs/router/hooks/useHistory";

export default function GlobalLayout() {
  const history = useHistory();
  return (
    <div className={styles['page-container']}>
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
              history.push("/docs");
            }}
          >
            文档
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
