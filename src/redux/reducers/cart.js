import { ADD_TO_CART } from "../actions/actions";
import ActionType from "../constants/ActionType";

const initialState = {
  cart: [],
};

const rmProduct = (arr, pId) => {
  const filteredMap = arr.filter((val) => {
    if (val.id !== pId) return val;
  });
  return filteredMap;
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.addtocart: {
      return { ...state, cart: [...state.cart, action.payload] };
    }
    case ActionType.rmfromcart:{
      return { ...state, cart: rmProduct(state.cart, action.payload) };
    }
    default:
      return { ...state, cart: state.cart };
  }
};

export default cart;
