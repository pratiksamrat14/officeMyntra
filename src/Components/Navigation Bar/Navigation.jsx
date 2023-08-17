import React, { useState } from "react";
import NavCategories from "./NavCategories";
import MyntraLogo from "../Other Components/MyntraLogo";
import Logos from "../Other Components/Logos";
import { Link } from "react-router-dom";
import "./Navigation.css";

const logos = [
  {
    logoname: "person",
    link: "/",
    label: "Person",
  },
  {
    logoname: "login",
    link: "/signin",
    label: "Login",
  },
  {
    logoname: "shopping_bag",
    link: "/cart",
    label: "Bag",
  },
];

const Navigation = () => {
  //maintaining a list to get list data of nav bar and may add somehtin future ;
  const [showPerson, setShowPerson] = useState(false);

  return (
    <>
      <div className="nav-container" key="nav-container">

          <MyntraLogo />{" "}
  
        <NavCategories />

        <div className="searchBar-container">
          <span className="material-symbols-outlined">search</span>
          <input
            type="search"
            name="Search-Bar"
            className="searchBar-desktop"
            placeholder="Search for products, brands and more"
          />
        </div>

        <div className="nav-logos">
          {logos.map((val) => {
            const { logoname, link, label } = val;
            return (
              <div
                className="nav-logo"
                key={label}
                onMouseOver={() => {
                  if (logoname === "person") {
                    setShowPerson(true);
                  }
                }}
              >
               <Link to={link}> <Logos logoName={logoname} /></Link>   
                <span className="logo-labels">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navigation;
