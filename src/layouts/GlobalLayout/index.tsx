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
            Home
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              history.push("/user");
            }}
          >
            User
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              history.push("/about");
            }}
          >
            About
          </a>
        </div>
        <div className={styles["header__navigation"]}>
          <button
            onClick={() => {
              history.back();
            }}
          >
            Back
          </button>
          <button
            onClick={() => {
              history.forward();
            }}
          >
            Forward
          </button>
        </div>
      </header>

      <div className={styles["content"]}>
        <Outlet />
      </div>

      <footer>
        <p>&copy; 2024 My Website | All Rights Reserved</p>
      </footer>
    </div>
  );
}
