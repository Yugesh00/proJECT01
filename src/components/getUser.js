import React, {useState} from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BrowserRouter as Router, Route, Link, Redirect   } from "react-router-dom";
import audio from '../assests/onclick.mp3';

const GetUser = () =>{
    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("Please Enter Your Name!")
    // const history = useHistory();
    const [load, setLoad] = useState(false)

    const Play = () => {
        new Audio(audio).play();
      }

      
    const setUser = () => {
        Play()
        if(name===""){
            setError(true)
            localStorage.removeItem('user')
        }
        else{
            localStorage.setItem('user', name);
            console.log(localStorage.getItem('user'))
            setLoad(true)
            // history.push('/selection');
        }
    }

    if (load){
    return <Redirect to='/selection'  />
     }
    return (
    <div className="App"> 
      <div className="getUserTop">
     
      <input
        placeholder="Enter Name"
        defaultValue={name}
        required
        onChange={(e) => setName(e.target.value)}
        />
        <br/>
         {error &&
        message
       }     
       <br/>

      <button onClick={setUser} style={{width:"150px", marginTop:'15px'}}>
         <span style={{fontWeight:'14px'}}>
         Submit
         </span>
         
        </button>
      </div>
        </div> 
    );
}


export default GetUser