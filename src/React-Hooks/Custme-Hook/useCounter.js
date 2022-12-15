// import React from 'react'
import { useState } from "react"
function useCounter() {
    const[count,setCount]=useState(0)
    const increment=()=>{
        setCount(prevCount=>prevCount-1)
    }
 const decrment=()=>{
    setCount(prevCount=>prevCount+1)
 }

 const reset=()=>{
    setCount(0)
 }
 console.log(`count===${count}`)

  return [count,increment,decrment,reset]
}

export  default useCounter
