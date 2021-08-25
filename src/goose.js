import React from 'react';
import './player1.css'
import goose from './img/goose.gif';


const Goose = () => {
    return(        
        <div>
            <img className='imgplayer1' src={goose} alt='goose'/>
        </div>        
    )
}
export default Goose