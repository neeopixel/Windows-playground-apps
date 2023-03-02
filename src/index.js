import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Notepad from '../src/Apps/Notepad';
import Calc from "./Apps/Calc";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <Calc />
      <Notepad />
    </div>
  </React.StrictMode>
);
