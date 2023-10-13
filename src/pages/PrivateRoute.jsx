import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../utils/contexts/UserContext";

export default function PrivateRoute() {
  const status = useContext(UserContext);
  return (
    <div>
      {console.log(status)}
      {status === "admin" ? <Outlet /> : <Navigate to="/" />}
    </div>
  );
}
