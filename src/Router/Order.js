import React from 'react'
// import { History } from '@remix-run/router'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Order() {
    const navigate=useNavigate()
  return (
    <div>
      <h1>Order-summary</h1>
      <button onClick={()=>navigate(`/order`)}>Go-back</button>
      <button onClick={()=>navigate(`/Products`)}>Product</button>
      
    </div>
  )
}
