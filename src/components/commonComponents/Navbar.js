import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {

  return (
    <>
      <div className="navbar">
        <Link to={"/"}>
          <h2>#VANLIFE</h2>
        </Link>
        <nav>
          {/* <Link className="nav-link" to={"/"}>Home</Link> */}
          <NavLink
            className={({ isActive }) => (isActive ? "nav-link" : null)}
            to={"/host"}
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-link" : null)}
            to={"/about"}
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "nav-link" : null)}
            to={"/vans"}
          >
            Vans
          </NavLink>
        </nav>
      </div>
    </>
  );
}
