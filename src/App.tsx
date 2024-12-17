import React from "react";
import HashRouter from "../src/libs/router/HashRouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Route from "./libs/router/Route";
import UserInfo from "./pages/User";
import Switch from "./libs/router/Switch";
import Redirect from "./libs/router/Redirect";
import UserList from "./pages/UserList";
import Layout from "./pages/Layout";
import User from "./pages/User";

function App() {
  return (
    <>
      <HashRouter>
        <Route path="/" component={Layout} >
          <Switch>
            <Redirect from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user" component={User}>
              <Switch>
                <Redirect from="/user" to="/user/list" />
                <Route path="/user/list" component={UserList} />
                <Route path="/user/:id/info" component={UserInfo} />
                <Route path="/user/:id/info" component={UserInfo} />
              </Switch>
            </Route>
            <Route path="/about" component={About} />
          </Switch>
        </Route>
      </HashRouter>
    </>
  );
}

export default App;
