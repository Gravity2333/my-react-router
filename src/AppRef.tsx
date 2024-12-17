import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <header> ==== Headers ====</header>
      <HashRouter>
        <Routes>
          <Route path="/" Component={Layout} >
            <Route path='/home' Component={Home}></Route>
          </Route>

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
