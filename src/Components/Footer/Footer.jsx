import React from "react";
import Section1 from "./Section1";
import './Footer.css'
const Footer=()=>{

    return(
       <footer id="footerId" className="footer">
        <Section1/>
        <p className="copyright">
        &copy; 2023 www.myntra.com. All rights reserved.</p>
        
       </footer>
    )
}

export default Footer ;