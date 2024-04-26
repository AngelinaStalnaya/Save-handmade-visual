import * as React from "react";
import { Button } from "@mui/material";
import './CommonBtn.css'

const CommonBtn = (props) => {
  function handleClick(){
    console.log('Common btn clicked')
  }

  return (
    <Button 
      variant={props.variant} 
      className="commonBtn" 
      onClick={props.handleBtnClickFunc|| handleClick}
      >
      {props.children}
    </Button>
  );
};

export default CommonBtn;
