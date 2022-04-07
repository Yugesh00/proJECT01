import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBListGroupItem } from "mdbreact";  
import { Link } from "react-router-dom";
import DataService from "../../services/database" 
import './../table.css'
import { Tabs, Button,  Row, Col, Checkbox, Input, Spin  } from 'antd';
import firebase from "./../firebase";

const db = firebase;


const KamalDayp = () => { 
    const [loading, setLoading] = useState(true);
    const [myList, setMyList] = useState(true);
 
    
    useEffect(() => {
       getUser()
     }, [loading]);  
    
     const getUser = () =>{
       const getPostsFromFirebase = [];
       const subscriber = db.collection("market_charts").doc("kalyan").collection("jodi")
         .onSnapshot((querySnapshot) => {
           querySnapshot.forEach((doc) => {
             getPostsFromFirebase.push({
               ...doc.data(),  
               key: doc.id, 
             });
           });
           console.log(getPostsFromFirebase)
           Arr(getPostsFromFirebase);
             
            setLoading(false);
         });
    
       // console.log(list)
       return () => subscriber();
    }
    
    const Arr = (arr) => { 
    let res = arr.reduce((acc, {week, number}) =>
    {
        acc[week] = acc[week] || new Set();
        acc[week].add(number);
        return acc;
    }, {})
    
    res = Object.entries(res).map(
        ([week, numbers]) => ({week, number: [...numbers]})
    );
    setMyList(res); 
    console.log(res);
    }
    
    
    const handleScroll = () => {
       window.scroll({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
     }
    
     const goToTop = () => {
       window.scrollTo({
         top: 0,
         behavior: 'smooth',
       });
     };
 
    if (loading){
    return <Spin className="mt-5" size="large" />
     }
    
    return (
        <div className='card setCenter'>
               <Row >
        <Col className='ss pr-2' span={12}>
        <button onClick={handleScroll}  className='mt-4 refreshBtn'>
                 <p  style={{fontSize:'15px'}}>
              Bottom
              </p> </button>
        </Col>
      <Col className='  ss pl-2' span={12}>
      <Link to="/"> 
            <button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'15px'}}>
              Home
              </p> 
           </button>
           </Link>
       </Col>
    </Row>
            <div className='card liveResultSection mb-4'>
         <div className='card welcomeSection white-text'>
          <span style={{fontSize:'25px'}}>
          KAMAL DAY
          </span>
         </div>
      </div>
            <table style={{textAlign:'center'}} className="leaderboard1   chart-table" cellpadding="2">

            </table>
            <Row >
        <Col className='ss pr-2' span={12}>
        <button onClick={goToTop}  className='mt-4 refreshBtn'>
            <p  style={{fontSize:'15px'}}>
              Top
              </p> 
              </button>
        </Col>
      <Col className='  ss pl-2' span={12}>
      <Link to="/"> 
            <button type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'15px'}}>
              Home
              </p> 
           </button>
           </Link>
       </Col>
    </Row>
        </div>

);
}

export default KamalDayp;



    