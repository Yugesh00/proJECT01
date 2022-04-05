import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBListGroupItem } from "mdbreact";  
import { Link } from "react-router-dom";
import DataService from "../../services/database" 
import './../table.css'


const rajdhaniDayp = () => { 

    return (
        <div className='card setCenter'>
            <div className='card liveResultSection mb-4'>
         <div className='card welcomeSection white-text'>
          <span style={{fontSize:'25px'}}>
          RAJDHANI DAY
          </span>
         </div>
      </div>
            <table style={{textAlign:'center'}} className="leaderboard1   chart-table" cellpadding="2">

            </table>

        </div>

);
}

export default rajdhaniDayp;



    