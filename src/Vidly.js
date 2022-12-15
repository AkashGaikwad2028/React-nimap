import React, { Component } from 'react'
import Data from './Data'

export default class Vidly extends Component {
    constructor(){
        super();
        this.state={
            Data,
        }
    }

    click=(res,id)=>{
        console.log("id" , id)
    const newArr=this.state.Data.filter((eachData)=>(eachData.id!==id))
    this.setState({Data:newArr})
    console.log("index" ,newArr)     
         
    }

  render() {
    return (
      <div className='list'>
        { 
            this.state.Data.map((res,index)=>{
                return(
            

                   <div className='list2' key={index}>
                        <p>{res.name}</p>
                        <p>{res.Genre}</p>
                        <p>{res.stock}</p>
                        <p>{res.rate}</p>
                        <div className='btn'> <button onClick={()=>this.click(res,res.id)}>Delete</button></div>
                    </div>
                )
            })
        }
        
      </div>
    )
  }
}
