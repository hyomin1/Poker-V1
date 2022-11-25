import {Route,Routes} from "react-router-dom";
import Join from "./component/join/Join";
import Main from "./component/Main/Main";
import Login from "./component/login/Login";
import Game from "./component/play/Game";
import Hello from "./component/Hello/Hello";
import Free from './component/play/twoPlayer/Free.js';
import StartTwo from "./component/play/twoPlayer/StartTwo";
import StartSix from "./component/play/sixPlayer/StartSix";
import Wait from './component/play/Wait';
import {CookiesProvider} from 'react-cookie';

function App() {
  return (
    <CookiesProvider>
            <Routes>
                  <Route path ="/" exact={true} element={<Hello/>}/>
                  <Route path ="/main" exact = {true} element={<Main/>} />
                  <Route path ="/login" exact = {true} element={<Login/>}/>
                  <Route path ="/join" exact = {true} element={<Join/>}/>
                   <Route path ="/game" exact={true} element={<Game/>}/>
                  <Route path = "/free" exact = {true} element ={<StartTwo/>}/>
                <Route path = "/six" exact ={true} element = {<StartSix/>}/>
                <Route path = "/wait" exact={true} element = {<Wait/>}/>
            </Routes>
    </CookiesProvider>

  );
}

export default App;
