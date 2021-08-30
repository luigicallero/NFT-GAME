import React from 'react';
import {Link} from "react-router-dom";
import './player2.css'
import Pug from './pug';


function Player2(){
    return(        
        <div className='boardplayer'>
             <div className='fancy-btn position-g'>
                <Link to="/gallery" className='btn-link'>Gallery</Link>
            </div> 
            <div className='instructions'><h4>
                Complete the instructions before the player finish the race
                </h4>           
                </div>
                <div className='player-wallet'><h4>
                Connect your wallet!
                </h4></div>
                <Link to='/' className='btn-back' >Back</Link>
        <Pug />
        </div>        
    )
}
export default Player2