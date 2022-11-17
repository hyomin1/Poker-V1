import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import './Main.css';
import axios from 'axios';

const Main = () => {
    const id = 1;
    const [data, setData] = useState();
  //서버에 데이터 요청
    const Data = () => {
     }
        return (
            <body>
            <div className="background">
                <video className="mainVideo" src="/videos/card.mp4" muted autoPlay loop/>
                <div className="mainPage">
                    <Link to="/free">
                        <p onClick={() => {
                            axios.put(`http://localhost:8080/game/joinGame/1`).then((response) => {
                                console.log('테이블요청!');
                                setData(response.data);
                            });
                        }}>게임시작</p>
                    </Link>
                    <Link to="/join">
                        <p>회원가입</p>
                    </Link>
                    <Link to="/login">
                        <p>로그인</p>
                    </Link>
                </div>
            </div>
            </body>

        );

};

export default Main;