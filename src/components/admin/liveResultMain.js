import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BrowserRouter as Router, Route, Link, Redirect   } from "react-router-dom";
 import firebase from "../firebase";
import { Tabs, Button,  Row, Col  } from 'antd';
import LiveResult from "./liveResult";

const db = firebase;
 
const { TabPane } = Tabs;

 const LiveResultMain = () =>{ 
    const [message, setMessage] = useState("Please Enter Your Name!")
    // const history = useHistory();
    const [load, setLoad] = useState(false)
    const [list, setList] = useState([])
    const [name1, setName1] = useState("")
    const [name2, setName2] = useState("")
    const [number1, setNumber1] = useState("")
    const [number2, setNumber2] = useState("")
    const [loading, setLoading] = useState(true);
    const [number3, setNumber3] = useState("")
    const [name3, setName3] = useState("")

 
        
        useEffect(() => {
            getUser()
          }, [loading]);  
        
       const getUser = () =>{
            const getPostsFromFirebase = [];
            const subscriber = db
              .collection("live_result")
              .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  getPostsFromFirebase.push({
                    ...doc.data(),  
                    key: doc.id, 
                  });
                });
                setName1(getPostsFromFirebase[0].name);
                setNumber1(getPostsFromFirebase[0].number);
                setName2(getPostsFromFirebase[1].name);
                setNumber2(getPostsFromFirebase[1].number);
                setName3(getPostsFromFirebase[2].name);
                setNumber3(getPostsFromFirebase[2].number);
                setLoading(false);
              });
        
             console.log(list)
            return () => subscriber();
        }
      
    return (  
        <Row >
        <Col className='liveResultSubSection bottomPad' span={24}>
        <p> {name1} </p>
        <p>  {number1} </p>  
        <button type="button"  className='refreshBtn'>
          <p  style={{fontSize:'12px'}}>
          Refresh
          </p> 
       </button>
        </Col>
      <Col className='liveResultSubSection bottomPad' span={24}>
      <p> {name2} </p>
        <p>  {number2} </p> 
      <button type="button"  className='refreshBtn'>
          <p  style={{fontSize:'12px'}}>
          Refresh
          </p> 
       </button>
      </Col>
      <Col className='liveResultSubSection bottomPad' span={24}>
      <p> {name3} </p>
        <p>  {number3} </p> 
      <button type="button"  className='refreshBtn'>
          <p  style={{fontSize:'12px'}}>
          Refresh
          </p> 
       </button>
      </Col>
    </Row>
    );
}


export default LiveResultMain;