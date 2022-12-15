import React from 'react'
import { useRef } from 'react'
export default function REf() {
    const inputRef=useRef(null)

    React.useEffect(()=>{
        console.log("useref")
        inputRef.current.focus()
    })
  return (
    <div>
      <input ref={inputRef} type="text"></input>
    </div>
  )
}
