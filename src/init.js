import React from 'react';
import './styles.css';
import {Link} from "react-router-dom";



function Init(){
    return(
        <div className='players'>  
                      
                <div className="play-div1">            
                    <Link to="/player1" className='btn-link'>
                        <h4 className='play1'>Player 1</h4>
                    </Link> 
                </div>
                <div className="play-div2">
                    <Link to="/player2" className='btn-link'>
                        <h4 className='play2'>Player 2</h4>
                    </Link>   
                </div>            
        </div>
    )
}
export default Init