import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

export default function Application() {
  const isAdmin = true;

  return (
    <div>
      <div>
        <span>Applications</span>
        <br />
        <Link to="applications/gestion">Calculateur</Link>
        <Link to="applications/todolist">Tâches</Link>
      </div>
      <div>{isAdmin ? <Outlet /> : <Navigate to="/" />}</div>
    </div>
  );
}
