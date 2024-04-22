import * as React from "react";
import { Button } from "@mui/material";

const CommonBtn = (props) => {


  return (
    <Button variant={props.variant} className="commonBtn" onClick={()=> alert('Clicked btn')}>
      {props.children}
    </Button>
  );
};

export default CommonBtn;
