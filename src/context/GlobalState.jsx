import { createContext, useState } from "react";



export const GlobalContext=createContext()

export const ContextProvider = ({children}) => {
    const [offcanvas,setOffcanvas]=useState('w-1/4')


 return (
 <GlobalContext.Provider value={{offcanvas,setOffcanvas}}>
    {children}
 </GlobalContext.Provider>
 )
};

