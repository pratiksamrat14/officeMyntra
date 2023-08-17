import React, { useState } from "react";
import InputElement from "../Other Components/InputElement";
import Button from "../Other Components/Button";
import './SignIn.css';





const signInData = [
  {
    name: "Username",
    type: "text",
    placeholder: "Username",
    className: "form-element username",
  },
  {
    name: "Password",
    type: "password",
    placeholder: "Password",
    className: "form-element password",
  },
];


const SignIn = () => {
  const [signIn, setSignIn] = useState({});

  const handle = (event, label) => {
    setSignIn({...signIn, [label]: event.target.value });
  };
  console.log(signIn);
  return (
    <>
      <div className="form-container">
        <div className="signin-form-layout">
        <h1>Sign In</h1>
        <form className="signin-form">
          {signInData.map((val) => {
            return (
              <InputElement {...val} key={val.name} changeHandle={handle} />
            );
          })}
          <Button className='signin-btn' label="Login" type="submit"/>
        </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
