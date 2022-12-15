import React from 'react'
//  React usestate with objects
export default function Usestate() {
    const [Change,setChange]=React.useState({name:"",lastname:""})

   
  return (
    <div>
      <input type="text" onChange={e=> setChange({...Change,name:e.target.value})} value={Change.name}></input><input type="text" onChange={e=> setChange({...Change,lastname:e.target.value})}  value={Change.lastname}></input>
      <h1>My name is-{Change.name}</h1>
      <h1>My name is-{Change.lastname}</h1>
    </div>
  )
}
