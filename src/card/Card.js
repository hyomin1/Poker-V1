import React, {useState,useEffect} from 'react';
import './Card.css';
import axios from 'axios';
import './Animation.css';
const Card = (props) => {

    const [data,setData] = useState();
    const Inform = () => {
        //useEffect로 지정시 실행시 자동 요청  , 버튼으로 하고싶으면 버튼 내에서 onClick으로 호출?
        //서버에서 들어오는 값(랜덤값) data.card1 data.card2
        useEffect(()=> {
            axios.get('https://jsonplaceholder.typicode.com/todos/1')  //주소는 설정해줘야함
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    alert("실패");
                })
        },[]);
    }
    const handleclickRandom1 = (e) =>{
        document.getElementById("img1").src = images[data.player.card1].src; //배열 인덱스 변경
    }
    const handleclickRandom2 = (e) => {
        document.getElementById("img1").src = images[data.player.card2].src; //배열 인덱스 변경
    }
    const {images,setImages} = props;
    //카드 번호 입력후 요청 관련 함수들
    const [cardNumber,setcardNumber] = useState({   //입력한 2개의 카드 숫자가 저장될 공간
        card1:"",
        card2:"",
    });

    const handleClick1 = (e) => {   //내가 입력한 카드숫자 뒤집는것
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
    //입력한 2개의 데이터 서버에 요청(등록)

        return (
            <div>
                <div className="container">
                    <div className="card pullDown">
                        <img id ="img1" src ="/images/backimage.png" onClick={ //이미지로 클릭시 뒤집기
                            handleClick1
                        }/>
                        <img id ="img2" src ="/images/backimage.png" onClick={ //이미지로 클릭시 뒤집기
                            handleClick2
                        }/>
                    </div>
                    <div className="reverse" >
                        <button onClick={()=> {  //하나의 버튼에 2개의 이벤트
                            handleclickRandom1()
                            handleclickRandom2()
                        }}>랜덤 값 요청</button>
                    </div>
                    <div className="inform">
                        <input
                            type="number"
                            placeholder="카드 값 입력1"
                            onChange={onChangeAccount}
                            value={cardNumber.card1}
                            name="card1"
                        />
                        <input
                            type="number"
                            placeholder="카드 값 입력2"
                            onChange={onChangeAccount}
                            value={cardNumber.card2}
                            name="card2"
                        />
                        <button onClick={()=> {  // 서버 요청 예시
                            console.log(cardNumber.card1)
                            console.log(cardNumber.card2)
                            console.log(data.id)
                        }}>요청</button>
                    </div>
                </div>
            </div>
        );



};
export default Card;