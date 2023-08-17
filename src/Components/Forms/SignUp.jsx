import React, { useState } from "react";
import InputElement from "../Other Components/InputElement";
import Button from "../Other Components/Button";



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
        name: "C-password",
        type: "password",
        placeholder: "Confirm password",
        className: "form-element cpassword",
      },
  ];
const Signup = () => {
  const [signUp, setSignUp] = useState({});

  const handle = (event, label) => {
    setSignUp({...signUp, [label]: event.target.value });
  };
  console.log(signUp);
  return (
    <>
      <div className="form-container">

        <div className="signin-form-layout">

           <h1>Sign Up</h1>
            <form className="signin-form">

                {signUnData.map((val) => {
                    return (
                    <InputElement {...val} key={val.name} changeHandle={handle} />
                    );
                })}
                
               <Button className='signin-btn' label="Sign Up" type="submit"/>

            </form>
        </div>

      </div>
    </>
  );
};

export default Signup;
