import {
  loadinProductDetails,
  productDetail,
  productDetailsError,
} from "../actions/actions";

const initialState = {
  loading: false,
  productDetail: {},
  error: "",
};

export const productdetails = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case loadinProductDetails:
      return { ...state, loading: true };
    case productDetail:
      return { ...state, loading: false, productDetail: payload };
    case productDetailsError:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
