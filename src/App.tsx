import NotFoundPage from "./components/NotFoundPage";
import {
  HashRouter,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "./lib/react-router-dom";
import styles from "./styles.less";
import { Suspense } from "react";
import LoadingPage from "./components/LoadingPage";
import React from "react";

function App() {
  return (
    <HashRouter>
      <nav style={{ display: "flex" }} className={styles["global-nav"]}>
        <NavLink to="/home" activeClassName={styles["global-nav__match"]}>
          Home
        </NavLink>
        <NavLink to="/about" activeClassName={styles["global-nav__match"]}>
          About
        </NavLink>
        <NavLink to="/docs" activeClassName={styles["global-nav__match"]}>
          Docs
        </NavLink>
      </nav>

      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Redirect from="/" to="/home" />
          <Route
            path="/home"
            component={React.lazy(() => import("./pages/Home"))}
          ></Route>
          <Route
            path="/about"
            component={React.lazy(() => import("./pages/About"))}
          ></Route>
          <Route
            path="/docs"
            component={React.lazy(
              () => import("./pages/Docs/components/Install")
            )}
          ></Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default App;
