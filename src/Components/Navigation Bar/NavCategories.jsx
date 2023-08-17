import React, {useEffect, useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import './NavCategories.css'
import { sortbycategory } from "../../redux/actions/actions";
import {Link} from 'react-router-dom'

const NavCategories = () => {
  const [category, setCategory] = useState({ data: [] });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategory({ data: json }))
      .catch((error) => console.log(error));
  }, []);
        
  const dispatch=useDispatch() ;

  return (
    <>
       
      <div className="catg_of_prod">
        {category.data.map((val) => {
          return (
            <div className="catg_container" key={val} onClick={()=>{
              dispatch(sortbycategory(val))
            }} >
              <span><Link to="/">{val.toUpperCase()}</Link></span>
            </div>
          );
        })}
      </div>

    </>
  );
};

export default NavCategories;
