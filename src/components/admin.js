import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BrowserRouter as Router, Route, Link, Redirect   } from "react-router-dom";
import audio from '../assests/onclick.mp3';
import DataService from "../services/database"
import firebase from "../components/firebase";
import { Tabs, Button,  Row, Col, Checkbox, Input  } from 'antd';
import LuckyNumber from "./admin/luckyNumber";
const db = firebase;

const { TabPane } = Tabs;

const CheckboxGroup = Checkbox.Group;
const operations = <Button>Logout</Button>;
const Admin = () =>{
    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [disabled1, setDisabled1] = useState(true)
    const [disabled2, setDisabled2] = useState(true)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)

    const [message, setMessage] = useState("Please Enter Your Name!")
    // const history = useHistory();
    const [load, setLoad] = useState(false)
    const [list, setList] = useState([])

    const editSection1 = () => {
      if(disabled1 === true){
        setDisabled1(false);
        setShow1(true);
      }
      else{
        setDisabled1(true);
        setShow1(false);
      } 
      }

      const editSection2 = () => {
        if(disabled2 === true){
          setDisabled2(false);
          setShow2(true);
        }
        else{
          setDisabled2(true);
          setShow2(false);
        } 
        }
      useEffect(() => {
        // if(userName === ""){
        //   history.push('/user');
        // }
        db.collection("live_result").onSnapshot((snapshot) => {
            setList(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                  }))
            );
          });   
          setUser()
      }, [])
     
    const setUser = () => {
        console.log(list ,"Sds");

    }

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
          Content of tab 2
        </TabPane>
        <TabPane tab="15 Market" key="3">
          Content of tab 3
        </TabPane>
        <TabPane tab="15 Jodi Chart" key="4">
          Content of tab 1
        </TabPane>
        <TabPane tab="10 Market Pending" key="5">
          Content of tab 2
        </TabPane> 
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