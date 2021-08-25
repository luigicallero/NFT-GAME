import React from 'react';
import Goose from './goose';
import {Link} from "react-router-dom";
import './player1.css'


function Player1(){
    return(
        <div className='boardplayer'>
            <div className='fancy-btn position-g'>
                <Link to="/gallery" className='btn-link'>Gallery</Link>
            </div>
            <div className='instructions'><h4>
                Complete the instructions before the player finish the race
                </h4></div>
            <Goose />
        </div>
    )
}
export default Player1