import 'mdbreact/dist/css/mdb.css';
import React, {useEffect, useState} from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import fun from '../assests/fun.json';
import technical from '../assests/technical.json';
import coming from '../assests/coming.json';
import Lottie from 'react-lottie';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './table.css'
import DataService from "../services/database"
import audio from '../assests/onclick.mp3';

 

const Main = () => {
  const [userName, setUserName] = useState(localStorage.getItem('user'))
  const [list, setList] = useState([])
  const [show, setSetShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: fun,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: technical,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

   const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: coming,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  const Play = () => {
    new Audio(audio).play();
  }

  const HandleSetShow = () => {
    Play()
    setSetShow(true)
  }

  const CloseSetShow = () => {
    Play()
    setSetShow(false)
  }
  
  useEffect(() => {
    // if(userName === ""){
    //   history.push('/user');
    // }
    setLoading(true)
    DataService.getAll().on("value", handleList);

  }, [])

  const handleList = (items) => {
    let tutorials = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      tutorials.push({
        name: data.name,
        score: data.points*5,
      });
    });
    setList(tutorials)
    setLoading(false) 
  }
  
  return (
   <div>
    {!show ? (
      <>
      <MDBContainer className="center">
    <MDBRow>
    <MDBCol sm="3"></MDBCol>
     <MDBCol sm="6">
     <div className="bg" style={{padding:'2%'}}>
     
     <span style={{fontSize:'20px'}}>Hey {userName}, Test Your <strong style={{fontWeight:'bold'}}>Persistent</strong> Knowledge</span>
    
   </div>
     </MDBCol>
     <MDBCol sm="3"></MDBCol>
     </MDBRow>
    
    </MDBContainer>
         <br/>
    <MDBContainer>
    <MDBRow>
    <MDBCol sm="1" className="colLeft"></MDBCol>
     <MDBCol sm="3">
     <Link to={"/atharvaveda"} onClick={Play}>
     <button className="button typeBtn" style={{marginTop:'4%'}}>
     <Lottie 
     options={defaultOptions1}
     style={{padding:0,margin:0}}
     height={250}
     width={250}/>   
     <span style={{fontSize:'20px'}}>Easy</span>
      </button>
     </Link>

     </MDBCol>
 
     <MDBCol sm="3">
     <Link to={"/rigveda"} onClick={Play}>
     <button className="button typeBtn" style={{marginTop:'4%'}}>
     <div className="rightPad">
     <Lottie 
      options={defaultOptions}
      height={250}
      width={250}
      />                   
      </div>
     <span style={{fontSize:'20px'}}>Moderate</span>
     </button>
     </Link>
   
     </MDBCol>

     <MDBCol sm="3">
     <Link to={"/selection"} onClick={Play}>
     <button className="button typeBtn"  style={{marginTop:'4%'}}>
     <div className="">
     <Lottie 
      options={defaultOptions2}
      height={250}
      width={200} 
      />                   
      </div>
     <span style={{fontSize:'20px'}}>Tough</span>
     </button>
     </Link>
     </MDBCol>
     </MDBRow>
    </MDBContainer>
      <button onClick={HandleSetShow} className="" style={{width:"200px", marginTop:'25px'}}>
         <span style={{fontWeight:'14px'}}>
         Show Leaderboard
         </span>
         
        </button>
      <div style={{marginTop:'80px'}}></div>
      </>
    ) : (
      <>
      <MDBContainer className="center">
    <MDBRow>
    <MDBCol sm="3"></MDBCol>
     <MDBCol sm="6">
     <div className="bg" style={{padding:'2%'}}>
     
     <span style={{fontSize:'20px'}}>Leaderboard</span>
      
   </div>
     </MDBCol>
     <MDBCol sm="3"></MDBCol>
     </MDBRow>
    
    </MDBContainer>
      <MDBContainer>
    <MDBRow>
    <MDBCol sm="3"></MDBCol>
    {loading ?(<div className="spinner-border centerLoading" style={{color:'#FD5F07'}} role="status">
        </div>):(
    <Table id='leaderboard' className=""  style={{marginTop:'25px'}} >
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Score</Th>
        </Tr>
      </Thead>
      <Tbody>
      
    
      </Tbody>
     
      <Tbody>
      {list.map((item) => (
        <Tr key={item.name}>
          {/* <Td></Td> */}
          {Object.values(item).map((val) => (
            <Td>{val}</Td>
          ))}           
          
      
        </Tr>
      ))}
    
      </Tbody>
    </Table>)}
    </MDBRow>
    
    </MDBContainer>
    <button onClick={CloseSetShow} style={{width:"200px", marginTop:'25px'}}>
      <span style={{fontWeight:'14px'}}>
        Go Back
         </span>
         
    </button>
    </>
    )}
    
   
    </div>
  );
}

export default Main;
