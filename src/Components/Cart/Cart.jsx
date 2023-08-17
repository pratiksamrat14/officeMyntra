import React, { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import {useSelector} from 'react-redux' ;
import "./Cart.css";
import Product from "../Other Components/Product";


const Cart = () => {
  const data=useSelector( state => state.cart.cart );

  return (
    <>
      <main className="cart-body">
        <h1>Shooping Cart</h1>
        <div className="items-container">
            {data.map(Product=><CartItem key={Product.id} {...Product}/>)}
        </div>
        {/* <div className="bill-container">
          <h2>Total Price: RS 600</h2>
          <button className="place-order">Place Order</button>
        </div> */}
      </main>
    </>
  );
};

export default Cart;
