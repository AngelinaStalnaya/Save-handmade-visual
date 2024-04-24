import React from "react";
import { Input, FormControl, FormHelperText, Typography } from "@mui/material";
import CommonBtn from "../../buttons/CommonBtn/CommonBtn";

const AuthForm = () => {
  return (
    <FormControl method="POST" action="192.68.0.72/authme">
      {/* <FormHelperText children="Auth Form" /> */}
      <Typography> Authorization Form</Typography>

      <Input name="login" id="authLogin" required placeholder="Enter login" />
      <Input name="password" id="authPassword" required placeholder='Enter password' />
      <CommonBtn function={() => {console.log('Submit btn clicked')}}>Submit</CommonBtn>
    </FormControl>
  );
};

export default AuthForm;
