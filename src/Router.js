import React from "react";
import { Routes, Route } from "react-router";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import Registration from "./component/Registration";
import Landing from "./component/Landing";
import Test from "./component/Test";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};
export default Router;
