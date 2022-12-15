import axios from 'axios'
import React, { useReducer } from 'react'
const initialState={
    loading:true,
    error:'',
    post:{}
}
const reducer=(state,action)=>{
    switch(action.type){
        case"Fetch_Success":
        // console.log("payload",action.payload)
        return{
            loading:false,
            post:action.payload,
            error:''
        }
        case "Fetch_Error":
            return{
                loading:false,
                post:{},
                error:"something went wrong"
                
            }
            default:
                return state
    }
}
export default function Datafetchreducer() {

   const [state,dispatch]= useReducer(reducer,initialState)

   React.useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then(response=>{
        // console.log(response.data)
       dispatch({type:"Fetch_Success",payload:response.data})
    })
    .catch(error=>{
      dispatch({type:"Fetch_Error"})
    })
   },[])
  return (
    <div>
        {console.log(state.post)}
      {state.loading ?"Loading":state.post.title}
      {state.error?state.error:null}
    </div>
  )
}
