import React, {useState,useEffect} from 'react';
import './Free.css';
import {Link} from "react-router-dom";


const Free = () => {
    return (
        <div>
            <div className="w2p1">
                <img className="gamerW2_1" src="/images/player.png"/>
            </div>
            <div className = "pad">
              <Link to ="/twoGame">
                  <button>게임시작</button>
              </Link>
            </div>
            <div className ="w2p2">
                <img className="gamerW2_2" src="/images/player.png"/>
            </div>
        </div>
    );
};
export default Free;