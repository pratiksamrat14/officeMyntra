
export const adduser='@@adduser';
export const deleteuser='@@deleteuser';

export const addUser=(userData)=>async (dispatch)=>{
    try{
      dispatch({ type:adduser,payload:userData }) 
    }
    catch(error)
    {
        console.log(error) ;
    }
}

export const deleteUser=(Userid)=>async (dispatch)=>{
    try{
        dispatch({ type:deleteuser ,payload:Userid  })
    }
    catch(error){
       console.log(error) ;
    }

}


