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

const { TabPane } = Tabs;

const Main = () => {
 
  const Play = () => {
    new Audio(audio).play();
  }

  return (
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
         <Row justify="center" align="top" className='liveResultSubSection bottomPad'> 
            <Col className='' span={8}> 
              <Link to="./JodiChart/timeBazar">
                <button type="button"  className='mt-4 refreshBtn'>
                  <p  style={{fontSize:'12px'}}>
                    Jodi
                  </p> 
                </button>
              </Link>
            </Col>
          <Col className='' span={8}>
              <p>  TIME BAZAR  </p>
              <p> 129-29-360</p>  
              <p>11:45 AM    12:45 PM</p>
          </Col>
          <Col className='' span={8}>  
          <Link to="./PanelChart/timeBazar"><button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Panel
              </p> 
           </button></Link>
          </Col>
        </Row>
        <Row justify="center" align="top" className='liveResultSubSection bottomPad'> 
            <Col className='' span={8}> 
            <Link to="./JodiChart/malanDay"><button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Jodi
              </p> 
           </button></Link>
            </Col>
          <Col className='' span={8}>
              <p>  MALAN DAY  </p>
              <p> 129-29-360</p>  
              <p>11:45 AM    12:45 PM</p>
          </Col>
          <Col className='' span={8}>  
          <Link to="./PanelChart/malanDay"><button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Panel
              </p> 
           </button></Link>
          </Col>
        </Row>
        <Row justify="center" align="top" className='liveResultSubSection bottomPad'> 
            <Col className='' span={8}> 
            <Link to="./JodiChart/kalyan"><button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Jodi
              </p> 
           </button></Link>
            </Col>
          <Col className='' span={8}>
              <p>  KALYAN  </p>
              <p> 129-29-360</p>  
              <p>11:45 AM    12:45 PM</p>
          </Col>
          <Col className='' span={8}>  
          <Link to="./PanelChart/kalyan"><button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Panel
              </p> 
           </button></Link>
          </Col>
        </Row>
        <Row justify="center" align="top" className='liveResultSubSection bottomPad'> 
            <Col className='' span={8}> 
            <Link to="./JodiChart/malanNight"><button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Jodi
              </p> 
           </button></Link>
            </Col>
          <Col className='' span={8}>
              <p>  MALAN NIGHT  </p>
              <p> 129-29-360</p>  
              <p>11:45 AM    12:45 PM</p>
          </Col>
          <Col className='' span={8}>  
          <Link to="./PanelChart/malanNight"><button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Panel
              </p> 
           </button></Link>
          </Col>
        </Row>
        <Row justify="center" align="top" className='liveResultSubSection bottomPad'> 
            <Col className='' span={8}> 
            <Link to="./JodiChart/rajdhaniDay"><button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Jodi
              </p> 
           </button></Link>
            </Col>
          <Col className='' span={8}>
              <p>  RAJDHANI DAY  </p>
              <p> 129-29-360</p>  
              <p>11:45 AM    12:45 PM</p>
          </Col>
          <Col className='' span={8}>  
          <Link to="./PanelChart/rajdhaniDay"><button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Panel
              </p> 
           </button></Link>
          </Col>
        </Row>
        <Row justify="center" align="top" className='liveResultSubSection bottomPad'> 
            <Col className='' span={8}> 
            <Link to="./JodiChart/rajdhaniNight"><button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Jodi
              </p> 
           </button></Link>
            </Col>
          <Col className='' span={8}>
              <p>  RAJDHANI NIGHT  </p>
              <p> 129-29-360</p>  
              <p>11:45 AM    12:45 PM</p>
          </Col>
          <Col className='' span={8}>  
          <Link to="./PanelChart/rajdhaniNight"> <button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Panel
              </p> 
           </button></Link>
          </Col>
        </Row>
        <Row justify="center" align="top" className='liveResultSubSection bottomPad'> 
            <Col className='' span={8}> 
            <Link to="./JodiChart/kamalDay"> <button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Jodi
              </p> 
           </button></Link>
            </Col>
          <Col className='' span={8}>
              <p>  KAMAL DAY  </p>
              <p> 129-29-360</p>  
              <p>11:45 AM    12:45 PM</p>
          </Col>
          <Col className='' span={8}>  
          <Link to="./PanelChart/kamalDay"> <button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Panel
              </p> 
           </button></Link>
          </Col>
        </Row>
        <Row justify="center" align="top" className='liveResultSubSection bottomPad'> 
            <Col className='' span={8}> 
            <Link to="./JodiChart/kamalNight"> <button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Jodi
              </p> 
           </button></Link>
            </Col>
          <Col className='' span={8}>
              <p>  KAMAL NIGHT  </p>
              <p> 129-29-360</p>  
              <p>11:45 AM    12:45 PM</p>
          </Col>
          <Col className='' span={8}>  
          <Link to="./PanelChart/kamalNight"> <button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Panel
              </p> 
           </button></Link>
          </Col>
        </Row>
        <Row justify="center" align="top" className='liveResultSubSection bottomPad'> 
            <Col className='' span={8}> 
            <Link to="./JodiChart/mainBazar"> <button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Jodi
              </p> 
           </button></Link>
            </Col>
          <Col className='' span={8}>
              <p>  MAIN BAZAR  </p>
              <p> 129-29-360</p>  
              <p>11:45 AM    12:45 PM</p>
          </Col>
          <Col className='' span={8}>  
          <Link to="./PanelChart/mainBazar"> <button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Panel
              </p> 
           </button></Link>
          </Col>
        </Row>
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
            <p><Link to="./JodiChart/malanDay"> Malan Day</Link> </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./JodiChart/kalyan"> Kalyan </Link></p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./JodiChart/malanNight"> Malan Night </Link></p> 
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
            <p><Link to="./PanelChart/malanDay"> Malan Day</Link> </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./PanelChart/kalyan"> Kalyan </Link></p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p><Link to="./PanelChart/malanNight"> Malan Night </Link></p> 
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
      <button>
         <span style={{fontWeight:'14px'}}>
         Login
         </span>
         
        </button>
        </Link>  
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