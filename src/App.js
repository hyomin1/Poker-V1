import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom";
import Join from "./component/join/Join";
import Main from "./component/Main/Main";
import Login from "./component/login/Login";
import SelectLogin from "./component/login/SelectLogin";
import Game from "./component/play/Game";
import CreateCard from "./card/CreateCard";
import Server from "./Server";
import Hello from "./component/Hello/Hello";
import Poker from "./component/play/Poker";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Routes>
        <Route path ="/" exact={true} element={<Hello/>}/>
        <Route path ="/main" exact = {true} element={<Main/>} />
        <Route path ="/login" exact = {true} element={<Login/>}/>
        <Route path ="/join" exact = {true} element={<Join/>}/>
        <Route path ="loginselect" exact={true} element={<SelectLogin/>}/>
        <Route path ="/game" exact={true} element={<Game/>}/>
        <Route path ="/server" exact={true} element={<Server/>}/>
        <Route path ="/poker" exact={true} element={<Poker/>}/>

      </Routes>
  );
}

export default App;
