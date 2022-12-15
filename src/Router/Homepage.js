import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Authitication/Auth'

export default function Homepage() {

    const Navstyle=({isActive})=>{
       return {
        fontWeight: isActive ? 'bold':'normal',
        textDecoration : isActive  ? 'none':'underline',
       }
       }

       const auth=useAuth();
  return (
    <div className='navbar'>
      <NavLink style={Navstyle} to="/">Homepage</NavLink>
      <NavLink style={Navstyle} to="/about">About</NavLink>
      <NavLink style={Navstyle} to="/contact">Contact</NavLink>
      <NavLink style={Navstyle} to="/profile">Profile</NavLink>
      {
        !auth.user && ( <NavLink style={Navstyle} to='login'>Login</NavLink>) 
      }
       
      
        </div>
  )
}
