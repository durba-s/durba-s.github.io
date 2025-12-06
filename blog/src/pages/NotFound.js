import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container">
      <h2>404 – Page Not Found</h2>
      <Link to="/" className="backBtn">
        Go Home
      </Link>
    </main>
  );
}
