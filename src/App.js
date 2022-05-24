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
import Login from './components/login'
import ScrollToTopRoute from './ScrollToTop';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Helmet} from "react-helmet";

class App extends Component {
  render() {
  return (
    <>
    <Helmet>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
     <title>SATTA BAZAR | SATTA MATKA | KALYAN MATKA | MATKA RESULT | MATKA | SATTA</title>
     <meta name="Description" content="SATTABJAR - SATTA MATKA | KALYAN | KALYAN MATKA NUMBER | MATKA RESULT | WWW.MATKA.COM | SATTAMATKA.COM |KALYAN MAIN MATKA TIPS | TODAY MATKA LUCKY NUMBER | SATTA NUMBER | SATTAMATKA CHART | KALYAN FAST RESULT | ONLINE MATKA SATTA RESULTS | INDIAN MATKA | SATTA KALYAN | MADHUR MATKA" />
     <meta name="Keywords" content="Satta bazar, Sattabjar, Satta matka, kalyan, matka result, kalyan matka, kalyan, matka.com, sattamatka.com, matka tips, today satta number, matka chart, indian matka, satta chart, madhur matka, aaj ka satta" />
     <link rel="canonical" href="https://sattabjar.com" />
     <meta http-equiv="refresh" content="900" />
     <meta name="google" content="notranslate" />
     <meta http-equiv="pragma" content="no-cache"/>
     <meta name="google-site-verification" content="rp6W1xafL6sqKiIvmj0ndeLLFF7OfXPslrWxXCfFycU" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
     <meta content="yes" name="apple-mobile-web-app-capable"/>
     <meta content="yes" name="apple-touch-fullscreen"/>
     <meta name="Robots" content="index, follow"/>
     <meta name="author" content="sattabajr"/>
     <meta name="copyright" content="sattabjar net satta matka" />
     <meta property="og:type" content="website"/>
     <meta property="og:title" content="Satta Matka"/>
     <meta property="og:description" content="SattaMatka"/>
     <meta property="og:url" content="https://sattabjar.com/"/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Helmet>
    <div className="App">
       <header className="App-header ">
      <div className='card  headSection'>
        <span style={{fontWeight:'14px'}}>
          Sattabjar.com
         </span>
      </div>


       <div className='card  white-text  welcomeSection'>
        <marquee  direction="left" style={{fontWeight:'10px'}}>
        !! Welcome Friends in the world of Sattabjar.com in INDIA. May you always Win. !!
         </marquee> 
      </div>
      
   <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div className="header" ref={(node) => this.setWrapperRef = node}> 
    <Switch>
    <ScrollToTopRoute exact path={["/","/main"]} component={Main}/>
    <ScrollToTopRoute exact path={["/login"]} component={Login}/>
    <ScrollToTopRoute exact path={"/selection"} component={Type}/>
    <ScrollToTopRoute exact path={"/user"} component={GetUser}/> 
    <ScrollToTopRoute exact path={"/admin"} component={Admin}/> 
    <ScrollToTopRoute exact path={"/PanelChart/kalyan"} component={kalyanp}/>
    <ScrollToTopRoute exact path={"/JodiChart/kalyan"} component={kalyanj}/>
    <ScrollToTopRoute exact path={"/PanelChart/timeBazar"} component={timeBazarp}/>
    <ScrollToTopRoute exact path={"/JodiChart/timeBazar"} component={timeBazarj}/>
    <ScrollToTopRoute exact path={"/PanelChart/kamalDay"} component={kamalDayp}/>
    <ScrollToTopRoute exact path={"/JodiChart/kamalDay"} component={kamalDayj}/>
    <ScrollToTopRoute exact path={"/PanelChart/kamalNight"} component={kamalNightp}/>
    <ScrollToTopRoute exact path={"/JodiChart/kamalNight"} component={kamalNightj}/>
    <ScrollToTopRoute exact path={"/PanelChart/rajdhaniNight"} component={rajdhaniNightp}/>
    <ScrollToTopRoute exact path={"/JodiChart/rajdhaniNight"} component={rajdhaniNightj}/>
    <ScrollToTopRoute exact path={"/PanelChart/rajdhaniDay"} component={rajdhaniDayp}/>
    <ScrollToTopRoute exact path={"/JodiChart/rajdhaniDay"} component={rajdhaniDayj}/>
    <ScrollToTopRoute exact path={"/PanelChart/mainBazar"} component={mainBazarp}/>
    <ScrollToTopRoute exact path={"/JodiChart/mainBazar"} component={mainBazarj}/>
    <ScrollToTopRoute exact path={"/PanelChart/milanDay"} component={milanDayp}/>
    <ScrollToTopRoute exact path={"/JodiChart/milanDay"} component={milanDayj}/>
    <ScrollToTopRoute exact path={"/PanelChart/milanNight"} component={milanNightp}/>
    <ScrollToTopRoute exact path={"/JodiChart/milanNight"} component={milanNightj}/>    
    </Switch>  
    </div>
    </Router> 
     </header> 
    </div>
    </>
  );
  }
}

export default App;
