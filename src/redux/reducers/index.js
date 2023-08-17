import urlReducer from "./urlReducer";
import cart from "./cart";
import {combineReducers} from 'redux' ;
import { products } from "./products";
import {productdetails} from './productdetails'

const rootReducer=combineReducers({
    product:products,
    editurl:urlReducer,
    cart:cart,
    productdetails
});

export default rootReducer ;