import React from "react";
import { useReducer,useState } from "react";
import Reducer from "./reducer";
const initialValue=0;
function ReducerHook() {
    console.log('Reducer Hook comp')
//   const [count, setCount] = useState(0);

const [count , dispatch] = useReducer(Reducer, initialValue)
  return (
    <>
      
        <div className="container">
          <button onClick={() => dispatch({ type: "INC" })}>
            +
          </button>
          <h1>{count}</h1>
          <button onClick={() => dispatch({ type: "DEC" })}>
            -
          </button>
        </div>

    </>
  );
}

export default ReducerHook;