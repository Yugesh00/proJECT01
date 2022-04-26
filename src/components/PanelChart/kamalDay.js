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
       const subscriber = db.collection("market_charts").doc("kamalDay").collection("jodi")
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
            <thead> 
                			<tr>
		                		<th>Date</th>
		                		<th colspan="3">Mon</th>
		                		<th colspan="3">Tue</th>
		                		<th colspan="3">Wed</th>
		                		<th colspan="3">Thu</th>
		                		<th colspan="3">Fri</th>
							    <th colspan="3">Sat</th>
		                	</tr>
                	    </thead>  

                	    <tbody>
							<tr>
								<td>02/09/19 <br/> To  <br/> 07/09/19</td>
								<td style={{color:'red'}}> 1  <br/> 4  <br/> 8  <br/></td>
								<td style={{color:'red'}}>38</td>
								<td style={{color:'red'}}> 8 <br/> 0 <br/> 0 <br/></td>

								
								<td style={{color:'red'}}> 3  <br/> 6  <br/> 8  <br/></td>
								<td style={{color:'red'}}>77</td>
								<td style={{color:'red'}}> 2 <br/> 7 <br/> 8 <br/></td>

								<td  > 1  <br/> 1  <br/> 5  <br/></td>
								<td  >79</td>
								<td  > 1 <br/> 4 <br/> 4 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 4  <br/> 0  <br/></td>
								<td style={{color:'red'}}>55</td>
								<td style={{color:'red'}}> 4 <br/> 5 <br/> 6 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 6  <br/> 0  <br/></td>
								<td style={{color:'red'}}>94</td>
								<td style={{color:'red'}}> 3 <br/> 5 <br/> 6 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 4  <br/> 0  <br/></td>
								<td style={{color:'red'}}>77</td>
								<td style={{color:'red'}}> 2 <br/> 6 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>09/09/19 <br/> To  <br/> 14/09/19</td>
								<td  > 4  <br/> 5  <br/> 7  <br/></td>
								<td  >65</td>
								<td  > 1 <br/> 5 <br/> 9 <br/></td>

								
								<td  > 1  <br/> 4  <br/> 9  <br/></td>
								<td  >40</td>
								<td  > 1 <br/> 2 <br/> 7 <br/></td>

								<td  > 8  <br/> 0  <br/> 0  <br/></td>
								<td  >86</td>
								<td  > 2 <br/> 5 <br/> 9 <br/></td>

								<td  > 6  <br/> 6  <br/> 8  <br/></td>
								<td  >01</td>
								<td  > 1 <br/> 1 <br/> 9 <br/></td>

								<td  > 2  <br/> 5  <br/> 9  <br/></td>
								<td  >62</td>
								<td  > 4 <br/> 9 <br/> 9 <br/></td>

								<td  > 2  <br/> 6  <br/> 6  <br/></td>
								<td  >45</td>
								<td  > 6 <br/> 9 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>16/09/19 <br/> To  <br/> 21/09/19</td>
								<td  > 5  <br/> 6  <br/> 9  <br/></td>
								<td  >09</td>
								<td  > 1 <br/> 3 <br/> 5 <br/></td>

								
								<td  > 6  <br/> 6  <br/> 7  <br/></td>
								<td  >94</td>
								<td  > 1 <br/> 1 <br/> 2 <br/></td>

								<td  > 1  <br/> 2  <br/> 5  <br/></td>
								<td  >84</td>
								<td  > 2 <br/> 2 <br/> 0 <br/></td>

								<td  > 1  <br/> 2  <br/> 6  <br/></td>
								<td  >91</td>
								<td  > 1 <br/> 2 <br/> 8 <br/></td>

								<td  > 5  <br/> 6  <br/> 7  <br/></td>
								<td  >85</td>
								<td  > 3 <br/> 3 <br/> 9 <br/></td>

								<td  > 8  <br/> 8  <br/> 0  <br/></td>
								<td  >62</td>
								<td  > 1 <br/> 4 <br/> 7 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>23/09/19 <br/> To  <br/> 28/09/19</td>
								<td  > 1  <br/> 5  <br/> 9  <br/></td>
								<td  >57</td>
								<td  > 1 <br/> 1 <br/> 5 <br/></td>

								
								<td  > 6  <br/> 8  <br/> 0  <br/></td>
								<td  >45</td>
								<td  > 3 <br/> 3 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 6  <br/> 0  <br/></td>
								<td style={{color:'red'}}>72</td>
								<td style={{color:'red'}}> 1 <br/> 3 <br/> 8 <br/></td>

								<td  > 6  <br/> 8  <br/> 8  <br/></td>
								<td  >20</td>
								<td  > 1 <br/> 9 <br/> 0 <br/></td>

								<td  > 2  <br/> 2  <br/> 9  <br/></td>
								<td  >34</td>
								<td  > 7 <br/> 7 <br/> 0 <br/></td>

								<td  > 4  <br/> 6  <br/> 7  <br/></td>
								<td  >79</td>
								<td  > 1 <br/> 3 <br/> 5 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>30/09/19 <br/> To  <br/> 05/10/19</td>
								<td  > 6  <br/> 8  <br/> 0  <br/></td>
								<td  >47</td>
								<td  > 1 <br/> 2 <br/> 4 <br/></td>

								
								<td  > 3  <br/> 6  <br/> 7  <br/></td>
								<td  >62</td>
								<td  > 2 <br/> 0 <br/> 0 <br/></td>

								<td  > 2  <br/> 3  <br/> 4  <br/></td>
								<td  >97</td>
								<td  > 1 <br/> 7 <br/> 9 <br/></td>

								<td  > 3  <br/> 8  <br/> 0  <br/></td>
								<td  >10</td>
								<td  > 2 <br/> 3 <br/> 5 <br/></td>

								<td  > 6  <br/> 7  <br/> 8  <br/></td>
								<td  >12</td>
								<td  > 5 <br/> 8 <br/> 9 <br/></td>

								<td  > 1  <br/> 2  <br/> 5  <br/></td>
								<td  >84</td>
								<td  > 1 <br/> 6 <br/> 7 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>07/10/19 <br/> To  <br/> 12/10/19</td>
								<td  > 4  <br/> 7  <br/> 8  <br/></td>
								<td  >91</td>
								<td  > 1 <br/> 2 <br/> 8 <br/></td>

								
								<td  > 1  <br/> 1  <br/> 5  <br/></td>
								<td  >73</td>
								<td  > 2 <br/> 2 <br/> 9 <br/></td>

								<td  > 2  <br/> 4  <br/> 8  <br/></td>
								<td  >43</td>
								<td  > 1 <br/> 3 <br/> 9 <br/></td>

								<td  > 1  <br/> 3  <br/> 4  <br/></td>
								<td  >86</td>
								<td  > 4 <br/> 6 <br/> 6 <br/></td>

								<td  > 6  <br/> 7  <br/> 0  <br/></td>
								<td  >32</td>
								<td  > 3 <br/> 9 <br/> 0 <br/></td>

								<td  > 1  <br/> 3  <br/> 6  <br/></td>
								<td  >01</td>
								<td  > 3 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>14/10/19 <br/> To  <br/> 19/10/19</td>
								<td  > 8  <br/> 0  <br/> 0  <br/></td>
								<td  >87</td>
								<td  > 1 <br/> 3 <br/> 3 <br/></td>

								
								<td style={{color:'red'}}> 3  <br/> 6  <br/> 0  <br/></td>
								<td style={{color:'red'}}>99</td>
								<td style={{color:'red'}}> 4 <br/> 7 <br/> 8 <br/></td>

								<td  > 3  <br/> 4  <br/> 9  <br/></td>
								<td  >69</td>
								<td  > 2 <br/> 8 <br/> 9 <br/></td>

								<td  > 2  <br/> 2  <br/> 4  <br/></td>
								<td  >85</td>
								<td  > 1 <br/> 2 <br/> 2 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 3  <br/> 8  <br/></td>
								<td style={{color:'red'}}>22</td>
								<td style={{color:'red'}}> 2 <br/> 4 <br/> 6 <br/></td>

								<td  > 5  <br/> 9  <br/> 9  <br/></td>
								<td  >36</td>
								<td  > 7 <br/> 9 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>21/10/19 <br/> To  <br/> 26/10/19</td>
								<td style={{color:'red'}}> 1  <br/> 9  <br/> 0  <br/></td>
								<td style={{color:'red'}}>05</td>
								<td style={{color:'red'}}> 2 <br/> 3 <br/> 0 <br/></td>

								
								<td  > 2  <br/> 5  <br/> 9  <br/></td>
								<td  >67</td>
								<td  > 4 <br/> 5 <br/> 8 <br/></td>

								<td  > 5  <br/> 8  <br/> 9  <br/></td>
								<td  >21</td>
								<td  > 2 <br/> 9 <br/> 0 <br/></td>

								<td  > 2  <br/> 2  <br/> 3  <br/></td>
								<td  >70</td>
								<td  > 5 <br/> 5 <br/> 0 <br/></td>

								<td  > 2  <br/> 3  <br/> 4  <br/></td>
								<td  >96</td>
								<td  > 2 <br/> 6 <br/> 8 <br/></td>

								<td  > 1  <br/> 9  <br/> 0  <br/></td>
								<td  >03</td>
								<td  > 4 <br/> 9 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>28/10/19 <br/> To  <br/> 02/11/19</td>
								<td  > 1  <br/> 4  <br/> 6  <br/></td>
								<td  >10</td>
								<td  > 1 <br/> 4 <br/> 5 <br/></td>

								
								<td  > 1  <br/> 1  <br/> 3  <br/></td>
								<td  >58</td>
								<td  > 1 <br/> 2 <br/> 5 <br/></td>

								<td  > 1  <br/> 1  <br/> 9  <br/></td>
								<td  >14</td>
								<td  > 1 <br/> 4 <br/> 9 <br/></td>

								<td  > 3  <br/> 5  <br/> 0  <br/></td>
								<td  >82</td>
								<td  > 2 <br/> 3 <br/> 7 <br/></td>

								<td  > 1  <br/> 3  <br/> 0  <br/></td>
								<td  >43</td>
								<td  > 4 <br/> 9 <br/> 0 <br/></td>

								<td  > 1  <br/> 9  <br/> 0  <br/></td>
								<td  >08</td>
								<td  > 1 <br/> 3 <br/> 4 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>04/11/19 <br/> To  <br/> 09/11/19</td>
								<td  > 6  <br/> 8  <br/> 9  <br/></td>
								<td  >37</td>
								<td  > 2 <br/> 6 <br/> 9 <br/></td>

								
								<td  > 2  <br/> 2  <br/> 5  <br/></td>
								<td  >92</td>
								<td  > 5 <br/> 7 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 4  <br/> 9  <br/> 0  <br/></td>
								<td style={{color:'red'}}>38</td>
								<td style={{color:'red'}}> 1 <br/> 8 <br/> 9 <br/></td>

								<td  > 3  <br/> 4  <br/> 4  <br/></td>
								<td  >17</td>
								<td  > 7 <br/> 0 <br/> 0 <br/></td>

								<td  > 3  <br/> 5  <br/> 8  <br/></td>
								<td  >69</td>
								<td  > 1 <br/> 1 <br/> 7 <br/></td>

								<td  > 1  <br/> 2  <br/> 9  <br/></td>
								<td  >25</td>
								<td  > 3 <br/> 4 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>11/11/19 <br/> To  <br/> 16/11/19</td>
								<td  > 4  <br/> 8  <br/> 8  <br/></td>
								<td  >04</td>
								<td  > 2 <br/> 2 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 1  <br/> 2  <br/></td>
								<td  >42</td>
								<td  > 3 <br/> 9 <br/> 0 <br/></td>

								<td  > 1  <br/> 2  <br/> 3  <br/></td>
								<td  >65</td>
								<td  > 3 <br/> 4 <br/> 8 <br/></td>

								<td  > 2  <br/> 3  <br/> 5  <br/></td>
								<td  >02</td>
								<td  > 1 <br/> 2 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 1  <br/> 9  <br/></td>
								<td style={{color:'red'}}>16</td>
								<td style={{color:'red'}}> 1 <br/> 6 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 8  <br/> 0  <br/></td>
								<td style={{color:'red'}}>94</td>
								<td style={{color:'red'}}> 1 <br/> 4 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>18/11/19 <br/> To  <br/> 23/11/19</td>
								<td  > 2  <br/> 4  <br/> 9  <br/></td>
								<td  >51</td>
								<td  > 4 <br/> 8 <br/> 9 <br/></td>

								
								<td  > 2  <br/> 4  <br/> 7  <br/></td>
								<td  >39</td>
								<td  > 1 <br/> 1 <br/> 7 <br/></td>

								<td  > 4  <br/> 7  <br/> 7  <br/></td>
								<td  >82</td>
								<td  > 2 <br/> 4 <br/> 6 <br/></td>

								<td  > 2  <br/> 2  <br/> 3  <br/></td>
								<td  >78</td>
								<td  > 3 <br/> 6 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 4  <br/> 7  <br/> 8  <br/></td>
								<td style={{color:'red'}}>94</td>
								<td style={{color:'red'}}> 1 <br/> 6 <br/> 7 <br/></td>

								<td  > 4  <br/> 8  <br/> 0  <br/></td>
								<td  >21</td>
								<td  > 3 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>25/11/19 <br/> To  <br/> 30/11/19</td>
								<td  > 1  <br/> 7  <br/> 8  <br/></td>
								<td  >69</td>
								<td  > 3 <br/> 7 <br/> 9 <br/></td>

								
								<td  > 5  <br/> 5  <br/> 8  <br/></td>
								<td  >87</td>
								<td  > 4 <br/> 5 <br/> 8 <br/></td>

								<td  > 1  <br/> 9  <br/> 0  <br/></td>
								<td  >03</td>
								<td  > 2 <br/> 4 <br/> 7 <br/></td>

								<td  > 3  <br/> 6  <br/> 6  <br/></td>
								<td  >56</td>
								<td  > 1 <br/> 6 <br/> 9 <br/></td>

								<td  > 4  <br/> 6  <br/> 7  <br/></td>
								<td  >70</td>
								<td  > 1 <br/> 4 <br/> 5 <br/></td>

								<td  > 2  <br/> 3  <br/> 8  <br/></td>
								<td  >32</td>
								<td  > 1 <br/> 5 <br/> 6 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>02/12/19 <br/> To  <br/> 07/12/19</td>
								<td style={{color:'red'}}> 1  <br/> 3  <br/> 7  <br/></td>
								<td style={{color:'red'}}>11</td>
								<td style={{color:'red'}}> 1 <br/> 0 <br/> 0 <br/></td>

								
								<td  > 2  <br/> 5  <br/> 6  <br/></td>
								<td  >36</td>
								<td  > 1 <br/> 5 <br/> 0 <br/></td>

								<td  > 1  <br/> 4  <br/> 9  <br/></td>
								<td  >42</td>
								<td  > 3 <br/> 4 <br/> 5 <br/></td>

								<td  > 3  <br/> 5  <br/> 8  <br/></td>
								<td  >64</td>
								<td  > 1 <br/> 3 <br/> 0 <br/></td>

								<td  > 1  <br/> 2  <br/> 9  <br/></td>
								<td  >29</td>
								<td  > 4 <br/> 7 <br/> 8 <br/></td>

								<td style={{color:'red'}}> 6  <br/> 9  <br/> 0  <br/></td>
								<td style={{color:'red'}}>50</td>
								<td style={{color:'red'}}> 1 <br/> 4 <br/> 5 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>09/12/19 <br/> To  <br/> 14/12/19</td>
								<td  > 3  <br/> 8  <br/> 9  <br/></td>
								<td  >06</td>
								<td  > 8 <br/> 9 <br/> 9 <br/></td>

								
								<td  > 5  <br/> 8  <br/> 8  <br/></td>
								<td  >17</td>
								<td  > 2 <br/> 2 <br/> 3 <br/></td>

								<td  > 5  <br/> 8  <br/> 0  <br/></td>
								<td  >30</td>
								<td  > 1 <br/> 1 <br/> 8 <br/></td>

								<td  > 6  <br/> 9  <br/> 0  <br/></td>
								<td  >51</td>
								<td  > 3 <br/> 4 <br/> 4 <br/></td>

								<td  > 3  <br/> 6  <br/> 8  <br/></td>
								<td  >78</td>
								<td  > 9 <br/> 9 <br/> 0 <br/></td>

								<td  > 6  <br/> 8  <br/> 8  <br/></td>
								<td  >29</td>
								<td  > 5 <br/> 7 <br/> 7 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>16/12/19 <br/> To  <br/> 21/12/19</td>
								<td  > 4  <br/> 4  <br/> 5  <br/></td>
								<td  >35</td>
								<td  > 7 <br/> 9 <br/> 9 <br/></td>

								
								<td  > 2  <br/> 3  <br/> 3  <br/></td>
								<td  >87</td>
								<td  > 3 <br/> 7 <br/> 7 <br/></td>

								<td  > 2  <br/> 6  <br/> 7  <br/></td>
								<td  >53</td>
								<td  > 5 <br/> 8 <br/> 0 <br/></td>

								<td  > 1  <br/> 4  <br/> 7  <br/></td>
								<td  >28</td>
								<td  > 1 <br/> 7 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 9  <br/> 0  <br/></td>
								<td style={{color:'red'}}>49</td>
								<td style={{color:'red'}}> 1 <br/> 8 <br/> 0 <br/></td>

								<td  > 4  <br/> 8  <br/> 9  <br/></td>
								<td  >14</td>
								<td  > 3 <br/> 4 <br/> 7 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>23/12/19 <br/> To  <br/> 28/12/19</td>
								<td  > 3  <br/> 3  <br/> 8  <br/></td>
								<td  >40</td>
								<td  > 1 <br/> 4 <br/> 5 <br/></td>

								
								<td  > 3  <br/> 3  <br/> 0  <br/></td>
								<td  >65</td>
								<td  > 1 <br/> 4 <br/> 0 <br/></td>

								<td  > 1  <br/> 9  <br/> 0  <br/></td>
								<td  >08</td>
								<td  > 1 <br/> 1 <br/> 6 <br/></td>

								<td  > 2  <br/> 2  <br/> 3  <br/></td>
								<td  >76</td>
								<td  > 8 <br/> 8 <br/> 0 <br/></td>

								<td  > 1  <br/> 1  <br/> 9  <br/></td>
								<td  >13</td>
								<td  > 1 <br/> 2 <br/> 0 <br/></td>

								<td  > 5  <br/> 6  <br/> 7  <br/></td>
								<td  >86</td>
								<td  > 6 <br/> 0 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>30/12/19 <br/> To  <br/> 04/01/20</td>
								<td  > 4  <br/> 5  <br/> 8  <br/></td>
								<td  >79</td>
								<td  > 1 <br/> 1 <br/> 7 <br/></td>

								
								<td  > 1  <br/> 7  <br/> 0  <br/></td>
								<td  >81</td>
								<td  > 1 <br/> 4 <br/> 6 <br/></td>

								<td  > 1  <br/> 5  <br/> 9  <br/></td>
								<td  >54</td>
								<td  > 1 <br/> 4 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 2  <br/> 3  <br/> 9  <br/></td>
								<td style={{color:'red'}}>49</td>
								<td style={{color:'red'}}> 1 <br/> 2 <br/> 6 <br/></td>

								<td  > 1  <br/> 3  <br/> 3  <br/></td>
								<td  >70</td>
								<td  > 1 <br/> 1 <br/> 8 <br/></td>

								<td  > 4  <br/> 4  <br/> 7  <br/></td>
								<td  >52</td>
								<td  > 6 <br/> 6 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>06/01/20 <br/> To  <br/> 11/01/20</td>
								<td  > 3  <br/> 9  <br/> 0  <br/></td>
								<td  >23</td>
								<td  > 5 <br/> 8 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 2  <br/> 7  <br/></td>
								<td  >04</td>
								<td  > 5 <br/> 9 <br/> 0 <br/></td>

								<td  > 2  <br/> 5  <br/> 8  <br/></td>
								<td  >58</td>
								<td  > 1 <br/> 2 <br/> 5 <br/></td>

								<td  > 2  <br/> 6  <br/> 0  <br/></td>
								<td  >84</td>
								<td  > 4 <br/> 5 <br/> 5 <br/></td>

								<td  > 7  <br/> 8  <br/> 8  <br/></td>
								<td  >30</td>
								<td  > 1 <br/> 2 <br/> 7 <br/></td>

								<td  > 6  <br/> 8  <br/> 0  <br/></td>
								<td  >45</td>
								<td  > 3 <br/> 4 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>13/01/20 <br/> To  <br/> 18/01/20</td>
								<td  > 1  <br/> 4  <br/> 9  <br/></td>
								<td  >47</td>
								<td  > 1 <br/> 7 <br/> 9 <br/></td>

								
								<td  > 1  <br/> 1  <br/> 9  <br/></td>
								<td  >19</td>
								<td  > 1 <br/> 1 <br/> 7 <br/></td>

								<td  > 9  <br/> 9  <br/> 0  <br/></td>
								<td  >81</td>
								<td  > 4 <br/> 8 <br/> 9 <br/></td>

								<td  > 2  <br/> 4  <br/> 6  <br/></td>
								<td  >26</td>
								<td  > 2 <br/> 6 <br/> 8 <br/></td>

								<td  > 3  <br/> 4  <br/> 9  <br/></td>
								<td  >67</td>
								<td  > 1 <br/> 7 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 4  <br/> 4  <br/></td>
								<td style={{color:'red'}}>94</td>
								<td style={{color:'red'}}> 3 <br/> 3 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>20/01/20 <br/> To  <br/> 25/01/20</td>
								<td  > 5  <br/> 5  <br/> 9  <br/></td>
								<td  >98</td>
								<td  > 1 <br/> 8 <br/> 9 <br/></td>

								
								<td  > 2  <br/> 7  <br/> 8  <br/></td>
								<td  >76</td>
								<td  > 2 <br/> 4 <br/> 0 <br/></td>

								<td  > 2  <br/> 8  <br/> 0  <br/></td>
								<td  >06</td>
								<td  > 2 <br/> 5 <br/> 9 <br/></td>

								<td  > 1  <br/> 1  <br/> 6  <br/></td>
								<td  >89</td>
								<td  > 4 <br/> 5 <br/> 0 <br/></td>

								<td  > 3  <br/> 3  <br/> 5  <br/></td>
								<td  >13</td>
								<td  > 3 <br/> 0 <br/> 0 <br/></td>

								<td  > 1  <br/> 1  <br/> 2  <br/></td>
								<td  >46</td>
								<td  > 8 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>27/01/20 <br/> To  <br/> 01/02/20</td>
								<td  > 3  <br/> 8  <br/> 0  <br/></td>
								<td  >14</td>
								<td  > 2 <br/> 2 <br/> 0 <br/></td>

								
								<td style={{color:'red'}}> 3  <br/> 9  <br/> 0  <br/></td>
								<td style={{color:'red'}}>27</td>
								<td style={{color:'red'}}> 1 <br/> 6 <br/> 0 <br/></td>

								<td  > 3  <br/> 4  <br/> 0  <br/></td>
								<td  >70</td>
								<td  > 5 <br/> 5 <br/> 0 <br/></td>

								<td  > 2  <br/> 6  <br/> 8  <br/></td>
								<td  >68</td>
								<td  > 3 <br/> 7 <br/> 8 <br/></td>

								<td  > 8  <br/> 8  <br/> 9  <br/></td>
								<td  >54</td>
								<td  > 1 <br/> 6 <br/> 7 <br/></td>

								<td  > 5  <br/> 8  <br/> 8  <br/></td>
								<td  >13</td>
								<td  > 4 <br/> 9 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>03/02/20 <br/> To  <br/> 08/02/20</td>
								<td style={{color:'red'}}> 1  <br/> 4  <br/> 5  <br/></td>
								<td style={{color:'red'}}>05</td>
								<td style={{color:'red'}}> 1 <br/> 6 <br/> 8 <br/></td>

								
								<td  > 6  <br/> 8  <br/> 0  <br/></td>
								<td  >47</td>
								<td  > 2 <br/> 2 <br/> 3 <br/></td>

								<td  > 5  <br/> 5  <br/> 0  <br/></td>
								<td  >08</td>
								<td  > 1 <br/> 3 <br/> 4 <br/></td>

								<td  > 5  <br/> 5  <br/> 8  <br/></td>
								<td  >86</td>
								<td  > 1 <br/> 1 <br/> 4 <br/></td>

								<td  > 1  <br/> 1  <br/> 7  <br/></td>
								<td  >97</td>
								<td  > 1 <br/> 6 <br/> 0 <br/></td>

								<td  > 2  <br/> 7  <br/> 7  <br/></td>
								<td  >67</td>
								<td  > 1 <br/> 2 <br/> 4 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>10/02/20 <br/> To  <br/> 15/02/20</td>
								<td  > 5  <br/> 5  <br/> 6  <br/></td>
								<td  >68</td>
								<td  > 2 <br/> 6 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 4  <br/> 4  <br/></td>
								<td  >92</td>
								<td  > 1 <br/> 3 <br/> 8 <br/></td>

								<td  > 2  <br/> 6  <br/> 9  <br/></td>
								<td  >71</td>
								<td  > 5 <br/> 6 <br/> 0 <br/></td>

								<td  > 1  <br/> 2  <br/> 8  <br/></td>
								<td  >12</td>
								<td  > 1 <br/> 5 <br/> 6 <br/></td>

								<td  > 2  <br/> 4  <br/> 4  <br/></td>
								<td  >06</td>
								<td  > 7 <br/> 9 <br/> 0 <br/></td>

								<td  > 3  <br/> 7  <br/> 7  <br/></td>
								<td  >74</td>
								<td  > 5 <br/> 9 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>17/02/20 <br/> To  <br/> 22/02/20</td>
								<td  > 1  <br/> 2  <br/> 5  <br/></td>
								<td  >81</td>
								<td  > 5 <br/> 6 <br/> 0 <br/></td>

								
								<td  > 3  <br/> 7  <br/> 7  <br/></td>
								<td  >78</td>
								<td  > 4 <br/> 6 <br/> 8 <br/></td>

								<td  > 2  <br/> 9  <br/> 0  <br/></td>
								<td  >13</td>
								<td  > 4 <br/> 9 <br/> 0 <br/></td>

								<td  > 1  <br/> 2  <br/> 5  <br/></td>
								<td  >80</td>
								<td  > 1 <br/> 2 <br/> 7 <br/></td>

								<td  > 1  <br/> 5  <br/> 6  <br/></td>
								<td  >29</td>
								<td  > 2 <br/> 7 <br/> 0 <br/></td>

								<td  > 2  <br/> 4  <br/> 0  <br/></td>
								<td  >68</td>
								<td  > 3 <br/> 5 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>24/02/20 <br/> To  <br/> 29/02/20</td>
								<td  > 1  <br/> 1  <br/> 3  <br/></td>
								<td  >57</td>
								<td  > 1 <br/> 7 <br/> 9 <br/></td>

								
								<td  > 1  <br/> 8  <br/> 0  <br/></td>
								<td  >96</td>
								<td  > 1 <br/> 5 <br/> 0 <br/></td>

								<td  > 2  <br/> 7  <br/> 7  <br/></td>
								<td  >62</td>
								<td  > 4 <br/> 8 <br/> 0 <br/></td>

								<td  > 7  <br/> 7  <br/> 9  <br/></td>
								<td  >31</td>
								<td  > 4 <br/> 7 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 7  <br/> 8  <br/> 0  <br/></td>
								<td style={{color:'red'}}>55</td>
								<td style={{color:'red'}}> 1 <br/> 5 <br/> 9 <br/></td>

								<td  > 1  <br/> 2  <br/> 9  <br/></td>
								<td  >20</td>
								<td  > 1 <br/> 9 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>02/03/20 <br/> To  <br/> 07/03/20</td>
								<td  > 1  <br/> 5  <br/> 7  <br/></td>
								<td  >32</td>
								<td  > 1 <br/> 2 <br/> 9 <br/></td>

								
								<td  > 1  <br/> 2  <br/> 8  <br/></td>
								<td  >18</td>
								<td  > 3 <br/> 5 <br/> 0 <br/></td>

								<td  > 6  <br/> 6  <br/> 0  <br/></td>
								<td  >25</td>
								<td  > 1 <br/> 4 <br/> 0 <br/></td>

								<td  > 1  <br/> 1  <br/> 4  <br/></td>
								<td  >67</td>
								<td  > 1 <br/> 2 <br/> 4 <br/></td>

								<td  > 1  <br/> 4  <br/> 5  <br/></td>
								<td  >04</td>
								<td  > 4 <br/> 5 <br/> 5 <br/></td>

								<td  > 1  <br/> 6  <br/> 9  <br/></td>
								<td  >60</td>
								<td  > 2 <br/> 2 <br/> 6 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>09/03/20 <br/> To  <br/> 14/03/20</td>
								<td  > 5  <br/> 6  <br/> 6  <br/></td>
								<td  >71</td>
								<td  > 2 <br/> 4 <br/> 5 <br/></td>

								
								<td  > 3  <br/> 4  <br/> 0  <br/></td>
								<td  >74</td>
								<td  > 1 <br/> 5 <br/> 8 <br/></td>

								<td  > 1  <br/> 6  <br/> 6  <br/></td>
								<td  >31</td>
								<td  > 1 <br/> 3 <br/> 7 <br/></td>

								<td  > 6  <br/> 8  <br/> 9  <br/></td>
								<td  >36</td>
								<td  > 1 <br/> 2 <br/> 3 <br/></td>

								<td  > 3  <br/> 6  <br/> 7  <br/></td>
								<td  >60</td>
								<td  > 3 <br/> 8 <br/> 9 <br/></td>

								<td  > 2  <br/> 8  <br/> 0  <br/></td>
								<td  >04</td>
								<td  > 2 <br/> 2 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>16/03/20 <br/> To  <br/> 21/03/20</td>
								<td style={{color:'red'}}> 1  <br/> 8  <br/> 0  <br/></td>
								<td style={{color:'red'}}>94</td>
								<td style={{color:'red'}}> 5 <br/> 9 <br/> 0 <br/></td>

								
								<td  > 4  <br/> 7  <br/> 0  <br/></td>
								<td  >13</td>
								<td  > 1 <br/> 3 <br/> 9 <br/></td>

								<td  > 2  <br/> 9  <br/> 9  <br/></td>
								<td  >02</td>
								<td  > 3 <br/> 9 <br/> 0 <br/></td>

								<td  > 1  <br/> 6  <br/> 9  <br/></td>
								<td  >67</td>
								<td  > 7 <br/> 0 <br/> 0 <br/></td>

								<td  > 3  <br/> 6  <br/> 8  <br/></td>
								<td  >79</td>
								<td  > 4 <br/> 5 <br/> 0 <br/></td>

								<td  > 2  <br/> 2  <br/> 3  <br/></td>
								<td  >73</td>
								<td  > 3 <br/> 4 <br/> 6 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>23/03/20 <br/> To  <br/> 28/03/20</td>
								<td  > 1  <br/> 6  <br/> 9  <br/></td>
								<td  >68</td>
								<td  > 3 <br/> 7 <br/> 8 <br/></td>

								
								<td  > 4  <br/> 8  <br/> 9  <br/></td>
								<td  >14</td>
								<td  > 1 <br/> 4 <br/> 9 <br/></td>

								<td  > 5  <br/> 8  <br/> 9  <br/></td>
								<td  >26</td>
								<td  > 4 <br/> 4 <br/> 8 <br/></td>

								<td  > 4  <br/> 4  <br/> 9  <br/></td>
								<td  >76</td>
								<td  > 4 <br/> 5 <br/> 7 <br/></td>

								<td  > 3  <br/> 7  <br/> 9  <br/></td>
								<td  >92</td>
								<td  > 2 <br/> 3 <br/> 7 <br/></td>

								<td  > 8  <br/> 9  <br/> 9  <br/></td>
								<td  >69</td>
								<td  > 1 <br/> 3 <br/> 5 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>30/03/20 <br/> To  <br/> 04/04/20</td>
								<td  > 2  <br/> 2  <br/> 4  <br/></td>
								<td  >81</td>
								<td  > 1 <br/> 3 <br/> 7 <br/></td>

								
								<td style={{color:'red'}}> 2  <br/> 3  <br/> 4  <br/></td>
								<td style={{color:'red'}}>94</td>
								<td style={{color:'red'}}> 1 <br/> 4 <br/> 9 <br/></td>

								<td  > 3  <br/> 5  <br/> 7  <br/></td>
								<td  >54</td>
								<td  > 2 <br/> 3 <br/> 9 <br/></td>

								<td  > 1  <br/> 6  <br/> 9  <br/></td>
								<td  >65</td>
								<td  > 3 <br/> 4 <br/> 8 <br/></td>

								<td  > 2  <br/> 7  <br/> 8  <br/></td>
								<td  >71</td>
								<td  > 6 <br/> 7 <br/> 8 <br/></td>

								<td style={{color:'red'}}> 2  <br/> 4  <br/> 6  <br/></td>
								<td style={{color:'red'}}>27</td>
								<td style={{color:'red'}}> 4 <br/> 5 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>06/04/20 <br/> To  <br/> 11/04/20</td>
								<td  > 3  <br/> 8  <br/> 0  <br/></td>
								<td  >14</td>
								<td  > 1 <br/> 3 <br/> 0 <br/></td>

								
								<td style={{color:'red'}}> 5  <br/> 6  <br/> 9  <br/></td>
								<td style={{color:'red'}}>05</td>
								<td style={{color:'red'}}> 1 <br/> 2 <br/> 2 <br/></td>

								<td  > 1  <br/> 7  <br/> 9  <br/></td>
								<td  >73</td>
								<td  > 2 <br/> 4 <br/> 7 <br/></td>

								<td  > 7  <br/> 9  <br/> 9  <br/></td>
								<td  >57</td>
								<td  > 2 <br/> 6 <br/> 9 <br/></td>

								<td  > 3  <br/> 7  <br/> 9  <br/></td>
								<td  >91</td>
								<td  > 1 <br/> 3 <br/> 7 <br/></td>

								<td  > 2  <br/> 2  <br/> 7  <br/></td>
								<td  >10</td>
								<td  > 3 <br/> 7 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>13/04/20 <br/> To  <br/> 18/04/20</td>
								<td  > 2  <br/> 4  <br/> 9  <br/></td>
								<td  >54</td>
								<td  > 2 <br/> 5 <br/> 7 <br/></td>

								
								<td  > 1  <br/> 4  <br/> 9  <br/></td>
								<td  >43</td>
								<td  > 7 <br/> 8 <br/> 8 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 6  <br/> 7  <br/></td>
								<td style={{color:'red'}}>88</td>
								<td style={{color:'red'}}> 1 <br/> 8 <br/> 9 <br/></td>

								<td  > 4  <br/> 5  <br/> 7  <br/></td>
								<td  >68</td>
								<td  > 4 <br/> 7 <br/> 7 <br/></td>

								<td  > 2  <br/> 2  <br/> 3  <br/></td>
								<td  >71</td>
								<td  > 1 <br/> 4 <br/> 6 <br/></td>

								<td  > 3  <br/> 7  <br/> 9  <br/></td>
								<td  >98</td>
								<td  > 1 <br/> 8 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>20/04/20 <br/> To  <br/> 25/04/20</td>
								<td  > 1  <br/> 3  <br/> 6  <br/></td>
								<td  >07</td>
								<td  > 3 <br/> 5 <br/> 9 <br/></td>

								
								<td  > 1  <br/> 4  <br/> 8  <br/></td>
								<td  >37</td>
								<td  > 1 <br/> 7 <br/> 9 <br/></td>

								<td  > 1  <br/> 7  <br/> 7  <br/></td>
								<td  >53</td>
								<td  > 6 <br/> 8 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 2  <br/> 3  <br/></td>
								<td style={{color:'red'}}>61</td>
								<td style={{color:'red'}}> 2 <br/> 4 <br/> 5 <br/></td>

								<td style={{color:'red'}}> 4  <br/> 8  <br/> 0  <br/></td>
								<td style={{color:'red'}}>22</td>
								<td style={{color:'red'}}> 7 <br/> 7 <br/> 8 <br/></td>

								<td  > 5  <br/> 6  <br/> 0  <br/></td>
								<td  >18</td>
								<td  > 1 <br/> 3 <br/> 4 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>27/04/20 <br/> To  <br/> 02/05/20</td>
								<td  > 4  <br/> 6  <br/> 7  <br/></td>
								<td  >78</td>
								<td  > 4 <br/> 5 <br/> 9 <br/></td>

								
								<td  > 1  <br/> 2  <br/> 6  <br/></td>
								<td  >92</td>
								<td  > 3 <br/> 4 <br/> 5 <br/></td>

								<td  > 1  <br/> 9  <br/> 9  <br/></td>
								<td  >96</td>
								<td  > 1 <br/> 1 <br/> 4 <br/></td>

								<td  > 5  <br/> 9  <br/> 0  <br/></td>
								<td  >41</td>
								<td  > 1 <br/> 3 <br/> 7 <br/></td>

								<td  > 4  <br/> 8  <br/> 0  <br/></td>
								<td  >25</td>
								<td  > 2 <br/> 6 <br/> 7 <br/></td>

								<td  > 1  <br/> 3  <br/> 4  <br/></td>
								<td  >84</td>
								<td  > 6 <br/> 9 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>04/05/20 <br/> To  <br/> 09/05/20</td>
								<td  > 6  <br/> 7  <br/> 8  <br/></td>
								<td  >13</td>
								<td  > 1 <br/> 2 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 5  <br/> 9  <br/></td>
								<td  >58</td>
								<td  > 5 <br/> 5 <br/> 8 <br/></td>

								<td  > 3  <br/> 4  <br/> 0  <br/></td>
								<td  >74</td>
								<td  > 2 <br/> 2 <br/> 0 <br/></td>

								<td  > 3  <br/> 5  <br/> 0  <br/></td>
								<td  >80</td>
								<td  > 4 <br/> 8 <br/> 8 <br/></td>

								<td  > 3  <br/> 0  <br/> 0  <br/></td>
								<td  >39</td>
								<td  > 4 <br/> 5 <br/> 0 <br/></td>

								<td  > 2  <br/> 4  <br/> 0  <br/></td>
								<td  >67</td>
								<td  > 1 <br/> 2 <br/> 4 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>11/05/20 <br/> To  <br/> 16/05/20</td>
								<td style={{color:'red'}}> 4  <br/> 6  <br/> 0  <br/></td>
								<td style={{color:'red'}}>05</td>
								<td style={{color:'red'}}> 4 <br/> 5 <br/> 6 <br/></td>

								
								<td  > 6  <br/> 6  <br/> 0  <br/></td>
								<td  >29</td>
								<td  > 5 <br/> 7 <br/> 7 <br/></td>

								<td  > 5  <br/> 0  <br/> 0  <br/></td>
								<td  >51</td>
								<td  > 6 <br/> 7 <br/> 8 <br/></td>

								<td  > 4  <br/> 6  <br/> 6  <br/></td>
								<td  >67</td>
								<td  > 4 <br/> 5 <br/> 8 <br/></td>

								<td  > 5  <br/> 6  <br/> 7  <br/></td>
								<td  >84</td>
								<td  > 2 <br/> 6 <br/> 6 <br/></td>

								<td  > 2  <br/> 4  <br/> 4  <br/></td>
								<td  >01</td>
								<td  > 3 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>18/05/20 <br/> To  <br/> 23/05/20</td>
								<td  > 4  <br/> 6  <br/> 7  <br/></td>
								<td  >74</td>
								<td  > 1 <br/> 3 <br/> 0 <br/></td>

								
								<td  > 2  <br/> 7  <br/> 7  <br/></td>
								<td  >67</td>
								<td  > 3 <br/> 4 <br/> 0 <br/></td>

								<td  > 5  <br/> 8  <br/> 0  <br/></td>
								<td  >39</td>
								<td  > 1 <br/> 9 <br/> 9 <br/></td>

								<td  > 2  <br/> 3  <br/> 4  <br/></td>
								<td  >92</td>
								<td  > 1 <br/> 1 <br/> 0 <br/></td>

								<td  > 5  <br/> 7  <br/> 8  <br/></td>
								<td  >06</td>
								<td  > 1 <br/> 5 <br/> 0 <br/></td>

								<td  > 8  <br/> 0  <br/> 0  <br/></td>
								<td  >89</td>
								<td  > 2 <br/> 3 <br/> 4 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>25/05/20 <br/> To  <br/> 30/05/20</td>
								<td style={{color:'red'}}> 2  <br/> 2  <br/> 7  <br/></td>
								<td style={{color:'red'}}>16</td>
								<td style={{color:'red'}}> 1 <br/> 2 <br/> 3 <br/></td>

								
								<td  > 2  <br/> 3  <br/> 0  <br/></td>
								<td  >54</td>
								<td  > 2 <br/> 2 <br/> 0 <br/></td>

								<td  > 2  <br/> 4  <br/> 0  <br/></td>
								<td  >62</td>
								<td  > 1 <br/> 1 <br/> 0 <br/></td>

								<td  > 3  <br/> 0  <br/> 0  <br/></td>
								<td  >34</td>
								<td  > 1 <br/> 3 <br/> 0 <br/></td>

								<td  > 3  <br/> 0  <br/> 0  <br/></td>
								<td  >34</td>
								<td  > 1 <br/> 3 <br/> 0 <br/></td>

								<td  > 3  <br/> 0  <br/> 0  <br/></td>
								<td  >34</td>
								<td  > 1 <br/> 3 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>01/06/20 <br/> To  <br/> 06/06/20</td>
								<td  > 3  <br/> 0  <br/> 0  <br/></td>
								<td  >34</td>
								<td  > 1 <br/> 3 <br/> 0 <br/></td>

								
								<td  > 3  <br/> 0  <br/> 0  <br/></td>
								<td  >34</td>
								<td  > 1 <br/> 3 <br/> 0 <br/></td>

								<td  > 1  <br/> 3  <br/> 0  <br/></td>
								<td  >40</td>
								<td  > 1 <br/> 9 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 2  <br/> 2  <br/></td>
								<td style={{color:'red'}}>55</td>
								<td style={{color:'red'}}> 1 <br/> 4 <br/> 0 <br/></td>

								<td  > 3  <br/> 5  <br/> 8  <br/></td>
								<td  >67</td>
								<td  > 4 <br/> 5 <br/> 8 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 4  <br/> 5  <br/></td>
								<td style={{color:'red'}}>27</td>
								<td style={{color:'red'}}> 1 <br/> 2 <br/> 4 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>08/06/20 <br/> To  <br/> 13/06/20</td>
								<td  > 1  <br/> 0  <br/> 0  <br/></td>
								<td  >19</td>
								<td  > 4 <br/> 5 <br/> 0 <br/></td>

								
								<td  > 2  <br/> 0  <br/> 0  <br/></td>
								<td  >24</td>
								<td  > 2 <br/> 2 <br/> 0 <br/></td>

								<td  > 6  <br/> 8  <br/> 0  <br/></td>
								<td  >47</td>
								<td  > 2 <br/> 5 <br/> 0 <br/></td>

								<td  > 2  <br/> 8  <br/> 9  <br/></td>
								<td  >97</td>
								<td  > 3 <br/> 7 <br/> 7 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 5  <br/> 0  <br/></td>
								<td style={{color:'red'}}>05</td>
								<td style={{color:'red'}}> 4 <br/> 5 <br/> 6 <br/></td>

								<td  > 5  <br/> 6  <br/> 7  <br/></td>
								<td  >84</td>
								<td  > 6 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>15/06/20 <br/> To  <br/> 20/06/20</td>
								<td  > 1  <br/> 4  <br/> 7  <br/></td>
								<td  >24</td>
								<td  > 5 <br/> 9 <br/> 0 <br/></td>

								
								<td  > 2  <br/> 5  <br/> 8  <br/></td>
								<td  >57</td>
								<td  > 5 <br/> 5 <br/> 7 <br/></td>

								<td  > 5  <br/> 9  <br/> 9  <br/></td>
								<td  >30</td>
								<td  > 6 <br/> 7 <br/> 7 <br/></td>

								<td  > 3  <br/> 7  <br/> 8  <br/></td>
								<td  >81</td>
								<td  > 3 <br/> 9 <br/> 9 <br/></td>

								<td  > 9  <br/> 0  <br/> 0  <br/></td>
								<td  >90</td>
								<td  > 5 <br/> 7 <br/> 8 <br/></td>

								<td  > 6  <br/> 6  <br/> 0  <br/></td>
								<td  >21</td>
								<td  > 4 <br/> 7 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>01/06/20 <br/> To  <br/> 06/06/20</td>
								<td  > 2  <br/> 2  <br/> 3  <br/></td>
								<td  >76</td>
								<td  > 3 <br/> 5 <br/> 8 <br/></td>

								
								<td  > 1  <br/> 7  <br/> 0  <br/></td>
								<td  >84</td>
								<td  > 2 <br/> 4 <br/> 8 <br/></td>

								<td style={{color:'red'}}> 2  <br/> 7  <br/> 7  <br/></td>
								<td style={{color:'red'}}>61</td>
								<td style={{color:'red'}}> 2 <br/> 4 <br/> 5 <br/></td>

								<td  > 6  <br/> 8  <br/> 8  <br/></td>
								<td  >23</td>
								<td  > 2 <br/> 9 <br/> 9 <br/></td>

								<td  > 5  <br/> 6  <br/> 9  <br/></td>
								<td  >02</td>
								<td  > 6 <br/> 8 <br/> 8 <br/></td>

								<td  > 5  <br/> 9  <br/> 9  <br/></td>
								<td  >30</td>
								<td  > 6 <br/> 7 <br/> 7 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>29/06/20 <br/> To  <br/> 04/07/20</td>
								<td  > 3  <br/> 9  <br/> 9  <br/></td>
								<td  >17</td>
								<td  > 2 <br/> 5 <br/> 0 <br/></td>

								
								<td  > 3  <br/> 7  <br/> 7  <br/></td>
								<td  >73</td>
								<td  > 1 <br/> 5 <br/> 7 <br/></td>

								<td  > 1  <br/> 4  <br/> 7  <br/></td>
								<td  >23</td>
								<td  > 2 <br/> 5 <br/> 6 <br/></td>

								<td style={{color:'red'}}> 4  <br/> 5  <br/> 7  <br/></td>
								<td style={{color:'red'}}>66</td>
								<td style={{color:'red'}}> 2 <br/> 5 <br/> 9 <br/></td>

								<td  > 3  <br/> 8  <br/> 8  <br/></td>
								<td  >97</td>
								<td  > 4 <br/> 6 <br/> 7 <br/></td>

								<td  > 4  <br/> 5  <br/> 8  <br/></td>
								<td  >71</td>
								<td  > 3 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>06/07/20 <br/> To  <br/> 11/07/20</td>
								<td  > 1  <br/> 6  <br/> 8  <br/></td>
								<td  >53</td>
								<td  > 6 <br/> 8 <br/> 9 <br/></td>

								
								<td  > 3  <br/> 3  <br/> 7  <br/></td>
								<td  >32</td>
								<td  > 1 <br/> 5 <br/> 6 <br/></td>

								<td  > 2  <br/> 3  <br/> 6  <br/></td>
								<td  >17</td>
								<td  > 3 <br/> 4 <br/> 0 <br/></td>

								<td  > 3  <br/> 3  <br/> 9  <br/></td>
								<td  >59</td>
								<td  > 1 <br/> 3 <br/> 5 <br/></td>

								<td  > 8  <br/> 9  <br/> 0  <br/></td>
								<td  >79</td>
								<td  > 5 <br/> 6 <br/> 8 <br/></td>

								<td  > 4  <br/> 4  <br/> 5  <br/></td>
								<td  >31</td>
								<td  > 1 <br/> 1 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>13/07/20 <br/> To  <br/> 18/07/20</td>
								<td  > 9  <br/> 9  <br/> 0  <br/></td>
								<td  >86</td>
								<td  > 1 <br/> 7 <br/> 8 <br/></td>

								
								<td  > 4  <br/> 8  <br/> 0  <br/></td>
								<td  >28</td>
								<td  > 4 <br/> 4 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 2  <br/> 8  <br/></td>
								<td style={{color:'red'}}>11</td>
								<td style={{color:'red'}}> 6 <br/> 7 <br/> 8 <br/></td>

								<td  > 3  <br/> 5  <br/> 7  <br/></td>
								<td  >59</td>
								<td  > 5 <br/> 5 <br/> 9 <br/></td>

								<td  > 9  <br/> 0  <br/> 0  <br/></td>
								<td  >98</td>
								<td  > 3 <br/> 5 <br/> 0 <br/></td>

								<td  > 5  <br/> 8  <br/> 8  <br/></td>
								<td  >17</td>
								<td  > 3 <br/> 4 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>20/07/20 <br/> To  <br/> 25/07/20</td>
								<td  > 2  <br/> 5  <br/> 7  <br/></td>
								<td  >41</td>
								<td  > 2 <br/> 4 <br/> 5 <br/></td>

								
								<td  > 2  <br/> 6  <br/> 0  <br/></td>
								<td  >86</td>
								<td  > 1 <br/> 1 <br/> 4 <br/></td>

								<td  > 2  <br/> 2  <br/> 4  <br/></td>
								<td  >87</td>
								<td  > 3 <br/> 4 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 4  <br/> 6  <br/></td>
								<td style={{color:'red'}}>16</td>
								<td style={{color:'red'}}> 2 <br/> 4 <br/> 0 <br/></td>

								<td  > 7  <br/> 8  <br/> 9  <br/></td>
								<td  >43</td>
								<td  > 1 <br/> 5 <br/> 7 <br/></td>

								<td  > 5  <br/> 7  <br/> 9  <br/></td>
								<td  >17</td>
								<td  > 4 <br/> 4 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>27/07/20 <br/> To  <br/> 01/08/20</td>
								<td  > 1  <br/> 2  <br/> 0  <br/></td>
								<td  >32</td>
								<td  > 1 <br/> 2 <br/> 9 <br/></td>

								
								<td style={{color:'red'}}> 6  <br/> 6  <br/> 0  <br/></td>
								<td style={{color:'red'}}>27</td>
								<td style={{color:'red'}}> 5 <br/> 5 <br/> 7 <br/></td>

								<td  > 6  <br/> 6  <br/> 8  <br/></td>
								<td  >06</td>
								<td  > 3 <br/> 4 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 4  <br/> 5  <br/> 0  <br/></td>
								<td style={{color:'red'}}>99</td>
								<td style={{color:'red'}}> 2 <br/> 8 <br/> 9 <br/></td>

								<td  > 1  <br/> 9  <br/> 0  <br/></td>
								<td  >01</td>
								<td  > 4 <br/> 8 <br/> 9 <br/></td>

								<td  > 3  <br/> 0  <br/> 0  <br/></td>
								<td  >37</td>
								<td  > 1 <br/> 2 <br/> 4 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>03/08/20 <br/> To  <br/> 08/08/20</td>
								<td  > 1  <br/> 1  <br/> 5  <br/></td>
								<td  >73</td>
								<td  > 5 <br/> 8 <br/> 0 <br/></td>

								
								<td  > 3  <br/> 6  <br/> 9  <br/></td>
								<td  >87</td>
								<td  > 2 <br/> 5 <br/> 0 <br/></td>

								<td  > 3  <br/> 8  <br/> 0  <br/></td>
								<td  >12</td>
								<td  > 3 <br/> 9 <br/> 0 <br/></td>

								<td  > 7  <br/> 8  <br/> 9  <br/></td>
								<td  >48</td>
								<td  > 4 <br/> 4 <br/> 0 <br/></td>

								<td  > 1  <br/> 2  <br/> 3  <br/></td>
								<td  >67</td>
								<td  > 1 <br/> 1 <br/> 5 <br/></td>

								<td  > 2  <br/> 5  <br/> 5  <br/></td>
								<td  >28</td>
								<td  > 2 <br/> 6 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>10/08/20 <br/> To  <br/> 15/08/20</td>
								<td  > 4  <br/> 5  <br/> 8  <br/></td>
								<td  >79</td>
								<td  > 9 <br/> 0 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 3  <br/> 9  <br/></td>
								<td  >34</td>
								<td  > 1 <br/> 1 <br/> 2 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 9  <br/> 0  <br/></td>
								<td style={{color:'red'}}>49</td>
								<td style={{color:'red'}}> 3 <br/> 8 <br/> 8 <br/></td>

								<td  > 2  <br/> 5  <br/> 8  <br/></td>
								<td  >52</td>
								<td  > 5 <br/> 7 <br/> 0 <br/></td>

								<td  > 2  <br/> 5  <br/> 9  <br/></td>
								<td  >67</td>
								<td  > 4 <br/> 6 <br/> 7 <br/></td>

								<td  > 4  <br/> 4  <br/> 7  <br/></td>
								<td  >59</td>
								<td  > 2 <br/> 6 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>17/08/20 <br/> To  <br/> 22/08/20</td>
								<td  > 7  <br/> 8  <br/> 0  <br/></td>
								<td  >59</td>
								<td  > 1 <br/> 9 <br/> 9 <br/></td>

								
								<td  > 4  <br/> 7  <br/> 8  <br/></td>
								<td  >97</td>
								<td  > 7 <br/> 0 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 8  <br/> 0  <br/></td>
								<td style={{color:'red'}}>16</td>
								<td style={{color:'red'}}> 2 <br/> 6 <br/> 8 <br/></td>

								<td style={{color:'red'}}> 4  <br/> 7  <br/> 7  <br/></td>
								<td style={{color:'red'}}>83</td>
								<td style={{color:'red'}}> 1 <br/> 2 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 0  <br/> 0  <br/></td>
								<td style={{color:'red'}}>50</td>
								<td style={{color:'red'}}> 1 <br/> 4 <br/> 5 <br/></td>

								<td  > 6  <br/> 8  <br/> 0  <br/></td>
								<td  >43</td>
								<td  > 1 <br/> 2 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>24/08/20 <br/> To  <br/> 29/08/20</td>
								<td  > 4  <br/> 5  <br/> 6  <br/></td>
								<td  >54</td>
								<td  > 2 <br/> 4 <br/> 8 <br/></td>

								
								<td  > 6  <br/> 7  <br/> 8  <br/></td>
								<td  >18</td>
								<td  > 1 <br/> 7 <br/> 0 <br/></td>

								<td  > 4  <br/> 4  <br/> 9  <br/></td>
								<td  >74</td>
								<td  > 1 <br/> 1 <br/> 2 <br/></td>

								<td  > 2  <br/> 2  <br/> 9  <br/></td>
								<td  >37</td>
								<td  > 1 <br/> 6 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 2  <br/> 2  <br/> 7  <br/></td>
								<td style={{color:'red'}}>16</td>
								<td style={{color:'red'}}> 1 <br/> 5 <br/> 0 <br/></td>

								<td  > 6  <br/> 9  <br/> 0  <br/></td>
								<td  >54</td>
								<td  > 3 <br/> 3 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>31/08/20 <br/> To  <br/> 05/09/20</td>
								<td  > 1  <br/> 9  <br/> 0  <br/></td>
								<td  >08</td>
								<td  > 4 <br/> 4 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 6  <br/> 0  <br/></td>
								<td  >73</td>
								<td  > 4 <br/> 9 <br/> 0 <br/></td>

								<td  > 5  <br/> 7  <br/> 8  <br/></td>
								<td  >09</td>
								<td  > 3 <br/> 8 <br/> 8 <br/></td>

								<td  > 5  <br/> 5  <br/> 8  <br/></td>
								<td  >87</td>
								<td  > 4 <br/> 4 <br/> 9 <br/></td>

								<td  > 5  <br/> 7  <br/> 9  <br/></td>
								<td  >10</td>
								<td  > 4 <br/> 8 <br/> 8 <br/></td>

								<td  > 2  <br/> 3  <br/> 7  <br/></td>
								<td  >24</td>
								<td  > 1 <br/> 1 <br/> 2 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>07/09/20 <br/> To  <br/> 12/09/20</td>
								<td  > 3  <br/> 6  <br/> 0  <br/></td>
								<td  >97</td>
								<td  > 5 <br/> 5 <br/> 7 <br/></td>

								
								<td  > 1  <br/> 1  <br/> 0  <br/></td>
								<td  >24</td>
								<td  > 6 <br/> 9 <br/> 9 <br/></td>

								<td  > 5  <br/> 6  <br/> 0  <br/></td>
								<td  >17</td>
								<td  > 3 <br/> 6 <br/> 8 <br/></td>

								<td style={{color:'red'}}> 4  <br/> 5  <br/> 9  <br/></td>
								<td style={{color:'red'}}>88</td>
								<td style={{color:'red'}}> 1 <br/> 3 <br/> 4 <br/></td>

								<td  > 2  <br/> 3  <br/> 0  <br/></td>
								<td  >59</td>
								<td  > 1 <br/> 3 <br/> 5 <br/></td>

								<td  > 3  <br/> 6  <br/> 8  <br/></td>
								<td  >70</td>
								<td  > 1 <br/> 9 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>14/09/20 <br/> To  <br/> 19/09/20</td>
								<td  > 6  <br/> 7  <br/> 9  <br/></td>
								<td  >28</td>
								<td  > 2 <br/> 7 <br/> 9 <br/></td>

								
								<td style={{color:'red'}}> 4  <br/> 7  <br/> 9  <br/></td>
								<td style={{color:'red'}}>05</td>
								<td style={{color:'red'}}> 7 <br/> 9 <br/> 9 <br/></td>

								<td  > 3  <br/> 5  <br/> 9  <br/></td>
								<td  >78</td>
								<td  > 3 <br/> 6 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 7  <br/> 9  <br/></td>
								<td style={{color:'red'}}>16</td>
								<td style={{color:'red'}}> 1 <br/> 7 <br/> 8 <br/></td>

								<td  > 6  <br/> 7  <br/> 0  <br/></td>
								<td  >32</td>
								<td  > 2 <br/> 3 <br/> 7 <br/></td>

								<td  > 1  <br/> 2  <br/> 7  <br/></td>
								<td  >09</td>
								<td  > 4 <br/> 6 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>21/09/20 <br/> To  <br/> 26/09/20</td>
								<td  > 1  <br/> 2  <br/> 3  <br/></td>
								<td  >63</td>
								<td  > 3 <br/> 0 <br/> 0 <br/></td>

								
								<td  > 2  <br/> 3  <br/> 7  <br/></td>
								<td  >21</td>
								<td  > 4 <br/> 8 <br/> 9 <br/></td>

								<td  > 5  <br/> 6  <br/> 9  <br/></td>
								<td  >02</td>
								<td  > 5 <br/> 8 <br/> 9 <br/></td>

								<td  > 2  <br/> 6  <br/> 0  <br/></td>
								<td  >89</td>
								<td  > 6 <br/> 6 <br/> 7 <br/></td>

								<td  > 3  <br/> 5  <br/> 8  <br/></td>
								<td  >62</td>
								<td  > 3 <br/> 9 <br/> 0 <br/></td>

								<td  > 4  <br/> 6  <br/> 7  <br/></td>
								<td  >70</td>
								<td  > 2 <br/> 4 <br/> 4 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>28/09/20 <br/> To  <br/> 03/10/20</td>
								<td  > 3  <br/> 8  <br/> 0  <br/></td>
								<td  >13</td>
								<td  > 6 <br/> 8 <br/> 9 <br/></td>

								
								<td  > 2  <br/> 8  <br/> 9  <br/></td>
								<td  >96</td>
								<td  > 3 <br/> 5 <br/> 8 <br/></td>

								<td  > 3  <br/> 5  <br/> 8  <br/></td>
								<td  >64</td>
								<td  > 2 <br/> 2 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 3  <br/> 5  <br/></td>
								<td style={{color:'red'}}>99</td>
								<td style={{color:'red'}}> 5 <br/> 6 <br/> 8 <br/></td>

								<td  > 5  <br/> 7  <br/> 0  <br/></td>
								<td  >29</td>
								<td  > 2 <br/> 8 <br/> 9 <br/></td>

								<td  > 2  <br/> 7  <br/> 9  <br/></td>
								<td  >89</td>
								<td  > 3 <br/> 7 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>05/10/20 <br/> To  <br/> 10/10/20</td>
								<td  > 1  <br/> 2  <br/> 0  <br/></td>
								<td  >32</td>
								<td  > 2 <br/> 2 <br/> 8 <br/></td>

								
								<td  > 1  <br/> 9  <br/> 0  <br/></td>
								<td  >00</td>
								<td  > 1 <br/> 4 <br/> 5 <br/></td>

								<td  > 6  <br/> 7  <br/> 8  <br/></td>
								<td  >17</td>
								<td  > 4 <br/> 6 <br/> 7 <br/></td>

								<td  > 1  <br/> 1  <br/> 4  <br/></td>
								<td  >64</td>
								<td  > 7 <br/> 7 <br/> 0 <br/></td>

								<td  > 3  <br/> 4  <br/> 8  <br/></td>
								<td  >57</td>
								<td  > 3 <br/> 4 <br/> 0 <br/></td>

								<td  > 4  <br/> 7  <br/> 9  <br/></td>
								<td  >08</td>
								<td  > 2 <br/> 6 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>12/10/20 <br/> To  <br/> 17/10/20</td>
								<td  > 4  <br/> 6  <br/> 0  <br/></td>
								<td  >06</td>
								<td  > 3 <br/> 5 <br/> 8 <br/></td>

								
								<td  > 2  <br/> 2  <br/> 6  <br/></td>
								<td  >02</td>
								<td  > 6 <br/> 6 <br/> 0 <br/></td>

								<td  > 2  <br/> 7  <br/> 0  <br/></td>
								<td  >96</td>
								<td  > 1 <br/> 2 <br/> 3 <br/></td>

								<td  > 1  <br/> 6  <br/> 7  <br/></td>
								<td  >42</td>
								<td  > 1 <br/> 4 <br/> 7 <br/></td>

								<td  > 2  <br/> 4  <br/> 6  <br/></td>
								<td  >23</td>
								<td  > 5 <br/> 8 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 9  <br/> 0  <br/></td>
								<td style={{color:'red'}}>44</td>
								<td style={{color:'red'}}> 2 <br/> 3 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>19/10/20 <br/> To  <br/> 24/10/20</td>
								<td  > 5  <br/> 8  <br/> 9  <br/></td>
								<td  >29</td>
								<td  > 2 <br/> 7 <br/> 0 <br/></td>

								
								<td  > 6  <br/> 8  <br/> 9  <br/></td>
								<td  >30</td>
								<td  > 5 <br/> 7 <br/> 8 <br/></td>

								<td  > 3  <br/> 7  <br/> 8  <br/></td>
								<td  >87</td>
								<td  > 8 <br/> 9 <br/> 0 <br/></td>

								<td  > 6  <br/> 6  <br/> 8  <br/></td>
								<td  >09</td>
								<td  > 9 <br/> 0 <br/> 0 <br/></td>

								<td  > 5  <br/> 7  <br/> 0  <br/></td>
								<td  >24</td>
								<td  > 1 <br/> 5 <br/> 8 <br/></td>

								<td  > 5  <br/> 9  <br/> 0  <br/></td>
								<td  >40</td>
								<td  > 3 <br/> 7 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>26/10/20 <br/> To  <br/> 31/10/20</td>
								<td  > 1  <br/> 8  <br/> 9  <br/></td>
								<td  >80</td>
								<td  > 2 <br/> 4 <br/> 4 <br/></td>

								
								<td  > 2  <br/> 0  <br/> 0  <br/></td>
								<td  >29</td>
								<td  > 3 <br/> 6 <br/> 0 <br/></td>

								<td  > 3  <br/> 5  <br/> 6  <br/></td>
								<td  >40</td>
								<td  > 5 <br/> 7 <br/> 8 <br/></td>

								<td  > 1  <br/> 3  <br/> 4  <br/></td>
								<td  >83</td>
								<td  > 1 <br/> 5 <br/> 7 <br/></td>

								<td  > 2  <br/> 2  <br/> 3  <br/></td>
								<td  >75</td>
								<td  > 1 <br/> 5 <br/> 9 <br/></td>

								<td  > 3  <br/> 3  <br/> 8  <br/></td>
								<td  >45</td>
								<td  > 7 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>02/11/20 <br/> To  <br/> 07/11/20</td>
								<td  > 3  <br/> 5  <br/> 6  <br/></td>
								<td  >40</td>
								<td  > 5 <br/> 7 <br/> 8 <br/></td>

								
								<td  > 6  <br/> 7  <br/> 8  <br/></td>
								<td  >17</td>
								<td  > 4 <br/> 6 <br/> 7 <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								 

							</tr>
							 
							<tr>
								<td>09/11/20 <br/> To  <br/> 14/11/20</td>
								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								
								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								 

							</tr>
							 
							<tr>
								<td>16/11/20 <br/> To  <br/> 21/11/20</td>
								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								
								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								 

							</tr>
							 
							<tr>
								<td>23/11/20 <br/> To  <br/> 28/11/20</td>
								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								
								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > 1  <br/> 3  <br/> 4  <br/></td>
								<td  >80</td>
								<td  > 4 <br/> 6 <br/> 0 <br/></td>

								<td  > 1  <br/> 4  <br/> 0  <br/></td>
								<td  >50</td>
								<td  > 3 <br/> 3 <br/> 4 <br/></td>

								<td  > 1  <br/> 7  <br/> 9  <br/></td>
								<td  >72</td>
								<td  > 6 <br/> 7 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>30/11/20 <br/> To  <br/> 05/12/20</td>
								<td  > 5  <br/> 8  <br/> 9  <br/></td>
								<td  >23</td>
								<td  > 2 <br/> 3 <br/> 8 <br/></td>

								
								<td  > 1  <br/> 6  <br/> 0  <br/></td>
								<td  >79</td>
								<td  > 4 <br/> 7 <br/> 8 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 2  <br/> 0  <br/></td>
								<td style={{color:'red'}}>38</td>
								<td style={{color:'red'}}> 3 <br/> 6 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 5  <br/> 6  <br/></td>
								<td style={{color:'red'}}>49</td>
								<td style={{color:'red'}}> 1 <br/> 2 <br/> 6 <br/></td>

								<td style={{color:'red'}}> 2  <br/> 4  <br/> 9  <br/></td>
								<td style={{color:'red'}}>50</td>
								<td style={{color:'red'}}> 4 <br/> 6 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 4  <br/> 0  <br/></td>
								<td style={{color:'red'}}>77</td>
								<td style={{color:'red'}}> 1 <br/> 7 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>07/12/20 <br/> To  <br/> 13/12/20</td>
								<td  > 1  <br/> 2  <br/> 5  <br/></td>
								<td  >87</td>
								<td  > 4 <br/> 5 <br/> 8 <br/></td>

								
								<td  > 6  <br/> 7  <br/> 8  <br/></td>
								<td  >15</td>
								<td  > 3 <br/> 6 <br/> 6 <br/></td>

								<td  > 2  <br/> 5  <br/> 9  <br/></td>
								<td  >63</td>
								<td  > 4 <br/> 9 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 2  <br/> 9  <br/></td>
								<td style={{color:'red'}}>27</td>
								<td style={{color:'red'}}> 2 <br/> 5 <br/> 0 <br/></td>

								<td  > 5  <br/> 7  <br/> 8  <br/></td>
								<td  >04</td>
								<td  > 1 <br/> 5 <br/> 8 <br/></td>

								<td  > 2  <br/> 3  <br/> 0  <br/></td>
								<td  >57</td>
								<td  > 7 <br/> 0 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>14/12/20 <br/> To  <br/> 20/12/20</td>
								<td  > 5  <br/> 6  <br/> 9  <br/></td>
								<td  >01</td>
								<td  > 5 <br/> 6 <br/> 0 <br/></td>

								
								<td  > 5  <br/> 8  <br/> 9  <br/></td>
								<td  >29</td>
								<td  > 4 <br/> 5 <br/> 0 <br/></td>

								<td  > 2  <br/> 4  <br/> 0  <br/></td>
								<td  >67</td>
								<td  > 1 <br/> 6 <br/> 0 <br/></td>

								<td  > 7  <br/> 8  <br/> 9  <br/></td>
								<td  >40</td>
								<td  > 5 <br/> 7 <br/> 8 <br/></td>

								<td  > 4  <br/> 5  <br/> 9  <br/></td>
								<td  >86</td>
								<td  > 1 <br/> 2 <br/> 3 <br/></td>

								<td  > 1  <br/> 5  <br/> 0  <br/></td>
								<td  >63</td>
								<td  > 1 <br/> 3 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>21/12/20 <br/> To  <br/> 27/12/20</td>
								<td  > 3  <br/> 4  <br/> 5  <br/></td>
								<td  >20</td>
								<td  > 1 <br/> 9 <br/> 0 <br/></td>

								
								<td style={{color:'red'}}> 5  <br/> 6  <br/> 8  <br/></td>
								<td style={{color:'red'}}>94</td>
								<td style={{color:'red'}}> 4 <br/> 0 <br/> 0 <br/></td>

								<td  > 2  <br/> 6  <br/> 0  <br/></td>
								<td  >87</td>
								<td  > 2 <br/> 5 <br/> 0 <br/></td>

								<td  > 5  <br/> 7  <br/> 8  <br/></td>
								<td  >06</td>
								<td  > 1 <br/> 6 <br/> 9 <br/></td>

								<td  > 1  <br/> 1  <br/> 5  <br/></td>
								<td  >71</td>
								<td  > 4 <br/> 7 <br/> 0 <br/></td>

								<td  > 3  <br/> 6  <br/> 0  <br/></td>
								<td  >98</td>
								<td  > 9 <br/> 9 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>28/12/20 <br/> To  <br/> 03/01/21</td>
								<td  > 5  <br/> 6  <br/> 0  <br/></td>
								<td  >18</td>
								<td  > 4 <br/> 4 <br/> 0 <br/></td>

								
								<td style={{color:'red'}}> 8  <br/> 9  <br/> 9  <br/></td>
								<td style={{color:'red'}}>66</td>
								<td style={{color:'red'}}> 6 <br/> 0 <br/> 0 <br/></td>

								<td  > 4  <br/> 4  <br/> 0  <br/></td>
								<td  >89</td>
								<td  > 6 <br/> 6 <br/> 7 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 6  <br/> 8  <br/></td>
								<td style={{color:'red'}}>50</td>
								<td style={{color:'red'}}> 4 <br/> 6 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 1  <br/> 8  <br/></td>
								<td style={{color:'red'}}>05</td>
								<td style={{color:'red'}}> 5 <br/> 0 <br/> 0 <br/></td>

								<td  > 1  <br/> 2  <br/> 3  <br/></td>
								<td  >68</td>
								<td  > 1 <br/> 7 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>04/01/21 <br/> To  <br/> 10/01/21</td>
								<td  > 3  <br/> 9  <br/> 0  <br/></td>
								<td  >26</td>
								<td  > 2 <br/> 6 <br/> 8 <br/></td>

								
								<td  > 6  <br/> 7  <br/> 8  <br/></td>
								<td  >17</td>
								<td  > 4 <br/> 5 <br/> 8 <br/></td>

								<td  > 1  <br/> 6  <br/> 9  <br/></td>
								<td  >67</td>
								<td  > 2 <br/> 2 <br/> 3 <br/></td>

								<td  > 1  <br/> 2  <br/> 6  <br/></td>
								<td  >92</td>
								<td  > 5 <br/> 8 <br/> 9 <br/></td>

								<td  > 1  <br/> 4  <br/> 6  <br/></td>
								<td  >18</td>
								<td  > 3 <br/> 5 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 8  <br/> 9  <br/></td>
								<td style={{color:'red'}}>05</td>
								<td style={{color:'red'}}> 1 <br/> 5 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>11/01/21 <br/> To  <br/> 17/01/21</td>
								<td  > 1  <br/> 4  <br/> 7  <br/></td>
								<td  >25</td>
								<td  > 4 <br/> 4 <br/> 7 <br/></td>

								
								<td  > 6  <br/> 7  <br/> 0  <br/></td>
								<td  >34</td>
								<td  > 2 <br/> 4 <br/> 8 <br/></td>

								<td  > 2  <br/> 5  <br/> 8  <br/></td>
								<td  >57</td>
								<td  > 1 <br/> 7 <br/> 9 <br/></td>

								<td  > 5  <br/> 8  <br/> 9  <br/></td>
								<td  >20</td>
								<td  > 1 <br/> 9 <br/> 0 <br/></td>

								<td  > 2  <br/> 7  <br/> 9  <br/></td>
								<td  >81</td>
								<td  > 5 <br/> 8 <br/> 8 <br/></td>

								<td  > 3  <br/> 4  <br/> 6  <br/></td>
								<td  > 31</td>
								<td  > 3 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>18/01/21 <br/> To  <br/> 24/01/21</td>
								<td  > 1  <br/> 8  <br/> 0  <br/></td>
								<td  >90</td>
								<td  > 5 <br/> 7 <br/> 8 <br/></td>

								
								<td  > 1  <br/> 7  <br/> 9  <br/></td>
								<td  >74</td>
								<td  > 1 <br/> 6 <br/> 7 <br/></td>

								<td  > 3  <br/> 8  <br/> 9  <br/></td>
								<td  >08</td>
								<td  > 2 <br/> 7 <br/> 9 <br/></td>

								<td  > 1  <br/> 2  <br/> 5  <br/></td>
								<td  >84</td>
								<td  > 6 <br/> 8 <br/> 0 <br/></td>

								<td  > 2  <br/> 2  <br/> 9  <br/></td>
								<td  >31</td>
								<td  > 1 <br/> 0 <br/> 0 <br/></td>

								<td  > 5  <br/> 6  <br/> 9  <br/></td>
								<td  >09</td>
								<td  > 1 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>25/01/21 <br/> To  <br/> 30/01/21</td>
								<td  > 1  <br/> 5  <br/> 9  <br/></td>
								<td  >57</td>
								<td  > 3 <br/> 4 <br/> 0 <br/></td>

								
								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > 1  <br/> 2  <br/> 5  <br/></td>
								<td  >82</td>
								<td  > 4 <br/> 8 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 7  <br/> 9  <br/></td>
								<td style={{color:'red'}}>16</td>
								<td style={{color:'red'}}> 2 <br/> 4 <br/> 0 <br/></td>

								<td  > 3  <br/> 6  <br/> 0  <br/></td>
								<td  >90</td>
								<td  > 6 <br/> 6 <br/> 8 <br/></td>

								<td  > 5  <br/> 6  <br/> 0  <br/></td>
								<td  >16</td>
								<td  > 2 <br/> 5 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>01/02/21 <br/> To  <br/> 07/02/21</td>
								<td style={{color:'red'}}> 1  <br/> 7  <br/> 9  <br/></td>
								<td style={{color:'red'}}>77</td>
								<td style={{color:'red'}}> 2 <br/> 5 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 1  <br/> 7  <br/></td>
								<td  >93</td>
								<td  > 2 <br/> 5 <br/> 6 <br/></td>

								<td  > 6  <br/> 7  <br/> 8  <br/></td>
								<td  >19</td>
								<td  > 4 <br/> 5 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 2  <br/> 3  <br/> 0  <br/></td>
								<td style={{color:'red'}}>55</td>
								<td style={{color:'red'}}> 8 <br/> 8 <br/> 9 <br/></td>

								<td  > 1  <br/> 2  <br/> 0  <br/></td>
								<td  >38</td>
								<td  > 4 <br/> 5 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 6  <br/> 6  <br/> 9  <br/></td>
								<td style={{color:'red'}}>11</td>
								<td style={{color:'red'}}> 1 <br/> 2 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>08/02/21 <br/> To  <br/> 14/02/21</td>
								<td style={{color:'red'}}> 3  <br/> 7  <br/> 8  <br/></td>
								<td style={{color:'red'}}>83</td>
								<td style={{color:'red'}}> 1 <br/> 2 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 2  <br/> 9  <br/></td>
								<td  >26</td>
								<td  > 3 <br/> 6 <br/> 7 <br/></td>

								<td  > 2  <br/> 6  <br/> 0  <br/></td>
								<td  >87</td>
								<td  > 1 <br/> 2 <br/> 4 <br/></td>

								<td style={{color:'red'}}> 6  <br/> 7  <br/> 8  <br/></td>
								<td style={{color:'red'}}>16</td>
								<td style={{color:'red'}}> 3 <br/> 3 <br/> 0 <br/></td>

								<td  > 2  <br/> 8  <br/> 0  <br/></td>
								<td  >01</td>
								<td  > 6 <br/> 6 <br/> 9 <br/></td>

								<td  > 2  <br/> 4  <br/> 4  <br/></td>
								<td  >09</td>
								<td  > 9 <br/> 0 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>15/02/21 <br/> To  <br/> 21/02/21</td>
								<td  > 1  <br/> 3  <br/> 0  <br/></td>
								<td  >36</td>
								<td  > 7 <br/> 9 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 1  <br/> 0  <br/></td>
								<td  >28</td>
								<td  > 4 <br/> 6 <br/> 8 <br/></td>

								<td  > 1  <br/> 5  <br/> 8  <br/></td>
								<td  >43</td>
								<td  > 5 <br/> 8 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 4  <br/> 5  <br/> 0  <br/></td>
								<td style={{color:'red'}}>94</td>
								<td style={{color:'red'}}> 3 <br/> 5 <br/> 6 <br/></td>

								<td  > 3  <br/> 7  <br/> 0  <br/></td>
								<td  >01</td>
								<td  > 5 <br/> 7 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 5  <br/> 0  <br/></td>
								<td style={{color:'red'}}>05</td>
								<td style={{color:'red'}}> 1 <br/> 6 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>22/02/21 <br/> To  <br/> 28/02/21</td>
								<td  > 4  <br/> 7  <br/> 0  <br/></td>
								<td  >14</td>
								<td  > 7 <br/> 8 <br/> 9 <br/></td>

								
								<td  > 5  <br/> 8  <br/> 8  <br/></td>
								<td  >10</td>
								<td  > 6 <br/> 6 <br/> 8 <br/></td>

								<td  > 5  <br/> 6  <br/> 6  <br/></td>
								<td  >76</td>
								<td  > 2 <br/> 5 <br/> 9 <br/></td>

								<td  > 2  <br/> 6  <br/> 8  <br/></td>
								<td  >63</td>
								<td  > 1 <br/> 5 <br/> 7 <br/></td>

								<td  > 8  <br/> 0  <br/> 0  <br/></td>
								<td  >89</td>
								<td  > 3 <br/> 6 <br/> 0 <br/></td>

								<td  > 4  <br/> 5  <br/> 8  <br/></td>
								<td  >79</td>
								<td  > 3 <br/> 6 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>01/03/21 <br/> To  <br/> 07/03/21</td>
								<td style={{color:'red'}}> 5  <br/> 8  <br/> 9  <br/></td>
								<td style={{color:'red'}}>22</td>
								<td style={{color:'red'}}> 2 <br/> 0 <br/> 0 <br/></td>

								
								<td style={{color:'red'}}> 1  <br/> 9  <br/> 0  <br/></td>
								<td style={{color:'red'}}>05</td>
								<td style={{color:'red'}}> 1 <br/> 1 <br/> 3 <br/></td>

								<td  > 2  <br/> 8  <br/> 9  <br/></td>
								<td  >93</td>
								<td  > 5 <br/> 8 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 8  <br/> 8  <br/></td>
								<td style={{color:'red'}}>94</td>
								<td style={{color:'red'}}> 2 <br/> 6 <br/> 6 <br/></td>

								<td  > 6  <br/> 8  <br/> 9  <br/></td>
								<td  >31</td>
								<td  > 5 <br/> 6 <br/> 0 <br/></td>

								<td  > 6  <br/> 6  <br/> 9  <br/></td>
								<td  >18</td>
								<td  > 5 <br/> 5 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>08/03/21 <br/> To  <br/> 14/03/21</td>
								<td  > 9  <br/> 0  <br/> 0  <br/></td>
								<td  >96</td>
								<td  > 8 <br/> 8 <br/> 0 <br/></td>

								
								<td  > 7  <br/> 7  <br/> 8  <br/></td>
								<td  >28</td>
								<td  > 5 <br/> 6 <br/> 7 <br/></td>

								<td  > 1  <br/> 0  <br/> 0  <br/></td>
								<td  >15</td>
								<td  > 2 <br/> 3 <br/> 0 <br/></td>

								<td  > 1  <br/> 8  <br/> 8  <br/></td>
								<td  >79</td>
								<td  > 5 <br/> 6 <br/> 8 <br/></td>

								<td  > 3  <br/> 0  <br/> 0  <br/></td>
								<td  >35</td>
								<td  > 2 <br/> 4 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 1  <br/> 7  <br/></td>
								<td style={{color:'red'}}>94</td>
								<td style={{color:'red'}}> 4 <br/> 5 <br/> 5 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>15/03/21 <br/> To  <br/> 21/03/21</td>
								<td  > 1  <br/> 4  <br/> 6  <br/></td>
								<td  >13</td>
								<td  > 2 <br/> 3 <br/> 8 <br/></td>

								
								<td style={{color:'red'}}> 1  <br/> 8  <br/> 8  <br/></td>
								<td style={{color:'red'}}>77</td>
								<td style={{color:'red'}}> 3 <br/> 4 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 4  <br/> 9  <br/></td>
								<td style={{color:'red'}}>44</td>
								<td style={{color:'red'}}> 7 <br/> 8 <br/> 9 <br/></td>

								<td  > 2  <br/> 7  <br/> 8  <br/></td>
								<td  >76</td>
								<td  > 3 <br/> 5 <br/> 8 <br/></td>

								<td  > 3  <br/> 6  <br/> 0  <br/></td>
								<td  >95</td>
								<td  > 3 <br/> 5 <br/> 7 <br/></td>

								<td  > 4  <br/> 6  <br/> 0  <br/></td>
								<td  >06</td>
								<td  > 4 <br/> 6 <br/> 6 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>22/03/21 <br/> To  <br/> 28/03/21</td>
								<td  > 6  <br/> 6  <br/> 0  <br/></td>
								<td  >28</td>
								<td  > 3 <br/> 6 <br/> 9 <br/></td>

								
								<td  > 1  <br/> 2  <br/> 6  <br/></td>
								<td  >90</td>
								<td  > 3 <br/> 8 <br/> 9 <br/></td>

								<td  > 9  <br/> 0  <br/> 0  <br/></td>
								<td  >92</td>
								<td  > 1 <br/> 2 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 7  <br/> 7  <br/> 9  <br/></td>
								<td style={{color:'red'}}>33</td>
								<td style={{color:'red'}}> 4 <br/> 9 <br/> 0 <br/></td>

								<td  > 4  <br/> 8  <br/> 9  <br/></td>
								<td  >13</td>
								<td  > 2 <br/> 5 <br/> 6 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 3  <br/> 5  <br/></td>
								<td style={{color:'red'}}>16</td>
								<td style={{color:'red'}}> 3 <br/> 4 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>29/03/21 <br/> To  <br/> 04/04/21</td>
								<td style={{color:'red'}}> *  <br/> *  <br/> *  <br/></td>
								<td style={{color:'red'}}>**</td>
								<td style={{color:'red'}}> * <br/> * <br/> * <br/></td>

								
								<td  > 1  <br/> 1  <br/> 2  <br/></td>
								<td  >48</td>
								<td  > 2 <br/> 7 <br/> 9 <br/></td>

								<td  > 7  <br/> 8  <br/> 0  <br/></td>
								<td  >53</td>
								<td  > 1 <br/> 3 <br/> 9 <br/></td>

								<td  > 1  <br/> 7  <br/> 0  <br/></td>
								<td  >80</td>
								<td  > 4 <br/> 6 <br/> 0 <br/></td>

								<td  > 1  <br/> 5  <br/> 9  <br/></td>
								<td  >54</td>
								<td  > 2 <br/> 5 <br/> 7 <br/></td>

								<td  > 6  <br/> 7  <br/> 0  <br/></td>
								<td  >39</td>
								<td  > 4 <br/> 5 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>05/04/21 <br/> To  <br/> 11/04/21</td>
								<td  > 6  <br/> 7  <br/> 8  <br/></td>
								<td  >10</td>
								<td  > 4 <br/> 8 <br/> 8 <br/></td>

								
								<td  > 2  <br/> 5  <br/> 6  <br/></td>
								<td  >32</td>
								<td  > 5 <br/> 8 <br/> 9 <br/></td>

								<td  > 2  <br/> 3  <br/> 4  <br/></td>
								<td  >96</td>
								<td  > 7 <br/> 9 <br/> 0 <br/></td>

								<td  > 4  <br/> 4  <br/> 7  <br/></td>
								<td  >52</td>
								<td  > 2 <br/> 4 <br/> 6 <br/></td>

								<td  > 1  <br/> 8  <br/> 9  <br/></td>
								<td  >85</td>
								<td  > 2 <br/> 4 <br/> 9 <br/></td>

								<td  > 1  <br/> 9  <br/> 9  <br/></td>
								<td  >93</td>
								<td  > 1 <br/> 3 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>12/04/21 <br/> To  <br/> 18/04/21</td>
								<td  > 1  <br/> 1  <br/> 5  <br/></td>
								<td  >73</td>
								<td  > 3 <br/> 5 <br/> 5 <br/></td>

								
								<td  > 3  <br/> 6  <br/> 0  <br/></td>
								<td  >95</td>
								<td  > 4 <br/> 5 <br/> 6 <br/></td>

								<td style={{color:'red'}}> 4  <br/> 4  <br/> 0  <br/></td>
								<td style={{color:'red'}}>83</td>
								<td style={{color:'red'}}> 2 <br/> 4 <br/> 7 <br/></td>

								<td  > 1  <br/> 5  <br/> 6  <br/></td>
								<td  >24</td>
								<td  > 3 <br/> 4 <br/> 7 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 6  <br/> 0  <br/></td>
								<td style={{color:'red'}}>11</td>
								<td style={{color:'red'}}> 1 <br/> 1 <br/> 9 <br/></td>

								<td  > 2  <br/> 7  <br/> 0  <br/></td>
								<td  >96</td>
								<td  > 5 <br/> 5 <br/> 6 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>19/04/21 <br/> To  <br/> 25/04/21</td>
								<td  > 5  <br/> 5  <br/> 7  <br/></td>
								<td  >75</td>
								<td  > 7 <br/> 8 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 1  <br/> 2  <br/></td>
								<td  >42</td>
								<td  > 4 <br/> 4 <br/> 4 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 5  <br/> 7  <br/></td>
								<td style={{color:'red'}}>50</td>
								<td style={{color:'red'}}> 1 <br/> 9 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 0  <br/> 0  <br/></td>
								<td style={{color:'red'}}>16</td>
								<td style={{color:'red'}}> 3 <br/> 4 <br/> 6 <br/></td>

								<td  > 9  <br/> 0  <br/> 0  <br/></td>
								<td  >98</td>
								<td  > 4 <br/> 6 <br/> 8 <br/></td>

								<td style={{color:'red'}}> 8  <br/> 8  <br/> 8  <br/></td>
								<td style={{color:'red'}}>44</td>
								<td style={{color:'red'}}> 7 <br/> 8 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>26/04/21 <br/> To  <br/> 02/05/21</td>
								<td  > 1  <br/> 5  <br/> 0  <br/></td>
								<td  >65</td>
								<td  > 1 <br/> 4 <br/> 0 <br/></td>

								
								<td  > 3  <br/> 0  <br/> 0  <br/></td>
								<td  >37</td>
								<td  > 3 <br/> 4 <br/> 0 <br/></td>

								<td  > 1  <br/> 5  <br/> 8  <br/></td>
								<td  >42</td>
								<td  > 2 <br/> 5 <br/> 5 <br/></td>

								<td style={{color:'red'}}> 2  <br/> 6  <br/> 8  <br/></td>
								<td style={{color:'red'}}>61</td>
								<td style={{color:'red'}}> 3 <br/> 3 <br/> 5 <br/></td>

								<td  > 1  <br/> 2  <br/> 9  <br/></td>
								<td  >24</td>
								<td  > 4 <br/> 0 <br/> 0 <br/></td>

								<td  > 2  <br/> 7  <br/> 0  <br/></td>
								<td  >98</td>
								<td  > 1 <br/> 8 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>03/05/21 <br/> To  <br/> 09/05/21</td>
								<td  > 1  <br/> 6  <br/> 6  <br/></td>
								<td  >31</td>
								<td  > 5 <br/> 6 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 5  <br/> 9  <br/></td>
								<td  >54</td>
								<td  > 2 <br/> 6 <br/> 6 <br/></td>

								<td  > 1  <br/> 9  <br/> 9  <br/></td>
								<td  >90</td>
								<td  > 3 <br/> 8 <br/> 9 <br/></td>

								<td  > 3  <br/> 5  <br/> 7  <br/></td>
								<td  >51</td>
								<td  > 5 <br/> 8 <br/> 8 <br/></td>

								<td  > 5  <br/> 6  <br/> 9  <br/></td>
								<td  >06</td>
								<td  > 2 <br/> 5 <br/> 9 <br/></td>

								<td  > 8  <br/> 9  <br/> 0  <br/></td>
								<td  >78</td>
								<td  > 4 <br/> 6 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>10/05/21 <br/> To  <br/> 16/05/21</td>
								<td  > 2  <br/> 4  <br/> 6  <br/></td>
								<td  >25</td>
								<td  > 1 <br/> 7 <br/> 7 <br/></td>

								
								<td  > 5  <br/> 5  <br/> 6  <br/></td>
								<td  >63</td>
								<td  > 1 <br/> 3 <br/> 9 <br/></td>

								<td  > 3  <br/> 4  <br/> 0  <br/></td>
								<td  >76</td>
								<td  > 1 <br/> 1 <br/> 4 <br/></td>

								<td  > 4  <br/> 0  <br/> 0  <br/></td>
								<td  >40</td>
								<td  > 1 <br/> 4 <br/> 5 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 2  <br/> 9  <br/></td>
								<td style={{color:'red'}}>22</td>
								<td style={{color:'red'}}> 6 <br/> 8 <br/> 8 <br/></td>

								<td  > 5  <br/> 7  <br/> 7  <br/></td>
								<td  >91</td>
								<td  > 3 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>17/05/21 <br/> To  <br/> 23/05/21</td>
								<td style={{color:'red'}}> 2  <br/> 2  <br/> 6  <br/></td>
								<td style={{color:'red'}}>05</td>
								<td style={{color:'red'}}> 3 <br/> 6 <br/> 6 <br/></td>

								
								<td  > 2  <br/> 7  <br/> 0  <br/></td>
								<td  >98</td>
								<td  > 4 <br/> 5 <br/> 9 <br/></td>

								<td  > 5  <br/> 6  <br/> 9  <br/></td>
								<td  >06</td>
								<td  > 3 <br/> 5 <br/> 8 <br/></td>

								<td  > 1  <br/> 7  <br/> 9  <br/></td>
								<td  >78</td>
								<td  > 2 <br/> 2 <br/> 4 <br/></td>

								<td  > 4  <br/> 5  <br/> 7  <br/></td>
								<td  >60</td>
								<td  > 4 <br/> 8 <br/> 8 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 1  <br/> 4  <br/></td>
								<td style={{color:'red'}}>61</td>
								<td style={{color:'red'}}> 1 <br/> 3 <br/> 7 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>24/05/21 <br/> To  <br/> 30/05/21</td>
								<td  > 6  <br/> 7  <br/> 8  <br/></td>
								<td  >19</td>
								<td  > 4 <br/> 6 <br/> 9 <br/></td>

								
								<td  > 4  <br/> 7  <br/> 0  <br/></td>
								<td  >12</td>
								<td  > 1 <br/> 3 <br/> 8 <br/></td>

								<td  > 1  <br/> 1  <br/> 0  <br/></td>
								<td  >23</td>
								<td  > 5 <br/> 8 <br/> 0 <br/></td>

								<td  > 1  <br/> 6  <br/> 0  <br/></td>
								<td  >79</td>
								<td  > 3 <br/> 7 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 6  <br/> 9  <br/> 0  <br/></td>
								<td style={{color:'red'}}>55</td>
								<td style={{color:'red'}}> 8 <br/> 8 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 5  <br/> 8  <br/></td>
								<td style={{color:'red'}}>83</td>
								<td style={{color:'red'}}> 4 <br/> 4 <br/> 5 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>31/05/21 <br/> To  <br/> 06/06/21</td>
								<td style={{color:'red'}}> 3  <br/> 4  <br/> 7  <br/></td>
								<td style={{color:'red'}}>49</td>
								<td style={{color:'red'}}> 2 <br/> 2 <br/> 5 <br/></td>

								
								<td  > 1  <br/> 1  <br/> 7  <br/></td>
								<td  >92</td>
								<td  > 2 <br/> 3 <br/> 7 <br/></td>

								<td  > 7  <br/> 8  <br/> 0  <br/></td>
								<td  >57</td>
								<td  > 3 <br/> 5 <br/> 9 <br/></td>

								<td  > 1  <br/> 2  <br/> 5  <br/></td>
								<td  >86</td>
								<td  > 3 <br/> 6 <br/> 7 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 4  <br/> 4  <br/></td>
								<td style={{color:'red'}}>16</td>
								<td style={{color:'red'}}> 7 <br/> 9 <br/> 0 <br/></td>

								<td  > 1  <br/> 2  <br/> 9  <br/></td>
								<td  >20</td>
								<td  > 4 <br/> 6 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>07/06/21 <br/> To  <br/> 13/06/21</td>
								<td  > 1  <br/> 7  <br/> 8  <br/></td>
								<td  >64</td>
								<td  > 5 <br/> 9 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 8  <br/> 9  <br/></td>
								<td  >82</td>
								<td  > 1 <br/> 1 <br/> 0 <br/></td>

								<td  > 2  <br/> 8  <br/> 0  <br/></td>
								<td  >30</td>
								<td  > 1 <br/> 3 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 2  <br/> 7  <br/> 8  <br/></td>
								<td style={{color:'red'}}>77</td>
								<td style={{color:'red'}}> 5 <br/> 5 <br/> 7 <br/></td>

								<td  > 5  <br/> 8  <br/> 9  <br/></td>
								<td  >24</td>
								<td  > 6 <br/> 9 <br/> 9 <br/></td>

								<td  > 1  <br/> 9  <br/> 9  <br/></td>
								<td  >93</td>
								<td  > 1 <br/> 3 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>14/06/21 <br/> To  <br/> 20/06/21</td>
								<td  > 4  <br/> 4  <br/> 8  <br/></td>
								<td  >67</td>
								<td  > 2 <br/> 6 <br/> 9 <br/></td>

								
								<td  > 5  <br/> 6  <br/> 0  <br/></td>
								<td  >19</td>
								<td  > 2 <br/> 3 <br/> 4 <br/></td>

								<td  > 1  <br/> 4  <br/> 4  <br/></td>
								<td  >92</td>
								<td  > 4 <br/> 8 <br/> 0 <br/></td>

								<td  > 1  <br/> 5  <br/> 9  <br/></td>
								<td  >56</td>
								<td  > 5 <br/> 5 <br/> 6 <br/></td>

								<td  > 6  <br/> 7  <br/> 9  <br/></td>
								<td  >20</td>
								<td  > 1 <br/> 9 <br/> 0 <br/></td>

								<td  > 1  <br/> 2  <br/> 3  <br/></td>
								<td  >63</td>
								<td  > 7 <br/> 8 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>21/06/21 <br/> To  <br/> 27/06/21</td>
								<td  > 3  <br/> 5  <br/> 0  <br/></td>
								<td  >85</td>
								<td  > 4 <br/> 4 <br/> 7 <br/></td>

								
								<td style={{color:'red'}}> 4  <br/> 9  <br/> 9  <br/></td>
								<td style={{color:'red'}}>27</td>
								<td style={{color:'red'}}> 4 <br/> 6 <br/> 7 <br/></td>

								<td  > 1  <br/> 6  <br/> 0  <br/></td>
								<td  >73</td>
								<td  > 1 <br/> 3 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 2  <br/> 7  <br/></td>
								<td style={{color:'red'}}>00</td>
								<td style={{color:'red'}}> 6 <br/> 7 <br/> 7 <br/></td>

								<td  > 4  <br/> 4  <br/> 5  <br/></td>
								<td  >31</td>
								<td  > 6 <br/> 7 <br/> 8 <br/></td>

								<td  > 3  <br/> 8  <br/> 9  <br/></td>
								<td  >08</td>
								<td  > 2 <br/> 3 <br/> 3 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>28/06/21 <br/> To  <br/> 04/07/21</td>
								<td  > 1  <br/> 4  <br/> 6  <br/></td>
								<td  >19</td>
								<td  > 5 <br/> 5 <br/> 9 <br/></td>

								
								<td  > 2  <br/> 4  <br/> 8  <br/></td>
								<td  >41</td>
								<td  > 1 <br/> 3 <br/> 7 <br/></td>

								<td  > 1  <br/> 1  <br/> 0  <br/></td>
								<td  >24</td>
								<td  > 6 <br/> 8 <br/> 0 <br/></td>

								<td  > 8  <br/> 8  <br/> 0  <br/></td>
								<td  >60</td>
								<td  > 5 <br/> 6 <br/> 9 <br/></td>

								<td  > 1  <br/> 9  <br/> 9  <br/></td>
								<td  >93</td>
								<td  > 1 <br/> 3 <br/> 9 <br/></td>

								<td  > 7  <br/> 9  <br/> 9  <br/></td>
								<td  >56</td>
								<td  > 4 <br/> 6 <br/> 6 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>05/07/21 <br/> To  <br/> 11/07/21</td>
								<td style={{color:'red'}}> 1  <br/> 7  <br/> 9  <br/></td>
								<td style={{color:'red'}}>77</td>
								<td style={{color:'red'}}> 2 <br/> 6 <br/> 9 <br/></td>

								
								<td style={{color:'red'}}> 3  <br/> 3  <br/> 7  <br/></td>
								<td style={{color:'red'}}>38</td>
								<td style={{color:'red'}}> 1 <br/> 7 <br/> 0 <br/></td>

								<td  > 5  <br/> 9  <br/> 0  <br/></td>
								<td  >46</td>
								<td  > 2 <br/> 4 <br/> 0 <br/></td>

								<td  > 1  <br/> 7  <br/> 7  <br/></td>
								<td  >54</td>
								<td  > 4 <br/> 0 <br/> 0 <br/></td>

								<td  > 6  <br/> 6  <br/> 0  <br/></td>
								<td  >23</td>
								<td  > 1 <br/> 4 <br/> 8 <br/></td>

								<td  > 4  <br/> 5  <br/> 8  <br/></td>
								<td  >70</td>
								<td  > 5 <br/> 5 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>12/07/21 <br/> To  <br/> 18/07/21</td>
								<td  > 1  <br/> 1  <br/> 6  <br/></td>
								<td  > 81</td>
								<td  >   <br/> 5 <br/> 6 <br/></td>

								
								<td  > 6  <br/> 7  <br/> 0  <br/></td>
								<td  >34</td>
								<td  > 2 <br/> 5 <br/> 7 <br/></td>

								<td  > 4  <br/> 6  <br/> 9  <br/></td>
								<td  >95</td>
								<td  > 1 <br/> 2 <br/> 2 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 4  <br/> 9  <br/></td>
								<td style={{color:'red'}}>49</td>
								<td style={{color:'red'}}> 2 <br/> 3 <br/> 4 <br/></td>

								<td  > 2  <br/> 8  <br/> 0  <br/></td>
								<td  >01</td>
								<td  > 5 <br/> 6 <br/> 0 <br/></td>

								<td  > 3  <br/> 3  <br/> 6  <br/></td>
								<td  >23</td>
								<td  > 1 <br/> 4 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>19/07/21 <br/> To  <br/> 25/07/21</td>
								<td  > 3  <br/> 3  <br/> 6  <br/></td>
								<td  >23</td>
								<td  > 1 <br/> 4 <br/> 8 <br/></td>

								
								<td style={{color:'red'}}> 3  <br/> 6  <br/> 7  <br/></td>
								<td style={{color:'red'}}>66</td>
								<td style={{color:'red'}}> 4 <br/> 4 <br/> 8 <br/></td>

								<td  > 6  <br/> 7  <br/> 7  <br/></td>
								<td  >08</td>
								<td  > 1 <br/> 7 <br/> 0 <br/></td>

								<td  > 4  <br/> 8  <br/> 9  <br/></td>
								<td  >13</td>
								<td  > 3 <br/> 0 <br/> 0 <br/></td>

								<td  > 2  <br/> 5  <br/> 8  <br/></td>
								<td  >58</td>
								<td  > 5 <br/> 5 <br/> 8 <br/></td>

								<td  > 1  <br/> 3  <br/> 6  <br/></td>
								<td  >02</td>
								<td  > 6 <br/> 7 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>26/07/21 <br/> To  <br/> 31/07/21</td>
								<td style={{color:'red'}}> 2  <br/> 6  <br/> 0  <br/></td>
								<td style={{color:'red'}}>83</td>
								<td style={{color:'red'}}> 2 <br/> 5 <br/> 6 <br/></td>

								
								<td  > 3  <br/> 3  <br/> 7  <br/></td>
								<td  >39</td>
								<td  > 1 <br/> 3 <br/> 5 <br/></td>

								<td  > 1  <br/> 2  <br/> 9  <br/></td>
								<td  >28</td>
								<td  > 3 <br/> 6 <br/> 9 <br/></td>

								<td  > 3  <br/> 4  <br/> 0  <br/></td>
								<td  >76</td>
								<td  > 7 <br/> 9 <br/> 0 <br/></td>

								<td  > 5  <br/> 7  <br/> 0  <br/></td>
								<td  >21</td>
								<td  > 3 <br/> 9 <br/> 9 <br/></td>

								<td  > 1  <br/> 2  <br/> 8  <br/></td>
								<td  >15</td>
								<td  > 1 <br/> 7 <br/> 7 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>26/07/21 <br/> To  <br/> 01/08/21</td>
								<td  > 1  <br/> 1  <br/> 9  <br/></td>
								<td  >16</td>
								<td  > 4 <br/> 6 <br/> 6 <br/></td>

								
								<td  > 2  <br/> 7  <br/> 9  <br/></td>
								<td  >84</td>
								<td  > 1 <br/> 6 <br/> 7 <br/></td>

								<td  > 2  <br/> 5  <br/> 7  <br/></td>
								<td  >40</td>
								<td  > 1 <br/> 2 <br/> 7 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 5  <br/> 8  <br/></td>
								<td style={{color:'red'}}>44</td>
								<td style={{color:'red'}}> 6 <br/> 8 <br/> 0 <br/></td>

								<td  > 6  <br/> 8  <br/> 9  <br/></td>
								<td  >35</td>
								<td  > 1 <br/> 5 <br/> 9 <br/></td>

								<td  > 2  <br/> 3  <br/> 5  <br/></td>
								<td  >03</td>
								<td  > 3 <br/> 3 <br/> 7 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>02/08/21 <br/> To  <br/> 08/08/21</td>
								<td  > 2  <br/> 5  <br/> 0  <br/></td>
								<td  >73</td>
								<td  > 7 <br/> 7 <br/> 9 <br/></td>

								
								<td  > 1  <br/> 2  <br/> 5  <br/></td>
								<td  >86</td>
								<td  > 4 <br/> 5 <br/> 7 <br/></td>

								<td  > 4  <br/> 7  <br/> 7  <br/></td>
								<td  >89</td>
								<td  > 2 <br/> 8 <br/> 9 <br/></td>

								<td  > 1  <br/> 3  <br/> 9  <br/></td>
								<td  >37</td>
								<td  > 8 <br/> 9 <br/> 0 <br/></td>

								<td  > 1  <br/> 2  <br/> 7  <br/></td>
								<td  >01</td>
								<td  > 5 <br/> 8 <br/> 8 <br/></td>

								<td  > 2  <br/> 4  <br/> 9  <br/></td>
								<td  >59</td>
								<td  > 1 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>09/08/21 <br/> To  <br/> 14/08/21</td>
								<td  > 6  <br/> 6  <br/> 7  <br/></td>
								<td  >95</td>
								<td  > 7 <br/> 8 <br/> 0 <br/></td>

								
								<td style={{color:'red'}}> 1  <br/> 3  <br/> 8  <br/></td>
								<td style={{color:'red'}}>27</td>
								<td style={{color:'red'}}> 5 <br/> 6 <br/> 6 <br/></td>

								<td style={{color:'red'}}> 6  <br/> 8  <br/> 9  <br/></td>
								<td style={{color:'red'}}>38</td>
								<td style={{color:'red'}}> 2 <br/> 6 <br/> 0 <br/></td>

								<td  > 1  <br/> 1  <br/> 5  <br/></td>
								<td  >70</td>
								<td  > 4 <br/> 8 <br/> 8 <br/></td>

								<td  > 3  <br/> 6  <br/> 7  <br/></td>
								<td  >68</td>
								<td  > 1 <br/> 7 <br/> 0 <br/></td>

								<td  > 6  <br/> 0  <br/> 0  <br/></td>
								<td  >67</td>
								<td  > 3 <br/> 6 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>16/08/21 <br/> To  <br/> 21/08/21</td>
								<td  > 1  <br/> 7  <br/> 9  <br/></td>
								<td  >71</td>
								<td  > 5 <br/> 6 <br/> 0 <br/></td>

								
								<td  > 3  <br/> 5  <br/> 5  <br/></td>
								<td  >35</td>
								<td  > 8 <br/> 8 <br/> 9 <br/></td>

								<td  > 1  <br/> 9  <br/> 0  <br/></td>
								<td  >01</td>
								<td  > 5 <br/> 7 <br/> 9 <br/></td>

								<td  > 2  <br/> 5  <br/> 8  <br/></td>
								<td  >58</td>
								<td  > 4 <br/> 4 <br/> 0 <br/></td>

								<td  > 2  <br/> 6  <br/> 8  <br/></td>
								<td  >60</td>
								<td  > 5 <br/> 6 <br/> 9 <br/></td>

								<td  > 1  <br/> 3  <br/> 5  <br/></td>
								<td  >92</td>
								<td  > 6 <br/> 8 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>23/08/21 <br/> To  <br/> 29/08/21</td>
								<td  > 1  <br/> 1  <br/> 0  <br/></td>
								<td  >24</td>
								<td  > 6 <br/> 8 <br/> 0 <br/></td>

								
								<td  > 2  <br/> 5  <br/> 6  <br/></td>
								<td  >36</td>
								<td  > 3 <br/> 5 <br/> 8 <br/></td>

								<td  > 4  <br/> 4  <br/> 8  <br/></td>
								<td  >69</td>
								<td  > 1 <br/> 2 <br/> 6 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 6  <br/> 0  <br/></td>
								<td style={{color:'red'}}>94</td>
								<td style={{color:'red'}}> 5 <br/> 9 <br/> 0 <br/></td>

								<td  > 3  <br/> 8  <br/> 9  <br/></td>
								<td  >02</td>
								<td  > 4 <br/> 9 <br/> 9 <br/></td>

								<td  > 2  <br/> 6  <br/> 8  <br/></td>
								<td  >62</td>
								<td  > 3 <br/> 9 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>30/08/21 <br/> To  <br/> 05/09/21</td>
								<td  > 2  <br/> 7  <br/> 7  <br/></td>
								<td  >65</td>
								<td  > 4 <br/> 5 <br/> 6 <br/></td>

								
								<td  > 2  <br/> 9  <br/> 0  <br/></td>
								<td  >13</td>
								<td  > 5 <br/> 8 <br/> 0 <br/></td>

								<td  > 4  <br/> 5  <br/> 9  <br/></td>
								<td  >84</td>
								<td  > 1 <br/> 5 <br/> 8 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 3  <br/> 4  <br/></td>
								<td style={{color:'red'}}>00</td>
								<td style={{color:'red'}}> 1 <br/> 2 <br/> 7 <br/></td>

								<td  > 3  <br/> 6  <br/> 6  <br/></td>
								<td  >56</td>
								<td  > 7 <br/> 9 <br/> 0 <br/></td>

								<td  > 1  <br/> 1  <br/> 7  <br/></td>
								<td  >97</td>
								<td  > 3 <br/> 6 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>06/09/21 <br/> To  <br/> 12/09/21</td>
								<td  > 5  <br/> 6  <br/> 7  <br/></td>
								<td  >84</td>
								<td  > 1 <br/> 4 <br/> 9 <br/></td>

								
								<td  > 3  <br/> 7  <br/> 0  <br/></td>
								<td  >02</td>
								<td  > 7 <br/> 7 <br/> 8 <br/></td>

								<td  > 1  <br/> 4  <br/> 6  <br/></td>
								<td  >13</td>
								<td  > 5 <br/> 9 <br/> 9 <br/></td>

								<td  > 2  <br/> 6  <br/> 7  <br/></td>
								<td  >57</td>
								<td  > 5 <br/> 5 <br/> 7 <br/></td>

								<td  > 1  <br/> 1  <br/> 8  <br/></td>
								<td  >09</td>
								<td  > 2 <br/> 2 <br/> 5 <br/></td>

								<td  > 1  <br/> 6  <br/> 9  <br/></td>
								<td  >65</td>
								<td  > 1 <br/> 7 <br/> 7 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>13/09/21 <br/> To  <br/> 18/09/21</td>
								<td style={{color:'red'}}> 3  <br/> 3  <br/> 8  <br/></td>
								<td style={{color:'red'}}>44</td>
								<td style={{color:'red'}}> 1 <br/> 6 <br/> 7 <br/></td>

								
								<td  > 1  <br/> 3  <br/> 5  <br/></td>
								<td  >95</td>
								<td  > 1 <br/> 2 <br/> 2 <br/></td>

								<td  > 5  <br/> 8  <br/> 0  <br/></td>
								<td  >34</td>
								<td  > 7 <br/> 8 <br/> 9 <br/></td>

								<td  > 2  <br/> 3  <br/> 6  <br/></td>
								<td  >10</td>
								<td  > 2 <br/> 9 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 2  <br/> 9  <br/></td>
								<td style={{color:'red'}}>27</td>
								<td style={{color:'red'}}> 4 <br/> 6 <br/> 7 <br/></td>

								<td  > 2  <br/> 5  <br/> 9  <br/></td>
								<td  >67</td>
								<td  > 5 <br/> 5 <br/> 7 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>13/09/21 <br/> To  <br/> 19/09/21</td>
								<td  > 3  <br/> 3  <br/> 8  <br/></td>
								<td  >44</td>
								<td  > 1 <br/> 6 <br/> 7 <br/></td>

								
								<td  > 1  <br/> 3  <br/> 5  <br/></td>
								<td  >95</td>
								<td  > 1 <br/> 2 <br/> 2 <br/></td>

								<td  > 5  <br/> 8  <br/> 0  <br/></td>
								<td  >34</td>
								<td  > 7 <br/> 8 <br/> 9 <br/></td>

								<td  > 2  <br/> 3  <br/> 6  <br/></td>
								<td  >10</td>
								<td  > 2 <br/> 9 <br/> 9 <br/></td>

								<td  > 1  <br/> 2  <br/> 9  <br/></td>
								<td  >27</td>
								<td  > 4 <br/> 6 <br/> 7 <br/></td>

								<td  > 2  <br/> 5  <br/> 9  <br/></td>
								<td  >67</td>
								<td  > 5 <br/> 5 <br/> 7 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>20/09/21 <br/> To  <br/> 26/09/21</td>
								<td  > 1  <br/> 6  <br/> 8  <br/></td>
								<td  >58</td>
								<td  > 4 <br/> 6 <br/> 8 <br/></td>

								
								<td  > 3  <br/> 6  <br/> 0  <br/></td>
								<td  >91</td>
								<td  > 6 <br/> 7 <br/> 8 <br/></td>

								<td  > 4  <br/> 4  <br/> 7  <br/></td>
								<td  >52</td>
								<td  > 2 <br/> 4 <br/> 6 <br/></td>

								<td  > 7  <br/> 0  <br/> 0  <br/></td>
								<td  >75</td>
								<td  > 3 <br/> 4 <br/> 8 <br/></td>

								<td  > 4  <br/> 7  <br/> 9  <br/></td>
								<td  >08</td>
								<td  > 3 <br/> 6 <br/> 9 <br/></td>

								<td  > 2  <br/> 2  <br/> 0  <br/></td>
								<td  >41</td>
								<td  > 5 <br/> 6 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>27/09/21 <br/> To  <br/> 03/10/21</td>
								<td  > 1  <br/> 5  <br/> 7  <br/></td>
								<td  >35</td>
								<td  > 1 <br/> 4 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 1  <br/> 0  <br/></td>
								<td  >24</td>
								<td  > 6 <br/> 8 <br/> 0 <br/></td>

								<td  > 8  <br/> 0  <br/> 0  <br/></td>
								<td  >89</td>
								<td  > 3 <br/> 7 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 9  <br/> 0  <br/> 0  <br/></td>
								<td style={{color:'red'}}>94</td>
								<td style={{color:'red'}}> 2 <br/> 6 <br/> 6 <br/></td>

								<td  > 2  <br/> 6  <br/> 8  <br/></td>
								<td  >67</td>
								<td  > 1 <br/> 6 <br/> 0 <br/></td>

								<td  > 1  <br/> 2  <br/> 6  <br/></td>
								<td  >92</td>
								<td  > 3 <br/> 9 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>04/10/21 <br/> To  <br/> 10/10/21</td>
								<td  > 1  <br/> 1  <br/> 0  <br/></td>
								<td  >21</td>
								<td  > 5 <br/> 7 <br/> 9 <br/></td>

								
								<td  > 2  <br/> 4  <br/> 6  <br/></td>
								<td  >23</td>
								<td  > 6 <br/> 8 <br/> 9 <br/></td>

								<td  > 3  <br/> 4  <br/> 9  <br/></td>
								<td  >67</td>
								<td  > 2 <br/> 7 <br/> 8 <br/></td>

								<td  > 3  <br/> 4  <br/> 7  <br/></td>
								<td  >40</td>
								<td  > 1 <br/> 3 <br/> 6 <br/></td>

								<td  > 5  <br/> 7  <br/> 8  <br/></td>
								<td  >07</td>
								<td  > 8 <br/> 9 <br/> 0 <br/></td>

								<td  > 1  <br/> 3  <br/> 4  <br/></td>
								<td  >81</td>
								<td  > 3 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>11/10/21 <br/> To  <br/> 17/10/21</td>
								<td style={{color:'red'}}> 3  <br/> 4  <br/> 6  <br/></td>
								<td style={{color:'red'}}>38</td>
								<td style={{color:'red'}}> 4 <br/> 4 <br/> 0 <br/></td>

								
								<td style={{color:'red'}}> 1  <br/> 5  <br/> 9  <br/></td>
								<td style={{color:'red'}}>55</td>
								<td style={{color:'red'}}> 3 <br/> 6 <br/> 6 <br/></td>

								<td  > 4  <br/> 7  <br/> 0  <br/></td>
								<td  >19</td>
								<td  > 4 <br/> 7 <br/> 8 <br/></td>

								<td  > 1  <br/> 6  <br/> 9  <br/></td>
								<td  >63</td>
								<td  > 2 <br/> 5 <br/> 6 <br/></td>

								<td  > 1  <br/> 5  <br/> 6  <br/></td>
								<td  >29</td>
								<td  > 1 <br/> 2 <br/> 6 <br/></td>

								<td style={{color:'red'}}> 2  <br/> 2  <br/> 8  <br/></td>
								<td style={{color:'red'}}>27</td>
								<td style={{color:'red'}}> 4 <br/> 6 <br/> 7 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>18/10/21 <br/> To  <br/> 24/10/21</td>
								<td  > 2  <br/> 3  <br/> 0  <br/></td>
								<td  >58</td>
								<td  > 5 <br/> 6 <br/> 7 <br/></td>

								
								<td  > 1  <br/> 2  <br/> 4  <br/></td>
								<td  >73</td>
								<td  > 5 <br/> 8 <br/> 0 <br/></td>

								<td  > 1  <br/> 2  <br/> 0  <br/></td>
								<td  >36</td>
								<td  > 7 <br/> 9 <br/> 0 <br/></td>

								<td  > 2  <br/> 2  <br/> 5  <br/></td>
								<td  >97</td>
								<td  > 1 <br/> 8 <br/> 8 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 6  <br/> 0  <br/></td>
								<td style={{color:'red'}}>11</td>
								<td style={{color:'red'}}> 3 <br/> 9 <br/> 9 <br/></td>

								<td  > 6  <br/> 9  <br/> 9  <br/></td>
								<td  >48</td>
								<td  > 1 <br/> 7 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>25/10/21 <br/> To  <br/> 31/10/21</td>
								<td  > 3  <br/> 5  <br/> 0  <br/></td>
								<td  >84</td>
								<td  > 1 <br/> 5 <br/> 8 <br/></td>

								
								<td  > 3  <br/> 4  <br/> 5  <br/></td>
								<td  >24</td>
								<td  > 1 <br/> 4 <br/> 9 <br/></td>

								<td  > 4  <br/> 6  <br/> 7  <br/></td>
								<td  >78</td>
								<td  > 1 <br/> 1 <br/> 6 <br/></td>

								<td  > 4  <br/> 7  <br/> 0  <br/></td>
								<td  >13</td>
								<td  > 2 <br/> 5 <br/> 6 <br/></td>

								<td  > 2  <br/> 0  <br/> 0  <br/></td>
								<td  >25</td>
								<td  > 7 <br/> 9 <br/> 9 <br/></td>

								<td  > 1  <br/> 5  <br/> 9  <br/></td>
								<td  >54</td>
								<td  > 5 <br/> 9 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>01/11/21 <br/> To  <br/> 07/11/21</td>
								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								
								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								 

							</tr>
							 
							<tr>
								<td>08/11/21 <br/> To  <br/> 14/11/21</td>
								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								
								<td  > 1  <br/> 6  <br/> 7  <br/></td>
								<td  >41</td>
								<td  > 2 <br/> 3 <br/> 6 <br/></td>

								<td  > 5  <br/> 9  <br/> 9  <br/></td>
								<td  >32</td>
								<td  > 1 <br/> 4 <br/> 7 <br/></td>

								<td  > 3  <br/> 8  <br/> 0  <br/></td>
								<td  >10</td>
								<td  > 4 <br/> 7 <br/> 9 <br/></td>

								<td  > 5  <br/> 5  <br/> 7  <br/></td>
								<td  >78</td>
								<td  > 1 <br/> 3 <br/> 4 <br/></td>

								<td  > 4  <br/> 6  <br/> 9  <br/></td>
								<td  >96</td>
								<td  > 2 <br/> 6 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>15/11/21 <br/> To  <br/> 21/11/21</td>
								<td style={{color:'red'}}> 1  <br/> 7  <br/> 9  <br/></td>
								<td style={{color:'red'}}>72</td>
								<td style={{color:'red'}}> 6 <br/> 8 <br/> 8 <br/></td>

								
								<td style={{color:'red'}}> 4  <br/> 7  <br/> 7  <br/></td>
								<td style={{color:'red'}}>83</td>
								<td style={{color:'red'}}> 1 <br/> 5 <br/> 7 <br/></td>

								<td  > 1  <br/> 9  <br/> 0  <br/></td>
								<td  >03</td>
								<td  > 3 <br/> 5 <br/> 5 <br/></td>

								<td  > 4  <br/> 7  <br/> 0  <br/></td>
								<td  >15</td>
								<td  > 2 <br/> 5 <br/> 8 <br/></td>

								<td  > 6  <br/> 6  <br/> 9  <br/></td>
								<td  >13</td>
								<td  > 4 <br/> 9 <br/> 0 <br/></td>

								<td  > 3  <br/> 6  <br/> 0  <br/></td>
								<td  >98</td>
								<td  > 1 <br/> 8 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>22/11/21 <br/> To  <br/> 28/11/21</td>
								<td  > 1  <br/> 1  <br/> 3  <br/></td>
								<td  >53</td>
								<td  > 2 <br/> 3 <br/> 8 <br/></td>

								
								<td  > 1  <br/> 2  <br/> 7  <br/></td>
								<td  >06</td>
								<td  > 4 <br/> 4 <br/> 8 <br/></td>

								<td  > 7  <br/> 0  <br/> 0  <br/></td>
								<td  >79</td>
								<td  > 5 <br/> 6 <br/> 8 <br/></td>

								<td  > 3  <br/> 7  <br/> 9  <br/></td>
								<td  >91</td>
								<td  > 4 <br/> 8 <br/> 9 <br/></td>

								<td  > 4  <br/> 4  <br/> 6  <br/></td>
								<td  >46</td>
								<td  > 1 <br/> 1 <br/> 4 <br/></td>

								<td  > 1  <br/> 3  <br/> 6  <br/></td>
								<td  >02</td>
								<td  > 7 <br/> 7 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>29/11/21 <br/> To  <br/> 05/12/21</td>
								<td  > 6  <br/> 8  <br/> 0  <br/></td>
								<td  >47</td>
								<td  > 1 <br/> 3 <br/> 3 <br/></td>

								
								<td  > 2  <br/> 5  <br/> 9  <br/></td>
								<td  >68</td>
								<td  > 3 <br/> 7 <br/> 8 <br/></td>

								<td  > 1  <br/> 8  <br/> 0  <br/></td>
								<td  >97</td>
								<td  > 3 <br/> 4 <br/> 0 <br/></td>

								<td  > 3  <br/> 5  <br/> 6  <br/></td>
								<td  >48</td>
								<td  > 2 <br/> 6 <br/> 0 <br/></td>

								<td  > 1  <br/> 3  <br/> 9  <br/></td>
								<td  >39</td>
								<td  > 4 <br/> 6 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 6  <br/> 9  <br/> 0  <br/></td>
								<td style={{color:'red'}}>55</td>
								<td style={{color:'red'}}> 3 <br/> 6 <br/> 6 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>06/12/21 <br/> To  <br/> 12/12/21</td>
								<td  > 4  <br/> 6  <br/> 7  <br/></td>
								<td  >73</td>
								<td  > 1 <br/> 4 <br/> 8 <br/></td>

								
								<td  > 5  <br/> 5  <br/> 8  <br/></td>
								<td  >80</td>
								<td  > 3 <br/> 8 <br/> 9 <br/></td>

								<td  > 2  <br/> 5  <br/> 8  <br/></td>
								<td  >59</td>
								<td  > 9 <br/> 0 <br/> 0 <br/></td>

								<td  > 1  <br/> 4  <br/> 9  <br/></td>
								<td  >40</td>
								<td  > 4 <br/> 7 <br/> 9 <br/></td>

								<td  > 2  <br/> 5  <br/> 7  <br/></td>
								<td  >43</td>
								<td  > 7 <br/> 8 <br/> 8 <br/></td>

								<td  > 2  <br/> 2  <br/> 9  <br/></td>
								<td  >39</td>
								<td  > 1 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>13/12/21 <br/> To  <br/> 19/12/21</td>
								<td  > 4  <br/> 8  <br/> 8  <br/></td>
								<td  >06</td>
								<td  > 1 <br/> 7 <br/> 8 <br/></td>

								
								<td  > 5  <br/> 7  <br/> 7  <br/></td>
								<td  >91</td>
								<td  > 6 <br/> 6 <br/> 9 <br/></td>

								<td  > 3  <br/> 5  <br/> 7  <br/></td>
								<td  >59</td>
								<td  > 1 <br/> 2 <br/> 6 <br/></td>

								<td  > 2  <br/> 7  <br/> 9  <br/></td>
								<td  >87</td>
								<td  > 4 <br/> 5 <br/> 8 <br/></td>

								<td  > 2  <br/> 5  <br/> 7  <br/></td>
								<td  >40</td>
								<td  > 6 <br/> 7 <br/> 7 <br/></td>

								<td  > 1  <br/> 4  <br/> 6  <br/></td>
								<td  >12</td>
								<td  > 4 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>20/12/21 <br/> To  <br/> 26/12/21</td>
								<td  > 5  <br/> 8  <br/> 0  <br/></td>
								<td  >39</td>
								<td  > 3 <br/> 7 <br/> 9 <br/></td>

								
								<td style={{color:'red'}}> 2  <br/> 6  <br/> 0  <br/></td>
								<td style={{color:'red'}}>88</td>
								<td style={{color:'red'}}> 3 <br/> 6 <br/> 9 <br/></td>

								<td  > 1  <br/> 4  <br/> 5  <br/></td>
								<td  >01</td>
								<td  > 3 <br/> 8 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 2  <br/> 7  <br/> 0  <br/></td>
								<td style={{color:'red'}}>94</td>
								<td style={{color:'red'}}> 1 <br/> 5 <br/> 8 <br/></td>

								<td  > 5  <br/> 6  <br/> 9  <br/></td>
								<td  >02</td>
								<td  > 1 <br/> 2 <br/> 9 <br/></td>

								<td  > 2  <br/> 4  <br/> 0  <br/></td>
								<td  >69</td>
								<td  > 4 <br/> 6 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>27/12/21 <br/> To  <br/> 02/01/22</td>
								<td  > 1  <br/> 4  <br/> 0  <br/></td>
								<td  >56</td>
								<td  > 1 <br/> 2 <br/> 3 <br/></td>

								
								<td  > 7  <br/> 8  <br/> 9  <br/></td>
								<td  >48</td>
								<td  > 5 <br/> 6 <br/> 7 <br/></td>

								<td style={{color:'red'}}> 6  <br/> 7  <br/> 0  <br/></td>
								<td style={{color:'red'}}>35</td>
								<td style={{color:'red'}}> 3 <br/> 6 <br/> 6 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 2  <br/> 5  <br/></td>
								<td style={{color:'red'}}>84</td>
								<td style={{color:'red'}}> 1 <br/> 4 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 2  <br/> 3  <br/> 4  <br/></td>
								<td style={{color:'red'}}>90</td>
								<td style={{color:'red'}}> 1 <br/> 4 <br/> 5 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 3  <br/> 4  <br/></td>
								<td style={{color:'red'}}>86</td>
								<td style={{color:'red'}}> 2 <br/> 5 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>03/01/22 <br/> To  <br/> 09/01/22</td>
								<td  > 2  <br/> 4  <br/> 9  <br/></td>
								<td  >52</td>
								<td  > 1 <br/> 4 <br/> 7 <br/></td>

								
								<td style={{color:'red'}}> 4  <br/> 5  <br/> 6  <br/></td>
								<td style={{color:'red'}}>54</td>
								<td style={{color:'red'}}> 7 <br/> 8 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 4  <br/> 7  <br/></td>
								<td style={{color:'red'}}>43</td>
								<td style={{color:'red'}}> 1 <br/> 4 <br/> 8 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 8  <br/> 9  <br/></td>
								<td style={{color:'red'}}>87</td>
								<td style={{color:'red'}}> 1 <br/> 2 <br/> 4 <br/></td>

								<td  > 1  <br/> 2  <br/> 0  <br/></td>
								<td  >34</td>
								<td  > 7 <br/> 8 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 2  <br/> 8  <br/></td>
								<td style={{color:'red'}}>14</td>
								<td style={{color:'red'}}> 4 <br/> 5 <br/> 5 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>10/01/22 <br/> To  <br/> 16/01/22</td>
								<td  > 1  <br/> 2  <br/> 5  <br/></td>
								<td  >82</td>
								<td  > 4 <br/> 8 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 4  <br/> 9  <br/></td>
								<td  >42</td>
								<td  > 5 <br/> 7 <br/> 0 <br/></td>

								<td  > 5  <br/> 8  <br/> 0  <br/></td>
								<td  >31</td>
								<td  > 6 <br/> 6 <br/> 9 <br/></td>

								<td  > 1  <br/> 5  <br/> 6  <br/></td>
								<td  >28</td>
								<td  > 5 <br/> 6 <br/> 7 <br/></td>

								<td  > 8  <br/> 9  <br/> 0  <br/></td>
								<td  >74</td>
								<td  >   <br/>   <br/> 1 <br/></td>

								<td  > 7  <br/> 8  <br/> 9  <br/></td>
								<td  >45</td>
								<td  > 3 <br/> 4 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>17/01/22 <br/> To  <br/> 23/01/22</td>
								<td  > 1  <br/> 3  <br/> 0  <br/></td>
								<td  >46</td>
								<td  > 1 <br/> 7 <br/> 8 <br/></td>

								
								<td style={{color:'red'}}> 3  <br/> 4  <br/> 7  <br/></td>
								<td style={{color:'red'}}>43</td>
								<td style={{color:'red'}}> 2 <br/> 5 <br/> 6 <br/></td>

								<td  > 3  <br/> 6  <br/> 0  <br/></td>
								<td  >90</td>
								<td  > 1 <br/> 9 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 8  <br/> 9  <br/></td>
								<td style={{color:'red'}}>27</td>
								<td style={{color:'red'}}> 3 <br/> 5 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 6  <br/> 7  <br/> 8  <br/></td>
								<td style={{color:'red'}}>11</td>
								<td style={{color:'red'}}>   <br/> 5 <br/> 7 <br/></td>

								<td  > 2  <br/> 4  <br/> 0  <br/></td>
								<td  >69</td>
								<td  > 3 <br/> 6 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>24/01/22 <br/> To  <br/> 30/01/22</td>
								<td  > 3  <br/> 8  <br/> 0  <br/></td>
								<td  >10</td>
								<td  > 3 <br/> 7 <br/> 0 <br/></td>

								
								<td  > 1  <br/> 7  <br/> 0  <br/></td>
								<td  >89</td>
								<td  > 3 <br/> 6 <br/> 0 <br/></td>

								<td  > *  <br/> *  <br/> *  <br/></td>
								<td  >**</td>
								<td  > * <br/> * <br/> * <br/></td>

								<td style={{color:'red'}}> 5  <br/> 8  <br/> 0  <br/></td>
								<td style={{color:'red'}}>38</td>
								<td style={{color:'red'}}> 4 <br/> 5 <br/> 9 <br/></td>

								<td  > 2  <br/> 2  <br/> 3  <br/></td>
								<td  >70</td>
								<td  > 1 <br/> 4 <br/> 5 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 5  <br/> 7  <br/></td>
								<td style={{color:'red'}}>38</td>
								<td style={{color:'red'}}> 3 <br/> 5 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>31/01/22 <br/> To  <br/> 06/02/22</td>
								<td  > 1  <br/> 3  <br/> 0  <br/></td>
								<td  >43</td>
								<td  > 5 <br/> 8 <br/> 0 <br/></td>

								
								<td  > 3  <br/> 4  <br/> 5  <br/></td>
								<td  >29</td>
								<td  > 2 <br/> 8 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 9  <br/> 0  <br/></td>
								<td style={{color:'red'}}>48</td>
								<td style={{color:'red'}}> 1 <br/> 7 <br/> 0 <br/></td>

								<td  > 7  <br/> 8  <br/> 9  <br/></td>
								<td  >40</td>
								<td  > 4 <br/> 6 <br/> 0 <br/></td>

								<td  > 1  <br/> 5  <br/> 0  <br/></td>
								<td  >63</td>
								<td  > 6 <br/> 8 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 6  <br/> 7  <br/> 8  <br/></td>
								<td style={{color:'red'}}>10</td>
								<td style={{color:'red'}}> 5 <br/> 7 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>07/02/22 <br/> To  <br/> 13/02/22</td>
								<td  > 6  <br/> 6  <br/> 9  <br/></td>
								<td  >18</td>
								<td  > 3 <br/> 6 <br/> 9 <br/></td>

								
								<td  > 1  <br/> 2  <br/> 6  <br/></td>
								<td  >96</td>
								<td  > 2 <br/> 6 <br/> 8 <br/></td>

								<td  > 3  <br/> 7  <br/> 0  <br/></td>
								<td  >02</td>
								<td  > 5 <br/> 8 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 3  <br/> 7  <br/></td>
								<td style={{color:'red'}}>16</td>
								<td style={{color:'red'}}> 3 <br/> 4 <br/> 9 <br/></td>

								<td  > 4  <br/> 6  <br/> 0  <br/></td>
								<td  >02</td>
								<td  > 5 <br/> 7 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 4  <br/> 9  <br/></td>
								<td style={{color:'red'}}>49</td>
								<td style={{color:'red'}}> 5 <br/> 6 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>14/02/22 <br/> To  <br/> 20/02/22</td>
								<td  > 3  <br/> 4  <br/> 0  <br/></td>
								<td  >78</td>
								<td  > 1 <br/> 3 <br/> 4 <br/></td>

								
								<td style={{color:'red'}}> 6  <br/> 7  <br/> 0  <br/></td>
								<td style={{color:'red'}}>37</td>
								<td style={{color:'red'}}> 1 <br/> 7 <br/> 9 <br/></td>

								<td  > 4  <br/> 8  <br/> 9  <br/></td>
								<td  >12</td>
								<td  > 5 <br/> 8 <br/> 9 <br/></td>

								<td  > 1  <br/> 3  <br/> 0  <br/></td>
								<td  >47</td>
								<td  > 3 <br/> 4 <br/> 0 <br/></td>

								<td style={{color:'red'}}> 3  <br/> 4  <br/> 0  <br/></td>
								<td style={{color:'red'}}>72</td>
								<td style={{color:'red'}}> 5 <br/> 7 <br/> 0 <br/></td>

								<td  > 1  <br/> 1  <br/> 4  <br/></td>
								<td  >64</td>
								<td  > 6 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>21/02/22 <br/> To  <br/> 27/02/22</td>
								<td  > 2  <br/> 9  <br/> 0  <br/></td>
								<td  >17</td>
								<td  > 1 <br/> 7 <br/> 9 <br/></td>

								
								<td  > 5  <br/> 9  <br/> 0  <br/></td>
								<td  >48</td>
								<td  > 1 <br/> 3 <br/> 4 <br/></td>

								<td  > 4  <br/> 6  <br/> 0  <br/></td>
								<td  >07</td>
								<td  > 8 <br/> 9 <br/> 0 <br/></td>

								<td  > 6  <br/> 7  <br/> 0  <br/></td>
								<td  >36</td>
								<td  > 1 <br/> 2 <br/> 3 <br/></td>

								<td  > 7  <br/> 8  <br/> 9  <br/></td>
								<td  >41</td>
								<td  > 2 <br/> 2 <br/> 7 <br/></td>

								<td  > 5  <br/> 6  <br/> 0  <br/></td>
								<td  >10</td>
								<td  > 5 <br/> 7 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>28/02/22 <br/> To  <br/> 06/03/22</td>
								<td style={{color:'red'}}> 1  <br/> 2  <br/> 5  <br/></td>
								<td style={{color:'red'}}>82</td>
								<td style={{color:'red'}}> 4 <br/> 8 <br/> 0 <br/></td>

								
								<td  > 3  <br/> 4  <br/> 7  <br/></td>
								<td  >46</td>
								<td  > 1 <br/> 6 <br/> 9 <br/></td>

								<td  > 2  <br/> 4  <br/> 7  <br/></td>
								<td  >34</td>
								<td  > 6 <br/> 8 <br/> 0 <br/></td>

								<td  > 5  <br/> 6  <br/> 0  <br/></td>
								<td  >19</td>
								<td  > 1 <br/> 2 <br/> 6 <br/></td>

								<td  > 6  <br/> 8  <br/> 9  <br/></td>
								<td  >34</td>
								<td  > 1 <br/> 3 <br/> 0 <br/></td>

								<td  > 1  <br/> 5  <br/> 0  <br/></td>
								<td  >67</td>
								<td  > 1 <br/> 6 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>07/03/22 <br/> To  <br/> 13/03/22</td>
								<td  > 5  <br/> 7  <br/> 0  <br/></td>
								<td  >20</td>
								<td  > 1 <br/> 2 <br/> 7 <br/></td>

								
								<td  > 3  <br/> 6  <br/> 9  <br/></td>
								<td  >89</td>
								<td  > 5 <br/> 7 <br/> 7 <br/></td>

								<td  > 6  <br/> 7  <br/> 8  <br/></td>
								<td  >14</td>
								<td  > 2 <br/> 2 <br/> 0 <br/></td>

								<td  > 4  <br/> 8  <br/> 0  <br/></td>
								<td  >25</td>
								<td  > 6 <br/> 9 <br/> 0 <br/></td>

								<td  > 2  <br/> 8  <br/> 0  <br/></td>
								<td  >09</td>
								<td  > 5 <br/> 6 <br/> 8 <br/></td>

								<td style={{color:'red'}}> 5  <br/> 6  <br/> 9  <br/></td>
								<td style={{color:'red'}}>05</td>
								<td style={{color:'red'}}> 1 <br/> 6 <br/> 8 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>14/03/22 <br/> To  <br/> 20/03/22</td>
								<td  > 6  <br/> 8  <br/> 9  <br/></td>
								<td  >32</td>
								<td  > 3 <br/> 9 <br/> 0 <br/></td>

								
								<td  > 6  <br/> 7  <br/> 8  <br/></td>
								<td  >18</td>
								<td  > 4 <br/> 5 <br/> 9 <br/></td>

								<td  > 1  <br/> 5  <br/> 7  <br/></td>
								<td  >30</td>
								<td  > 2 <br/> 8 <br/> 0 <br/></td>

								<td  > 5  <br/> 7  <br/> 0  <br/></td>
								<td  >29</td>
								<td  > 1 <br/> 2 <br/> 6 <br/></td>

								<td style={{color:'red'}}> *  <br/> *  <br/> *  <br/></td>
								<td style={{color:'red'}}>**</td>
								<td style={{color:'red'}}> * <br/> * <br/> * <br/></td>

								<td  > 4  <br/> 6  <br/> 0  <br/></td>
								<td  >07</td>
								<td  > 1 <br/> 7 <br/> 9 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>21/03/22 <br/> To  <br/> 27/03/22</td>
								<td  > 4  <br/> 5  <br/> 9  <br/></td>
								<td  >87</td>
								<td  > 1 <br/> 2 <br/> 4 <br/></td>

								
								<td  > 6  <br/> 8  <br/> 0  <br/></td>
								<td  >43</td>
								<td  > 6 <br/> 7 <br/> 0 <br/></td>

								<td  > 1  <br/> 6  <br/> 8  <br/></td>
								<td  >59</td>
								<td  > 1 <br/> 2 <br/> 6 <br/></td>

								<td  > 2  <br/> 3  <br/> 4  <br/></td>
								<td  >98</td>
								<td  > 1 <br/> 8 <br/> 9 <br/></td>

								<td  > 4  <br/> 9  <br/> 9  <br/></td>
								<td  >24</td>
								<td  > 7 <br/> 8 <br/> 9 <br/></td>

								<td  > 2  <br/> 3  <br/> 5  <br/></td>
								<td  >01</td>
								<td  > 3 <br/> 8 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>28/03/22 <br/> To  <br/> 03/04/22</td>
								<td  > 5  <br/> 9  <br/> 0  <br/></td>
								<td  >45</td>
								<td  > 1 <br/> 5 <br/> 9 <br/></td>

								
								<td  > 6  <br/> 8  <br/> 9  <br/></td>
								<td  >38</td>
								<td  > 3 <br/> 6 <br/> 9 <br/></td>

								<td  > 2  <br/> 9  <br/> 0  <br/></td>
								<td  >17</td>
								<td  > 1 <br/> 7 <br/> 9 <br/></td>

								<td style={{color:'red'}}> 1  <br/> 5  <br/> 9  <br/></td>
								<td style={{color:'red'}}>50</td>
								<td style={{color:'red'}}> 2 <br/> 8 <br/> 0 <br/></td>

								<td  > 4  <br/> 6  <br/> 7  <br/></td>
								<td  >78</td>
								<td  > 4 <br/> 5 <br/> 9 <br/></td>

								<td  > 4  <br/> 8  <br/> 9  <br/></td>
								<td  >10</td>
								<td  > 1 <br/> 2 <br/> 7 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>04/04/22 <br/> To  <br/> 10/04/22</td>
								<td  > 2  <br/> 4  <br/> 0  <br/></td>
								<td  >67</td>
								<td  > 3 <br/> 4 <br/> 0 <br/></td>

								
								<td  > 3  <br/> 8  <br/> 9  <br/></td>
								<td  >03</td>
								<td  > 1 <br/> 3 <br/> 9 <br/></td>

								<td  > 1  <br/> 2  <br/> 0  <br/></td>
								<td  >37</td>
								<td  > 3 <br/> 4 <br/> 0 <br/></td>

								<td  > 1  <br/> 2  <br/> 6  <br/></td>
								<td  >93</td>
								<td  > 4 <br/> 9 <br/> 0 <br/></td>

								<td  > 3  <br/> 9  <br/> 0  <br/></td>
								<td  >21</td>
								<td  > 2 <br/> 3 <br/> 6 <br/></td>

								<td  > 1  <br/> 3  <br/> 4  <br/></td>
								<td  >81</td>
								<td  > 4 <br/> 7 <br/> 0 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>11/04/22 <br/> To  <br/> 17/04/22</td>
								<td  > 3  <br/> 9  <br/> 0  <br/></td>
								<td  >21</td>
								<td  > 4 <br/> 8 <br/> 9 <br/></td>

								
								<td style={{color:'red'}}> 3  <br/> 7  <br/> 0  <br/></td>
								<td style={{color:'red'}}>05</td>
								<td style={{color:'red'}}> 1 <br/> 6 <br/> 8 <br/></td>

								<td  > 1  <br/> 5  <br/> 9  <br/></td>
								<td  >54</td>
								<td  > 2 <br/> 2 <br/> 0 <br/></td>

								<td  > 3  <br/> 9  <br/> 0  <br/></td>
								<td  >25</td>
								<td  > 4 <br/> 5 <br/> 6 <br/></td>

								<td  > 6  <br/> 8  <br/> 9  <br/></td>
								<td  >39</td>
								<td  > 1 <br/> 2 <br/> 6 <br/></td>

								<td style={{color:'red'}}> 6  <br/> 7  <br/> 8  <br/></td>
								<td style={{color:'red'}}>11</td>
								<td style={{color:'red'}}> 2 <br/> 4 <br/> 5 <br/></td>

								 

							</tr>
							 
							<tr>
								<td>18/04/22 <br/> To  <br/> 24/04/22</td>
								<td  > 2  <br/> 2  <br/> 0  <br/></td>
								<td  >48</td>
								<td  > 1 <br/> 7 <br/> 0 <br/></td>

								
								<td  > 4  <br/> 4  <br/> 7  <br/></td>
								<td  >56</td>
								<td  > 4 <br/> 5 <br/> 7 <br/></td>

								<td  > 4  <br/> 4  <br/> 5  <br/></td>
								<td  >31</td>
								<td  > 2 <br/> 9 <br/> 0 <br/></td>

								<td  > 3  <br/> 8  <br/> 9  <br/></td>
								<td  >03</td>
								<td  > 5 <br/> 8 <br/> 0 <br/></td>

								<td  > 3  <br/> 0  <br/> 0  <br/></td>
								<td  >31</td>
								<td  > 1 <br/> 5 <br/> 5 <br/></td>

								<td  > 5  <br/> 8  <br/> 0  <br/></td>
								<td  >36</td>
								<td  > 1 <br/> 2 <br/> 3 <br/></td>

								 

							</tr>
							{myList.map(current => {
        return (  
              <tr> 
                <td>
                {current.week.split("to")[0]}
                <br/>to<br/>
                {current.week.split("to")[1]}
                </td> 
            
                {current.number.map(num => {
                  return ( <>
                  <td className=""> {num.split("-")[0].charAt(0)}<br/> {num.split("-")[0].charAt(1)}<br/> {num.split("-")[0].charAt(2)}</td>
                  <td className=""> {num.split("-")[1]}</td>
                  <td className=""> {num.split("-")[2].charAt(0)}<br/> {num.split("-")[2].charAt(1)}<br/> {num.split("-")[2].charAt(2)}</td>
                  </>
                  )
                })}
              </tr> 
        );
      })}
						</tbody>
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



    