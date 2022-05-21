import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BrowserRouter as Router, Route, Link, Redirect   } from "react-router-dom";
 import firebase from "../firebase";
import { notification, Tabs, Button,  Row, Col, Checkbox, Input, Spin  } from 'antd';
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

    const [disabled4, setDisabled4] = useState(true)
    const [disabled5, setDisabled5] = useState(true)
    const [disabled6, setDisabled6] = useState(true)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)

    const [disabled7, setDisabled7] = useState(true)
    const [disabled8, setDisabled8] = useState(true)
    const [disabled9, setDisabled9] = useState(true)
    const [show7, setShow7] = useState(false)
    const [show8, setShow8] = useState(false)
    const [show9, setShow9] = useState(false)


    const [message, setMessage] = useState("Please Enter Your Name!")
    // const history = useHistory();
    const [load, setLoad] = useState(false)
    const [list, setList] = useState([])

    const [name1, setName1] = useState("")
    const [name2, setName2] = useState("")
    const [name3, setName3] = useState("")

    const [name4, setName4] = useState("")
    const [name5, setName5] = useState("")
    const [name6, setName6] = useState("")

    const [name7, setName7] = useState("")
    const [name8, setName8] = useState("")
    const [name9, setName9] = useState("")

    const [hide, setHide] = useState(false)
    const [hide1, setHide1] = useState(false)


    const [today1, setToday1] = useState("")
    const [today2, setToday2] = useState("")
    const [today3, setToday3] = useState("")
    const [today4, setToday4] = useState("")
    const [today5, setToday5] = useState("")
    const [today6, setToday6] = useState("")
    const [today7, setToday7] = useState("")
    const [today8, setToday8] = useState("")
    const [today9, setToday9] = useState("") 

    const [currentWeek, setCurrentWeek] = useState("")


    const [number1, setNumber1] = useState("")
    const [number2, setNumber2] = useState("")
    const [number3, setNumber3] = useState("")

    const [number4, setNumber4] = useState("")
    const [number5, setNumber5] = useState("")
    const [number6, setNumber6] = useState("")

    const [number7, setNumber7] = useState("")
    const [number8, setNumber8] = useState("")
    const [number9, setNumber9] = useState("")

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

     const editSection4 = () => {
      if(disabled4 === true){
        setDisabled4(false);
        setShow4(true);
      }
      else{
        setDisabled4(true);
        setShow4(false);
      } 
}

   const editSection5 = () => {
              if(disabled5 === true){
                setDisabled5(false);
                setShow5(true);
              }
              else{
                setDisabled5(true);
                setShow5(false);
              } 
    }
    const editSection6 = () => {
      if(disabled6 === true){
        setDisabled6(false);
        setShow6(true);
      }
      else{
        setDisabled6(true);
        setShow6(false);
      } 
}

const editSection7 = () => {
  if(disabled7 === true){
    setDisabled7(false);
    setShow7(true);
  }
  else{
    setDisabled7(true);
    setShow7(false);
  } 
}

