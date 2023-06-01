import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Vans() {

  const [vans, setVans] = useState([])

      useEffect(() => {
        fetch("/api/vans")
          .then((res) => res.json())
          .then((data) => setVans(data.vans));
      }, []);
      console.log(vans)

      // Van element
      const vanElement = vans.map((van) => (
        <div className="van-card">
          <Link to={`/vans/${van.id}`}>
            <img className="van-card-img" src={van.imageUrl} />
            <div className="van-card-title">
              <h2>{van.name}</h2>
              <h2>
                ${van.price}
                <span>/ day</span>
              </h2>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
          </Link>
        </div>
      ));
  return (
    <>
      <div className="about">
        <h1>Explore our van options🚐</h1>
        <div className="van-list">{vanElement}</div>
      </div>
    </>
  );
}
