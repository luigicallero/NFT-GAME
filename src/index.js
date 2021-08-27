import React, { Component }  from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Game from "./game";
import Header from "./header";
import Board from "./board";
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import instagram from './img/instagram.svg'
//import Web3 from "web3"

const Web3 = require('web3');

window.onload = () => {
  // Variables
  let web3;
  let from;

  // Elements
  const connectButton = document.getElementById('wallet');
  const content = document.getElementById('content');
  const account = document.getElementById('account');

  // Functions
  const connect = async () => {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);

      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        content.style.display = 'initial';
        connectButton.style.display = 'none';

        const accounts = await web3.eth.getAccounts();

        from = accounts[0];

        account.innerText = from;
      } catch (err) {
        alert('Please accept the request');
      }
    } else {
      alert('Web3 is required. You should consider trying MetaMask!');
    }
  };

  // Listeners
  connectButton.onclick = connect;
};

class App extends Component {

  render() {
    return (
      <div>
      <Header/>
      <div className='mainboard'>
        <div className='board'>        
          <Board/>
        </div>
        
        <div className="App">
          <Game/>
          <div className='btn-panel'>
            <button id="wallet" className="btn">Wallet</button><br/>       
            <button className="btn">Mint!!</button><br/>
            <button className='btn '><a href='https://indianameregone.github.io/portfolio/main.html'>About us</a></button>
         </div>
          <br/><br/>
          <div className='indorse'>
            <a href='https://indorse.io/'>Indorse</a><br/><br/>
            <a href='https://ipfs.io/'>IPFS</a><br/><br/>
            <img src={facebook} className='social-m'alt=''/>
            <img src={twitter} className='social-m'alt=''/>
            <img src={instagram } className='social-m'alt=''/> 
          </div>        
        </div>     
      </div>    
      </div>
    );
  }
}

export default App

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);