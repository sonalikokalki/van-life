import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet,NavLink} from "react-router-dom";
// import HostVanPhotos from "./HostVanPhotos";

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState([])
  useEffect(function(){
    fetch(`/api/host/vans/${id}`).then(res => res.json()).then(data => setCurrentVan(data.vans))
  },[])
  console.log(currentVan)
  // here we destructre useParamas() and only took id from it
  const {id} = useParams()
    const activeStyle = {
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#161616",
    };
  return (
    <>
      <div className="host-van-container">
        <Link to=".." relative="path" className="back-button">
          &larr; <span>Back to all vans</span>
        </Link>
        <div className="host-van-card">
          <img className="host-van-card-img" src={currentVan.imageUrl} />
          <div className="host-van-card-data">
            <h3>{currentVan.type}</h3>

            <h3>{currentVan.name}</h3>
            <p>
              ${currentVan.price}
              <span>/ day</span>
            </p>
          </div>
        </div>
        <nav className="host-nav">
          <NavLink
            to="."
            style={({ isActive }) => (isActive ? activeStyle : null)}
            end
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Photos
          </NavLink>
        </nav>
        <div className="outlet-container">

        <Outlet context={{ currentVan }} />
        </div>
      </div>
    </>
  );
}
