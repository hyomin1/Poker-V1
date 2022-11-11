import React, {useState,useEffect} from 'react';
import './Card.css';
import axios from 'axios';
import './Animation.css';
import Bet from '../play/Bet';
const Card = (props) => {
    const [data,setData] = useState();
    const receiveData = ()=>{   //서버에 데이터 요청
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then((reponse) => {
            setData(reponse.data);
        });
    }
    //입력한 2개의 데이터 서버에 요청(등록)
    const sendData = () => {   //아직 미지수
        axios.post('https://jsonplaceholder.typicode.com/todos/1', {
            cardNumber
        }).then(response => {
            console.log(response)
        })
    }
    const handleclickRandom1 = (e) =>{   
        document.getElementById("img1").src = images[data.id].src; //배열 인덱스 변경해야함-> data.card1
    }
    const handleclickRandom2 = (e) => {
        document.getElementById("img2").src = images[data.id].src; //배열 인덱스 변경해야함 -> data.card2
    }
    const {images,setImages} = props;
    //카드 번호 입력후 요청 관련 함수들
    const [cardNumber,setcardNumber] = useState({   //입력한 2개의 카드 숫자가 저장될 공간
        card1:"",
        card2:"",
    });

    const handleClick1 = (e) => {   //내가 입력한 카드숫자 뒤집는것 ,잠깐 랜덤확인을 위해 변수 변경
        document.getElementById("img1").src = images[cardNumber.card1].src;
    }
    const handleClick2 = (e) => {  //내가 입력한 카드숫자 뒤집는것
        document.getElementById("img2").src = images[cardNumber.card2].src;
    }
    const onChangeAccount = (e) => {     //2개의 입력한 카드 숫자를 받아오는 함수
        setcardNumber({
            ...cardNumber,[e.target.name] : e.target.value,
        })
    }


        return (
            <div>
                <div className="container">
                    <div className="card pullDown">
                        <img id ="img1" src ="/images/backimage.png"/>
                        <img id ="img2" src ="/images/backimage.png"/>
                        {receiveData()}
                    </div>
                    <div className="reverse" >
                        <button
                            onClick={()=> {
                                handleclickRandom1()
                                handleclickRandom2()

                        }}>카드 뒤집기</button>
                        <div className="bet">
                            <Bet/>
                        </div>
                    </div>
                    

                </div>
            </div>
        );
};
export default Card;