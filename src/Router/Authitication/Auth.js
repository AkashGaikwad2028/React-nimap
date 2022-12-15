import React, { useContext, useState } from 'react'
 import { createContext } from 'react'
 const AuthContext=createContext(null)
 
export default function Auth({children}) {
    const [user,setuser]=useState()
    const login=(user)=>{
        setuser(user);
    }

    const logout=()=>{
        setuser(null)
    }
  return (
       <AuthContext.Provider value={{user,login,logout}}>
        {children}
       </AuthContext.Provider>
  )
}

export const useAuth=()=>{
   return useContext(AuthContext)   
}