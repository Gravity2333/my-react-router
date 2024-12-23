import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.less";

// reference: https://juejin.cn/post/7213956241612914749
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
