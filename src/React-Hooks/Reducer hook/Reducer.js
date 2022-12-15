import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../../App'


export default function Reducer() {
const CountContext1=useContext(CountContext)
  return (
    <div>
      <h1>Count={CountContext1.countState}</h1>
      <button  onClick={()=>CountContext1.countDispatch('increment')}>Increase</button>
      <button  onClick={()=>CountContext1.countDispatch('decrment')}>Decrease</button>
      <button  onClick={()=> CountContext1.countDispatch('reset')}>Reset</button>
    </div>
  )
}
