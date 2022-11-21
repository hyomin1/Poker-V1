import React from 'react';
import './SixTable.css';

const SixTable = (props) => {
    const {images,setImage,cardImg,show,setShow,visible,setVisible,
    playerCard1,playerCard2,playerCard3,playerCard4,playerCard5,playerCard6,
    betBtn1} = props;

    return (
        <div className="board">
            <div className="w2p1">
                <div className="g1">
                    <img className="gamerW2_1" src="/images/player1.png"/>
                    {show&&playerCard1()}
                </div>
                <div className="g2">
                    <img className="gamerW2_1" src="/images/player2.png"/>
                    {show&&playerCard2()}
                </div>
                <div className="g3">
                    <img className="gamerW2_1" src="/images/player3.png"/>
                    {show&&playerCard3()}
                </div>
            </div>
            {visible&&<button className="fixedBtn" onClick={ () => {
                setShow(true); //버튼 누를시 카드 5장 보이게
                setVisible(false); //버튼 클릭시 게임시작 버튼 사라지게함
            }}>게임시작</button>}
            {show&&cardImg()}
            <div className ="w2p2">
                <div className ="g4">
                    <img className="gamerW2_2" src="/images/player4.png"/>
                    {show&&playerCard4()}
                </div>
                <div className="g5">
                    <img className="gamerW2_2" src="/images/player5.png"/>
                    {show&&playerCard5()}
                    {show&&betBtn1()}
                </div>
                <div className="g6">
                    <img className="gamerW2_2" src="/images/player6.png"/>
                    {show&&playerCard6()}
                    {alert('확인')}

                </div>
            </div>
        </div>
    );
};

export default SixTable;