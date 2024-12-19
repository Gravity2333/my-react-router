import React, { useEffect, useRef, useState } from "react";
import styles from "./index.less";
import { History } from "@/hooks/useRouter/core/history";

const MiniBrowser = ({
  children,
  history,
}: {
  children?: any;
  history: History;
}) => {
  const inputRef = useRef<any>();

  useEffect(() => {
    history.listen(({ location }) => {
      inputRef.current.value = location.pathname+location.search+location.hash;
    });
  }, []);

  return (
    <div className={styles.browserWrapper}>
      <div className={styles.browser}>
        <div className={styles.header}>
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              style={{ backgroundColor: "#FF5F57" }}
            ></button>
            <button
              className={styles.button}
              style={{ backgroundColor: "#FFBD2E" }}
            ></button>
            <button
              className={styles.button}
              style={{ backgroundColor: "#27C93F" }}
            ></button>
          </div>
          <div className={styles.urlBar}>
            <button
              className={styles.navButton}
              onClick={() => {
                history.back();
              }}
            ></button>
            <form
              style={{ width: "80%", display: "flex" }}
              onSubmit={(e: any) => {
                e.preventDefault();
                const path = e?.target?.[0]?.value;
                if (path) {
                  history.push(path);
                }
              }}
            >
              <input
                type="text"
                ref={inputRef}
                placeholder="Search or enter website"
                className={styles.input}
              />
              <button type="submit" className={styles.searchButton}>
                🔍
              </button>
            </form>
            <button
              className={styles.navButton}
              onClick={() => {
                history.forward();
              }}
            ></button>
          </div>
        </div>

        <div className={styles.main}>
          {/* <div className={styles.sidebar}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem}>About</li>
                <li className={styles.navItem}>Services</li>
                <li className={styles.navItem}>Contact</li>
              </ul>
            </div> */}
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MiniBrowser);
