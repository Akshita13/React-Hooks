import React from "react";

//reducer will have two params state and action
function Reducer(state , action) {
   // if (action.type === "INC") {
  //   return (state = state + 1);
  // }
  // if (action.type === "DEC") {
  //   // return (state = state - 1);
  //   let newNum = 0;
  //   state >= 1 ? (newNum = state - 1) : (newNum = 0);
  //   return newNum;
  // }
  // return state;


  // use switch case for better code and understanding

  switch (action.type){
    case 'INC':
        return (state+=1);
    case 'DEC':
        let newNum=0;
        newNum = state >= 1 ? state - 1 : 0
        return newNum;
    default:
        return state;
  }
}

export default Reducer;