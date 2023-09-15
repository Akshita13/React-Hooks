import React from "react";
import { useContext } from "react";
import { appContext } from "../useContext";
function ContextAPIChildComp() {
    console.log('context API child comp')
    const userData = useContext(appContext)
  return (
    <>
        <div>my name is {userData.name} . my age is {userData.age}</div>
    </>
  );
}

export default ContextAPIChildComp;