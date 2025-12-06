import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Header({ dark, onToggleTheme, query, setQuery }) {
  return (
    <header className="header">
      <Link to="/" className="brand">
        Durba Satpathi
      </Link>

      <Navbar />

      <div className="header-right">
        <input
          className="search"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="themeBtn" onClick={onToggleTheme}>
        {dark ? (
            <LightModeIcon style={{ fontSize: 26, color: "#fdd835" }} />   // yellow sun
        ) : (
            <DarkModeIcon style={{ fontSize: 26, color: "#37474f" }} />     // moon gray/blue
        )}
        </button>

      </div>
    </header>
  );
}
