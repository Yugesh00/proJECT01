import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBListGroupItem } from "mdbreact";  
import { Link } from "react-router-dom";
import DataService from "../../services/database" 
import './../table.css'


const Question = () => { 

    return (
        <div className='card setCenter'>
            <table style={{textAlign:'center'}} className="leaderboard1   chart-table" cellpadding="2">

            </table>

        </div>

);
}

export default Question;



    