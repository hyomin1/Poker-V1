import React,{useState} from 'react';
import './Login.css';
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';
import {useCookies} from 'react-cookie';
import Cookies from 'universal-cookie';
const Login = () => {
    const [inputId,setInputId] = useState();
    const [inputPw,setInputPW] = useState();
    //const [cookies,setCookie,removeCookie] = useCookies(['ck']);
    const [user,setUser] = useState();
    const navigate = useNavigate();
    const cookies = new Cookies();

    const handleInputId = (e) => {
        setInputId(e.target.value);
        cookies.set('cookie',inputId, {
            path:'/',
            expires: Math.floor(Date.now()/1000)+(60*60)
        });
    }

    const handleInputPw = (e) => {
        setInputPW(e.target.value);

    }
    const clickLogin3 = () => {

        }
    return (
        <div>
            <div className="login">
                로그인
            </div>
            <label>ID</label>
            <input
                type = "id"
                placeholder="Enter username"
                onChange={handleInputId}
            />
            <label>Password</label>
            <input
                type = "password"
                placeholder="Enter password"
                onChange={handleInputPw}
            />
            <button onClick={ async () => {
                await axios.put('http://localhost:8080/api/player/login',{
                    data:{
                    "username":inputId,
                    "password":inputPw
                        }
                },).then((res) => {
                        console.log('로그인 정보 전송');
                        setUser(res.data);
                    });
                clickLogin3() ? alert('로그인 완료!') : alert('로그인 실패!');
            }}>로그인</button>

        </div>
    );
};

export default Login;