import React from 'react'
import { useReducer } from 'react'
const  initialState={
    firstCounter:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
        return {firstCounter:state.firstCounter+action.value}
        case 'decrment':
            return {firstCounter:state.firstCounter-action.value}
        case 'reset':
            return {firstCounter:state.firstCounter=0}
            default :
            return state
    }
}
export default function Reducer1() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <h1>{count.firstCounter}</h1>
      <button  onClick={()=>dispatch( {type:'increment',value:1})}>Increase</button>
      <button  onClick={()=>dispatch({type:'decrment',value:1})}>Decrease</button>
      <button  onClick={()=>dispatch({type:'reset'})}>Reset</button>
      
      <button  onClick={()=>dispatch( {type:'increment',value:5})}>Increase5</button>
      <button  onClick={()=>dispatch({type:'decrment',value:5})}>Decrease5</button>
    </div>
  )
}
