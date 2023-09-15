import React from "react";
import { useCallback, useState } from "react";
import Todos from "./todos";
function UseCallbackComp() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    return setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  return (
    <>
{/* 
      this component should not be called when we press count increment click
      for that we use usecallback */}
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default UseCallbackComp;