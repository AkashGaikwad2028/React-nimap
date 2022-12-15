import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export default function Login() {

    const [user,setUser]=useState('')
    const auth =useAuth()
    const navigate=useNavigate()
   
    const handellogin=()=>{
        auth.login(user)
        navigate('/')
    }

  return (
    <div>
      <input type="text" onChange={(e)=>setUser(e.target.value)}></input>
      <button onClick={handellogin}>Login</button>
    </div>
  )
}
