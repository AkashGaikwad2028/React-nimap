import React from 'react'

export default function Hookcounter() {
    const[count,setCount]=React.useState(0);

    const tick =()=>{
        setCount(count+1)
    }

    React.useEffect(()=>{
        const Interval=setInterval(tick,1000)
        return()=>{
            clearInterval(Interval)
        }
    },[" "])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}
