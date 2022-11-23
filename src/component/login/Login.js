import React,{useState} from 'react';
import './Login.css';
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';
import {useCookies} from 'react-cookie';
import styled from 'styled-components';

const Login = () => {
    const [inputId,setInputId] = useState();
    const [inputPw,setInputPW] = useState();
    const [user,setUser] = useState();
    const [cookies,setCookie] = useCookies(['id']);
    const navigate = useNavigate();
    const handleInputId = (e) => {
        setInputId(e.target.value);
    }
    const handleInputPw = (e) => {
        setInputPW(e.target.value);
    }

    const clickLogin = () => {
        if(!(user&&user.data!==null)) {
            alert('로그인 완료!');
            navigate("/game");
        }
        else
            alert('로그인 실패!');
    }
    return (
        <div className="loginBody">
            <div className="loginBody2">
                <div className="loginForm">
                    <h1 className="header">로그인</h1>
                    <label className="loginLabel">ID</label>
                    <input className="loginInput"
                           type = "id"
                           placeholder="Enter username"
                           onChange={handleInputId}
                    />
                    <label className="loginLabel">
                        Password</label>
                    <input className="loginInput"
                           type = "password"
                           placeholder="Enter password"
                           onChange={handleInputPw}
                    />
                    <p className="goJoin" onClick={() => {
                        navigate('/join');
                    }}>회원이 아니신가요?</p>
                    <button className = "loginBtn" onClick={ async () => {
                        await axios.put('http://localhost:8080/api/player/login',{
                            data:{
                                "username":inputId,
                                "password":inputPw
                            }
                        },).then((res) => {
                            console.log('로그인 정보 전송');
                            setUser(res.data);
                            setCookie('id',res.Authorization);
                        });
                        clickLogin();
                    }}>로그인</button>
                </div>



            </div>

        </div>
    );
};

export default Login;