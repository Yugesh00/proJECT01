import logo from '../pslLogo1.png';
import 'mdbreact/dist/css/mdb.css';
import Question from './question'
import { MDBBtn } from "mdbreact";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import audio from '../assests/onclick.mp3';
import { Tabs, Row, Col  } from 'antd'; 
import './table.css';
import Chart from './question';
const { TabPane } = Tabs;

const Main = () => {
 
  const Play = () => {
    new Audio(audio).play();
  }

  return (
    <div className="App">  
      <header className="App-header ">
      <div className='card  headSection'>
        <span style={{fontWeight:'14px'}}>
          DPBoss.net
         </span>
      </div>
       <div className='card elegant-color white-text  welcomeSection'>
        <marquee  direction="left" style={{fontWeight:'10px'}}>
        !! Welcome Friends in the world of DPBoss.net in INDIA. May you always Win. !!
         </marquee> 
      </div>
      
      <div className='card luckySection'>
        <div className='elegant-color white-text card'>
          <span style={{fontWeight:'14px'}}>
          Today's Lucky Number
          </span>
         </div>
         <div className='topMar1'>
         <Row >
            <Col className='subSection1' span={12}>
            <p> Golden Ank </p>
            <p>  Golden Ank </p> </Col>
          <Col className='  subSection2' span={12}>
          <p>  Golden Ank  </p>
          <p> Golden Ank </p>  </Col>
        </Row>
         </div>
      </div>
      <div className='card liveResultSection'>
         <div className='card elegant-color white-text'>
          <span style={{fontWeight:'14px'}}>
          Live Result
          </span>
         </div>
         <div className='topMar1'>
         <Row >
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Golden Ank </p>
            <p>  312321 </p> 
            <button type="button"  className='refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Refresh
              </p> 
           </button>
            </Col>
          <Col className='liveResultSubSection bottomPad' span={24}>
          <p>  Golden Ank  </p>
          <p> 1232</p>  
          <button type="button"  className='refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Refresh
              </p> 
           </button>
          </Col>
          <Col className='liveResultSubSection bottomPad' span={24}>
          <p>  Golden Ank  </p>
          <p> 122 </p>  
          <button type="button"  className='refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Refresh
              </p> 
           </button>
          </Col>
        </Row>
         </div>
      </div>
      <br/>

      {/* WORLD ME SABSE FAST SATTA MATKA RESULT */}
      <div className='card liveResultSection'>
         <div className='card elegant-color white-text'>
          <span style={{fontSize:'25px'}}>
          WORLD ME SABSE FAST SATTA MATKA RESULT
          </span>
         </div>
         <div className='topMar1 '>
         <Row justify="center" align="top" className='liveResultSubSection bottomPad'> 
            <Col className='' span={8}> 
            <button type="button"  className='refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Jodi
              </p> 
           </button>
            </Col>
          <Col className='' span={8}>
              <p>  MADHURI  </p>
              <p> 129-29-360</p>  
              <p>11:45 AM    12:45 PM</p>
          </Col>
          <Col className='' span={8}>  
          <button type="button"  className='refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Panel
              </p> 
           </button>
          </Col>
        </Row>
        <Row justify="center" align="top" className='liveResultSubSection bottomPad'> 
            <Col className='' span={8}> 
            <button type="button"  className='refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Jodi
              </p> 
           </button>
            </Col>
          <Col className='' span={8}>
              <p>  MADHURI  </p>
              <p> 129-29-360</p>  
              <p>11:45 AM    12:45 PM</p>
          </Col>
          <Col className='' span={8}>  
          <button type="button"  className='refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Panel
              </p> 
           </button>
          </Col>
        </Row>
         </div>
      </div> 

        {/* SATTA MATKA JODI CHART */}
        <div className='card liveResultSection'>
         <div className='card elegant-color white-text'>
          <span style={{fontSize:'25px'}}>
          SATTA MATKA JODI CHART
          </span>
         </div>
         <div className='topMar1 '> 
        <Row> 
           <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
        </Row>
         </div>
      </div>

       {/* MATKA PANEL CHART */}
       <div className='card liveResultSection'>
         <div className='card elegant-color white-text'>
          <span style={{fontSize:'25px'}}>
          MATKA PANEL CHART
          </span>
         </div>
         <div className='topMar1 '> 
        <Row> 
           <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
        </Row>
         </div>
      </div>
     <Chart />
       <Link to={"/admin"}>
      <button>
         <span style={{fontWeight:'14px'}}>
         Login
         </span>
         
        </button>
        </Link>  
      </header> 
    </div>
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