import React from "react";
import styles from "./index.less";

const LoadingPage = () => {
  return (
    <div className={styles["loading-container"]}>
      <div className={styles["loader"]}></div>
      <h1 className={styles["loading-text"]}>Loading...</h1>
    </div>
  );
};

export default LoadingPage;
