import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BrowserRouter as Router, Route, Link, Redirect   } from "react-router-dom";
 import firebase from "../firebase";
import { notification, Tabs, Button,  Row, Col, Checkbox, Input, Spin  } from 'antd';

const db = firebase;
 
const { TabPane } = Tabs;

const CheckboxGroup = Checkbox.Group;
const operations = <Button>Logout</Button>;
const LiveResult = () =>{
    const [error, setError] = useState(false)
    const [disabled1, setDisabled1] = useState(true)
    const [disabled2, setDisabled2] = useState(true)
    const [disabled3, setDisabled3] = useState(true)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    const [message, setMessage] = useState("Please Enter Your Name!")
    // const history = useHistory();
    const [load, setLoad] = useState(false)
    const [list, setList] = useState([])
    const [name1, setName1] = useState("")
    const [name2, setName2] = useState("")
    const [name3, setName3] = useState("")
    const [number1, setNumber1] = useState("")
    const [number2, setNumber2] = useState("")
    const [number3, setNumber3] = useState("")
    const [loading, setLoading] = useState(true);

    
    const showSuccess = () => {
      notification.success({message:'Successfully Saved!!'});
    };

    const showError = () => {
      notification.error({message:'Failed to Save!!'});
    };


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

        const editSection3 = () => {
            if(disabled3 === true){
              setDisabled3(false);
              setShow3(true);
            }
            else{
              setDisabled3(true);
              setShow3(false);
            } 
            }

            
        const saveBtn1 = () => {
          try{
            const subscriber = db.collection("live_result").doc("number1").update({
                name: name1, 
                number: number1
              })
              getUser();
              editSection1();
              showSuccess();
          return () => subscriber();
          }
          catch(error){
          console.log(error)
          showError();
          } 
        }

        const saveBtn2 = () => {
          try{
            const subscriber = db.collection("live_result").doc("number2").update({
                name: name2, 
                number: number2
              })
              getUser();
              editSection2();
              showSuccess();
          return () => subscriber();
         }
        catch(error){
          console.log(error)
          showError();
        } 
         
        }
        
        const saveBtn3= () => {
          try{
            const subscriber = db.collection("live_result").doc("number3").update({
                name: name3, 
                number: number3
              })
              getUser();
              editSection3();
              showSuccess();
          return () => subscriber();
           }
        catch(error){
          console.log(error)
          showError();
        } 
         
        }
        
        
        
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
     
   
    if (loading){
    return <Spin className="mt-5" size="large" />
     }

    return ( 
        <Row>
    
         <div className="inputMar2">
         <label className="float-left inputCs">Market</label>
         <Input onChange={(e) => setName1(e.target.value)} className="" disabled={disabled1} placeholder="Name" value={name1}/>
         <label className="float-left inputCs">Lucky Number </label>
         <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={disabled1} placeholder="Number" value={number1}/>
         <button type="button" onClick={editSection1} className='editBtn'>
              <p  style={{fontSize:'12px'}}>
              Edit
              </p> 
           </button>
           {show1 && 
           <button onClick={saveBtn1} disabled={disabled1} type="button"  className='saveBtn'>
              <p  style={{fontSize:'12px'}}>
              Save
              </p> 
              </button>}
         </div>
         <div className="inputMar2">
         <label className="float-left inputCs">Market</label>
         <Input onChange={(e) => setName2(e.target.value)} className="" disabled={disabled2} placeholder={"Name"} value={name2}/>
         <label className="float-left inputCs">Lucky Number </label>
         <Input onChange={(e) => setNumber2(e.target.value)} className="" disabled={disabled2} placeholder="Number"  value={number2} />
         <button onClick={editSection2} type="button"  className='editBtn'>
              <p  style={{fontSize:'12px'}}>
              Edit
              </p> 
           </button>
           {show2 &&
           <button onClick={saveBtn2} type="button"  className='saveBtn'>
              <p  style={{fontSize:'12px'}}>
              Save
              </p> 
           </button>}
         </div>
         <div className="inputMar3">
         <label className="float-left inputCs">Market</label>
         <Input onChange={(e) => setName3(e.target.value)} className="" disabled={disabled3} placeholder={"Name"} value={name3}/>
         <label className="float-left inputCs">Lucky Number  </label>
         <Input onChange={(e) => setNumber3(e.target.value)} className="" disabled={disabled3} placeholder="Number"  value={number3} />
         <button onClick={editSection3} type="button"  className='editBtn'>
              <p  style={{fontSize:'12px'}}>
              Edit
              </p> 
           </button>
           {show3 &&
           <button onClick={saveBtn3} type="button"  className='saveBtn'>
              <p  style={{fontSize:'12px'}}>
              Save
              </p> 
           </button>}
         </div>
        </Row> 
    );
}


export default LiveResult;