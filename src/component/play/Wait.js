import React from 'react';
import './Wait.css';
import {useNavigate} from 'react-router';
const Wait = () => {
    const total_player = 2;
    const navigate = useNavigate();
    return (

        <div>
            {total_player===1&&<div>
                <img className= "p1" src="/images/player1.png"/>
            </div>}
            {total_player===2&&<div>
                <img className= "p1" src="/images/player1.png"/>
                <img className="p2" src="/images/player2.png"/>
            </div>}
            {total_player===3&&<div>
                <img className= "p1" src="/images/player1.png"/>
                <img className="p2" src="/images/player2.png"/>
                <img className="p3" src="/images/player3.png"/>
            </div>}
            {total_player===4&&<div>
                <img className= "p1" src="/images/player1.png"/>
                <img className="p2" src="/images/player2.png"/>
                <img className="p3" src="/images/player3.png"/>
                <img className="p4" src="/images/player3.png"/>
            </div>}
            {total_player===5&&<div>
                <img className= "p1" src="/images/player1.png"/>
                <img className="p2" src="/images/player2.png"/>
                <img className="p3" src="/images/player3.png"/>
                <img className="p4" src="/images/player3.png"/>
                <img className="p5" src="/images/player3.png"/>
            </div>}
            {total_player===6&&<div>
                <img className= "p1" src="/images/player1.png"/>
                <img className="p2" src="/images/player2.png"/>
                <img className="p3" src="/images/player3.png"/>
                <img className="p4" src="/images/player3.png"/>
                <img className="p5" src="/images/player3.png"/>
                <img className="p6" src="/images/player3.png"/>
            </div>}
            {total_player>=2&&total_player<=6&&<button onClick={ () => {
                total_player===2&&navigate('/free');
                //total_player===3&&navigate('/free');
                //total_player===4&&navigate('/free');
                //total_player===5&&navigate('/free');
                //total_player===6&&navigate('/free');
            }
            }>게임시작</button>}
        </div>
    );
};

export default Wait;