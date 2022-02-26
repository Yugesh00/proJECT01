import logo from '../pslLogo1.png';
import 'mdbreact/dist/css/mdb.css';
import Question from './question'
import { MDBBtn } from "mdbreact";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import audio from '../assests/onclick.mp3';
import { Tabs, Row, Col  } from 'antd'; 
const { TabPane } = Tabs;

const Main = () => {
 
  const Play = () => {
    new Audio(audio).play();
  }

  return (
    <div className="App">  
      <header className="App-header ">
      <div className='card headSection'>
        <span style={{fontWeight:'14px'}}>
          DPBoss.net
         </span>
      </div>
       <div className='card welcomeSection'>
        <marquee  direction="left" style={{fontWeight:'10px'}}>
        !! Welcome Friends in the world of DPBoss.net in INDIA. May you always Win. !!
         </marquee> 
      </div>
      <div className='card luckySection'>
         <div>
          <span style={{fontWeight:'14px'}}>
          Today's Lucky Number
          </span>
         </div>
         <div>
         <Row >
            <Col className='  subSection1' span={12}>
            <p> Golden Ank </p>
            <p>  Golden Ank </p> </Col>
          <Col className='  subSection2' span={12}>
          <p>  Golden Ank  </p>
          <p> Golden Ank </p>  </Col>
        </Row>
         </div>
      </div>
      <div className='card liveResultSection'>
         <div>
          <span style={{fontWeight:'14px'}}>
          Live Result
          </span>
         </div>
         <div>
         <Row >
            <Col className='subSection1' span={24}>
            <p> Golden Ank </p>
            <p>  312321 </p> 
            <button type="button"  className='btn-primary'>
              <p  style={{fontSize:'12px'}}>
              Refresh
              </p> 
           </button>
            </Col>
          <Col className='  subSection2' span={24}>
          <p>  Golden Ank  </p>
          <p> 1232</p>  
          <button type="button"  className='btn-primary'>
              <p  style={{fontSize:'12px'}}>
              Refresh
              </p> 
           </button>
          </Col>
          <Col className='  subSection2' span={24}>
          <p>  Golden Ank  </p>
          <p> 122 </p>  
          <button type="button"  className='btn-primary'>
              <p  style={{fontSize:'12px'}}>
              Refresh
              </p> 
           </button>
          </Col>
        </Row>
         </div>
      </div>
      <br/>
      
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