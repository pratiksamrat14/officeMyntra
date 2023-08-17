import React, { useEffect } from "react";
import Navigation from "./Components/Navigation Bar/Navigation";
import Footer from "./Components/Footer/Footer";
import HomeNew from "./Components/Home/HomeNew";
import Cart from "./Components/Cart/Cart";
import CreatedRoutes from "./Routes";
import ProductDetails from "./Components/Product Details/ProductDetails";

const App=()=>{
  

  return(
    <>
    <Navigation/>
    <CreatedRoutes/>
     <Footer/>
    </>
  )
}

export default App;
