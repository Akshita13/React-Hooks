import React, { useEffect,useState } from "react";

function UseEffectComp() {

    const [counter, setCounter] = useState(0)
    const [counter1, setCounter1] = useState(0)

    //without dependency array , when component rerenders the useeffect will be called
    // useEffect(() => {
    //     console.log('useeffect called')
    // })


    //with empty array it will be called only when component mounted
    // useEffect(() => {
    //     console.log('useeffect called')
    // },[])


    // useeffect call when ependency array value change
    // and it's compare using === sign
    // useEffect(() => {
    //     console.log('useeffect called') 

    // return()=>{
    //     console.log('cleanup effect');
    // }
    // },[counter])
    return (
        <>
            <div>

                counter1: <h1 onClick={() => setCounter(val => val + 1)}>{counter}</h1>
                counter2: <h1 onClick={() => setCounter1(val => val + 1)}>{counter1}</h1>

            </div>
        </>
    );
}

export default UseEffectComp;