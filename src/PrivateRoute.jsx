import React, { useContext } from "react";
import { authContext } from "./components/Auth";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const user = useContext(authContext);
  return user ? <Outlet /> : <Navigate to="/" />;
}
