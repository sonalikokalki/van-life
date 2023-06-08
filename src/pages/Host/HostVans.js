import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
export default function HostVans() {
  const [hostVan, setHostVan] = useState([]);
  useEffect(function () {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVan(data.vans));
  }, []);
  console.log("Host vans data", hostVan);

  const singleVanHostDetail = hostVan.map((vanData, i) => (
    <Link to={`/host/vans/${vanData.id}`} key={vanData.id}>
      <div className="host-van-card">
        <img className="host-van-card-img" src={vanData.imageUrl} />
        <div className="host-van-card-data">
          <h3>{vanData.name}</h3>
          <p>
            ${vanData.price}
            <span>/ day</span>
          </p>
        </div>
      </div>
    </Link>
  ));
  return (
    <>
      <h1>Your listed vans</h1>
      {hostVan.length > 0 ? (
        <div className="host-van-container">{singleVanHostDetail}</div>
      ) : (
        <div className="host-van-container">
        
          <h3>Loading...</h3>
        </div>
      )}
    </>
  );
} 
