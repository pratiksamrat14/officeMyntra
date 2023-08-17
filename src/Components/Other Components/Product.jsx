import React from "react";
import "./Product.css";
import {useDispatch, useSelector} from 'react-redux'
import ActionType from "../../redux/constants/ActionType";
import Logos from "./Logos";
import { useNavigate } from "react-router-dom";


const Product = (props) => {
   
  const dispatch=useDispatch() ;
  const navigate=useNavigate() ;

  return (
    <div className="product" id={`product-no-1`} onClick={()=>{
      navigate(`/product/${props.id}`)
    }}>
      <img
        src={props.image}
        alt={props.title}
        className="product-image"
      />
      <h2 className="product-name">{props.title}</h2>
      {/* <p className="product-description">{props.description}</p> */}
      <p className="product-rating">
             {props.rating.rate} <Logos logoName="star"/> | {props.rating.count}
            </p>
      <p className="product-price">{`RS ${props.price}`}</p>
      {/* <button className="add-to-cart" onClick={()=>dispatch({type:ActionType.addtocart,payload:props})} >Add to Cart</button> */}
    </div>
  );
};

export default Product;
