import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BrowserRouter as Router, Route, Link, Redirect   } from "react-router-dom";
 import firebase from "../firebase";
import { Tabs, Button,  Row, Col  } from 'antd';
 
const db = firebase;
 
const { TabPane } = Tabs;

 const LiveResultMain = () =>{ 
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

    const refresh = () => {
        window.location.reload(false);
      }
        
        useEffect(() => {
            getUser()
          }, [loading]);  
        
       const getUser = () =>{
            const getPostsFromFirebase = [];
            const subscriber = db
              .collection("market_charts")
              .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  getPostsFromFirebase.push({
                    ...doc.data(),  
                    key: doc.id, 
                  });
                });
                const updatedList = [];
                updatedList = getPostsFromFirebase.sort((a, b) => a.position - b.position);
                 console.log("updated.......",updatedList)
                setList(updatedList)
                setLoading(false);
              });
        
             console.log(list,';;')
            return () => subscriber();
        }
      
    return (  
        <>
  
      {list.map(current => {
        return (  
            <Row justify="center" align="top" className='liveResultSubSection bottomPad'> 
        <Col className='' span={8}> 
              <Link to={current.jodi}>
                <button type="button"  className='mt-4 refreshBtn'>
                  <p  style={{fontSize:'12px'}}>
                    Jodi
                  </p> 
                </button>
              </Link>
            </Col>
          <Col className='' span={8}>
              <p>  {current.Name} </p>
              <p> {current.number} </p>  
              <p>{current.Date}</p>
          </Col>
          <Col className='' span={8}>  
          <Link to={current.panel}><button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Panel
              </p> 
           </button></Link>
          </Col>
        </Row>
        );
      })}
        </>
    );
}


export default LiveResultMain;