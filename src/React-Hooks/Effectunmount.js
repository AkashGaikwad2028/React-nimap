import React, { useState,useEffect} from 'react'

export default function Effectunmount() {
    const[x,setx]=useState(0);
    const[y,setY]=useState(0)
    
     const logMouseposition=(e)=>{
        console.log("mosepposition")
        setx(e.clientX)
        setY(e.clientY)
     }

     useEffect(()=>{
        console.log("effectupdate")
        window.addEventListener("mousemove",logMouseposition)

        return()=>{
            console.log('component update')
            window.removeEventListener('mousemove',logMouseposition)
        }
     },[])

  return (
    <div>
      hooks-{x} &{y}
    </div>
  )
}
