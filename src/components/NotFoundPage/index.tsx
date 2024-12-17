import React from "react";
import useHistory from "@/libs/router/hooks/useHistory";
import styles from './index.less'

const NotFoundPage = () => {
  const history = useHistory();
  return (
    <div className={styles["not-found-page"]}>
      <div className={styles["not-found-content"]}>
        <div className={styles["not-found-text"]}>
          <h1>404</h1>
          <h2>Oops! Page Not Found</h2>
          <p>It seems like the page you're looking for doesn't exist.</p>
          <button
            onClick={() => {
              history.push("/home");
            }}
            className={styles["back-home-button"]}
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
