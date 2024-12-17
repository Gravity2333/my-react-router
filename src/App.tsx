import React from "react";
import HashRouter from "../src/libs/router/HashRouter";
import About from "./pages/About";
import Route from "./libs/router/Route";
import Switch from "./libs/router/Switch";
import Redirect from "./libs/router/Redirect";
import LoadingPage from "./components/LoadingPage";
import GlobalLayout from "./layouts/GlobalLayout";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <>
      <HashRouter loadingPage={<LoadingPage />}>
        <Route path="/" component={GlobalLayout}>
          <Switch>
            <Redirect from="/" to="/home" />
            <Route
              path="/home"
              component={React.lazy(() => import("./pages/Home"))}
            />
            <Route
              path="/about"
              component={React.lazy(() => import("./pages/About"))}
            />
            <Route
              path="/user"
              component={React.lazy(() => import("./pages/User"))}
            >
              <Switch>
                <Redirect from="/user" to="/user/list" />
                <Route
                  path="/user/list"
                  component={React.lazy(() => import("./pages/User"))}
                />
                <Route
                  path="/user/:id/info"
                  component={React.lazy(() => import("./pages/UserList"))}
                />
                <Route
                  path="/user/:id/info"
                  component={React.lazy(() => import("./pages/UserList"))}
                />
                <Route component={NotFoundPage}/>
              </Switch>
            </Route>
            <Route path="/about" component={About} />
            <Route component={NotFoundPage}/>
          </Switch>
        </Route>
      </HashRouter>
    </>
  );
}

export default App;
