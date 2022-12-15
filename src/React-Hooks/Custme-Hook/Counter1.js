import React,{useState} from 'react'
import useCounter from './useCounter'

export default function Counter1() {
    const [count,increment,decrment,reset]=useCounter()
  return (
    <div>
      <h1>count={count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrment}>decrment</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
