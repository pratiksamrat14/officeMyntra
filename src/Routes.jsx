import React from "react";
import HomeNew from "./Components/Home/HomeNew";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from "./Components/Navigation Bar/Navigation";
import SignIn from './Components/Forms/SignIn'
import Signup from "./Components/Forms/Signup";
import ProductDetails from "./Components/Product Details/ProductDetails";
const CreatedRoutes=()=>{

    return(
        <div>

             <Routes>
                 <Route exact path="/signin" element={<SignIn/>}/>
                 <Route exact path="/:category" element={<HomeNew/>}/>
                 <Route exact path="/signup" element={<Signup/>}/>
                 <Route exact path="/cart" element={<Cart/>}/>
                 <Route exact path="/product/:id" element={<ProductDetails/>}/>
             </Routes>
  
        </div>
    )
}

export default CreatedRoutes ;