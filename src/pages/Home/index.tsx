import styles from './index.less'
import React from "react";

function Home() {
  return (
    <>
      <div className={styles["welcome-page"]}>
        <header className={styles["header"]}>
          <h1>Welcome to My React Router Demo</h1>
          <p>Learn how routing works in React</p>
        </header>

        <div className={styles["content"]}>
          <section className={styles["intro"]}>
            <h2>About This App</h2>
            <p>
              This application demonstrates how to implement routing in React
              using
              <strong>HashRouter</strong>, <strong>Switch</strong>,{" "}
              <strong>Route</strong>, and <strong>Redirect</strong>.
            </p>
          </section>

          <section className={styles["route-info"]}>
            <h2>Routes in This App</h2>
            <div className={styles["route-card"]}>
              <h3>Home Route</h3>
              <p>
                URL: <code>/home</code>
              </p>
              <p>Displays the homepage content.</p>
            </div>
            <div className={styles["route-card"]}>
              <h3>About Route</h3>
              <p>
                URL: <code>/about</code>
              </p>
              <p>Displays information about the app.</p>
            </div>
            <div className={styles["route-card"]}>
              <h3>User Route</h3>
              <p>
                URL: <code>/user</code> (redirects to <code>/user/list</code>)
              </p>
              <p>Shows the user list or user details.</p>
              <ul>
                <li>
                  <code>/user/list</code> - Displays the user list.
                </li>
                <li>
                  <code>/user/:id/info</code> - Displays information for a
                  specific user.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
