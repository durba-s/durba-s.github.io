import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Portfolio
      </NavLink>

      <NavLink to="/blog" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
        Blog
      </NavLink>
    </nav>
  );
}
