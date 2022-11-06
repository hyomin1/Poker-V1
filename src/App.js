import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom";
import Join from "./component/join/Join";
import Main from "./component/Main/Main";
import Login from "./component/login/Login";
import SelectLogin from "./component/login/SelectLogin";
import Play from "./component/play/Play";
import CreateCard from "./card/CreateCard";
import Server from "./Server";


function App() {
  return (
      <Routes>
        <Route path ="/" exact = {true} element={<Main/>} />
        <Route path ="/login" exact = {true} element={<Login/>}/>
        <Route path ="/join" exact = {true} element={<Join/>}/>
        <Route path ="loginselect" exact={true} element={<SelectLogin/>}/>
        <Route path ="/play" exact={true} element={<Play/>}/>
        <Route path ="/server" exact={true} element={<Server/>}/>

      </Routes>
  );
}

export default App;
