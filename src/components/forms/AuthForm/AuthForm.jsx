import React from "react";
import { Input, Typography } from "@mui/material";
import CommonBtn from "../../buttons/CommonBtn/CommonBtn";

const AuthForm = (props) => {
  return (
    <form method="POST" action="192.68.0.72/authme">
      <Typography> Authorization Form</Typography>
      <Input name="login" id="authLogin" required placeholder="Enter login" type='text'/>
      <Input name="password" id="authPassword" required placeholder='Enter password' type='text'/>
      <CommonBtn type='submit' handleBtnClickFunc={props.handleFunc}>Submit</CommonBtn>
    </form>
  );
};

export default AuthForm;
