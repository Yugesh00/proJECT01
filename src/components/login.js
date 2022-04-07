import React, {useState, useEffect} from "react";
import logo from '../pslLogo1.png';
import 'mdbreact/dist/css/mdb.css';
import { MDBBtn } from "mdbreact";
import  { Redirect } from 'react-router-dom'
import audio from '../assests/onclick.mp3';
import { Tabs, Row, Col, Input, Spin  } from 'antd'; 
import './table.css';
import firebase from "./firebase";
 
const db = firebase;

 
const Login = () => {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [email1, setEmail1] = useState("")
    const [password1, setPassword1] = useState("")
    const [loading, setLoading] = useState(true);
    const [loading1, setLoading1] = useState(false);

    
    useEffect(() => {
        getUser()
      }, [loading]);  
    
      const getUser = () =>{
        const getPostsFromFirebase = [];
        const subscriber = db
          .collection("creds")
          .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              getPostsFromFirebase.push({
                ...doc.data(),  
                key: doc.id, 
              });
            });
           
            setEmail(getPostsFromFirebase[0].email)
            setPassword(getPostsFromFirebase[0].password)
            setLoading(false);

          });
    
         return () => subscriber();
    }
 
     const loginBtn = () => {
            if(email1 === email && password1 === password){
                localStorage.setItem('token', 'this_is_the_token');
                setLoading1(true);
            }
    }

    if (loading){
        return <Spin className="mt-5" size="large" />
         }
        if (loading1){
         return <Redirect to='/admin'  />
        }

  return (
    <div className='card setLogin'>
    <div>
    <div className='card loginSection'>
        <Input onChange={(e) => setEmail1(e.target.value)} value={email1}  className=""  placeholder="Email" />
         <Input onChange={(e) => setPassword1(e.target.value)} value={password1}  className="mt-2" type="password" placeholder="Password" />
         <button onClick={loginBtn} type="button"  className='mt-4 refreshBtn'>
              <p  style={{fontSize:'12px'}}>
              Login
              </p> 
           </button>
    </div> 
    </div> 
       
    </div>
     )

     }

export default Login