import React from "react";

import Navbar from "./component/Navbar/Nabar.jsx";
import { Outlet } from "react-router-dom";

import "./App.css";
import ScrollToTop from "./component/Scrolltotop/Scrolltotop.jsx";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
