import React, { Component } from 'react'

export default class Didmount extends Component {
    constructor(props){
        super(props)
            this.state={
             count:0
            }
        }

        componentDidMount(){
            document.title=`clicked ${this.state.count} times`
            console.log(this.state.count,"didmount")
        }
 componentDidUpdate(prevProps,prevState){
    document.title=`clicked ${this.state.count} times`
    console.log(this.state.count,"didupdate")
 }

  render() {
    return (
      <div>
        <button onClick={()=>this.setState({count:this.state.count+1})}>{this.state.count}</button>
      </div>)
    
  }
}
