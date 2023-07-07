import React from "react";
import Navigation from "./component/Navigation";
import "./App.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="appPage">
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
