import React from "react";
import { Input, Typography } from "@mui/material";
import CommonBtn from "../../buttons/CommonBtn/CommonBtn";
import { useState } from "react";

const AuthForm = (props) => {
  const [userAuth, setUserAuth] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleInputAuthChange = (el) => {
    setUserAuth(el.target.value)
  } 

  const handleInputPWChange = (el) => {
    setUserPassword(el.target.value)
  }


  return (
    <form method="POST" action="192.68.0.72/authme" className="authForm" name="authForm" onSubmit={props.getFormData}> 
      <Typography>Authorization Form</Typography>
      <Input
        name="login"
        id="authLogin"
        required
        placeholder="Enter login"
        type="text"
        value={userAuth}
        onChange={(e) => {handleInputAuthChange(e)}}
      />
      <Input
        name="password"
        id="authPassword"
        required
        placeholder="Enter password"
        type="text"
        value={userPassword}
        onChange={(e) => {handleInputPWChange(e)}}
      />
      <CommonBtn type="submit" handleBtnClickFunc={props.handleFunc}>
        Submit
      </CommonBtn>
    </form>
  );
};

export default AuthForm;
