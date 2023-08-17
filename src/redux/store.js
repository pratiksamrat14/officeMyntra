import rootReducer from "./reducers";
import {legacy_createStore as creatStore} from 'redux';
// import {createLogger} from 'redux-logger' ;
import { applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';



// const logger =createLogger() ;
const store=creatStore(rootReducer,applyMiddleware(thunkMiddleware)) ;


export default store ;