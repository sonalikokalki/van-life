import React from "react";
import { Link } from "react-router-dom";

export default function HostVanLayout() {
  return (
    <>
      <nav>
       
        <Link to="." relative="path">Details</Link>
        <Link to="pricing">Pricing</Link>

        <Link to="photos">Photos</Link>
      </nav>
    </>
  );
}
