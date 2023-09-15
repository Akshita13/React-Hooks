import React from 'react'
import { memo } from "react";
function Todos({ todos, addTodo }) {
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo + index}</p>;
            })}

            <button onClick={addTodo}>Add Todo</button>
        </>
    );
};


export default memo(Todos);