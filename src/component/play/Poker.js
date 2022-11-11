import React, {useState} from 'react';
import {Button,ButtonToolbar} from 'react-bootstrap';
import { useLocation} from 'react-router';
import Buyin from './Buyin';
import axios from 'axios';
import Card from '../card/Card';
import './Poker.css';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Poker = () => {
    const location = useLocation(); //넘어온 user의 수 받기 위함
    const money = 30;
    const sendmonydata = 40; //가정한 값
    const navigate = useNavigate();   //프리플랍 페이지이동
    const [stack,setStack] = useState();
    const deleteButton = () => {
        document.getElementById("btn").style.display="none";
    }
    const callCard = () => {
            <Link to ="/free"/>
    }
    const [card,setCard] = useState();
    return (
        <div>
            <div className="table">
                <div className="buyin" id="btn">
                  <button onClick={()=> {
                      deleteButton()
                      if (sendmonydata<30) {
                          alert('불가')
                      }
                      else {
                          alert('완료')
                          axios.put('https://jsonplaceholder.typicode.com/todos/1',{
                              stack:stack,
                              //stack 전송
                          })
                          axios.get('https://jsonplaceholder.typicode.com/todos/1').then((reponse) => {
                              setCard(reponse.data);
                              console.log('카드요청')   //프리 플랍
                          })
                          navigate("/free");
                      }
                  }}>바이인</button>
                </div>
            </div>

        </div>
    );
};
export default Poker;