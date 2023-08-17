import React, { useEffect } from "react";
import "./ProductDetails.css";
import Button from "../Other Components/Button";
import Logos from "../Other Components/Logos";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetails as datafetch } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import ActionType from "../../redux/constants/ActionType";


const ProductDetails = () => {
  const {id}=useParams() ;
  const dispatch=useDispatch() ;

  useEffect(() => {
        dispatch(datafetch(id)) ;
    
  }, []);

  const data=useSelector(state=>state.productdetails.productDetail);
  const {image,description,rating,title,price}=data ;
  return (
    <>
      <div className="product-details-container">
        <div className="product-details">
          <img
            src={image}
            alt="image not found"
            className="product-details-img"
          />

          <div className="other-details">
            <h1 className="product-details-heading">
             { title}
            </h1>

            <p className="product-rating">
            {rating ? rating.rate:0}  <Logos logoName="star"/> | {rating ? rating.count: 0}
            </p>

            <p className="product-details-descrip">
                {description}
            </p>
            <p className="product-details-price">RS {price}</p>
            <Button type='button' className='product-details-add-to-cart' label="Add to  Cart" handle={()=>{
                dispatch({
                    type:ActionType.addtocart,payload:data
                })
            }}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
