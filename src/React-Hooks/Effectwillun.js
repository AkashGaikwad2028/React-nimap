import React, { useState } from 'react'
import Effectunmount from './Effectunmount'

export default function Effectwillun() {
    const[display,setDisplay]=useState(true)
  return (
    <div>
    {
        display&& <Effectunmount/>
    }  
    <button onClick={()=>setDisplay(false)}>Toggel</button>
    </div>
  )
}
