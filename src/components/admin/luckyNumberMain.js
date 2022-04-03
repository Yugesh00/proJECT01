import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BrowserRouter as Router, Route, Link, Redirect   } from "react-router-dom";
 import firebase from "../firebase";
import { Tabs, Button,  Row, Col  } from 'antd';

const db = firebase;
 
const { TabPane } = Tabs;

 const LuckyNumberMain = () =>{ 
    const [message, setMessage] = useState("Please Enter Your Name!")
    // const history = useHistory();
    const [load, setLoad] = useState(false)
    const [list, setList] = useState([])
    const [name1, setName1] = useState("")
    const [name2, setName2] = useState("")
    const [number1, setNumber1] = useState("")
    const [number2, setNumber2] = useState("")
    const [loading, setLoading] = useState(true);

  
 
        
        useEffect(() => {
            getUser()
          }, [loading]);  
        
       const getUser = () =>{
            const getPostsFromFirebase = [];
            const subscriber = db
              .collection("lucky_number")
              .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  getPostsFromFirebase.push({
                    ...doc.data(),  
                    key: doc.id, 
                  });
                });
                if(getPostsFromFirebase.length !==0){
                    setName1(getPostsFromFirebase[0].name);
                    setNumber1(getPostsFromFirebase[0].number);
                    setName2(getPostsFromFirebase[1].name);
                    setNumber2(getPostsFromFirebase[1].number);
                } 
                setLoading(false);
              });
        
             console.log(list)
            return () => subscriber();
        }
      
    return ( 
        <Row >
        <Col className='subSection1' span={12}>
        <p> {name1} </p>
        <p>  {number1} </p> 
        </Col>
      <Col className='  subSection2' span={12}>
      <p>  {name2} </p>
      <p> {number2} </p> 
       </Col>
    </Row>
    );
}


export default LuckyNumberMain;