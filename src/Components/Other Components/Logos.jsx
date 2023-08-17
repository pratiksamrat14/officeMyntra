import React from "react";
import "./Logo.css";
import { useSelector } from "react-redux";

const Logos = ({ logoName }) => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <>
      <span className="material-symbols-outlined profile-logo">{logoName}</span>
      {logoName === "shopping_bag" && cart.length > 0 ? (
        <sup className="cart-count">{cart.length}</sup>
      ) : (
        ""
      )}
    </>
  );
};

export default Logos;
