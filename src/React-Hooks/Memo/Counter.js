import React from 'react'

export default function Counter() {
    const [count,setCount]=React.useState(0)
    const [count1,setCount1]=React.useState(2)

const Handelclick=()=>{
    console.log("btn-1")
    setCount(count+1)
}

const Handelclick1=()=>{
    console.log("btn-2")
    setCount1(count1+1)
}

const isEven =()=>{
    return count%2===0
    console.log("even function")
}

  return (
    <div>
      <h1>{count}</h1>
      <span>{isEven()?"Even":"odd"}</span>
      <button onClick={Handelclick}>Buttopn1</button>
      <h1>
        {count1}
      </h1>
      <button onClick={Handelclick1}>Buttopn2</button>
    </div>
  )
}
