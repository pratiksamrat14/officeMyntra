import React, { useContext, useEffect, useState } from "react";
import './MyntraLogo.css'
import {useDispatch} from 'react-redux';
import { Link } from "react-router-dom";

const MyntraLogo = () => {
 const dispatch=useDispatch() ;
  return (
    <>

        <img
          onClick={()=>{
            dispatch({type:""})
          }}
          src="images/myntra logo.png"
          alt="pictures"
          className="myntra-logo"
        />

    </>
  );
};

export default MyntraLogo;
