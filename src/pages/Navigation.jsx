import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigationContainer">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Accueil
      </NavLink>
      <NavLink
        to="applications"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Applications
      </NavLink>
      <NavLink
        to="articles"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Articles
      </NavLink>
    </div>
  );
}
