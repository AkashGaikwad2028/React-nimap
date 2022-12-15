import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function About() {
    const Navigate=useNavigate()
  return (
    <div>
      <h1>About</h1>
    <button onClick={()=>Navigate(`/order`)}>place-Order</button>
    </div>
  )
}
