import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";
import Goose from './goose';
import './player2.css'


function Player1(){
    return(
        <div className='boardplayer'>
            <Goose />
        </div>
    )
}
export default Player1