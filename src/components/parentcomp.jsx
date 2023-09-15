import React, { useState } from "react";
import ChildComp from "./childcomp";
import UseEffectComp from "./useEffect";
import UseRefComp from "./useRefComp";
import UseCallbackComp from "./useCallback/useCallbackComp";
import ContextAPIComp from './context/contextAPIComp' 
import ReducerHook from "./useReducer/reducerHook";
import MemoHook from './useMemo/memoHook'
//we should not use useState inside useEffect . It will goes into infinite loops 
function ParentComp() {
  console.log('parent comp')
  //when component re-renders it will log initial value again every time 
  // const [count,setCount] = useState(console.log('hello'));


  const [count, setCount] = useState(0);

  //when we pass function (which called as lazily initialize) then when component rerenders it won't 
  // trigger initial value again
  // const [state,setState] = useState(()=>console.log('hello'));


  // const handleClick = ()=>{
  //   setCount(count+1);

  //   // setState(Math.random())
  // }

  const [state, _setState] = useState({
    counter: 0,
    counter1: 10
  })

  //when having object of state change
  function setState(newState) {
    _setState(oldState => {
      return {
        ...oldState, ...newState
      }
    })
  }



  //child render after parent rendering returns 
  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>
        Click here!
      </button>

      {/* when state value is being calculated using previous state value then we should
        use this callback syntax */}
      {/* <button onClick={(value)=>{return value+1}}>
          Click here!
        </button> */}


        {/* when having one state update only from object */}
      {/* <h1 onClick={() => {
        setState({
          counter: state.counter + 1
        })
      }}>
        {state.counter} {state.counter1}
      </h1> */}
      <div>{count}</div>
      <div>parent</div>
      {/* <ChildComp /> */}

      {/* <UseEffectComp/> */}

      {/* <UseRefComp/> */}

      {/* <UseCallbackComp/> */}

      {/* <ContextAPIComp/> */}

      {/* <ReducerHook/> */}
      <MemoHook/>
    </>
  );
}

export default ParentComp;