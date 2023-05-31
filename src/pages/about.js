import React from "react";
import Button from "../components/commonComponents/Button";
import { Link } from "react-router-dom";
export default function About(){
    return (
      <>
        <img src="/images/about-hero.png" />
        <div className="about">
          {/* <img src=""/> */}

          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            <br />
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="about-orage-section">
            <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
            <Link to='/vans'>
            <Button
              title={"Explore our vans"}
              styles={{ backgroundColor: "#000000" }}
            />
            </Link>
          </div>
        </div>
      </>
    );
}