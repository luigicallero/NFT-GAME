import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Game from "./game";
import Header from "./header";
import Board from "./board";
import {BrowserRouter as Router,Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <Header/>
    <div className='mainboard'>
      <div className='board'>        
        <Board/>
      </div>
      <div className="App">
        <Game />
        <button className="btn">Wallet</button><br/>
        <Link><button className="btn">Pick Image</button></Link><br/>
        <Link><button className="btn">Mint!!</button></Link>
      </div>
    </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);