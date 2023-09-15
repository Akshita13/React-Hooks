import React from "react";
import ContextAPIChildComp from "./contextAPIChildComp";

function ContextAPIComp() {
    console.log('context API comp')

  
  return (
    <>
       <ContextAPIChildComp/>
    </>
  );
}

export default ContextAPIComp;