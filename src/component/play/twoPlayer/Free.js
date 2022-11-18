import React, {useState,useEffect,useRef} from 'react';
import './Free.css';
import {Link} from "react-router-dom";
import axios from 'axios';
import {useNavigate} from 'react-router';
import StartTwo from './StartTwo';
import Betting from './Betting';

const Free = (props) => {
    const {show,setShow,visible,setVisible,cardImg,playerCard1,playerCard2,data,setData
        ,reverseCard1,reverseCard2,bett,priority,bet,setBet,betDiff,setDiff} = props;
    const [data1,setData1] = useState();
    const [data2,setData2] = useState();
    const [data3,setData3] = useState();
    const [raise,setRaise] = useState();
    const [raiseShow,setRaiseShow] =useState(false);
    const [callCost,setCallCost] = useState();
    const onChangeRaise = (e) => {
        setRaise(e.target.value);
    };

    const raiseBet = () => {
        return (
            <input type="range" name="number" min="10000" max="300000" step="1000"
            onChange={onChangeRaise}/>
        )
    }
    const clickRaise = () => {
        return (
           <button onClick={() => {
               let call_cost = data.data.bet - data.data.player[0].cal;
               console.log(call_cost);
               data.data.player[data.data.betPos].cal += call_cost;
               data.data.player[data.data.betPos].stack -= call_cost;
               data.data.bet=raise;
               setData(data.data); //data.data저장
               axios.put('http://localhost:8080/api/board/raiseBetting',{
                   data:data.data //data.data로
               }).then((response) => {
                   console.log('레이즈데이터 전송!');
                   setData(response.data);
               });
           }}>{raise}</button>
        )
    }
    const betBtn1 = () => {
        return (
            <div className="bet1">
                <button id="f" className="fold" onClick={()=> {
                    alert('폴드');
                    document.getElementById("f").style.display='none';
                    document.getElementById("c").style.display='none';
                    document.getElementById("r").style.display='none';
                    setBet(true);
                    setDiff(true);
                    axios.put('http://localhost:8080/api/board/foldBetting',{
                        data:data.data //data.data로
                    }).then((response) => {
                        console.log('폴드데이터 전송!');
                        setData(response.data);
                    });
                }}>폴드</button>
                <button id = "c" className="check" onClick={() => {
                    document.getElementById("f").style.display='none';
                    document.getElementById("c").style.display='none';
                    document.getElementById("r").style.display='none';
                    setBet(true);
                    setDiff(true);
                    axios.put('http://localhost:8080/api/board/callBetting',{
                        data:data.data //data.data로
                    }).then((response) => {
                        console.log('체크데이터 전송!');
                        setData(response.data);
                    });
                }}>체크</button>
                <button id = "r" className="raise" onClick={() => {
                    document.getElementById("f").style.display='none';
                    document.getElementById("c").style.display='none';
                    document.getElementById("r").style.display='none';
                    setBet(true);
                    setDiff(true);
                    setRaiseShow(true);
                }}>레이즈</button>
            </div>
        )
    }
    const betBtn2 = () => {
        return (
            <div className="bet2">
                <button id="f" className="fold" onClick={()=> {
                    alert('폴드');
                    document.getElementById("f").style.display='none';
                    document.getElementById("c").style.display='none';
                    document.getElementById("r").style.display='none';
                    setBet(true);
                    setDiff(true);
                }}>폴드</button>
                <button id = "c" className="check" onClick={() => {
                    document.getElementById("f").style.display='none';
                    document.getElementById("c").style.display='none';
                    document.getElementById("r").style.display='none';
                    setBet(true);
                    setDiff(true);
                }}>체크</button>
                <button id = "r" className="raise" onClick={() => {
                    document.getElementById("f").style.display='none';
                    document.getElementById("c").style.display='none';
                    document.getElementById("r").style.display='none';
                    setBet(true);
                    setDiff(true);
                }}>레이즈</button>
            </div>
        )
    }
    const betBtn3 = () => {
        return (
            <div className="bet3">
                <button id="f" className="fold" onClick={()=> {
                    alert('폴드');
                    document.getElementById("f").style.display='none';
                    document.getElementById("c").style.display='none';
                    document.getElementById("r").style.display='none';
                    setBet(true);
                    setDiff(true);
                }}>폴드</button>
                <button id="all" className ="allIn" onClick={() => {
                    alert('올인');
                    document.getElementById("f").style.display='none';
                    document.getElementById("all").style.display='none';
                    setBet(true);
                    setDiff(true);
                }}>
                    올인</button>
            </div>
        )
    }
    return (
        <div className="board">
            <div className="w2p1">
                <div>
                    <img className="gamerW2_1" src="/images/player.png"/>
                    {show&&playerCard1()}
                </div>
                {show&&data&&data.data.bet!=0&&(data.data.player[data.data.betPos].stack >
                    data.data.bet-data.data.player[data.data.betPos].stack)&&betBtn2()}
                {show&&data&&((data.data.bet-data.data.player[data.data.betPos].cal)>=
                    (data.data.player[data.data.betPos].stack))&&betBtn3()}
            </div>
            {visible&&<button className="fixedBtn" onClick={() => {
                setVisible(false);
                setShow(true);
                console.log('카드데이터요청!');
                console.log(data.id);
                reverseCard1();
                reverseCard2();
                //게임 시작 누르고 카드 뒤집은 후 배팅화면 보여줌
            }}>게임시작</button>}
            {show && cardImg()}
            <div className ="w2p2">
                <div>
                    <img className="gamerW2_2" src="/images/player.png"/>
                    {show&&playerCard2()}
                </div>
                {show&&data&&data.data.bet==0&&betBtn1()}
                {betDiff&&data&&data.data.bet!=0&&(data.data.player[data.data.betPos].stack >
                    data.data.bet-data.data.player[data.data.betPos].stack)&&betBtn2()}
                {betDiff&&data&&((data.data.bet-data.data.player[data.data.betPos].cal)>=
                    (data.data.player[data.data.betPos].stack))&&betBtn3()}
                {raiseShow&&raiseBet()}
                {raiseShow&&clickRaise()}
            </div>
        </div>
    );
};

export default Free;