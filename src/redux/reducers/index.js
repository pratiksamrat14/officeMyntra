import urlReducer from "./urlReducer";
import cart from "./cart";
import {combineReducers} from 'redux' ;
import { products } from "./products";
import {productdetails} from './productdetails'
import { user } from "./user";

const rootReducer=combineReducers({
    product:products,
    editurl:urlReducer,
    cart:cart,
    productdetails,
    user
});

export default rootReducer ;