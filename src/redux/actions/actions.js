import ActionType from "../constants/ActionType";
import axios from "axios";

export const sortbycategory = (category) => {
  return { type: "SORTBYCATEGORY", payload: category };
};

export const fetchProducts = () => {
  return {
    type: ActionType.fetchProducts,
  };
};

export const fetchproductsuccess = (formadata) => {
  return {
    type: ActionType.fetchPrdouctSucces,
    payload: formadata,
  };
};

export const fetchproducterror = (err) => {
  return {
    type: ActionType.fetchProductError,
    payload: err,
  };
};

export const fetchData = (url, callback) => async (dispatch) => {
  dispatch(fetchProducts());

  try {
    const response = await axios.get(url);
    const data = response.data;
    dispatch(fetchproductsuccess(data));
    if (callback) callback(data);
  } catch (error) {
    dispatch(fetchproducterror(error.message));
  }
};

export const loadinProductDetails = "@@product details/loading";
export const productDetail = "@@product details";
export const productDetailsError = "@@product details/error";

export const ProductDetails = (id, callback) => async (dispatch) => {
  dispatch({ type: loadinProductDetails });

  try {
    const response=await fetch(`https://fakestoreapi.com/products/${id}`).then((res)=>res.json())
    dispatch({
        type:productDetail,
        payload:response,
    })
  } catch (error) {
        
     dispatch({
        type:productDetailsError,
        payload:error.message,
     })
  }
};
