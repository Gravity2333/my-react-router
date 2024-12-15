import React from "react";
import HashRouter from "../src/libs/router/HashRouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Route from "./libs/router/Route";

function App() {
  return (
    <>
      <header>Header</header>
      <HashRouter>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />

      </HashRouter>
    </>
  );
}

export default App;
