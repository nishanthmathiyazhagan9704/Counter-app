import React, { Component } from "react";
import Button from "./components/Button";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      count:0
    };
  }

  incrementcount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementcount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  resetcount = () => {
    this.setState({
      count: 0 
    });
  };
  
  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <div>
          <div class="count">
            <h2>Current Count:</h2>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
            <button onClick = { this.incrementcount }>

                Increment

            </button> 
            <button onClick = { this.decrementcount }>
              
                Decrement

            </button> 
            <button onClick = { this.resetcount }>
              
                reset

            </button> 
          </div>
        </div>
      </div>
    );
  }
}
