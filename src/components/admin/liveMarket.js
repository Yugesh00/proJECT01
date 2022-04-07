import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BrowserRouter as Router, Route, Link, Redirect   } from "react-router-dom";
 import firebase from "../firebase";
import { Tabs, Button,  Row, Col, Checkbox, Input, Spin  } from 'antd';
import moment from 'moment';
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
    const [today1, setToday1] = useState("")
    const [currentWeek, setCurrentWeek] = useState("")


    const [number1, setNumber1] = useState("")
    const [number2, setNumber2] = useState("")
    const [number3, setNumber3] = useState("")
    const [loading, setLoading] = useState(true);

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

        const setToday = () => {
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate(); 
            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm; 
            return yyyy + '-' + mm + '-' + dd; 
        }

        const dayToday = () =>{
          var today = new Date();
          var days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
          var vari = days[today.getDay()];
          return vari;
        }

        const setWeek = () => {
          moment.updateLocale('en', {
            week: {
              dow : 1,  
            }
          });
          var startOfWeek = moment().startOf('week').toDate();
          var startOfWeek1 = moment(startOfWeek).format("DD-MM-YYYY");
          var endOfWeek   = moment().endOf('week').toDate();
  
          var endOfWeek1 = moment(endOfWeek).format("DD-MM-YYYY")
  
          return startOfWeek1 + ' to ' + endOfWeek1; 
      }
        
     
        const saveBtn1 = () => {
            var today = setToday();
            var panelNumber = number1.split('-')
            var setMonday = new Date();
            if(today !== today1){
                db.collection("market_charts").doc("kalyan").collection("jodi").doc(today).set({
                  number: number1, 
                  week:setWeek(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                db.collection("market_charts").doc("kalyan").collection("panel").doc(today).set({
                  number: panelNumber[1], 
                  week:setWeek(),
                  date: setToday()
                }).then((ref) => { console.log('ref')});
                const subscriber = db.collection("market_charts").doc("kalyan").update({
                  number: number1,
                  today: setToday(),
                  week:setWeek()
                })
               getUser();
               editSection1();
               return () => subscriber();
            }
            else{ 
                   db.collection("market_charts").doc("kalyan").collection("jodi").doc(today).update({
                    number: number1,
                    week:setWeek(),
                    date:setToday()
                  }).then((ref) => { console.log('ref')});
                  db.collection("market_charts").doc("kalyan").collection("panel").doc(today).update({
                    number: panelNumber[1],
                    week:setWeek(),
                    date:setToday()
                  }).then((ref) => { console.log('ref')});
                  const subscriber = db.collection("market_charts").doc("kalyan").update({
                      number: number1,
                      today: setToday(),
                      week:setWeek() 
                   })
                   getUser();
                   editSection1();
                    return () => subscriber();
                 
            }  
        }



        const saveBtn2 = () => {
            const subscriber = db.collection("live_result").doc("number2").update({
                name: name2, 
                number: number2
              })
              getUser();
              editSection2();
          return () => subscriber();
        }
        
        const saveBtn3= () => {
            const subscriber = db.collection("live_result").doc("number3").update({
                name: name3, 
                number: number3
              })
              getUser();
              editSection3();
          return () => subscriber();
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
                console.log(getPostsFromFirebase)

                console.log(sortList(getPostsFromFirebase))
                
                setName1(getPostsFromFirebase[0].name);
                setNumber1(getPostsFromFirebase[0].number);
                setCurrentWeek(getPostsFromFirebase[0].week)
                setToday1(getPostsFromFirebase[0].today);
                setName2(getPostsFromFirebase[1].name);
                setNumber2(getPostsFromFirebase[1].number);
                setName3(getPostsFromFirebase[2].name);
                setNumber3(getPostsFromFirebase[2].number);
                setLoading(false);
              });
        
            // console.log(list)
            return () => subscriber();
        }
     
        const sortList = (myList) =>{ 
          console.log(myList,'dd')
             console.log(new Date(myList[0].currentTime));
         
          var list =  myList.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.currentTime) - new Date(a.currentTime);
          });
          console.log(list,'jj')
         }
   
    if (loading){
    return <Spin className="mt-5" size="large" />
     }

    return ( 
        <>
 <Row>
    
    <div className="inputMar2">
    <label className="float-left inputCs">Market</label>
    <Input onChange={(e) => setName1(e.target.value)} className="" disabled={true} placeholder="Name" value="TIME BAZAR"/>
    <label className="float-left inputCs">Lucky Number </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={disabled1} placeholder="Number" value={number1}/>
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="01:00 PM   02:00 PM"/>
       
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
    <Input onChange={(e) => setName2(e.target.value)} className="" disabled={true} placeholder={"Name"} value="MILAN DAY"/>
    <label className="float-left inputCs">Lucky Number  </label>
    <Input onChange={(e) => setNumber2(e.target.value)} className="" disabled={disabled2} placeholder="Number"  value={number2} />
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="03:05 PM   05:05 PM"/>
       
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
    <Input onChange={(e) => setName3(e.target.value)} className="" disabled={true} placeholder={"Name"} value="KALYAN"/>
    <label className="float-left inputCs">Lucky Number  </label>
    <Input onChange={(e) => setNumber3(e.target.value)} className="" disabled={disabled3} placeholder="Number"  value={number3} />
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="04:10 PM   06:10 PM"/>
       
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
   <br/>
   {/* 2nd Row */}
   <Row> 
    <div className="inputMar2">
    <label className="float-left inputCs">Market</label>
    <Input onChange={(e) => setName1(e.target.value)} className="" disabled={true} placeholder="Name" value="MILAN NIGHT"/>
    <label className="float-left inputCs">Lucky Number </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={disabled1} placeholder="Number" value={number1}/>
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="09:00 PM   11:00 PM"/>
       
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
    <Input onChange={(e) => setName2(e.target.value)} className="" disabled={true} placeholder={"Name"} value="RAJDHANI NIGHT"/>
    <label className="float-left inputCs">Lucky Number </label>
    <Input onChange={(e) => setNumber2(e.target.value)} className="" disabled={disabled2} placeholder="Number"  value={number2} />
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="09:30 PM   11:45 PM"/>
       
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
    <Input onChange={(e) => setName3(e.target.value)} className="" disabled={true} placeholder={"Name"} value="RAJDHANI DAY"/>
    <label className="float-left inputCs">Lucky Number </label>
    <Input onChange={(e) => setNumber3(e.target.value)} className="" disabled={disabled3} placeholder="Number"  value={number3} />
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="03:05 PM   05:05 PM"/>
       
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
    <br/>
     {/* 3rd Row */}
     <Row> 
    <div className="inputMar2">
    <label className="float-left inputCs">Market</label>
    <Input onChange={(e) => setName1(e.target.value)} className="" disabled={true} placeholder="Name" value="KAMAL DAY"/>
    <label className="float-left inputCs">Lucky Number </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={disabled1} placeholder="Number" value={number1}/>
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="01:45 PM   02:45 PM"/>
       
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
    <Input onChange={(e) => setName2(e.target.value)} className="" disabled={true} placeholder={"Name"} value="KAMAL NIGHT"/>
    <label className="float-left inputCs">Lucky Number  </label>
    <Input onChange={(e) => setNumber2(e.target.value)} className="" disabled={disabled2} placeholder="Number"  value={number2} />
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="09:30 PM   11:00 PM"/>
       
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
    <Input onChange={(e) => setName3(e.target.value)} className="" disabled={true} placeholder={"Name"} value="MAIN BAZAR"/>
    <label className="float-left inputCs">Lucky Number </label>
    <Input onChange={(e) => setNumber3(e.target.value)} className="" disabled={disabled3} placeholder="Number"  value={number3} />
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="09:40 PM   12:05 AM"/>
       
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
        </>
       
    );
}


export default LiveResult;