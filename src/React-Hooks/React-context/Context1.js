import React, { useContext } from 'react'
import { UserContext,Channe } from '../../App'
import { ChannelContext } from '../../App'
export default function Context1() {
  const user =useContext(UserContext)
  const channel =useContext(ChannelContext)
  return (

    // {UseContext Hook}
    <div>
            {user}-{channel}
    </div>
  )
}
