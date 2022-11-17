import React, {useState,useEffect} from 'react';
import './Free.css';
import {Link} from "react-router-dom";
import axios from 'axios';
import {useNavigate} from 'react-router';
import StartTwo from './StartTwo';
import styled from "styled-components";
const Free = (props) => {
    const {show,setShow,visible,setVisible,cardImg,playerCard1,playerCard2,data,setData
    ,reverseCard1,reverseCard2,bett} = props;
    const betBtn1 = () => {
        return (
            <div className="bet2">
                <button id="f" className="fold" onClick={()=> {
                    alert('폴드');
                    document.getElementById("f").style.display='none';
                    document.getElementById("c").style.display='none';
                    document.getElementById("r").style.display='none';
                    //data.data.player[data.data.betPos] =2;
                    data.id=2;
                    console.log(data.id);
                }}>폴드</button>
                <button id = "c" className="check" onClick={() => {
                    document.getElementById("f").style.display='none';
                    document.getElementById("c").style.display='none';
                    document.getElementById("r").style.display='none';
                }}>체크</button>
                <button id = "r" className="raise" onClick={() => {
                    document.getElementById("f").style.display='none';
                    document.getElementById("c").style.display='none';
                    document.getElementById("r").style.display='none';
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
                    //data.data.player[data.data.betPos] =2;
                    data.id=2;
                    console.log(data.id);
                }}>폴드</button>
                <button id = "c" className="check" onClick={() => {
                    document.getElementById("f").style.display='none';
                    document.getElementById("c").style.display='none';
                    document.getElementById("r").style.display='none';
                }}>체크</button>
                <button id = "r" className="raise" onClick={() => {
                    document.getElementById("f").style.display='none';
                    document.getElementById("c").style.display='none';
                    document.getElementById("r").style.display='none';
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
                    //card.data.player[card.data.betPos] =2;
                    data.id=2; //예시로 변경
                    console.log(data.id); //변경된 예시 확인
                }}>폴드</button>
                <button id="all" className ="allIn" onClick={() => {
                    alert('올인');
                    document.getElementById("f").style.display='none';
                    document.getElementById("all").style.display='none';
                }}>
                    올인</button>
            </div>
            )
    }
    let seq;
    return (
        <div className="board">
            <div className="w2p1">
                <img className="gamerW2_1" src="/images/player.png"/>
                {show&&playerCard1()}
            </div>
            {visible&&<button className="fixedBtn" onClick={() => {
                setVisible(false);
                setShow(true);
                console.log('카드데이터요청!');
                console.log(data.id);
                //값을 받아옴 data.id
                seq=0;
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
                {show&&betBtn1()}
            </div>
        </div>
    );
};

export default Free;