import React, { useMemo, useState } from 'react'

function MemoHook(){
    const [myNum , setMyNum] = useState(0);
    const [show , setShow] = useState(false);

    const getValue = () =>{
        return setMyNum(myNum+1)
    }

    const countNumber = (num) =>{
        console.log("num",num);
        return num;
    }

    //when 2nd button click and component re-render 
    // then this function should not be called because we are not using this logic
    // on 2nd btn click

    //it is use when we play with variable. and usecallback use with unction
    const checkData = useMemo(()=>
         countNumber(myNum)
    ,[myNum]);


    return (
        <>
            <button onClick={getValue} style={{ backgroundColor: "red" }}>
                Counter
            </button>
            <p> My new number : {checkData} </p>
            <button onClick={() => setShow(!show)}>
                {show ? "You clicked me" : "Click me plz"}
            </button>
        </>
    )
}

export default MemoHook;