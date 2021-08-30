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
let Contract = require('web3-eth-contract');
const PRIVATE_KEY = process.env.PRIVATE_KEY;

window.onload = () => {
  // Variables
  //let web3;
  let walletAddress;
  let tokenOwner0;
  let tokenOwner1;
  let tokenImage0;
  let tokenImage1;
  let readObj;

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

  // Capture Contract Information from NFT contract NFTMANJI: 0x5239cE62Ceed3c5a69BACCa7a824A8e127D907aC
  const web3 = new Web3('https://rinkeby.infura.io/v3/30a836a6de45424f8e6a6d514aeea2f3')
  const NFTMANJIContract = new web3.eth.Contract ( NFTMANJI.abi, '0x5239cE62Ceed3c5a69BACCa7a824A8e127D907aC')

  // Getting NFT images from NFT contract
  NFTMANJIContract.methods.getTokenURI(0).call(function (err, res) {
    if (err) {
      console.log("An error occured", err)
      return
    }
    tokenImage0 = res
    console.log(tokenImage0)
  })
  
  async function getImages() {
    const response = await fetch(tokenImage0);
    if(!response.ok)
      throw new Error(response.statusText);
    const json = await response.json();
    console.log(json.image)
  }
  getImages()

  // Getting NFT owners
  NFTMANJIContract.methods.ownerOf(0).call(function (err, res) {
    if (err) {
      console.log("An error occured", err)
      return
    }
    tokenOwner0 = res
  })

  NFTMANJIContract.methods.ownerOf(1).call(function (err, res) {
    if (err) {
      console.log("An error occured", err)
      return
    }
    tokenOwner1 = res
  })

  //contract.methods.somFunc().send({from: ....})
  //.on('receipt', function(){
  //    ...
  //});


  // Functions
  const connect = async () => {
    if (window.ethereum) {

      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {        
        walletAddress = web3.utils.toChecksumAddress(accounts[0]); // to bring the wallet address back to checksum format (mixed-case)
        account.innerText = walletAddress;
        if ( tokenOwner0 == walletAddress ) {
          player1Link.innerText = "Enabled button Player1"; //  habilitar el botón para el player 1    
        }
        if ( tokenOwner1 == walletAddress ) {
          player2Link.innerText = "Enabled button Player2"; //  habilitar el botón para el player 2    
        }


        // Sending NFT
        // another way:
        /* async function sendNFT() {
          const nonce = await web3.eth.getTransactionCount(walletAddress, 'latest'); //get latest nonce
        
          //the transaction
          const tx = {
            'from': walletAddress,
            'to': '0xB02D2Abd985a5fa31B45D87a9297Bd22f8BaD931',
            'nonce': nonce,
            'gas': 500000,
            'maxPriorityFeePerGas': 1999999987,
            'data': NFTMANJIContract.methods.safeTransferFrom(walletAddress, '0xB02D2Abd985a5fa31B45D87a9297Bd22f8BaD931', 0).encodeABI()
          };
        
          const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
          signPromise.then((signedTx) => {

            web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
              if (!err) {
                console.log("The hash of your transaction is: ", hash, "\nCheck Alchemy's Mempool to view the status of your transaction!"); 
              } else {
                console.log("Something went wrong when submitting your transaction:", err)
              }
            });
          }).catch((err) => {
            console.log(" Promise failed:", err);
          });
        }
        sendNFT()

        // this one is not failing but not transfering
        NFTMANJIContract.methods.safeTransferFrom( walletAddress, '0xB02D2Abd985a5fa31B45D87a9297Bd22f8BaD931', 0 ).call().then(function(receipt){
          console.log(receipt)
        });
        */

      }
      );

    } else {
      alert('Web3 is required. You should consider trying MetaMask!');
    }
  };


/*  
  myContract.methods.myMethod(123).send({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'})
.then(function(receipt){
    // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
});
*/
  


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