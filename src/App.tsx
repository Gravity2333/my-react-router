import React from "react";
import HashRouter from "../src/libs/router/HashRouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Route from "./libs/router/Route";
import UserInfo from "./pages/User";
import Switch from "./libs/router/Switch";
import Redirect from "./libs/router/Redirect";
import UserList from "./pages/UserList";

function App() {
  return (
    <>
      <header>Header</header>
      <HashRouter>
        <Switch>
          <Redirect from='/' to='/home' />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user" component={About} >
            <Switch>
            <Redirect from='/user' to='/user/list' />
            <Route path="/user/list" component={UserList} />
              <Route path="/user/:id/info" component={UserInfo} />
              <Route path="/user/:id/info" component={UserInfo} />
            </Switch>
          </Route>
          <Route path="/about" component={About} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
