import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <header>Header</header>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Navigate to={"/home"} />}/>
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
