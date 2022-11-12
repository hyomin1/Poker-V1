import React , {useState} from 'react';
import Waiting from './Waiting';
import { useNavigate } from "react-router-dom";

const Bet = () => {
    const [bet,setBet] = useState();
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>
            {
                alert('폴드!');
                setBet(1);
                navigate("/wait");
            }}>폴드</button>
            <button onClick={()=> {
                alert('체크!');
               setBet(2);
                navigate("/wait");
            }}>체크</button>
            <button onClick={()=> {
                alert('레이즈!');
                setBet(3);
                navigate("/wait");
            }}>레이즈</button>
        </div>
    );
};

export default Bet;