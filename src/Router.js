import React from "react";
import { Routes, Route } from "react-router";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import Registration from "./component/Registration";

const Router = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
};
export default Router;
