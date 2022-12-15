import React, { Component } from 'react'

export default class Change extends Component {
  constructor(props){
    super(props);
    this.state={
        count:0,
        tag:['tag1','tag2','tag3']
    }
  }

  click=()=>{
    this.setState({count:this.state.count+1})
  }
   
  render() {
    return (
      <div>
        <h1 style={{color: this.state.count===2 ? "red":"blue"}}>{this.state.count}</h1>
        <button onClick={this.click}>Changecolor</button>
        {this.state.count===2 ?<p>{ 
            this.state.tag.map((tag)=>{
              return(<li>{tag}</li>)
            })
        }</p>:""}
      </div>
    )
  }
}
