import ActionType from "../constants/ActionType";

const initialState={
    url:'https://fakestoreapi.com/products',
}

export const urlReducer=(state=initialState,action)=>
{
     switch(action.type)
     {
        case ActionType.sortbycateogry:  return({...state,url:`https://fakestoreapi.com/products/category/${action.payload}`});
        default: return({...state,url:state.url});
     }
   
}

export default urlReducer ;