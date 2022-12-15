import React from 'react'
import {UserContext} from "../../App"
import { ChannelContext } from '../../App'

export default function Context() {
  return (
    <div>
     <UserContext.Consumer>
       { 
        value =>{
             return(
              <ChannelContext.Consumer>
                {
                   channel =>{
                    return (
                      <div>usercontext value {value}, I am {channel}</div>
                    )
                   }
                }
              </ChannelContext.Consumer>
             ) 
           
        }
       }
     </UserContext.Consumer>
    </div>
  )
}
