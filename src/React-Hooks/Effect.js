import React from 'react'

export default function Effect() {
    const [count,setCount]=React.useState(0)
    const [name,setName]=React.useState('')
//    console.log(count,"state")
    React.useEffect(()=>{
          console.log(`useefect-updateing document titel`)
          document.title=`clicked ${count}`
    },[])
  return (
    <div>
        <h1>{count}</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )    
}
