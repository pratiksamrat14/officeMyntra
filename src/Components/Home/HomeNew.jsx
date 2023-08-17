import React, { useEffect, useState } from "react";
import Product from "../Other Components/Product";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/actions/actions";
import Navigation from "../Navigation Bar/Navigation";
import Footer from "../Footer/Footer";
import "./HomeNew.css";

const HomeNew = () => {
  const URL = useSelector((state) => state.editurl.url); //getting url from reducers
  const dispatch = useDispatch();

  const [productList, setProductList] = useState({ data: [] });

  useEffect(() => {
    dispatch(
      fetchData(URL, (list) => {
        setProductList({ data: list });
      })
    );
  }, [URL]);

  const { data } = productList;

  return (
    <>

      <div className="home-container">
        {data.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

    </>
  );
};

export default HomeNew;
