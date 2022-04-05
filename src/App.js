import React, { Component} from "react";
import logo from './pslLogo1.png';
import 'antd/dist/antd.css';
import './App.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Main from './components/main'
import Type from './components/type'
import GetUser from './components/getUser'
import Admin from './components/admin'
import kalyanp from "./components/PanelChart/kalyan"
import kalyanj from "./components/JodiChart/kalyan"
import timeBazarp from "./components/PanelChart/timeBazar"
import timeBazarj from "./components/JodiChart/timeBazar"
import kamalDayp from "./components/PanelChart/kamalDay"
import kamalDayj from "./components/JodiChart/kamalDay"
import kamalNightj from "./components/JodiChart/kamalNight"
import kamalNightp from "./components/PanelChart/kamalNight"
import rajdhaniDayj from "./components/JodiChart/rajdhaniDay"
import rajdhaniDayp from "./components/PanelChart/rajdhaniDay"
import rajdhaniNightj from "./components/JodiChart/rajdhaniNight"
import rajdhaniNightp from "./components/PanelChart/rajdhaniNight"
import mainBazarj from "./components/JodiChart/mainBazar"
import mainBazarp from "./components/PanelChart/mainBazar"
import milanDayp from "./components/PanelChart/milanDay"
import milanDayj from "./components/JodiChart/milanDay"
import milanNightj from "./components/JodiChart/milanNight"
import milanNightp from "./components/PanelChart/milanNight"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  render() {
  return (
    <div className="">
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
    <Route exact path={["/","/main"]} component={Main}/>
    <Route exact path={"/selection"} component={Type}/>
    <Route exact path={"/user"} component={GetUser}/> 
    <Route exact path={"/admin"} component={Admin}/> 
    <Route exact path={"/PanelChart/kalyan"} component={kalyanp}/>
    <Route exact path={"/JodiChart/kalyan"} component={kalyanj}/>
    <Route exact path={"/PanelChart/timeBazar"} component={timeBazarp}/>
    <Route exact path={"/JodiChart/timeBazar"} component={timeBazarj}/>
    <Route exact path={"/PanelChart/kamalDay"} component={kamalDayp}/>
    <Route exact path={"/JodiChart/kamalDay"} component={kamalDayj}/>
    <Route exact path={"/PanelChart/kamalNight"} component={kamalNightp}/>
    <Route exact path={"/JodiChart/kamalNight"} component={kamalNightj}/>
    <Route exact path={"/PanelChart/rajdhaniNight"} component={rajdhaniNightp}/>
    <Route exact path={"/JodiChart/rajdhaniNight"} component={rajdhaniNightj}/>
    <Route exact path={"/PanelChart/rajdhaniDay"} component={rajdhaniDayp}/>
    <Route exact path={"/JodiChart/rajdhaniDay"} component={rajdhaniDayj}/>
    <Route exact path={"/PanelChart/mainBazar"} component={mainBazarp}/>
    <Route exact path={"/JodiChart/mainBazar"} component={mainBazarj}/>
    <Route exact path={"/PanelChart/milanDay"} component={milanDayp}/>
    <Route exact path={"/JodiChart/milanDay"} component={milanDayj}/>
    <Route exact path={"/PanelChart/milanNight"} component={milanNightp}/>
    <Route exact path={"/JodiChart/milanNight"} component={milanNightj}/>    
    </div>
    </Router> 
    </div>
  );
  }
}

export default App;
