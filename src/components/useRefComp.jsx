import React, { useState, useRef } from "react";
import { useEffect } from "react";
//it create murtable variable which will not re-render component
//use to access the DOM element directly
function UseRefComp() {
    console.log('useref comp')
    const obj = useRef(100);
    const [counter, setCounter] = useState(0)
    console.log(obj, "ref");

    const elementRef = useRef()


    useEffect(() => {
        console.log('ref of element', elementRef.current);
    })
    useEffect(() => {
        obj.current *= 5
        console.log("when re-render , new object ref created", obj);
    }, [counter])
    return (
        <>
            <div ref={elementRef}>
                <h1 onClick={() => setCounter(val => val + 1)}>hello {counter}</h1>
            </div>
        </>
    );
}

export default UseRefComp;