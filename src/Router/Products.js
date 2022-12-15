import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export default function Products() {
  return (
    <div>
      <h1>List of Products</h1>
      <NavLink to="./featured">featured</NavLink>
      <NavLink to="./item">Item</NavLink>
      <Outlet/>
    </div>
  )
}
