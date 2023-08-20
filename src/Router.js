import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import cookie from "cookie";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import Registration from "./component/Registration";
import Landing from "./component/Landing";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies.loggedIn ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/" replace />
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute component={Dashboard} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
};

export default Router;
