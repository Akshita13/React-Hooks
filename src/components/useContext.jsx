import React from "react";
import { createContext } from 'react';

const appContext = createContext();
const AppProvider = ({children})=>{

    const userData={
      name:'akshita',
      age:25
    }

    return   <appContext.Provider value={userData}>{children}</appContext.Provider>
      
};

export {appContext,AppProvider};