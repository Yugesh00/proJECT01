import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BrowserRouter as Router, Route, Link, Redirect   } from "react-router-dom";
import audio from '../assests/onclick.mp3';
import { Tabs, Button,  Row, Col, Checkbox, Input  } from 'antd';
import LuckyNumber from "./admin/luckyNumber";
import LiveResult from "./admin/liveResult";
import LiveMarket from "./admin/liveMarket";
const { TabPane } = Tabs;

const CheckboxGroup = Checkbox.Group;
const operations =  <Link to={"/"}><Button>Logout</Button></Link>;
const Admin = () =>{
    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [disabled1, setDisabled1] = useState(true)
    const [disabled2, setDisabled2] = useState(true)
     
    const [message, setMessage] = useState("Please Enter Your Name!")
    // const history = useHistory();
    const [load, setLoad] = useState(false)

 
     
     
    if (load){
    return <Redirect to='/selection'  />
     }
    return (
      <div className="App1" style={{backgroundColor:'#fff'}}>  
      
      <div className='card  headSection'>
        <span style={{fontWeight:'14px'}}>
          DPBoss.net
         </span>
      </div>
       <div className='card elegant-color white-text  welcomeSection'>
        {/* <marquee  direction="left" style={{fontWeight:'10px'}}>
        !! Welcome Friends in the world of DPBoss.net in INDIA. May you always Win. !!
         </marquee>  */}
      </div>
      <div className=" ">
      <Row >
      <Col className='' span={24}>
      <Tabs className="pl-3 pr-2" style={{backgroundColor:'#fff'}} tabBarExtraContent={operations}>
        <TabPane className="" tab="Lucky Number" key="1">
        <LuckyNumber />
        </TabPane>
        <TabPane tab="Live Result" key="2">
          <LiveResult />
        </TabPane>
        <TabPane tab="Live Market" key="3">
        <LiveMarket />
        </TabPane>
        {/* <TabPane tab="15 Jodi Chart" key="4">
          Content of tab 1
        </TabPane>
        <TabPane tab="10 Market Pending" key="5">
          Content of tab 2
        </TabPane>  */}
      </Tabs>
      </Col></Row>
      </div>
      <div className="getUserTop">
      {/* <table>
      {list?.map(({ id, data }) => (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.number}</td>
              <td>
                <button 
                >
                  Update
                </button>
              </td>
              <td>
                <button 
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table> */}
      
  
      </div>
        </div> 
    );
}


export default Admin