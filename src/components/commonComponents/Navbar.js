import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
    <h1>#VANLIFE</h1>
      <nav>
        <Link className="nav-link" to={"/"}>Home</Link>
        <Link className="nav-link" to={"/about"}>About</Link>

        <Link className="nav-link" to={"/vans"}>Vans</Link>
      </nav>
    </div>
  );
}
