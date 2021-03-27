
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
      super(props)
    this.state = {
      Person : {fullname:"Hadiri Hatem", bio:"TO BUSY!", profession:"flight despatcher", image:"dont.jpg"},
      show : true,
     
    
    };
  }
    render(){
      
      return (
      <div className="App-header">
        {
          this.state.show?
        <div>
          <p>{this.state.Person.fullname}</p>
          <p>{this.state.Person.bio}</p>
          <div><img src={this.state.Person.image} alt={"move"}style={{width:200}}></img></div>
          <p>{this.state.Person.profession}</p>
        </div>
        : "you are welcome"
        }
        <button onClick={()=>this.setState({...this.state,show:!this.state.show})}>clickme</button>
      </div>)
    }
     
  }




