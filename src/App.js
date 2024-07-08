import React from "react";

import Navbar from "./component/Navbar/Nabar.jsx";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
