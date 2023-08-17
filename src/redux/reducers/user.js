import { adduser,deleteuser } from "../actions/user";

const initialState={
      user:[]
}

const deleteUser=(id)=>{
     return [];
}
export const user=(state=initialState,action)=>
{
    const {type,payload}=action ;
 
    switch(type)
    {
        case adduser:{  console.log(payload); return({...state,user:[...state.user,payload]})}
        case deleteuser:  return({...state,user:deleteUser(payload)})
        default:
            return state;
    }
}