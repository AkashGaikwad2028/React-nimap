import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export default function Profile() {
    const auth=useAuth()
    const navigate=useNavigate()
    console.log(auth.user,"authuser")
    const handlelogout=()=>{
          auth.logout()
          navigate('/')
    }
  return (
    <div>
      <h1>welcome {auth.user}</h1>
      <button onClick={handlelogout}></button>
    </div>
  )
}
