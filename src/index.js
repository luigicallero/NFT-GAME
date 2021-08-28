import React, { Component }  from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Game from "./game";
import Header from "./header";
import Board from "./board";
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import instagram from './img/instagram.svg'
import NFTMANJI from "./build/contracts/NFTMANJI.json"
const Web3 = require('web3');
var Contract = require('web3-eth-contract');


window.onload = () => {
  // Variables
  //let web3;
  let walletAddress;

  // Elements
  const connectButton = document.getElementById('wallet');
//  const content = document.getElementById('content');
  const account = document.getElementById('walletAddressBox');
  const player1Link = document.getElementById('player1Link');
  const player2Link = document.getElementById('player2Link');


  // Initial State of things
  player1Link.innerText = "Button Disabled";
  player2Link.innerText = "Button Disabled";
    // if already connected to Web3 provider bring account data:

  // Capture Contract Information from NFT contract NFTMANJI: xxxx
  const web3 = new Web3('https://rinkeby.infura.io/v3/30a836a6de45424f8e6a6d514aeea2f3')
  //web3.eth.getBlock('latest').then(result => console.log(result))
  
  // set provider for all later instances to use
  //Contract.setProvider('https://rinkeby.infura.io/v3/30a836a6de45424f8e6a6d514aeea2f3');
  //var contract = new Contract(NFTMANJI.abi, '0x5239cE62Ceed3c5a69BACCa7a824A8e127D907aC')
  //console.log(contract)

  //const web3 = new Web3("https://rinkeby.infura.io/v3/30a836a6de45424f8e6a6d514aeea2f3")
  const NFTMANJIContract = new web3.eth.Contract ( NFTMANJI.abi, '0x5239cE62Ceed3c5a69BACCa7a824A8e127D907aC')

  NFTMANJIContract.methods.getTokenURI(0).call(function (err, res) {
    if (err) {
      console.log("An error occured", err)
      return
    }
    console.log("Token URI is: ", res)
  })
  
  NFTMANJIContract.methods.ownerOf(0).call(function (err, res) {
    if (err) {
      console.log("An error occured", err)
      return
    }
    console.log("Token Owner: ", res)
  })
  
  //contract.methods.somFunc().send({from: ....})
  //.on('receipt', function(){
  //    ...
  //});


  // Functions
  const connect = async () => {
    if (window.ethereum) {
      //web3 = new Web3(window.ethereum);

      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {        
        walletAddress = accounts[0];
        console.log(accounts);
        account.innerText = walletAddress;
        player1Link.innerText = "Enable button Player1"; //  habilitar el botón para el player 1
        player2Link.innerText = "Enable button Player2"; //  habilitar el botón para el player 2
      }
      );


/*
      try {
        
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const accounts = await web3.eth.getAccounts();
        walletAddress = accounts[0];
        console.log(walletAddress);
        account.innerText = walletAddress;

        // Capturing data from the contract
        /* const nftOcaOwner = NFTMANJIContract[0];

        

        if ( walletAddress == nftOcaOwner ) {
          player1Link.innerText = "Enable button Player1"; //  habilitar el botón para el player 1
        }
        
        */

//        content.style.display = 'initial'; // Juancho revisá por que no lo desactiva al botón, debe ser otro estilo
//        connectButton.style.display = 'none'; // seguramente por eso salta al catch (err)
        
//      } catch (err) {
//        alert('Please accept the request');
//      }
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
            <button id="accountBox" className="btn">Mint!!</button><br/>
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