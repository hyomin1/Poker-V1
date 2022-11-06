import React from 'react';
import mainLogo from './mainpage.png';
import Navigator from "../Navigator/Navigator";
import './Main.css';
const Main = () => {
    return (
        <div>
            <div className="Title slideExpandUp">
                Poker
            </div>
            <div className="mainPage">

                <Navigator/>
            </div>





        </div>
    );
};

export default Main;