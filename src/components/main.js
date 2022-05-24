import logo from '../pslLogo1.png';
import 'mdbreact/dist/css/mdb.css';
import Question from './PanelChart/timeBazar';
import { MDBBtn } from "mdbreact";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import audio from '../assests/onclick.mp3';
import { Tabs, Row, Col  } from 'antd'; 
import './table.css';
import LuckyNumber from './admin/luckyNumberMain';
import LiveResult from './admin/liveResultMain';
import DisplayChart from './admin/chartsDisplay';
import {Helmet} from "react-helmet";

const { TabPane } = Tabs;

const Main = () => {

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
     

      <div className='card liveResultSection'>
        <div className='welcomeSection white-text card'>
          <span style={{fontSize:'25px'}}>
          TODAY'S LUCKY NUMBER
          </span>
         </div>
         <div className='topMar1'>
          <LuckyNumber />
         </div>
      </div>


      <div className='card liveResultSection'>
         <div className='card welcomeSection white-text'>
          <span style={{fontSize:'25px'}}>
          LIVE RESULT
          </span>
         </div>
         <div className='topMar1'>
        <LiveResult/>
         </div>
      </div>
      <br/>

      {/* WORLD ME SABSE FAST SATTA MATKA RESULT */}
      <div className='card liveResultSection'>
         <div className='card welcomeSection white-text'>
          <span style={{fontSize:'25px'}}>
          WORLD ME SABSE FAST SATTA MATKA RESULT
          </span>
         </div>
         <div className='topMar1 '>
         <DisplayChart/>
         
         </div>
      </div> 

        {/* SATTA MATKA JODI CHART */}
        <div className='card liveResultSection'>
         <div className='card welcomeSection white-text'>
          <span style={{fontSize:'25px'}}>
          SATTA MATKA JODI CHART
          </span>
         </div>
         <div className='topMar1 '> 
        <Row>  
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> <Link to="./JodiChart/timeBazar">Time Bazar</Link> </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./JodiChart/milanDay"> Milan Day</Link> </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./JodiChart/kalyan"> Kalyan </Link></p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./JodiChart/milanNight"> Milan Night </Link></p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./JodiChart/rajdhaniDay"> Rajdhani Day </Link></p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./JodiChart/rajdhaniNight"> Rajdhani Night</Link> </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./JodiChart/kamalDay"> Kamal Day </Link></p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./JodiChart/kamalNight"> Kamal Night</Link> </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./JodiChart/mainBazar"> Main Bazar</Link> </p>  
            </Col>
        </Row>
         </div>
      </div>

       {/* MATKA PANEL CHART */}
       <div className='card liveResultSection'>
         <div className='card welcomeSection white-text'>
          <span style={{fontSize:'25px'}}>
          MATKA PANEL CHART
          </span>
         </div>
         <div className='topMar1 '> 
        <Row> 
        <Col className='liveResultSubSection bottomPad' span={24}>  
            <p> <Link to="./PanelChart/timeBazar">Time Bazar</Link> </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./PanelChart/milanDay"> Milan Day</Link> </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./PanelChart/kalyan"> Kalyan </Link></p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./PanelChart/milanNight"> Milan Night </Link></p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./PanelChart/rajdhaniDay"> Rajdhani Day </Link></p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./PanelChart/rajdhaniNight"> Rajdhani Night</Link> </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./PanelChart/kamalDay"> Kamal Day </Link></p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./PanelChart/kamalNight"> Kamal Night</Link> </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./PanelChart/mainBazar"> Main Bazar</Link> </p>  
            </Col>
        </Row>
         </div>
      </div>
       <Link to={"/login"}>
      <button  className='mt-4 refreshBtn'>
         <span style={{fontWeight:'14px'}}>
         Login
         </span>
         
        </button>
        </Link>  
     </div>
     </>
  );
}

export default Main;
{/* <Link to={"/user"} onClick={Play}>
      <button>
         <span style={{fontWeight:'14px'}}>
         Let's Begin
         </span>
         
        </button>
        </Link> */}


  {/* <div className="bg" style={{padding:'2%'}}>
      <img src={logo} className="App-logo" alt="logo" />
      </div>  */}
      // <div className="card-container">
      // <Tabs tabPosition="left" type="card">
      //   <TabPane tab="Tab Title 1" key="1">
      //   <p>Content of Tab Pane 1</p>
      //   <p>Content of Tab Pane 1</p>
      //   <p>Content of Tab Pane 1</p>
      // </TabPane>
      // <TabPane tab="Tab Title 2" key="2">
      //     <p>Content of Tab Pane 2</p>
      //     <p>Content of Tab Pane 2</p>
      //     <p>Content of Tab Pane 2</p>
      // </TabPane>
      // <TabPane tab="Tab Title 3" key="3">
      //     <p>Content of Tab Pane 3</p>
      //     <p>Content of Tab Pane 3</p>
      //     <p>Content of Tab Pane 3</p>
      // </TabPane>
      // </Tabs>
      // </div>