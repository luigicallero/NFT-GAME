import React from 'react';
import './styles.css';

function Header(){
    return(
        <div>
        <div className='header'>
        <h1>NFT-MANJI</h1>
        <strong>Wallet Address:</strong><p id="walletAddressBox">0X0</p></div>
        </div>
    )
}
export default Header