import React, { useEffect } from 'react'
import axios from 'axios'
export default function Ftechdata() {
    const [post,setposts]=React.useState({})
    const[id,setId]=React.useState()
    const[data,getData]=React.useState()
    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${data}`)
        .then(res=>{
            // console.log(res)
            setposts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[data])
 const Handelchange=(e)=>{
     setId(e.target.value)
     console.log(e.target.value)
 }
 console.log("post-",post)
 const Handelclick=()=>{
       getData(id)
 }
 console.log("data",data)
  return (
    <div>
      <h1><input type="text" onChange={Handelchange}></input></h1>
      <button type='button' onClick={Handelclick}>Submit</button>
      {/* {
        post.map((res)=>{
            console.log("res",res)
            return(
                <div>
                    <h1></h1>
                </div>
            )
        })
      } */}
      <h1>{post.title}</h1>
    </div>
  )
}
