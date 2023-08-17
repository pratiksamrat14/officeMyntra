import React, { useState } from "react";
import InputElement from "../Other Components/InputElement";
import Button from "../Other Components/Button";
import {useDispatch, useSelector} from 'react-redux'
import { addUser } from "../../redux/actions/user";

const signUnData = [
    {
      name: "First name",
      type: "text",
      placeholder: "First name",
      className: "form-element fname",
    },
    {
      name: "Surname",
      type: "text",
      placeholder: "Surname (optional)",
      className: "form-element lname",
    },
    {
        name: "Email",
        type: "email",
        placeholder: "Email",
        className: "form-element email",
      },
      {
        name: "Password",
        type: "password",
        placeholder: "Password",
        className: "form-element password",
      },
      {
        name: "Cpassword",
        type: "password",
        placeholder: "Confirm password",
        className: "form-element cpassword",
      },
  ];



const Signup = () => {
   const dispatch=useDispatch() ;
   useSelector(state=>console.log(state));
  const [signUp, setSignUp] = useState({});

  return (
    <>
    
      <div className="form-container">

        <div className="signin-form-layout">

           <h1>Sign Up</h1>
            <form className="signin-form" onSubmit={(e)=>{
              e.preventDefault();
              console.log('data on onsubmit',signUp) 
              dispatch(addUser(signUp)) ;
            }}>

          {signUnData.map((val) => <InputElement {...val} key={val.name} changeHandle={(event, label) => setSignUp({...signUp, [label]: event.target.value }) } />)}
                
               <Button className='signin-btn' label="Sign Up" type="submit"/>

            </form>
        </div>

      </div>
    </>
  );
};


export default Signup ;
