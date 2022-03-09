import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BrowserRouter as Router, Route, Link, Redirect   } from "react-router-dom";
 import DataService from "../../services/database"
import firebase from "../../components/firebase";
import { Tabs, Button,  Row, Col, Checkbox, Input  } from 'antd';

const db = firebase;

const { TabPane } = Tabs;

const CheckboxGroup = Checkbox.Group;
const operations = <Button>Logout</Button>;
const LuckyNumber = () =>{
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
        <Row>
         <div className="inputMar">
         <label className="float-left inputCs">Lucky Number Name 1</label>
         <Input className="" disabled={disabled1} placeholder="Name" />
         <label className="float-left inputCs">Lucky Number 1</label>
         <Input className="" disabled={disabled1} placeholder="Number" />
         <button type="button" onClick={editSection1} className='editBtn'>
              <p  style={{fontSize:'12px'}}>
              Edit
              </p> 
           </button>
           {show1 && 
           <button disabled={disabled1} type="button"  className='saveBtn'>
              <p  style={{fontSize:'12px'}}>
              Save
              </p> 
              </button>}
         </div>
         <div className="inputMar1">
         <label className="float-left inputCs">Lucky Number Name 2</label>
         <Input className="" disabled={disabled2} placeholder="Name" />
         <label className="float-left inputCs">Lucky Number 2</label>
         <Input className="" disabled={disabled2} placeholder="Number" />
         <button onClick={editSection2} type="button"  className='editBtn'>
              <p  style={{fontSize:'12px'}}>
              Edit
              </p> 
           </button>
           {show2 &&
           <button type="button"  className='saveBtn'>
              <p  style={{fontSize:'12px'}}>
              Save
              </p> 
           </button>}
         </div>
       </Row> 
    );
}


export default LuckyNumber;