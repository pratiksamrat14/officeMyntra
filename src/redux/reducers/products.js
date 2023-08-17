import ActionType from "../constants/ActionType";


const initialstate={
    loading:false ,
    data:[],
    ERROR:"",
}

export const products=(state=initialstate,action)=>{

    switch(action.type)
    {
        case ActionType.fetchProducts:return({...state,loading:true,data:state.data,ERROR:state.ERROR}) ;
        case ActionType.fetchPrdouctSucces:return({...state,loading:false,data:action.payload,ERROR:""}) ;
        case ActionType.fetchProductError:return({...state,loading:false,data:state.data,Error:""} ) ;
        default:return({...state,loading:false,data:[],ERROR:""});
    }
}