import React from 'react';
import './styles.css';
import {Link} from "react-router-dom";



function Init(){
    return(
        <div className='players'>  
                      
                            
                    <Link to="/Player1" className='btn-link' id="player1Link">
                    <div className="play-div1">
                        <h4 className='play1'></h4>
                    </div>
                    </Link>
                    <Link to="/Player2" className='btn-link' id="player2Link">
                    <div className="play-div2">
                        <h4 className='play2'></h4>
                    </div>    
                    </Link>   
                        
        </div>
    )
}
export default Init