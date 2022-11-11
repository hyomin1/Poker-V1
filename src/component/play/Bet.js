import React from 'react';

const Bet = () => {
    return (
        <div>
            <button onClick={()=>
            {
                alert('폴드!')
            }}>폴드</button>
            <button onClick={()=> {
                alert('체크!')
            }}>체크</button>
            <button onClick={()=> {
                alert('레이즈!')
            }}>레이즈</button>
        </div>
    );
};

export default Bet;