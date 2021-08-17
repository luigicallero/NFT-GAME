import React, { Component } from "react";
import Die from "./die";
import "./game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numList: ["one", "two", "three", "four", "five", "six"],
      num1: "",      
      isRolling: false
    };
    this.handleRoll = this.handleRoll.bind(this);
  }

  handleRoll() {
    const numL = this.state.numList;
    const num1 = numL[Math.floor(Math.random() * numL.length)];
    

    this.setState({
      isRolling: true,
      num1: num1,
     
    });
    setTimeout(() => {
      this.setState({
        isRolling: false
      });
    }, 1000);
  }

  render() {
    return (
      <div className="Game">
        <button onClick={this.handleRoll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Roll Now!"}
        </button>
        <div className="Game-container">
          <Die num={this.state.num1} isRolling={this.state.isRolling} />         
        </div>
      </div>
    );
  }
}

export default Game;