const editSection8 = () => {
  if(disabled8 === true){
    setDisabled8(false);
    setShow8(true);
  }
  else{
    setDisabled8(true);
    setShow8(false);
  } 
}


    const editSection9 = () => {
                if(disabled9 === true){
                  setDisabled9(false);
                  setShow9(true);
                }
                else{
                  setDisabled9(true);
                  setShow9(false);
                } 
    }

    const showSuccess = () => {
      notification.success({message:'Successfully Saved!!'});
    };

    const showError = () => {
      notification.error({message:'Failed to Save!!'});
    };



        const setToday = () => {
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate(); 
            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm; 
            return yyyy + '-' + mm + '-' + dd; 
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

      const setWeek1 = () => {
        moment.updateLocale('en', {
          week: {
            dow : 1,  
          }
        });
        var startOfWeek = moment().startOf('week').toDate();
        var startOfWeek1 = moment(startOfWeek).format("DD-MM-YYYY");
        var endOfWeek   = moment().endOf('week').toDate();  
        var endOfWeek1 = moment(endOfWeek).subtract(1, "days").format("DD-MM-YYYY");
        return startOfWeek1 + ' to ' + endOfWeek1; 
    }
      
    const setWeek2 = () => {
      moment.updateLocale('en', {
        week: {
          dow : 1,  
        }
      });
      var startOfWeek = moment().startOf('week').toDate();
      var startOfWeek1 = moment(startOfWeek).format("DD-MM-YYYY");
      var endOfWeek   = moment().endOf('week').toDate();  
      var endOfWeek1 = moment(endOfWeek).subtract(2, "days").format("DD-MM-YYYY");
      return startOfWeek1 + ' to ' + endOfWeek1; 
    }
     
        const saveBtn1 = () => {
            var today = setToday();
            var panelNumber = number1.split('-')
            var setMonday = new Date();
            if(today !== today1){
                db.collection("market_charts").doc("timeBazer").collection("jodi").doc(today).set({
                  number: number1, 
                  week:setWeek(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                db.collection("market_charts").doc("timeBazer").collection("panel").doc(today).set({
                  number: panelNumber[1], 
                  week:setWeek(),
                  date: setToday()
                }).then((ref) => { console.log('ref')});
                const subscriber = db.collection("market_charts").doc("timeBazer").update({
                  number: number1,
                  today: setToday(),
                  week:setWeek()
                })
               getUser();
               editSection1(); showSuccess();
               return () => subscriber();
            }
            else{ 
                   db.collection("market_charts").doc("timeBazer").collection("jodi").doc(today).update({
                    number: number1,
                    week:setWeek(),
                    date:setToday()
                  }).then((ref) => { console.log('ref')});
                  db.collection("market_charts").doc("timeBazer").collection("panel").doc(today).update({
                    number: panelNumber[1],
                    week:setWeek(),
                    date:setToday()
                  }).then((ref) => { console.log('ref')});
                  const subscriber = db.collection("market_charts").doc("timeBazer").update({
                      number: number1,
                      today: setToday(),
                      week:setWeek() 
                   })
                   getUser();
                   editSection1(); showSuccess();
                    return () => subscriber();
                 
            }  
        }

         const saveBtn2 = () => {
            var today = setToday();
            var panelNumber = number2.split('-')
            var setMonday = new Date();
            if(today !== today2){
                db.collection("market_charts").doc("milanDay").collection("jodi").doc(today).set({
                  number: number2, 
                  week:setWeek(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                db.collection("market_charts").doc("milanDay").collection("panel").doc(today).set({
                  number: panelNumber[1], 
                  week:setWeek(),
                  date: setToday()
                }).then((ref) => { console.log('ref')});
                const subscriber = db.collection("market_charts").doc("milanDay").update({
                  number: number2,
                  today: setToday(),
                  week:setWeek()
                })
               getUser();
               editSection2(); showSuccess();
               return () => subscriber();
            }
            else{ 
                   db.collection("market_charts").doc("milanDay").collection("jodi").doc(today).update({
                    number: number2,
                    week:setWeek(),
                    date:setToday()
                  }).then((ref) => { console.log('ref')});
                  db.collection("market_charts").doc("milanDay").collection("panel").doc(today).update({
                    number: panelNumber[1],
                    week:setWeek(),
                    date:setToday()
                  }).then((ref) => { console.log('ref')});
                  const subscriber = db.collection("market_charts").doc("milanDay").update({
                      number: number2,
                      today: setToday(),
                      week:setWeek() 
                   })
                   getUser();
                   editSection2(); showSuccess();
                    return () => subscriber();
                 
            }  
        }
 
        const saveBtn3 = () => {
          var today = setToday();
          var panelNumber = number3.split('-')
          var setMonday = new Date();
          if(today !== today3){
              db.collection("market_charts").doc("kalyan").collection("jodi").doc(today).set({
                number: number3, 
                week:setWeek(),
                date:setToday()
              }).then((ref) => { console.log('ref')});
              db.collection("market_charts").doc("kalyan").collection("panel").doc(today).set({
                number: panelNumber[1], 
                week:setWeek(),
                date: setToday()
              }).then((ref) => { console.log('ref')});
              const subscriber = db.collection("market_charts").doc("kalyan").update({
                number: number3,
                today: setToday(),
                week:setWeek()
              })
             getUser();
             editSection3(); showSuccess();
             return () => subscriber();
          }
          else{ 
                 db.collection("market_charts").doc("kalyan").collection("jodi").doc(today).update({
                  number: number3,
                  week:setWeek(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                db.collection("market_charts").doc("kalyan").collection("panel").doc(today).update({
                  number: panelNumber[1],
                  week:setWeek(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                const subscriber = db.collection("market_charts").doc("kalyan").update({
                    number: number3,
                    today: setToday(),
                    week:setWeek() 
                 })
                 getUser();
                 editSection3(); showSuccess();
                  return () => subscriber(); 
          }  
        }

        const saveBtn4 = () => {
          var today = setToday();
          var panelNumber = number4.split('-')
          var setMonday = new Date();
          if(today !== today4){
              db.collection("market_charts").doc("milanNight").collection("jodi").doc(today).set({
                number: number4, 
                week:setWeek1(),
                date:setToday()
              }).then((ref) => { console.log('ref')});
              db.collection("market_charts").doc("milanNight").collection("panel").doc(today).set({
                number: panelNumber[1], 
                week:setWeek1(),
                date: setToday()
              }).then((ref) => { console.log('ref')});
              const subscriber = db.collection("market_charts").doc("milanNight").update({
                number: number4,
                today: setToday(),
                week:setWeek1()
              })
             getUser();
             editSection4(); showSuccess();
             return () => subscriber();
          }
          else{ 
                 db.collection("market_charts").doc("milanNight").collection("jodi").doc(today).update({
                  number: number4,
                  week:setWeek1(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                db.collection("market_charts").doc("milanNight").collection("panel").doc(today).update({
                  number: panelNumber[1],
                  week:setWeek1(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                const subscriber = db.collection("market_charts").doc("milanNight").update({
                    number: number4,
                    today: setToday(),
                    week:setWeek1() 
                 })
                 getUser();
                 editSection4(); showSuccess();
                  return () => subscriber(); 
          }  
        }

        const saveBtn5 = () => {
          var today = setToday();
          var panelNumber = number5.split('-')
          var setMonday = new Date();
          if(today !== today5){
              db.collection("market_charts").doc("rajdhaniNight").collection("jodi").doc(today).set({
                number: number5, 
                week:setWeek2(),
                date:setToday()
              }).then((ref) => { console.log('ref')});
              db.collection("market_charts").doc("rajdhaniNight").collection("panel").doc(today).set({
                number: panelNumber[1], 
                week:setWeek2(),
                date: setToday()
              }).then((ref) => { console.log('ref')});
              const subscriber = db.collection("market_charts").doc("rajdhaniNight").update({
                number: number5,
                today: setToday(),
                week:setWeek2()
              })
             getUser();
             editSection5(); showSuccess();
             return () => subscriber();
          }
          else{ 
                 db.collection("market_charts").doc("rajdhaniNight").collection("jodi").doc(today).update({
                  number: number5,
                  week:setWeek(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                db.collection("market_charts").doc("rajdhaniNight").collection("panel").doc(today).update({
                  number: panelNumber[1],
                  week:setWeek(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                const subscriber = db.collection("market_charts").doc("rajdhaniNight").update({
                    number: number5,
                    today: setToday(),
                    week:setWeek() 
                 })
                 getUser();
                 editSection5(); showSuccess();
                  return () => subscriber(); 
          }  
        }


        const saveBtn6 = () => {
          var today = setToday();
          var panelNumber = number6.split('-')
          var setMonday = new Date();
          if(today !== today6){
              db.collection("market_charts").doc("rajdhaniDay").collection("jodi").doc(today).set({
                number: number6, 
                week:setWeek1(),
                date:setToday()
              }).then((ref) => { console.log('ref')});
              db.collection("market_charts").doc("rajdhaniDay").collection("panel").doc(today).set({
                number: panelNumber[1], 
                week:setWeek1(),
                date: setToday()
              }).then((ref) => { console.log('ref')});
              const subscriber = db.collection("market_charts").doc("rajdhaniDay").update({
                number: number6,
                today: setToday(),
                week:setWeek1()
              })
             getUser();
             editSection6(); showSuccess();
             return () => subscriber();
          }
          else{ 
                 db.collection("market_charts").doc("rajdhaniDay").collection("jodi").doc(today).update({
                  number: number6,
                  week:setWeek1(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                db.collection("market_charts").doc("rajdhaniDay").collection("panel").doc(today).update({
                  number: panelNumber[1],
                  week:setWeek1(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                const subscriber = db.collection("market_charts").doc("rajdhaniDay").update({
                    number: number6,
                    today: setToday(),
                    week:setWeek1() 
                 })
                 getUser();
                 editSection6(); showSuccess();
                  return () => subscriber(); 
          }  
        }

        const saveBtn7 = () => {
          var today = setToday();
          var panelNumber = number7.split('-')
          var setMonday = new Date();
          if(today !== today7){
              db.collection("market_charts").doc("kamalDay").collection("jodi").doc(today).set({
                number: number7, 
                week:setWeek1(),
                date:setToday()
              }).then((ref) => { console.log('ref')});
              db.collection("market_charts").doc("kamalDay").collection("panel").doc(today).set({
                number: panelNumber[1], 
                week:setWeek1(),
                date: setToday()
              }).then((ref) => { console.log('ref')});
              const subscriber = db.collection("market_charts").doc("kamalDay").update({
                number: number7,
                today: setToday(),
                week:setWeek1()
              })
             getUser();
             editSection7(); showSuccess();
             return () => subscriber();
          }
          else{ 
                 db.collection("market_charts").doc("kamalDay").collection("jodi").doc(today).update({
                  number: number7,
                  week:setWeek1(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                db.collection("market_charts").doc("kamalDay").collection("panel").doc(today).update({
                  number: panelNumber[1],
                  week:setWeek1(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                const subscriber = db.collection("market_charts").doc("kamalDay").update({
                    number: number7,
                    today: setToday(),
                    week:setWeek1() 
                 })
                 getUser();
                 editSection7(); showSuccess();
                  return () => subscriber(); 
          }  
        }


        const saveBtn8 = () => {
          var today = setToday();
          var panelNumber = number8.split('-')
          var setMonday = new Date();
          if(today !== today8){
              db.collection("market_charts").doc("kamalNight").collection("jodi").doc(today).set({
                number: number8, 
                week:setWeek1(),
                date:setToday()
              }).then((ref) => { console.log('ref')});
              db.collection("market_charts").doc("kamalNight").collection("panel").doc(today).set({
                number: panelNumber[1], 
                week:setWeek1(),
                date: setToday()
              }).then((ref) => { console.log('ref')});
              const subscriber = db.collection("market_charts").doc("kamalNight").update({
                number: number8,
                today: setToday(),
                week:setWeek1()
              })
             getUser();
             editSection8(); showSuccess();
             return () => subscriber();
          }
          else{ 
                 db.collection("market_charts").doc("kamalNight").collection("jodi").doc(today).update({
                  number: number8,
                  week:setWeek1(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                db.collection("market_charts").doc("kamalNight").collection("panel").doc(today).update({
                  number: panelNumber[1],
                  week:setWeek1(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                const subscriber = db.collection("market_charts").doc("kamalNight").update({
                    number: number8,
                    today: setToday(),
                    week:setWeek1() 
                 })
                 getUser();
                 editSection8(); showSuccess();
                  return () => subscriber(); 
          }  
        }


        const saveBtn9 = () => {
          var today = setToday();
          var panelNumber = number9.split('-')
          var setMonday = new Date();
          if(today !== today9){
              db.collection("market_charts").doc("mainBazar").collection("jodi").doc(today).set({
                number: number9, 
                week:setWeek2(),
                date:setToday()
              }).then((ref) => { console.log('ref')});
              db.collection("market_charts").doc("mainBazar").collection("panel").doc(today).set({
                number: panelNumber[1], 
                week:setWeek2(),
                date: setToday()
              }).then((ref) => { console.log('ref')});
              const subscriber = db.collection("market_charts").doc("mainBazar").update({
                number: number9,
                today: setToday(),
                week:setWeek2()
              })
             getUser();
             editSection9(); showSuccess();
             return () => subscriber();
          }
          else{ 
                 db.collection("market_charts").doc("mainBazar").collection("jodi").doc(today).update({
                  number: number9,
                  week:setWeek(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                db.collection("market_charts").doc("mainBazar").collection("panel").doc(today).update({
                  number: panelNumber[1],
                  week:setWeek(),
                  date:setToday()
                }).then((ref) => { console.log('ref')});
                const subscriber = db.collection("market_charts").doc("mainBazar").update({
                    number: number9,
                    today: setToday(),
                    week:setWeek() 
                 })
                 getUser();
                 editSection9(); showSuccess();
                  return () => subscriber(); 
          }  
        }


        useEffect(() => {
            getUser()
            let setDay = moment().format("dddd"); 
            if(setDay === 'Saturday' || setDay === 'Sunday'){
              setHide1(true);
            }
            if(setDay === 'Sunday'){
              setHide(true);
            } 
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
                
                setName1(getPostsFromFirebase[8].name);
                setNumber1(getPostsFromFirebase[8].number);
                setToday1(getPostsFromFirebase[8].today);

                setName2(getPostsFromFirebase[4].name);
                setNumber2(getPostsFromFirebase[4].number);
                setToday2(getPostsFromFirebase[4].today);

                setName3(getPostsFromFirebase[0].name);
                setNumber3(getPostsFromFirebase[0].number);
                setToday3(getPostsFromFirebase[0].today);

                setName4(getPostsFromFirebase[5].name);
                setNumber4(getPostsFromFirebase[5].number);
                setToday4(getPostsFromFirebase[5].today);

                setName5(getPostsFromFirebase[7].name);
                setNumber5(getPostsFromFirebase[7].number);
                setToday5(getPostsFromFirebase[7].today);

                setName6(getPostsFromFirebase[6].name);
                setNumber6(getPostsFromFirebase[6].number);
                setToday6(getPostsFromFirebase[6].today);

                setName7(getPostsFromFirebase[1].name);
                setNumber7(getPostsFromFirebase[1].number);
                setToday7(getPostsFromFirebase[1].today);

                setName8(getPostsFromFirebase[2].name);
                setNumber8(getPostsFromFirebase[2].number);
                setToday8(getPostsFromFirebase[2].today);

                setName9(getPostsFromFirebase[3].name);
                setNumber9(getPostsFromFirebase[3].number);
                setToday9(getPostsFromFirebase[3].today);

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

         const showMessage = () =>{
           alert("Can not be edited due to weekend...")
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
       
    <button onClick={hide?showMessage:editSection3} type="button"  className='editBtn'>
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
    <Input onChange={(e) => setName4(e.target.value)} className="" disabled={true} placeholder="Name" value="MILAN NIGHT"/>
    <label className="float-left inputCs">Lucky Number </label>
    <Input onChange={(e) => setNumber4(e.target.value)} className="" disabled={disabled4} placeholder="Number" value={number4}/>
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="09:00 PM   11:00 PM"/>
       
    <button onClick={hide?showMessage:editSection4}  type="button"  className='editBtn'>
         <p  style={{fontSize:'12px'}}>
         Edit
         </p> 
      </button>
      {show4 && 
      <button onClick={saveBtn4} disabled={disabled1} type="button"  className='saveBtn'>
         <p  style={{fontSize:'12px'}}>
         Save
         </p> 
         </button>}
    </div>
    <div className="inputMar2">
    <label className="float-left inputCs">Market</label>
    <Input onChange={(e) => setName5(e.target.value)} className="" disabled={true} placeholder={"Name"} value="RAJDHANI NIGHT"/>
    <label className="float-left inputCs">Lucky Number </label>
    <Input onChange={(e) => setNumber5(e.target.value)} className="" disabled={disabled5} placeholder="Number"  value={number5} />
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="09:30 PM   11:45 PM"/>
       
    <button onClick={hide1?showMessage:editSection5}   type="button"  className='editBtn'>
         <p  style={{fontSize:'12px'}}>
         Edit
         </p> 
      </button>
      {show5 &&
      <button onClick={saveBtn5} type="button"  className='saveBtn'>
         <p  style={{fontSize:'12px'}}>
         Save
         </p> 
      </button>}
    </div>
    <div className="inputMar3">
    <label className="float-left inputCs">Market</label>
    <Input onChange={(e) => setName6(e.target.value)} className="" disabled={true} placeholder={"Name"} value="RAJDHANI DAY"/>
    <label className="float-left inputCs">Lucky Number </label>
    <Input onChange={(e) => setNumber6(e.target.value)} className="" disabled={disabled6} placeholder="Number"  value={number6} />
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="03:05 PM   05:05 PM"/>
       
   <button  onClick={hide?showMessage:editSection6}  type="button"  className='editBtn'>
         <p  style={{fontSize:'12px'}}>
         Edit
         </p> 
      </button>
      {show6 &&
      <button onClick={saveBtn6} type="button"  className='saveBtn'>
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
    <Input onChange={(e) => setName7(e.target.value)} className="" disabled={true} placeholder="Name" value="KAMAL DAY"/>
    <label className="float-left inputCs">Lucky Number </label>
    <Input onChange={(e) => setNumber7(e.target.value)} className="" disabled={disabled7} placeholder="Number" value={number7}/>
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="01:45 PM   02:45 PM"/>
       
    <button type="button" onClick={hide?showMessage:editSection7}  className='editBtn'>
         <p  style={{fontSize:'12px'}}>
         Edit
         </p> 
      </button>
      {show7 && 
      <button onClick={saveBtn7}  type="button"  className='saveBtn'>
         <p  style={{fontSize:'12px'}}>
         Save
         </p> 
         </button>}
    </div>
    <div className="inputMar2">
    <label className="float-left inputCs">Market</label>
    <Input onChange={(e) => setName8(e.target.value)} className="" disabled={true} placeholder={"Name"} value="KAMAL NIGHT"/>
    <label className="float-left inputCs">Lucky Number  </label>
    <Input onChange={(e) => setNumber8(e.target.value)} className="" disabled={disabled8} placeholder="Number"  value={number8} />
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="09:30 PM   11:00 PM"/>
       
    <button onClick={hide?showMessage:editSection8}  type="button"  className='editBtn'>
         <p  style={{fontSize:'12px'}}>
         Edit
         </p> 
      </button>
      {show8 &&
      <button onClick={saveBtn8} type="button"  className='saveBtn'>
         <p  style={{fontSize:'12px'}}>
         Save
         </p> 
      </button>}
    </div>
    <div className="inputMar3">
    <label className="float-left inputCs">Market</label>
    <Input onChange={(e) => setName9(e.target.value)} className="" disabled={true} placeholder={"Name"} value="MAIN BAZAR"/>
    <label className="float-left inputCs">Lucky Number </label>
    <Input onChange={(e) => setNumber9(e.target.value)} className="" disabled={disabled9} placeholder="Number"  value={number9} />
    <label className="float-left inputCs">Timing </label>
    <Input onChange={(e) => setNumber1(e.target.value)} className="" disabled={true} placeholder="Timing" value="09:40 PM   12:05 AM"/>
       
    <button onClick={hide1?showMessage:editSection9}  type="button"  className='editBtn'>
         <p  style={{fontSize:'12px'}}>
         Edit
         </p> 
      </button>
      {show9 &&
      <button onClick={saveBtn9} type="button"  className='saveBtn'>
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