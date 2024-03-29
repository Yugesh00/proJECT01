import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBListGroupItem } from "mdbreact";  
import { Link } from "react-router-dom";
import DataService from "../../services/database" 
import './../table.css'
import { Tabs, Button,  Row, Col, Checkbox, Input, Spin  } from 'antd';
import firebase from "./../firebase";

const db = firebase;


const Kalyanp = () => { 
   const [loading, setLoading] = useState(true);
   const [myList, setMyList] = useState(true);

   
   useEffect(() => {
      getUser()
    }, [loading]);  
   
    const getUser = () =>{
      const getPostsFromFirebase = [];
      const subscriber = db.collection("market_charts").doc("kalyan").collection("jodi")
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
          KALYAN
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
      <td>23-01-2017<br/> To <br/> 28-01-2017</td>
      <td>1 <br/> 6 <br/> 8 <br/></td>
      <td>59</td>
      <td>6<br/> 6<br/> 7<br/></td>
      <td>2 <br/> 4 <br/> 5 <br/></td>
      <td>18</td>
      <td>3<br/> 7<br/> 8<br/></td>
      <td  className="r"> 2 <br/> 3 <br/> 4 <br/></td>
      <td  className="r">99</td>
      <td  className="r"> 6<br/> 6<br/> 7<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td>2 <br/> 6 <br/> 8 <br/></td>
      <td>65</td>
      <td>2<br/> 6<br/> 7<br/></td>
      <td>5 <br/> 5 <br/> 7 <br/></td>
      <td>78</td>
      <td>2<br/> 6<br/> 0<br/></td>
   </tr>
   <tr>
      <td>30-01-2017<br/> To <br/> 04-02-2017</td>
      <td  className="r"> 1 <br/> 3 <br/> 8 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 3<br/> 9<br/> 0<br/></td>
      <td>3 <br/> 8 <br/> 9 <br/></td>
      <td>08</td>
      <td>4<br/> 6<br/> 8<br/></td>
      <td>4 <br/> 7 <br/> 8 <br/></td>
      <td>96</td>
      <td>1<br/> 2<br/> 3<br/></td>
      <td>6 <br/> 7 <br/> 0 <br/></td>
      <td>31</td>
      <td>2<br/> 3<br/> 6<br/></td>
      <td>2 <br/> 5 <br/> 0 <br/></td>
      <td>75</td>
      <td>2<br/> 4<br/> 9<br/></td>
      <td>3 <br/> 8 <br/> 0 <br/></td>
      <td>10</td>
      <td>1<br/> 3<br/> 6<br/></td>
   </tr>
   <tr>
      <td>06-02-2017<br/> To <br/> 11-02-2017</td>
      <td>3 <br/> 5 <br/> 7 <br/></td>
      <td>53</td>
      <td>1<br/> 4<br/> 8<br/></td>
      <td  className="r"> 1 <br/> 4 <br/> 7 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 5<br/> 8<br/> 9<br/></td>
      <td>4 <br/> 6 <br/> 9 <br/></td>
      <td>96</td>
      <td>1<br/> 7<br/> 8<br/></td>
      <td>1 <br/> 5 <br/> 9 <br/></td>
      <td>56</td>
      <td>3<br/> 5<br/> 8<br/></td>
      <td>3 <br/> 9 <br/> 0 <br/></td>
      <td>24</td>
      <td>4<br/> 4<br/> 6<br/></td>
      <td>3 <br/> 4 <br/> 6 <br/></td>
      <td>32</td>
      <td>1<br/> 4<br/> 7<br/></td>
   </tr>
   <tr>
      <td>13-02-2017<br/> To <br/> 18-02-2017</td>
      <td>3 <br/> 3 <br/> 5 <br/></td>
      <td>10</td>
      <td>2<br/> 2<br/> 6<br/></td>
      <td  className="r"> 4 <br/> 5 <br/> 0 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 1<br/> 5<br/> 8<br/></td>
      <td>3 <br/> 6 <br/> 0 <br/></td>
      <td>91</td>
      <td>5<br/> 7<br/> 9<br/></td>
      <td  className="r"> 1 <br/> 3 <br/> 5 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 4<br/> 0<br/> 0<br/></td>
      <td>4 <br/> 9 <br/> 0 <br/></td>
      <td>32</td>
      <td>6<br/> 7<br/> 9<br/></td>
      <td>6 <br/> 7 <br/> 0 <br/></td>
      <td>35</td>
      <td>2<br/> 4<br/> 9<br/></td>
   </tr>
   <tr>
      <td>20-02-2017<br/> To <br/> 25-02-2017</td>
      <td>2 <br/> 3 <br/> 8 <br/></td>
      <td>35</td>
      <td>3<br/> 6<br/> 6<br/></td>
      <td>1 <br/> 5 <br/> 9 <br/></td>
      <td>58</td>
      <td>2<br/> 7<br/> 9<br/></td>
      <td>6 <br/> 8 <br/> 9 <br/></td>
      <td>35</td>
      <td>2<br/> 6<br/> 7<br/></td>
      <td>4 <br/> 6 <br/> 7 <br/></td>
      <td>73</td>
      <td>1<br/> 4<br/> 8<br/></td>
      <td>5 <br/> 6 <br/> 9 <br/></td>
      <td>04</td>
      <td>6<br/> 8<br/> 0<br/></td>
      <td>3 <br/> 5 <br/> 6 <br/></td>
      <td>45</td>
      <td>8<br/> 8<br/> 9<br/></td>
   </tr>
   <tr>
      <td>27-02-2017<br/> To <br/> 04-03-2017</td>
      <td>1 <br/> 2 <br/> 5 <br/></td>
      <td>82</td>
      <td>1<br/> 3<br/> 8<br/></td>
      <td>3 <br/> 7 <br/> 8 <br/></td>
      <td>89</td>
      <td>4<br/> 6<br/> 9<br/></td>
      <td>2 <br/> 3 <br/> 9 <br/></td>
      <td>43</td>
      <td>7<br/> 7<br/> 9<br/></td>
      <td>1 <br/> 6 <br/> 7 <br/></td>
      <td>43</td>
      <td>3<br/> 5<br/> 5<br/></td>
      <td>1 <br/> 5 <br/> 8 <br/></td>
      <td>47</td>
      <td>5<br/> 5<br/> 7<br/></td>
      <td  className="r"> 5 <br/> 7 <br/> 9 <br/></td>
      <td  className="r">16</td>
      <td  className="r"> 3<br/> 3<br/> 0<br/></td>
   </tr>
   <tr>
      <td>06-03-2017<br/> To <br/> 11-03-2017</td>
      <td  className="r"> 6 <br/> 8 <br/> 8 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 4<br/> 8<br/> 0<br/></td>
      <td>5 <br/> 9 <br/> 0 <br/></td>
      <td>46</td>
      <td>2<br/> 7<br/> 7<br/></td>
      <td>1 <br/> 3 <br/> 0 <br/></td>
      <td>46</td>
      <td>1<br/> 6<br/> 9<br/></td>
      <td>2 <br/> 3 <br/> 8 <br/></td>
      <td>35</td>
      <td>4<br/> 5<br/> 6<br/></td>
      <td>4 <br/> 6 <br/> 0 <br/></td>
      <td>01</td>
      <td>5<br/> 7<br/> 9<br/></td>
      <td>3 <br/> 5 <br/> 6 <br/></td>
      <td>40</td>
      <td>2<br/> 3<br/> 5<br/></td>
   </tr>
   <tr>
      <td>13-03-2017<br/> To <br/> 18-03-2017</td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td>3 <br/> 5 <br/> 0 <br/></td>
      <td>81</td>
      <td>3<br/> 4<br/> 4<br/></td>
      <td  className="r"> 1 <br/> 4 <br/> 7 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 2<br/> 0<br/> 0<br/></td>
      <td>3 <br/> 9 <br/> 0 <br/></td>
      <td>25</td>
      <td>2<br/> 6<br/> 7<br/></td>
      <td>1 <br/> 6 <br/> 0 <br/></td>
      <td>70</td>
      <td>4<br/> 8<br/> 8<br/></td>
      <td>5 <br/> 7 <br/> 7 <br/></td>
      <td>95</td>
      <td>1<br/> 6<br/> 8<br/></td>
   </tr>
   <tr>
      <td>20-03-2017<br/> To <br/> 25-03-2017</td>
      <td>2 <br/> 5 <br/> 6 <br/></td>
      <td>30</td>
      <td>2<br/> 8<br/> 0<br/></td>
      <td>1 <br/> 5 <br/> 9 <br/></td>
      <td>52</td>
      <td>2<br/> 0<br/> 0<br/></td>
      <td>1 <br/> 8 <br/> 9 <br/></td>
      <td>86</td>
      <td>2<br/> 4<br/> 0<br/></td>
      <td>4 <br/> 5 <br/> 9 <br/></td>
      <td>81</td>
      <td>2<br/> 9<br/> 0<br/></td>
      <td  className="r"> 6 <br/> 7 <br/> 8 <br/></td>
      <td  className="r">11</td>
      <td  className="r"> 5<br/> 7<br/> 9<br/></td>
      <td  className="r"> 3 <br/> 5 <br/> 8 <br/></td>
      <td  className="r">61</td>
      <td  className="r"> 5<br/> 6<br/> 0<br/></td>
   </tr>
   <tr>
      <td>27-03-2017<br/> To <br/> 01-04-2017</td>
      <td>2 <br/> 3 <br/> 0 <br/></td>
      <td>57</td>
      <td>1<br/> 8<br/> 8<br/></td>
      <td>3 <br/> 9 <br/> 9 <br/></td>
      <td>12</td>
      <td>4<br/> 9<br/> 9<br/></td>
      <td>6 <br/> 6 <br/> 8 <br/></td>
      <td>06</td>
      <td>2<br/> 7<br/> 7<br/></td>
      <td>2 <br/> 3 <br/> 6 <br/></td>
      <td>18</td>
      <td>5<br/> 6<br/> 7<br/></td>
      <td>3 <br/> 6 <br/> 7 <br/></td>
      <td>65</td>
      <td>1<br/> 5<br/> 9<br/></td>
      <td>3 <br/> 4 <br/> 7 <br/></td>
      <td>42</td>
      <td>2<br/> 0<br/> 0<br/></td>
   </tr>
   <tr>
      <td>03-04-2017<br/> To <br/> 08-04-2017</td>
      <td  className="r"> 4 <br/> 7 <br/> 0 <br/></td>
      <td  className="r">16</td>
      <td  className="r"> 2<br/> 4<br/> 0<br/></td>
      <td>4 <br/> 6 <br/> 9 <br/></td>
      <td>93</td>
      <td>2<br/> 5<br/> 6<br/></td>
      <td  className="r"> 2 <br/> 3 <br/> 6 <br/></td>
      <td  className="r">11</td>
      <td  className="r"> 4<br/> 7<br/> 0<br/></td>
      <td>3 <br/> 4 <br/> 7 <br/></td>
      <td>42</td>
      <td>3<br/> 4<br/> 5<br/></td>
      <td>4 <br/> 4 <br/> 5 <br/></td>
      <td>35</td>
      <td>3<br/> 3<br/> 9<br/></td>
      <td>5 <br/> 5 <br/> 8 <br/></td>
      <td>87</td>
      <td>2<br/> 2<br/> 3<br/></td>
   </tr>
   <tr>
      <td>10-04-2017<br/> To <br/> 15-04-2017</td>
      <td>4 <br/> 6 <br/> 9 <br/></td>
      <td>93</td>
      <td>3<br/> 4<br/> 6<br/></td>
      <td>4 <br/> 5 <br/> 9 <br/></td>
      <td>82</td>
      <td>6<br/> 6<br/> 0<br/></td>
      <td>1 <br/> 6 <br/> 8 <br/></td>
      <td>57</td>
      <td>1<br/> 6<br/> 0<br/></td>
      <td>4 <br/> 6 <br/> 8 <br/></td>
      <td>81</td>
      <td>1<br/> 4<br/> 6<br/></td>
      <td>1 <br/> 6 <br/> 8 <br/></td>
      <td>58</td>
      <td>3<br/> 6<br/> 9<br/></td>
      <td>2 <br/> 4 <br/> 5 <br/></td>
      <td>17</td>
      <td>1<br/> 6<br/> 0<br/></td>
   </tr>
   <tr>
      <td>17-04-2017<br/> To <br/> 22-04-2017</td>
      <td  className="r"> 1 <br/> 8 <br/> 0 <br/></td>
      <td  className="r">99</td>
      <td  className="r"> 2<br/> 3<br/> 4<br/></td>
      <td  className="r"> 1 <br/> 3 <br/> 9 <br/></td>
      <td  className="r">38</td>
      <td  className="r"> 8<br/> 0<br/> 0<br/></td>
      <td>2 <br/> 3 <br/> 4 <br/></td>
      <td>92</td>
      <td>1<br/> 2<br/> 9<br/></td>
      <td  className="r"> 1 <br/> 6 <br/> 9 <br/></td>
      <td  className="r">66</td>
      <td  className="r"> 3<br/> 6<br/> 7<br/></td>
      <td>5 <br/> 6 <br/> 0 <br/></td>
      <td>10</td>
      <td>1<br/> 2<br/> 7<br/></td>
      <td>3 <br/> 5 <br/> 8 <br/></td>
      <td>68</td>
      <td>1<br/> 7<br/> 0<br/></td>
   </tr>
   <tr>
      <td>24-04-2017<br/> To <br/> 29-04-2017</td>
      <td>4 <br/> 5 <br/> 0 <br/></td>
      <td>98</td>
      <td>8<br/> 0<br/> 0<br/></td>
      <td>4 <br/> 5 <br/> 6 <br/></td>
      <td>59</td>
      <td>1<br/> 3<br/> 5<br/></td>
      <td>6 <br/> 9 <br/> 0 <br/></td>
      <td>56</td>
      <td>4<br/> 4<br/> 8<br/></td>
      <td>3 <br/> 5 <br/> 7 <br/></td>
      <td>58</td>
      <td>4<br/> 5<br/> 9<br/></td>
      <td>4 <br/> 8 <br/> 8 <br/></td>
      <td>06</td>
      <td>5<br/> 5<br/> 6<br/></td>
      <td>4 <br/> 8 <br/> 0 <br/></td>
      <td>28</td>
      <td>3<br/> 7<br/> 8<br/></td>
   </tr>
   <tr>
      <td>01-05-2017<br/> To <br/> 06-05-2017</td>
      <td  className="r"> 1 <br/> 3 <br/> 6 <br/></td>
      <td  className="r">05</td>
      <td  className="r"> 4<br/> 5<br/> 6<br/></td>
      <td  className="r"> 8 <br/> 9 <br/> 0 <br/></td>
      <td  className="r">77</td>
      <td  className="r"> 3<br/> 6<br/> 8<br/></td>
      <td>6 <br/> 7 <br/> 9 <br/></td>
      <td>28</td>
      <td>1<br/> 2<br/> 5<br/></td>
      <td>3 <br/> 8 <br/> 0 <br/></td>
      <td>14</td>
      <td>7<br/> 8<br/> 9<br/></td>
      <td  className="r"> 4 <br/> 9 <br/> 0 <br/></td>
      <td  className="r">33</td>
      <td  className="r"> 2<br/> 4<br/> 7<br/></td>
      <td>1 <br/> 8 <br/> 0 <br/></td>
      <td>92</td>
      <td>1<br/> 3<br/> 8<br/></td>
   </tr>
   <tr>
      <td>08-05-2017<br/> To <br/> 13-05-2017</td>
      <td>1 <br/> 3 <br/> 6 <br/></td>
      <td>01</td>
      <td>2<br/> 9<br/> 0<br/></td>
      <td>1 <br/> 2 <br/> 4 <br/></td>
      <td>79</td>
      <td>2<br/> 7<br/> 0<br/></td>
      <td>1 <br/> 2 <br/> 4 <br/></td>
      <td>76</td>
      <td>3<br/> 4<br/> 9<br/></td>
      <td>1 <br/> 3 <br/> 4 <br/></td>
      <td>89</td>
      <td>3<br/> 3<br/> 3<br/></td>
      <td>4 <br/> 6 <br/> 8 <br/></td>
      <td>87</td>
      <td>1<br/> 6<br/> 0<br/></td>
      <td>2 <br/> 9 <br/> 0 <br/></td>
      <td>17</td>
      <td>2<br/> 5<br/> 0<br/></td>
   </tr>
   <tr>
      <td>15-05-2017<br/> To <br/> 20-05-2017</td>
      <td>1 <br/> 5 <br/> 6 <br/></td>
      <td>28</td>
      <td>1<br/> 8<br/> 9<br/></td>
      <td  className="r"> 2 <br/> 7 <br/> 0 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 4<br/> 5<br/> 5<br/></td>
      <td>4 <br/> 6 <br/> 8 <br/></td>
      <td>86</td>
      <td>4<br/> 6<br/> 6<br/></td>
      <td>2 <br/> 7 <br/> 9 <br/></td>
      <td>80</td>
      <td>4<br/> 8<br/> 8<br/></td>
      <td>3 <br/> 4 <br/> 5 <br/></td>
      <td>25</td>
      <td>5<br/> 0<br/> 0<br/></td>
      <td>2 <br/> 5 <br/> 7 <br/></td>
      <td>46</td>
      <td>3<br/> 4<br/> 9<br/></td>
   </tr>
   <tr>
      <td>22-05-2017<br/> To <br/> 27-05-2017</td>
      <td  className="r"> 4 <br/> 5 <br/> 8 <br/></td>
      <td  className="r">77</td>
      <td  className="r"> 8<br/> 9<br/> 0<br/></td>
      <td>3 <br/> 3 <br/> 8 <br/></td>
      <td>42</td>
      <td>1<br/> 2<br/> 9<br/></td>
      <td>1 <br/> 5 <br/> 9 <br/></td>
      <td>58</td>
      <td>5<br/> 5<br/> 8<br/></td>
      <td>1 <br/> 4 <br/> 9 <br/></td>
      <td>42</td>
      <td>6<br/> 7<br/> 9<br/></td>
      <td>1 <br/> 2 <br/> 2 <br/></td>
      <td>51</td>
      <td>5<br/> 7<br/> 9<br/></td>
      <td>3 <br/> 5 <br/> 6 <br/></td>
      <td>45</td>
      <td>2<br/> 6<br/> 7<br/></td>
   </tr>
   <tr>
      <td>29-05-2017<br/> To <br/> 03-06-2017</td>
      <td>3 <br/> 5 <br/> 7 <br/></td>
      <td>52</td>
      <td>1<br/> 5<br/> 6<br/></td>
      <td>1 <br/> 2 <br/> 4 <br/></td>
      <td>75</td>
      <td>1<br/> 6<br/> 8<br/></td>
      <td>4 <br/> 7 <br/> 8 <br/></td>
      <td>91</td>
      <td>5<br/> 7<br/> 9<br/></td>
      <td>1 <br/> 2 <br/> 0 <br/></td>
      <td>34</td>
      <td>7<br/> 8<br/> 9<br/></td>
      <td>3 <br/> 7 <br/> 0 <br/></td>
      <td>03</td>
      <td>1<br/> 2<br/> 0<br/></td>
      <td>7 <br/> 8 <br/> 9 <br/></td>
      <td>41</td>
      <td>3<br/> 4<br/> 4<br/></td>
   </tr>
   <tr>
      <td>05-06-2017<br/> To <br/> 10-06-2017</td>
      <td>5 <br/> 6 <br/> 9 <br/></td>
      <td>06</td>
      <td>7<br/> 9<br/> 0<br/></td>
      <td>5 <br/> 5 <br/> 8 <br/></td>
      <td>84</td>
      <td>3<br/> 4<br/> 7<br/></td>
      <td>1 <br/> 9 <br/> 0 <br/></td>
      <td>04</td>
      <td>2<br/> 5<br/> 7<br/></td>
      <td>1 <br/> 5 <br/> 5 <br/></td>
      <td>10</td>
      <td>5<br/> 6<br/> 9<br/></td>
      <td>8 <br/> 9 <br/> 9 <br/></td>
      <td>60</td>
      <td>1<br/> 4<br/> 5<br/></td>
      <td>8 <br/> 8 <br/> 0 <br/></td>
      <td>69</td>
      <td>1<br/> 3<br/> 5<br/></td>
   </tr>
   <tr>
      <td>12-06-2017<br/> To <br/> 17-06-2017</td>
      <td>1 <br/> 3 <br/> 4 <br/></td>
      <td>86</td>
      <td>6<br/> 0<br/> 0<br/></td>
      <td>5 <br/> 6 <br/> 9 <br/></td>
      <td>01</td>
      <td>3<br/> 8<br/> 0<br/></td>
      <td>1 <br/> 3 <br/> 0 <br/></td>
      <td>41</td>
      <td>2<br/> 2<br/> 7<br/></td>
      <td>2 <br/> 2 <br/> 3 <br/></td>
      <td>71</td>
      <td>4<br/> 8<br/> 9<br/></td>
      <td>1 <br/> 7 <br/> 8 <br/></td>
      <td>60</td>
      <td>5<br/> 5<br/> 0<br/></td>
      <td  className="r"> 3 <br/> 9 <br/> 0 <br/></td>
      <td  className="r">27</td>
      <td  className="r"> 3<br/> 6<br/> 8<br/></td>
   </tr>
   <tr>
      <td>19-06-2017<br/> To <br/> 24-06-2017</td>
      <td  className="r"> 2 <br/> 7 <br/> 9 <br/></td>
      <td  className="r">88</td>
      <td  className="r"> 1<br/> 7<br/> 0<br/></td>
      <td>5 <br/> 6 <br/> 7 <br/></td>
      <td>89</td>
      <td>4<br/> 6<br/> 9<br/></td>
      <td>1 <br/> 2 <br/> 9 <br/></td>
      <td>28</td>
      <td>1<br/> 1<br/> 6<br/></td>
      <td>5 <br/> 5 <br/> 6 <br/></td>
      <td>64</td>
      <td>1<br/> 4<br/> 9<br/></td>
      <td  className="r"> 1 <br/> 4 <br/> 9 <br/></td>
      <td  className="r">49</td>
      <td  className="r"> 6<br/> 6<br/> 7<br/></td>
      <td>1 <br/> 8 <br/> 8 <br/></td>
      <td>74</td>
      <td>5<br/> 9<br/> 0<br/></td>
   </tr>
   <tr>
      <td>26-06-2017<br/> To <br/> 01-07-2017</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td>*<br/>*<br/>*</td>
      <td  className="r"> 4 <br/> 5 <br/> 7 <br/></td>
      <td  className="r">61</td>
      <td  className="r"> 2<br/> 4<br/> 5<br/></td>
      <td  className="r"> 4 <br/> 9 <br/> 9 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 2<br/> 4<br/> 6<br/></td>
      <td>1 <br/> 9 <br/> 0 <br/></td>
      <td>06</td>
      <td>2<br/> 6<br/> 8<br/></td>
      <td>1 <br/> 5 <br/> 7 <br/></td>
      <td>32</td>
      <td>3<br/> 9<br/> 0<br/></td>
      <td  className="r"> 2 <br/> 6 <br/> 0 <br/></td>
      <td  className="r">88</td>
      <td  className="r"> 1<br/> 7<br/> 0<br/></td>
   </tr>
   <tr>
      <td>03-07-2017<br/> To <br/> 08-07-2017</td>
      <td>4 <br/> 5 <br/> 8 <br/></td>
      <td>78</td>
      <td>3<br/> 7<br/> 8<br/></td>
      <td  className="r"> 4 <br/> 5 <br/> 6 <br/></td>
      <td  className="r">55</td>
      <td  className="r"> 2<br/> 6<br/> 7<br/></td>
      <td>2 <br/> 5 <br/> 6 <br/></td>
      <td>35</td>
      <td>5<br/> 0<br/> 0<br/></td>
      <td>6 <br/> 7 <br/> 0 <br/></td>
      <td>32</td>
      <td>1<br/> 3<br/> 8<br/></td>
      <td>1 <br/> 4 <br/> 4 <br/></td>
      <td>95</td>
      <td>8<br/> 8<br/> 9<br/></td>
      <td>5 <br/> 7 <br/> 0 <br/></td>
      <td>24</td>
      <td>1<br/> 6<br/> 7<br/></td>
   </tr>
   <tr>
      <td>10-07-2017<br/> To <br/> 15-07-2017</td>
      <td>4 <br/> 7 <br/> 9 <br/></td>
      <td>04</td>
      <td>5<br/> 9<br/> 0<br/></td>
      <td>1 <br/> 6 <br/> 7 <br/></td>
      <td>46</td>
      <td>6<br/> 0<br/> 0<br/></td>
      <td>3 <br/> 7 <br/> 0 <br/></td>
      <td>02</td>
      <td>1<br/> 2<br/> 9<br/></td>
      <td>4 <br/> 7 <br/> 8 <br/></td>
      <td>97</td>
      <td>8<br/> 9<br/> 0<br/></td>
      <td>4 <br/> 6 <br/> 0 <br/></td>
      <td>07</td>
      <td>3<br/> 6<br/> 8<br/></td>
      <td>1 <br/> 4 <br/> 5 <br/></td>
      <td>09</td>
      <td>3<br/> 7<br/> 9<br/></td>
   </tr>
   <tr>
      <td>17-07-2017<br/> To <br/> 22-07-2017</td>
      <td>1 <br/> 2 <br/> 3 <br/></td>
      <td>67</td>
      <td>1<br/> 2<br/> 4<br/></td>
      <td>1 <br/> 9 <br/> 0 <br/></td>
      <td>04</td>
      <td>7<br/> 8<br/> 9<br/></td>
      <td  className="r"> 6 <br/> 7 <br/> 7 <br/></td>
      <td  className="r">00</td>
      <td  className="r"> 3<br/> 3<br/> 4<br/></td>
      <td>7 <br/> 9 <br/> 0 <br/></td>
      <td>69</td>
      <td>6<br/> 6<br/> 7<br/></td>
      <td  className="r"> 2 <br/> 0 <br/> 0 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 1<br/> 3<br/> 8<br/></td>
      <td>1 <br/> 2 <br/> 3 <br/></td>
      <td>67</td>
      <td>4<br/> 5<br/> 8<br/></td>
   </tr>
   <tr>
      <td>24-07-2017<br/> To <br/> 29-07-2017</td>
      <td>5 <br/> 9 <br/> 0 <br/></td>
      <td>43</td>
      <td>2<br/> 5<br/> 6<br/></td>
      <td>2 <br/> 3 <br/> 4 <br/></td>
      <td>98</td>
      <td>4<br/> 4<br/> 0<br/></td>
      <td>5 <br/> 7 <br/> 9 <br/></td>
      <td>15</td>
      <td>1<br/> 6<br/> 8<br/></td>
      <td>1 <br/> 3 <br/> 5 <br/></td>
      <td>91</td>
      <td>1<br/> 3<br/> 7<br/></td>
      <td>2 <br/> 2 <br/> 0 <br/></td>
      <td>43</td>
      <td>5<br/> 8<br/> 0<br/></td>
      <td>2 <br/> 6 <br/> 0 <br/></td>
      <td>86</td>
      <td>4<br/> 6<br/> 6<br/></td>
   </tr>
   <tr>
      <td>31-07-2017<br/> To <br/> 05-08-2017</td>
      <td>1 <br/> 7 <br/> 8 <br/></td>
      <td>62</td>
      <td>4<br/> 9<br/> 9<br/></td>
      <td>2 <br/> 6 <br/> 9 <br/></td>
      <td>73</td>
      <td>1<br/> 3<br/> 9<br/></td>
      <td  className="r"> 6 <br/> 9 <br/> 9 <br/></td>
      <td  className="r">49</td>
      <td  className="r"> 6<br/> 6<br/> 7<br/></td>
      <td>3 <br/> 4 <br/> 5 <br/></td>
      <td>28</td>
      <td>5<br/> 6<br/> 7<br/></td>
      <td  className="r"> 3 <br/> 4 <br/> 5 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 1<br/> 5<br/> 6<br/></td>
      <td>3 <br/> 5 <br/> 9 <br/></td>
      <td>73</td>
      <td>5<br/> 8<br/> 0<br/></td>
   </tr>
   <tr>
      <td>07-08-2017<br/> To <br/> 12-08-2017</td>
      <td>7 <br/> 9 <br/> 0 <br/></td>
      <td>67</td>
      <td>1<br/> 7<br/> 9<br/></td>
      <td>4 <br/> 5 <br/> 0 <br/></td>
      <td>91</td>
      <td>4<br/> 7<br/> 0<br/></td>
      <td>7 <br/> 9 <br/> 0 <br/></td>
      <td>67</td>
      <td>4<br/> 5<br/> 8<br/></td>
      <td  className="r"> 3 <br/> 7 <br/> 0 <br/></td>
      <td  className="r">00</td>
      <td  className="r"> 4<br/> 7<br/> 9<br/></td>
      <td  className="r"> 9 <br/> 9 <br/> 0 <br/></td>
      <td  className="r">88</td>
      <td  className="r"> 2<br/> 8<br/> 8<br/></td>
      <td>2 <br/> 5 <br/> 6 <br/></td>
      <td>39</td>
      <td>4<br/> 5<br/> 0<br/></td>
   </tr>
   <tr>
      <td>14-08-2017<br/> To <br/> 19-08-2017</td>
      <td>4 <br/> 6 <br/> 8 <br/></td>
      <td>86</td>
      <td>2<br/> 4<br/> 0<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td>3 <br/> 4 <br/> 8 <br/></td>
      <td>57</td>
      <td>8<br/> 9<br/> 0<br/></td>
      <td>2 <br/> 7 <br/> 0 <br/></td>
      <td>92</td>
      <td>5<br/> 7<br/> 0<br/></td>
      <td>2 <br/> 3 <br/> 8 <br/></td>
      <td>34</td>
      <td>1<br/> 3<br/> 0<br/></td>
      <td>2 <br/> 4 <br/> 8 <br/></td>
      <td>46</td>
      <td>1<br/> 2<br/> 3<br/></td>
   </tr>
   <tr>
      <td>21-08-2017<br/> To <br/> 26-08-2017</td>
      <td>1 <br/> 2 <br/> 5 <br/></td>
      <td>80</td>
      <td>5<br/> 5<br/> 0<br/></td>
      <td  className="r"> 3 <br/> 6 <br/> 8 <br/></td>
      <td  className="r">77</td>
      <td  className="r"> 2<br/> 7<br/> 8<br/></td>
      <td>1 <br/> 1 <br/> 5 <br/></td>
      <td>79</td>
      <td>1<br/> 4<br/> 4<br/></td>
      <td  className="r"> 1 <br/> 4 <br/> 0 <br/></td>
      <td  className="r">55</td>
      <td  className="r"> 4<br/> 5<br/> 6<br/></td>
      <td  className="r"> 3 <br/> 6 <br/> 0 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 3<br/> 5<br/> 6<br/></td>
      <td  className="r"> 3 <br/> 4 <br/> 0 <br/></td>
      <td  className="r">77</td>
      <td  className="r"> 2<br/> 6<br/> 9<br/></td>
   </tr>
   <tr>
      <td>28-08-2017<br/> To <br/> 02-09-2017</td>
      <td  className="r"> 1 <br/> 4 <br/> 8 <br/></td>
      <td  className="r">38</td>
      <td  className="r"> 8<br/> 0<br/> 0<br/></td>
      <td  className="r"> 1 <br/> 5 <br/> 0 <br/></td>
      <td  className="r">61</td>
      <td  className="r"> 4<br/> 8<br/> 9<br/></td>
      <td>2 <br/> 8 <br/> 0 <br/></td>
      <td>03</td>
      <td>7<br/> 8<br/> 8<br/></td>
      <td>4 <br/> 7 <br/> 9 <br/></td>
      <td>06</td>
      <td>4<br/> 5<br/> 7<br/></td>
      <td>6 <br/> 6 <br/> 9 <br/></td>
      <td>14</td>
      <td>7<br/> 8<br/> 9<br/></td>
      <td>1 <br/> 5 <br/> 9 <br/></td>
      <td>52</td>
      <td>3<br/> 3<br/> 6<br/></td>
   </tr>
   <tr>
      <td>04-09-2017<br/> To <br/> 09-09-2017</td>
      <td>2 <br/> 4 <br/> 9 <br/></td>
      <td>57</td>
      <td>2<br/> 7<br/> 8<br/></td>
      <td>3 <br/> 5 <br/> 8 <br/></td>
      <td>63</td>
      <td>6<br/> 7<br/> 0<br/></td>
      <td>2 <br/> 5 <br/> 8 <br/></td>
      <td>56</td>
      <td>3<br/> 6<br/> 7<br/></td>
      <td>1 <br/> 4 <br/> 7 <br/></td>
      <td>26</td>
      <td>1<br/> 1<br/> 4<br/></td>
      <td>5 <br/> 6 <br/> 0 <br/></td>
      <td>10</td>
      <td>5<br/> 7<br/> 8<br/></td>
      <td>1 <br/> 7 <br/> 8 <br/></td>
      <td>62</td>
      <td>5<br/> 7<br/> 0<br/></td>
   </tr>
   <tr>
      <td>11-09-2017<br/> To <br/> 16-09-2017</td>
      <td>4 <br/> 4 <br/> 6 <br/></td>
      <td>40</td>
      <td>3<br/> 3<br/> 4<br/></td>
      <td>1 <br/> 2 <br/> 7 <br/></td>
      <td>02</td>
      <td>5<br/> 7<br/> 0<br/></td>
      <td  className="r"> 4 <br/> 5 <br/> 7 <br/></td>
      <td  className="r">61</td>
      <td  className="r"> 1<br/> 5<br/> 5<br/></td>
      <td  className="r"> 2 <br/> 8 <br/> 8 <br/></td>
      <td  className="r">83</td>
      <td  className="r"> 6<br/> 7<br/> 0<br/></td>
      <td>5 <br/> 7 <br/> 7 <br/></td>
      <td>95</td>
      <td>3<br/> 3<br/> 9<br/></td>
      <td>5 <br/> 6 <br/> 0 <br/></td>
      <td>13</td>
      <td>2<br/> 3<br/> 8<br/></td>
   </tr>
   <tr>
      <td>18-09-2017<br/> To <br/> 23-09-2017</td>
      <td>1 <br/> 7 <br/> 7 <br/></td>
      <td>53</td>
      <td>6<br/> 7<br/> 0<br/></td>
      <td>1 <br/> 2 <br/> 7 <br/></td>
      <td>01</td>
      <td>2<br/> 4<br/> 5<br/></td>
      <td>6 <br/> 6 <br/> 8 <br/></td>
      <td>02</td>
      <td>6<br/> 7<br/> 9<br/></td>
      <td>1 <br/> 6 <br/> 0 <br/></td>
      <td>73</td>
      <td>2<br/> 3<br/> 8<br/></td>
      <td>2 <br/> 8 <br/> 0 <br/></td>
      <td>02</td>
      <td>4<br/> 8<br/> 0<br/></td>
      <td>6 <br/> 7 <br/> 0 <br/></td>
      <td>36</td>
      <td>1<br/> 7<br/> 8<br/></td>
   </tr>
   <tr>
      <td>25-09-2017<br/> To <br/> 30-09-2017</td>
      <td>4 <br/> 5 <br/> 6 <br/></td>
      <td>58</td>
      <td>4<br/> 6<br/> 8<br/></td>
      <td  className="r"> 4 <br/> 5 <br/> 7 <br/></td>
      <td  className="r">61</td>
      <td  className="r"> 5<br/> 6<br/> 0<br/></td>
      <td>3 <br/> 4 <br/> 6 <br/></td>
      <td>39</td>
      <td>1<br/> 8<br/> 0<br/></td>
      <td>1 <br/> 7 <br/> 0 <br/></td>
      <td>81</td>
      <td>5<br/> 7<br/> 9<br/></td>
      <td>3 <br/> 3 <br/> 5 <br/></td>
      <td>18</td>
      <td>5<br/> 6<br/> 7<br/></td>
      <td>3 <br/> 4 <br/> 4 <br/></td>
      <td>15</td>
      <td>2<br/> 5<br/> 8<br/></td>
   </tr>
   <tr>
      <td>02-10-2017<br/> To <br/> 07-10-2017</td>
      <td  className="r"> 4 <br/> 8 <br/> 0 <br/></td>
      <td  className="r">27</td>
      <td  className="r"> 1<br/> 8<br/> 8<br/></td>
      <td>4 <br/> 6 <br/> 9 <br/></td>
      <td>91</td>
      <td>1<br/> 4<br/> 6<br/></td>
      <td>7 <br/> 8 <br/> 0 <br/></td>
      <td>52</td>
      <td>3<br/> 4<br/> 5<br/></td>
      <td>4 <br/> 5 <br/> 8 <br/></td>
      <td>76</td>
      <td>1<br/> 5<br/> 0<br/></td>
      <td>6 <br/> 9 <br/> 9 <br/></td>
      <td>47</td>
      <td>2<br/> 7<br/> 8<br/></td>
      <td>1 <br/> 2 <br/> 4 <br/></td>
      <td>79</td>
      <td>2<br/> 3<br/> 4<br/></td>
   </tr>
   <tr>
      <td>09-10-2017<br/> To <br/> 14-10-2017</td>
      <td  className="r"> 2 <br/> 4 <br/> 9 <br/></td>
      <td  className="r">55</td>
      <td  className="r"> 1<br/> 4<br/> 0<br/></td>
      <td>2 <br/> 7 <br/> 8 <br/></td>
      <td>74</td>
      <td>6<br/> 8<br/> 0<br/></td>
      <td>5 <br/> 7 <br/> 0 <br/></td>
      <td>26</td>
      <td>1<br/> 5<br/> 0<br/></td>
      <td  className="r"> 4 <br/> 8 <br/> 0 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 5<br/> 8<br/> 9<br/></td>
      <td>1 <br/> 2 <br/> 0 <br/></td>
      <td>32</td>
      <td>1<br/> 5<br/> 6<br/></td>
      <td>5 <br/> 6 <br/> 9 <br/></td>
      <td>06</td>
      <td>3<br/> 5<br/> 8<br/></td>
   </tr>
   <tr>
      <td>16-10-2017<br/> To <br/> 21-10-2017</td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
   </tr>
   <tr>
      <td>23-10-2017<br/> To <br/> 28-10-2017</td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td>5 <br/> 5 <br/> 0 <br/></td>
      <td>03</td>
      <td>1<br/> 4<br/> 8<br/></td>
      <td  className="r"> 7 <br/> 8 <br/> 8 <br/></td>
      <td  className="r">38</td>
      <td  className="r"> 4<br/> 7<br/> 7<br/></td>
      <td  className="r"> 4 <br/> 5 <br/> 9 <br/></td>
      <td  className="r">83</td>
      <td  className="r"> 1<br/> 3<br/> 9<br/></td>
      <td>3 <br/> 7 <br/> 0 <br/></td>
      <td>03</td>
      <td>4<br/> 9<br/> 0<br/></td>
   </tr>
   <tr>
      <td>30-10-2017<br/> To <br/> 04-11-2017</td>
      <td>1 <br/> 1 <br/> 3 <br/></td>
      <td>53</td>
      <td>1<br/> 3<br/> 9<br/></td>
      <td>1 <br/> 2 <br/> 2 <br/></td>
      <td>56</td>
      <td>1<br/> 6<br/> 9<br/></td>
      <td>2 <br/> 3 <br/> 4 <br/></td>
      <td>91</td>
      <td>6<br/> 7<br/> 8<br/></td>
      <td>6 <br/> 8 <br/> 0 <br/></td>
      <td>41</td>
      <td>1<br/> 3<br/> 7<br/></td>
      <td>1 <br/> 4 <br/> 9 <br/></td>
      <td>43</td>
      <td>1<br/> 4<br/> 8<br/></td>
      <td>3 <br/> 7 <br/> 7 <br/></td>
      <td>73</td>
      <td>5<br/> 8<br/> 0<br/></td>
   </tr>
   <tr>
      <td>06-11-2017<br/> To <br/> 11-11-2017</td>
      <td>1 <br/> 6 <br/> 0 <br/></td>
      <td>71</td>
      <td>5<br/> 7<br/> 9<br/></td>
      <td>6 <br/> 7 <br/> 8 <br/></td>
      <td>10</td>
      <td>6<br/> 7<br/> 7<br/></td>
      <td  className="r"> 7 <br/> 7 <br/> 0 <br/></td>
      <td  className="r">49</td>
      <td  className="r"> 1<br/> 8<br/> 0<br/></td>
      <td>4 <br/> 7 <br/> 9 <br/></td>
      <td>02</td>
      <td>1<br/> 2<br/> 9<br/></td>
      <td>6 <br/> 8 <br/> 0 <br/></td>
      <td>48</td>
      <td>1<br/> 8<br/> 9<br/></td>
      <td>1 <br/> 8 <br/> 9 <br/></td>
      <td>85</td>
      <td>6<br/> 9<br/> 0<br/></td>
   </tr>
   <tr>
      <td>13-11-2017<br/> To <br/> 18-11-2017</td>
      <td>2 <br/> 8 <br/> 0 <br/></td>
      <td>03</td>
      <td>6<br/> 7<br/> 0<br/></td>
      <td>6 <br/> 8 <br/> 9 <br/></td>
      <td>39</td>
      <td>3<br/> 6<br/> 0<br/></td>
      <td>3 <br/> 6 <br/> 0 <br/></td>
      <td>97</td>
      <td>8<br/> 9<br/> 0<br/></td>
      <td  className="r"> 2 <br/> 2 <br/> 9 <br/></td>
      <td  className="r">38</td>
      <td  className="r"> 1<br/> 8<br/> 9<br/></td>
      <td>3 <br/> 6 <br/> 6 <br/></td>
      <td>56</td>
      <td>4<br/> 5<br/> 7<br/></td>
      <td>1 <br/> 2 <br/> 5 <br/></td>
      <td>89</td>
      <td>4<br/> 6<br/> 9<br/></td>
   </tr>
   <tr>
      <td>20-11-2017<br/> To <br/> 25-11-2017</td>
      <td>4 <br/> 6 <br/> 0 <br/></td>
      <td>07</td>
      <td>2<br/> 6<br/> 9<br/></td>
      <td  className="r"> 4 <br/> 7 <br/> 8 <br/></td>
      <td  className="r">99</td>
      <td  className="r"> 2<br/> 3<br/> 4<br/></td>
      <td>3 <br/> 5 <br/> 9 <br/></td>
      <td>71</td>
      <td>2<br/> 3<br/> 6<br/></td>
      <td>1 <br/> 2 <br/> 4 <br/></td>
      <td>71</td>
      <td>1<br/> 3<br/> 7<br/></td>
      <td>2 <br/> 4 <br/> 0 <br/></td>
      <td>65</td>
      <td>7<br/> 8<br/> 0<br/></td>
      <td  className="r"> 5 <br/> 7 <br/> 0 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 1<br/> 2<br/> 9<br/></td>
   </tr>
   <tr>
      <td>27-11-2017<br/> To <br/> 02-12-2017</td>
      <td>2 <br/> 4 <br/> 8 <br/></td>
      <td>41</td>
      <td>5<br/> 6<br/> 0<br/></td>
      <td>2 <br/> 5 <br/> 8 <br/></td>
      <td>58</td>
      <td>2<br/> 6<br/> 0<br/></td>
      <td>5 <br/> 7 <br/> 7 <br/></td>
      <td>90</td>
      <td>3<br/> 8<br/> 9<br/></td>
      <td>3 <br/> 6 <br/> 0 <br/></td>
      <td>95</td>
      <td>2<br/> 3<br/> 0<br/></td>
      <td>4 <br/> 7 <br/> 8 <br/></td>
      <td>91</td>
      <td>4<br/> 7<br/> 0<br/></td>
      <td>5 <br/> 7 <br/> 9 <br/></td>
      <td>18</td>
      <td>3<br/> 6<br/> 9<br/></td>
   </tr>
   <tr>
      <td>04-12-2017<br/> To <br/> 09-12-2017</td>
      <td>5 <br/> 8 <br/> 8 <br/></td>
      <td>17</td>
      <td>4<br/> 6<br/> 7<br/></td>
      <td  className="r"> 3 <br/> 4 <br/> 6 <br/></td>
      <td  className="r">33</td>
      <td  className="r"> 2<br/> 3<br/> 8<br/></td>
      <td  className="r"> 3 <br/> 4 <br/> 8 <br/></td>
      <td  className="r">55</td>
      <td  className="r"> 2<br/> 5<br/> 8<br/></td>
      <td>2 <br/> 5 <br/> 7 <br/></td>
      <td>48</td>
      <td>2<br/> 2<br/> 4<br/></td>
      <td  className="r"> 1 <br/> 3 <br/> 4 <br/></td>
      <td  className="r">83</td>
      <td  className="r"> 3<br/> 4<br/> 6<br/></td>
      <td>3 <br/> 5 <br/> 7 <br/></td>
      <td>54</td>
      <td>6<br/> 8<br/> 0<br/></td>
   </tr>
   <tr>
      <td>11-12-2017<br/> To <br/> 16-12-2017</td>
      <td>6 <br/> 9 <br/> 9 <br/></td>
      <td>40</td>
      <td>2<br/> 4<br/> 4<br/></td>
      <td>1 <br/> 4 <br/> 9 <br/></td>
      <td>40</td>
      <td>6<br/> 7<br/> 7<br/></td>
      <td>2 <br/> 4 <br/> 9 <br/></td>
      <td>59</td>
      <td>4<br/> 6<br/> 9<br/></td>
      <td>2 <br/> 4 <br/> 0 <br/></td>
      <td>60</td>
      <td>2<br/> 2<br/> 6<br/></td>
      <td>2 <br/> 3 <br/> 3 <br/></td>
      <td>85</td>
      <td>6<br/> 9<br/> 0<br/></td>
      <td>1 <br/> 5 <br/> 0 <br/></td>
      <td>68</td>
      <td>9<br/> 9<br/> 0<br/></td>
   </tr>
   <tr>
      <td>18-12-2017<br/> To <br/> 23-12-2017</td>
      <td>1 <br/> 3 <br/> 6 <br/></td>
      <td>06</td>
      <td>4<br/> 5<br/> 7<br/></td>
      <td  className="r"> 1 <br/> 5 <br/> 5 <br/></td>
      <td  className="r">11</td>
      <td  className="r"> 6<br/> 6<br/> 9<br/></td>
      <td>7 <br/> 9 <br/> 0 <br/></td>
      <td>63</td>
      <td>1<br/> 3<br/> 9<br/></td>
      <td>3 <br/> 6 <br/> 9 <br/></td>
      <td>81</td>
      <td>3<br/> 8<br/> 0<br/></td>
      <td  className="r"> 2 <br/> 3 <br/> 9 <br/></td>
      <td  className="r">49</td>
      <td  className="r"> 3<br/> 6<br/> 0<br/></td>
      <td>8 <br/> 8 <br/> 9 <br/></td>
      <td>53</td>
      <td>2<br/> 2<br/> 9<br/></td>
   </tr>
   <tr>
      <td>25-12-2017<br/> To <br/> 30-12-2017</td>
      <td>3 <br/> 4 <br/> 9 <br/></td>
      <td>68</td>
      <td>3<br/> 5<br/> 0<br/></td>
      <td>1 <br/> 6 <br/> 7 <br/></td>
      <td>42</td>
      <td>5<br/> 8<br/> 9<br/></td>
      <td>1 <br/> 9 <br/> 9 <br/></td>
      <td>96</td>
      <td>1<br/> 7<br/> 8<br/></td>
      <td  className="r"> 4 <br/> 7 <br/> 7 <br/></td>
      <td  className="r">88</td>
      <td  className="r"> 3<br/> 5<br/> 0<br/></td>
      <td>6 <br/> 7 <br/> 9 <br/></td>
      <td>21</td>
      <td>1<br/> 3<br/> 7<br/></td>
      <td>3 <br/> 7 <br/> 8 <br/></td>
      <td>80</td>
      <td>4<br/> 7<br/> 9<br/></td>
   </tr>
   <tr>
      <td>01-01-2018<br/> To <br/> 06-01-2018</td>
      <td>3 <br/> 4 <br/> 6 <br/></td>
      <td>36</td>
      <td>7<br/> 9<br/> 0<br/></td>
      <td>5 <br/> 9 <br/> 9 <br/></td>
      <td>35</td>
      <td>1<br/> 2<br/> 2<br/></td>
      <td>2 <br/> 2 <br/> 6 <br/></td>
      <td>02</td>
      <td>6<br/> 8<br/> 8<br/></td>
      <td>1 <br/> 4 <br/> 7 <br/></td>
      <td>24</td>
      <td>7<br/> 8<br/> 9<br/></td>
      <td>8 <br/> 0 <br/> 0 <br/></td>
      <td>84</td>
      <td>1<br/> 5<br/> 8<br/></td>
      <td>1 <br/> 3 <br/> 8 <br/></td>
      <td>21</td>
      <td>2<br/> 4<br/> 5<br/></td>
   </tr>
   <tr>
      <td>08-01-2018<br/> To <br/> 13-01-2018</td>
      <td>1 <br/> 3 <br/> 8 <br/></td>
      <td>24</td>
      <td>1<br/> 5<br/> 8<br/></td>
      <td>5 <br/> 7 <br/> 8 <br/></td>
      <td>02</td>
      <td>5<br/> 8<br/> 9<br/></td>
      <td>1 <br/> 2 <br/> 3 <br/></td>
      <td>65</td>
      <td>6<br/> 9<br/> 0<br/></td>
      <td>9 <br/> 0 <br/> 0 <br/></td>
      <td>92</td>
      <td>6<br/> 8<br/> 8<br/></td>
      <td>4 <br/> 7 <br/> 8 <br/></td>
      <td>92</td>
      <td>3<br/> 9<br/> 0<br/></td>
      <td>3 <br/> 6 <br/> 6 <br/></td>
      <td>54</td>
      <td>1<br/> 6<br/> 7<br/></td>
   </tr>
   <tr>
      <td>15-01-2018<br/> To <br/> 20-01-2018</td>
      <td>3 <br/> 4 <br/> 9 <br/></td>
      <td>62</td>
      <td>7<br/> 7<br/> 8<br/></td>
      <td>5 <br/> 0 <br/> 0 <br/></td>
      <td>58</td>
      <td>2<br/> 3<br/> 3<br/></td>
      <td  className="r"> 3 <br/> 7 <br/> 9 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 7<br/> 8<br/> 9<br/></td>
      <td>5 <br/> 9 <br/> 0 <br/></td>
      <td>42</td>
      <td>3<br/> 3<br/> 6<br/></td>
      <td>7 <br/> 7 <br/> 9 <br/></td>
      <td>30</td>
      <td>2<br/> 3<br/> 5<br/></td>
      <td>3 <br/> 5 <br/> 8 <br/></td>
      <td>60</td>
      <td>3<br/> 7<br/> 0<br/></td>
   </tr>
   <tr>
      <td>22-01-2018<br/> To <br/> 27-01-2018</td>
      <td>2 <br/> 4 <br/> 0 <br/></td>
      <td>65</td>
      <td>3<br/> 6<br/> 6<br/></td>
      <td>5 <br/> 6 <br/> 7 <br/></td>
      <td>84</td>
      <td>2<br/> 2<br/> 0<br/></td>
      <td>8 <br/> 8 <br/> 0 <br/></td>
      <td>68</td>
      <td>3<br/> 7<br/> 8<br/></td>
      <td  className="r"> 4 <br/> 5 <br/> 6 <br/></td>
      <td  className="r">50</td>
      <td  className="r"> 3<br/> 8<br/> 9<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td>1 <br/> 7 <br/> 9 <br/></td>
      <td>73</td>
      <td>1<br/> 4<br/> 8<br/></td>
   </tr>
   <tr>
      <td>29-01-2018<br/> To <br/> 03-02-2018</td>
      <td>6 <br/> 7 <br/> 8 <br/></td>
      <td>18</td>
      <td>4<br/> 6<br/> 8<br/></td>
      <td>3 <br/> 4 <br/> 4 <br/></td>
      <td>18</td>
      <td>5<br/> 6<br/> 7<br/></td>
      <td  className="r"> 5 <br/> 7 <br/> 9 <br/></td>
      <td  className="r">11</td>
      <td  className="r"> 3<br/> 8<br/> 0<br/></td>
      <td  className="r"> 4 <br/> 9 <br/> 9 <br/></td>
      <td  className="r">27</td>
      <td  className="r"> 3<br/> 5<br/> 9<br/></td>
      <td>2 <br/> 6 <br/> 9 <br/></td>
      <td>76</td>
      <td>3<br/> 4<br/> 9<br/></td>
      <td  className="r"> 4 <br/> 5 <br/> 7 <br/></td>
      <td  className="r">61</td>
      <td  className="r"> 1<br/> 2<br/> 8<br/></td>
   </tr>
   <tr>
      <td>05-02-2018<br/> To <br/> 10-02-2018</td>
      <td  className="r"> 1 <br/> 3 <br/> 9 <br/></td>
      <td  className="r">38</td>
      <td  className="r"> 1<br/> 3<br/> 4<br/></td>
      <td>3 <br/> 6 <br/> 8 <br/></td>
      <td>70</td>
      <td>1<br/> 4<br/> 5<br/></td>
      <td>3 <br/> 5 <br/> 9 <br/></td>
      <td>76</td>
      <td>3<br/> 4<br/> 9<br/></td>
      <td>2 <br/> 8 <br/> 9 <br/></td>
      <td>90</td>
      <td>5<br/> 6<br/> 9<br/></td>
      <td>2 <br/> 6 <br/> 6 <br/></td>
      <td>42</td>
      <td>5<br/> 8<br/> 9<br/></td>
      <td  className="r"> 7 <br/> 8 <br/> 9 <br/></td>
      <td  className="r">49</td>
      <td  className="r"> 4<br/> 5<br/> 0<br/></td>
   </tr>
   <tr>
      <td>12-02-2018<br/> To <br/> 17-02-2018</td>
      <td>7 <br/> 7 <br/> 8 <br/></td>
      <td>29</td>
      <td>3<br/> 6<br/> 0<br/></td>
      <td>3 <br/> 6 <br/> 8 <br/></td>
      <td>75</td>
      <td>6<br/> 9<br/> 0<br/></td>
      <td>2 <br/> 4 <br/> 9 <br/></td>
      <td>52</td>
      <td>6<br/> 7<br/> 9<br/></td>
      <td>2 <br/> 2 <br/> 3 <br/></td>
      <td>79</td>
      <td>5<br/> 5<br/> 9<br/></td>
      <td>7 <br/> 8 <br/> 8 <br/></td>
      <td>31</td>
      <td>3<br/> 4<br/> 4<br/></td>
      <td>2 <br/> 3 <br/> 6 <br/></td>
      <td>14</td>
      <td>1<br/> 3<br/> 0<br/></td>
   </tr>
   <tr>
      <td>19-02-2018<br/> To <br/> 24-02-2018</td>
      <td>6 <br/> 9 <br/> 0 <br/></td>
      <td>59</td>
      <td>2<br/> 8<br/> 9<br/></td>
      <td  className="r"> 1 <br/> 2 <br/> 8 <br/></td>
      <td  className="r">11</td>
      <td  className="r"> 2<br/> 9<br/> 0<br/></td>
      <td>2 <br/> 3 <br/> 6 <br/></td>
      <td>17</td>
      <td>4<br/> 6<br/> 7<br/></td>
      <td>2 <br/> 7 <br/> 0 <br/></td>
      <td>93</td>
      <td>6<br/> 8<br/> 9<br/></td>
      <td>1 <br/> 7 <br/> 0 <br/></td>
      <td>89</td>
      <td>2<br/> 7<br/> 0<br/></td>
      <td  className="r"> 1 <br/> 2 <br/> 0 <br/></td>
      <td  className="r">33</td>
      <td  className="r"> 3<br/> 4<br/> 6<br/></td>
   </tr>
   <tr>
      <td>26-02-2018<br/> To <br/> 03-03-2018</td>
      <td>2 <br/> 5 <br/> 5 <br/></td>
      <td>25</td>
      <td>1<br/> 6<br/> 8<br/></td>
      <td>3 <br/> 6 <br/> 8 <br/></td>
      <td>73</td>
      <td>1<br/> 3<br/> 9<br/></td>
      <td  className="r"> 2 <br/> 4 <br/> 4 <br/></td>
      <td  className="r">00</td>
      <td  className="r"> 4<br/> 7<br/> 9<br/></td>
      <td>1 <br/> 7 <br/> 9 <br/></td>
      <td>76</td>
      <td>1<br/> 2<br/> 3<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td>1 <br/> 3 <br/> 5 <br/></td>
      <td>97</td>
      <td>1<br/> 1<br/> 5<br/></td>
   </tr>
   <tr>
      <td>05-03-2018<br/> To <br/> 10-03-2018</td>
      <td>5 <br/> 6 <br/> 9 <br/></td>
      <td>04</td>
      <td>7<br/> 8<br/> 9<br/></td>
      <td>3 <br/> 4 <br/> 5 <br/></td>
      <td>25</td>
      <td>2<br/> 5<br/> 8<br/></td>
      <td  className="r"> 1 <br/> 3 <br/> 9 <br/></td>
      <td  className="r">33</td>
      <td  className="r"> 5<br/> 8<br/> 0<br/></td>
      <td>1 <br/> 4 <br/> 8 <br/></td>
      <td>35</td>
      <td>2<br/> 4<br/> 9<br/></td>
      <td>1 <br/> 3 <br/> 7 <br/></td>
      <td>19</td>
      <td>3<br/> 7<br/> 9<br/></td>
      <td>8 <br/> 9 <br/> 0 <br/></td>
      <td>76</td>
      <td>3<br/> 6<br/> 7<br/></td>
   </tr>
   <tr>
      <td>12-03-2018<br/> To <br/> 17-03-2018</td>
      <td>1 <br/> 2 <br/> 8 <br/></td>
      <td>15</td>
      <td>3<br/> 5<br/> 7<br/></td>
      <td>5 <br/> 8 <br/> 9 <br/></td>
      <td>26</td>
      <td>3<br/> 6<br/> 7<br/></td>
      <td>1 <br/> 4 <br/> 5 <br/></td>
      <td>08</td>
      <td>5<br/> 6<br/> 7<br/></td>
      <td  className="r"> 1 <br/> 6 <br/> 0 <br/></td>
      <td  className="r">77</td>
      <td  className="r"> 5<br/> 5<br/> 7<br/></td>
      <td>3 <br/> 6 <br/> 0 <br/></td>
      <td>97</td>
      <td>1<br/> 6<br/> 0<br/></td>
      <td>2 <br/> 4 <br/> 7 <br/></td>
      <td>30</td>
      <td>1<br/> 3<br/> 6<br/></td>
   </tr>
   <tr>
      <td>19-03-2018<br/> To <br/> 24-03-2018</td>
      <td>4 <br/> 4 <br/> 0 <br/></td>
      <td>80</td>
      <td>6<br/> 6<br/> 8<br/></td>
      <td>7 <br/> 7 <br/> 0 <br/></td>
      <td>43</td>
      <td>6<br/> 7<br/> 0<br/></td>
      <td  className="r"> 5 <br/> 5 <br/> 9 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 3<br/> 5<br/> 6<br/></td>
      <td  className="r"> 7 <br/> 0 <br/> 0 <br/></td>
      <td  className="r">77</td>
      <td  className="r"> 4<br/> 5<br/> 8<br/></td>
      <td>6 <br/> 8 <br/> 0 <br/></td>
      <td>42</td>
      <td>1<br/> 5<br/> 6<br/></td>
      <td>2 <br/> 5 <br/> 6 <br/></td>
      <td>32</td>
      <td>5<br/> 8<br/> 9<br/></td>
   </tr>
   <tr>
      <td>26-03-2018<br/> To <br/> 31-03-2018</td>
      <td>3 <br/> 8 <br/> 0 <br/></td>
      <td>17</td>
      <td>4<br/> 4<br/> 9<br/></td>
      <td>2 <br/> 4 <br/> 4 <br/></td>
      <td>04</td>
      <td>3<br/> 5<br/> 6<br/></td>
      <td>6 <br/> 7 <br/> 9 <br/></td>
      <td>28</td>
      <td>4<br/> 6<br/> 8<br/></td>
      <td>4 <br/> 9 <br/> 0 <br/></td>
      <td>36</td>
      <td>4<br/> 6<br/> 6<br/></td>
      <td>1 <br/> 2 <br/> 7 <br/></td>
      <td>04</td>
      <td>1<br/> 3<br/> 0<br/></td>
      <td>1 <br/> 4 <br/> 8 <br/></td>
      <td>39</td>
      <td>4<br/> 6<br/> 9<br/></td>
   </tr>
   <tr>
      <td>02-04-2018<br/> To <br/> 07-04-2018</td>
      <td>8 <br/> 9 <br/> 0 <br/></td>
      <td>70</td>
      <td>1<br/> 4<br/> 5<br/></td>
      <td>5 <br/> 6 <br/> 9 <br/></td>
      <td>06</td>
      <td>7<br/> 9<br/> 0<br/></td>
      <td>1 <br/> 8 <br/> 8 <br/></td>
      <td>76</td>
      <td>4<br/> 6<br/> 6<br/></td>
      <td>1 <br/> 4 <br/> 6 <br/></td>
      <td>12</td>
      <td>7<br/> 7<br/> 8<br/></td>
      <td  className="r"> 5 <br/> 7 <br/> 9 <br/></td>
      <td  className="r">11</td>
      <td  className="r"> 5<br/> 6<br/> 0<br/></td>
      <td>2 <br/> 8 <br/> 9 <br/></td>
      <td>90</td>
      <td>5<br/> 6<br/> 9<br/></td>
   </tr>
   <tr>
      <td>09-04-2018<br/> To <br/> 14-04-2018</td>
      <td>1 <br/> 7 <br/> 9 <br/></td>
      <td>78</td>
      <td>4<br/> 7<br/> 7<br/></td>
      <td  className="r"> 3 <br/> 5 <br/> 7 <br/></td>
      <td  className="r">50</td>
      <td  className="r"> 5<br/> 7<br/> 8<br/></td>
      <td>2 <br/> 5 <br/> 7 <br/></td>
      <td>41</td>
      <td>2<br/> 2<br/> 7<br/></td>
      <td>3 <br/> 4 <br/> 0 <br/></td>
      <td>75</td>
      <td>1<br/> 7<br/> 7<br/></td>
      <td>2 <br/> 4 <br/> 7 <br/></td>
      <td>32</td>
      <td>1<br/> 3<br/> 8<br/></td>
      <td>2 <br/> 8 <br/> 8 <br/></td>
      <td>82</td>
      <td>1<br/> 2<br/> 9<br/></td>
   </tr>
   <tr>
      <td>16-04-2018<br/> To <br/> 21-04-2018</td>
      <td  className="r"> 3 <br/> 5 <br/> 7 <br/></td>
      <td  className="r">50</td>
      <td  className="r"> 3<br/> 8<br/> 9<br/></td>
      <td>2 <br/> 4 <br/> 8 <br/></td>
      <td>47</td>
      <td>3<br/> 5<br/> 9<br/></td>
      <td>5 <br/> 5 <br/> 6 <br/></td>
      <td>62</td>
      <td>5<br/> 7<br/> 0<br/></td>
      <td>2 <br/> 5 <br/> 0 <br/></td>
      <td>76</td>
      <td>6<br/> 0<br/> 0<br/></td>
      <td  className="r"> 6 <br/> 8 <br/> 9 <br/></td>
      <td  className="r">38</td>
      <td  className="r"> 1<br/> 2<br/> 5<br/></td>
      <td>2 <br/> 4 <br/> 8 <br/></td>
      <td>46</td>
      <td>6<br/> 0<br/> 0<br/></td>
   </tr>
   <tr>
      <td>23-04-2018<br/> To <br/> 28-04-2018</td>
      <td  className="r"> 5 <br/> 6 <br/> 9 <br/></td>
      <td  className="r">05</td>
      <td  className="r"> 3<br/> 5<br/> 7<br/></td>
      <td  className="r"> 3 <br/> 9 <br/> 0 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 1<br/> 4<br/> 7<br/></td>
      <td  className="r"> 1 <br/> 9 <br/> 0 <br/></td>
      <td  className="r">05</td>
      <td  className="r"> 2<br/> 3<br/> 0<br/></td>
      <td  className="r"> 4 <br/> 4 <br/> 8 <br/></td>
      <td  className="r">61</td>
      <td  className="r"> 2<br/> 9<br/> 0<br/></td>
      <td>3 <br/> 6 <br/> 9 <br/></td>
      <td>81</td>
      <td>2<br/> 9<br/> 0<br/></td>
      <td  className="r"> 3 <br/> 5 <br/> 0 <br/></td>
      <td  className="r">83</td>
      <td  className="r"> 6<br/> 8<br/> 9<br/></td>
   </tr>
   <tr>
      <td>30-04-2018<br/> To <br/> 05-05-2018</td>
      <td>1 <br/> 3 <br/> 5 <br/></td>
      <td>91</td>
      <td>1<br/> 2<br/> 8<br/></td>
      <td>2 <br/> 3 <br/> 7 <br/></td>
      <td>21</td>
      <td>2<br/> 4<br/> 5<br/></td>
      <td>3 <br/> 5 <br/> 7 <br/></td>
      <td>54</td>
      <td>3<br/> 5<br/> 6<br/></td>
      <td>5 <br/> 6 <br/> 7 <br/></td>
      <td>86</td>
      <td>2<br/> 4<br/> 0<br/></td>
      <td>1 <br/> 8 <br/> 8 <br/></td>
      <td>73</td>
      <td>1<br/> 3<br/> 9<br/></td>
      <td>2 <br/> 6 <br/> 7 <br/></td>
      <td>59</td>
      <td>3<br/> 7<br/> 9<br/></td>
   </tr>
   <tr>
      <td>07-05-2018<br/> To <br/> 12-05-2018</td>
      <td>2 <br/> 4 <br/> 4 <br/></td>
      <td>07</td>
      <td>3<br/> 7<br/> 7<br/></td>
      <td>2 <br/> 7 <br/> 9 <br/></td>
      <td>82</td>
      <td>4<br/> 9<br/> 9<br/></td>
      <td>2 <br/> 6 <br/> 0 <br/></td>
      <td>81</td>
      <td>4<br/> 7<br/> 0<br/></td>
      <td>1 <br/> 8 <br/> 0 <br/></td>
      <td>91</td>
      <td>2<br/> 2<br/> 7<br/></td>
      <td>1 <br/> 6 <br/> 8 <br/></td>
      <td>51</td>
      <td>5<br/> 7<br/> 9<br/></td>
      <td>1 <br/> 1 <br/> 0 <br/></td>
      <td>25</td>
      <td>2<br/> 4<br/> 9<br/></td>
   </tr>
   <tr>
      <td>14-05-2018<br/> To <br/> 19-05-2018</td>
      <td  className="r"> 4 <br/> 8 <br/> 8 <br/></td>
      <td  className="r">00</td>
      <td  className="r"> 1<br/> 9<br/> 0<br/></td>
      <td>3 <br/> 3 <br/> 8 <br/></td>
      <td>47</td>
      <td>3<br/> 4<br/> 0<br/></td>
      <td>1 <br/> 3 <br/> 4 <br/></td>
      <td>80</td>
      <td>6<br/> 6<br/> 8<br/></td>
      <td>1 <br/> 7 <br/> 7 <br/></td>
      <td>53</td>
      <td>1<br/> 3<br/> 9<br/></td>
      <td  className="r"> 2 <br/> 2 <br/> 6 <br/></td>
      <td  className="r">00</td>
      <td  className="r"> 4<br/> 8<br/> 8<br/></td>
      <td>3 <br/> 7 <br/> 7 <br/></td>
      <td>70</td>
      <td>1<br/> 2<br/> 7<br/></td>
   </tr>
   <tr>
      <td>21-05-2018<br/> To <br/> 26-05-2018</td>
      <td>1 <br/> 5 <br/> 0 <br/></td>
      <td>68</td>
      <td>2<br/> 8<br/> 8<br/></td>
      <td>4 <br/> 7 <br/> 9 <br/></td>
      <td>09</td>
      <td>2<br/> 7<br/> 0<br/></td>
      <td>2 <br/> 8 <br/> 9 <br/></td>
      <td>92</td>
      <td>1<br/> 3<br/> 8<br/></td>
      <td  className="r"> 2 <br/> 7 <br/> 0 <br/></td>
      <td  className="r">99</td>
      <td  className="r"> 4<br/> 7<br/> 8<br/></td>
      <td  className="r"> 1 <br/> 2 <br/> 6 <br/></td>
      <td  className="r">99</td>
      <td  className="r"> 4<br/> 6<br/> 9<br/></td>
      <td>4 <br/> 6 <br/> 7 <br/></td>
      <td>76</td>
      <td>1<br/> 1<br/> 4<br/></td>
   </tr>
   <tr>
      <td>28-05-2018<br/> To <br/> 02-06-2018</td>
      <td>4 <br/> 5 <br/> 7 <br/></td>
      <td>65</td>
      <td>1<br/> 5<br/> 9<br/></td>
      <td>7 <br/> 8 <br/> 9 <br/></td>
      <td>40</td>
      <td>1<br/> 2<br/> 7<br/></td>
      <td>8 <br/> 0 <br/> 0 <br/></td>
      <td>86</td>
      <td>2<br/> 5<br/> 9<br/></td>
      <td>6 <br/> 6 <br/> 8 <br/></td>
      <td>01</td>
      <td>1<br/> 1<br/> 9<br/></td>
      <td>2 <br/> 5 <br/> 9 <br/></td>
      <td>62</td>
      <td>4<br/> 9<br/> 9<br/></td>
      <td>2 <br/> 6 <br/> 6 <br/></td>
      <td>45</td>
      <td>6<br/> 9<br/> 0<br/></td>
   </tr>
   <tr>
      <td>04-06-2018<br/> To <br/> 09-06-2018</td>
      <td>1 <br/> 2 <br/> 7 <br/></td>
      <td>08</td>
      <td>1<br/> 3<br/> 4<br/></td>
      <td>1 <br/> 5 <br/> 8 <br/></td>
      <td>41</td>
      <td>1<br/> 2<br/> 8<br/></td>
      <td  className="r"> 2 <br/> 5 <br/> 5 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 6<br/> 6<br/> 0<br/></td>
      <td>1 <br/> 6 <br/> 7 <br/></td>
      <td>42</td>
      <td>3<br/> 9<br/> 0<br/></td>
      <td>1 <br/> 5 <br/> 9 <br/></td>
      <td>54</td>
      <td>7<br/> 8<br/> 9<br/></td>
      <td>1 <br/> 5 <br/> 6 <br/></td>
      <td>25</td>
      <td>3<br/> 5<br/> 7<br/></td>
   </tr>
   <tr>
      <td>11-06-2018<br/> To <br/> 16-06-2018</td>
      <td  className="r"> 2 <br/> 2 <br/> 8 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 5<br/> 7<br/> 0<br/></td>
      <td>3 <br/> 4 <br/> 5 <br/></td>
      <td>20</td>
      <td>2<br/> 8<br/> 0<br/></td>
      <td>4 <br/> 6 <br/> 9 <br/></td>
      <td>92</td>
      <td>2<br/> 4<br/> 6<br/></td>
      <td>8 <br/> 9 <br/> 9 <br/></td>
      <td>62</td>
      <td>3<br/> 9<br/> 0<br/></td>
      <td>3 <br/> 7 <br/> 0 <br/></td>
      <td>07</td>
      <td>4<br/> 6<br/> 7<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
   </tr>
   <tr>
      <td>18-06-2018<br/> To <br/> 23-06-2018</td>
      <td>5 <br/> 6 <br/> 7 <br/></td>
      <td>89</td>
      <td>3<br/> 7<br/> 9<br/></td>
      <td>4 <br/> 6 <br/> 9 <br/></td>
      <td>98</td>
      <td>1<br/> 2<br/> 5<br/></td>
      <td>3 <br/> 5 <br/> 6 <br/></td>
      <td>45</td>
      <td>2<br/> 5<br/> 8<br/></td>
      <td>3 <br/> 3 <br/> 6 <br/></td>
      <td>24</td>
      <td>2<br/> 4<br/> 8<br/></td>
      <td>2 <br/> 8 <br/> 9 <br/></td>
      <td>98</td>
      <td>2<br/> 7<br/> 9<br/></td>
      <td  className="r"> 2 <br/> 3 <br/> 4 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 4<br/> 5<br/> 5<br/></td>
   </tr>
   <tr>
      <td>25-06-2018<br/> To <br/> 30-06-2018</td>
      <td  className="r"> 2 <br/> 6 <br/> 0 <br/></td>
      <td  className="r">83</td>
      <td  className="r"> 4<br/> 9<br/> 0<br/></td>
      <td>4 <br/> 4 <br/> 8 <br/></td>
      <td>64</td>
      <td>3<br/> 3<br/> 8<br/></td>
      <td  className="r"> 8 <br/> 9 <br/> 0 <br/></td>
      <td  className="r">77</td>
      <td  className="r"> 8<br/> 9<br/> 0<br/></td>
      <td  className="r"> 4 <br/> 6 <br/> 9 <br/></td>
      <td  className="r">99</td>
      <td  className="r"> 4<br/> 5<br/> 0<br/></td>
      <td>6 <br/> 9 <br/> 0 <br/></td>
      <td>53</td>
      <td>2<br/> 3<br/> 8<br/></td>
      <td>5 <br/> 6 <br/> 7 <br/></td>
      <td>82</td>
      <td>2<br/> 4<br/> 6<br/></td>
   </tr>
   <tr>
      <td>02-07-2018<br/> To <br/> 07-07-2018</td>
      <td>4 <br/> 5 <br/> 0 <br/></td>
      <td>97</td>
      <td>8<br/> 9<br/> 0<br/></td>
      <td>3 <br/> 5 <br/> 0 <br/></td>
      <td>89</td>
      <td>5<br/> 6<br/> 8<br/></td>
      <td  className="r"> 4 <br/> 8 <br/> 0 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 4<br/> 8<br/> 0<br/></td>
      <td>1 <br/> 4 <br/> 6 <br/></td>
      <td>18</td>
      <td>1<br/> 7<br/> 0<br/></td>
      <td>3 <br/> 6 <br/> 7 <br/></td>
      <td>65</td>
      <td>3<br/> 4<br/> 8<br/></td>
      <td>2 <br/> 6 <br/> 8 <br/></td>
      <td>60</td>
      <td>1<br/> 2<br/> 7<br/></td>
   </tr>
   <tr>
      <td>09-07-2018<br/> To <br/> 14-07-2018</td>
      <td>1 <br/> 6 <br/> 8 <br/></td>
      <td>56</td>
      <td>1<br/> 7<br/> 8<br/></td>
      <td>2 <br/> 4 <br/> 0 <br/></td>
      <td>69</td>
      <td>3<br/> 7<br/> 9<br/></td>
      <td>1 <br/> 3 <br/> 0 <br/></td>
      <td>46</td>
      <td>3<br/> 5<br/> 8<br/></td>
      <td>7 <br/> 8 <br/> 8 <br/></td>
      <td>31</td>
      <td>1<br/> 0<br/> 0<br/></td>
      <td>4 <br/> 7 <br/> 0 <br/></td>
      <td>19</td>
      <td>4<br/> 5<br/> 0<br/></td>
      <td>1 <br/> 1 <br/> 6 <br/></td>
      <td>87</td>
      <td>2<br/> 5<br/> 0<br/></td>
   </tr>
   <tr>
      <td>16-07-2018<br/> To <br/> 21-07-2018</td>
      <td>1 <br/> 4 <br/> 5 <br/></td>
      <td>08</td>
      <td>1<br/> 7<br/> 0<br/></td>
      <td>7 <br/> 7 <br/> 8 <br/></td>
      <td>26</td>
      <td>1<br/> 7<br/> 8<br/></td>
      <td>2 <br/> 9 <br/> 9 <br/></td>
      <td>07</td>
      <td>5<br/> 5<br/> 7<br/></td>
      <td  className="r"> 2 <br/> 4 <br/> 9 <br/></td>
      <td  className="r">50</td>
      <td  className="r"> 4<br/> 8<br/> 8<br/></td>
      <td>5 <br/> 5 <br/> 6 <br/></td>
      <td>68</td>
      <td>1<br/> 3<br/> 4<br/></td>
      <td  className="r"> 4 <br/> 7 <br/> 0 <br/></td>
      <td  className="r">11</td>
      <td  className="r"> 2<br/> 4<br/> 5<br/></td>
   </tr>
   <tr>
      <td>23-07-2018<br/> To <br/> 28-07-2018</td>
      <td>3 <br/> 5 <br/> 8 <br/></td>
      <td>62</td>
      <td>5<br/> 7<br/> 0<br/></td>
      <td>3 <br/> 4 <br/> 8 <br/></td>
      <td>51</td>
      <td>1<br/> 4<br/> 6<br/></td>
      <td>5 <br/> 6 <br/> 9 <br/></td>
      <td>08</td>
      <td>9<br/> 9<br/> 0<br/></td>
      <td>1 <br/> 6 <br/> 8 <br/></td>
      <td>58</td>
      <td>3<br/> 5<br/> 0<br/></td>
      <td>2 <br/> 2 <br/> 9 <br/></td>
      <td>31</td>
      <td>5<br/> 6<br/> 0<br/></td>
      <td>4 <br/> 4 <br/> 8 <br/></td>
      <td>65</td>
      <td>1<br/> 4<br/> 0<br/></td>
   </tr>
   <tr>
      <td>30-07-2018<br/> To <br/> 04-08-2018</td>
      <td>7 <br/> 7 <br/> 0 <br/></td>
      <td>43</td>
      <td>6<br/> 8<br/> 9<br/></td>
      <td>2 <br/> 4 <br/> 8 <br/></td>
      <td>47</td>
      <td>7<br/> 0<br/> 0<br/></td>
      <td  className="r"> 5 <br/> 7 <br/> 8 <br/></td>
      <td  className="r">00</td>
      <td  className="r"> 3<br/> 8<br/> 9<br/></td>
      <td  className="r"> 1 <br/> 2 <br/> 9 <br/></td>
      <td  className="r">27</td>
      <td  className="r"> 1<br/> 6<br/> 0<br/></td>
      <td  className="r"> 8 <br/> 0 <br/> 0 <br/></td>
      <td  className="r">83</td>
      <td  className="r"> 5<br/> 9<br/> 9<br/></td>
      <td  className="r"> 1 <br/> 5 <br/> 6 <br/></td>
      <td  className="r">27</td>
      <td  className="r"> 4<br/> 6<br/> 7<br/></td>
   </tr>
   <tr>
      <td>06-08-2018<br/> To <br/> 11-08-2018</td>
      <td>2 <br/> 3 <br/> 7 <br/></td>
      <td>23</td>
      <td>3<br/> 5<br/> 5<br/></td>
      <td>6 <br/> 7 <br/> 9 <br/></td>
      <td>24</td>
      <td>3<br/> 3<br/> 8<br/></td>
      <td  className="r"> 1 <br/> 2 <br/> 5 <br/></td>
      <td  className="r">88</td>
      <td  className="r"> 4<br/> 5<br/> 9<br/></td>
      <td>7 <br/> 7 <br/> 0 <br/></td>
      <td>46</td>
      <td>6<br/> 0<br/> 0<br/></td>
      <td>6 <br/> 8 <br/> 0 <br/></td>
      <td>46</td>
      <td>3<br/> 3<br/> 0<br/></td>
      <td>3 <br/> 4 <br/> 9 <br/></td>
      <td>63</td>
      <td>3<br/> 3<br/> 7<br/></td>
   </tr>
   <tr>
      <td>13-08-2018<br/> To <br/> 18-08-2018</td>
      <td>3 <br/> 4 <br/> 5 <br/></td>
      <td>29</td>
      <td>4<br/> 6<br/> 9<br/></td>
      <td>2 <br/> 5 <br/> 0 <br/></td>
      <td>73</td>
      <td>2<br/> 5<br/> 6<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td>2 <br/> 3 <br/> 5 <br/></td>
      <td>06</td>
      <td>1<br/> 7<br/> 8<br/></td>
      <td  className="r"> 2 <br/> 7 <br/> 7 <br/></td>
      <td  className="r">66</td>
      <td  className="r"> 3<br/> 6<br/> 7<br/></td>
      <td  className="r"> 7 <br/> 8 <br/> 0 <br/></td>
      <td  className="r">55</td>
      <td  className="r"> 1<br/> 5<br/> 9<br/></td>
   </tr>
   <tr>
      <td>20-08-2018<br/> To <br/> 25-08-2018</td>
      <td  className="r"> 3 <br/> 6 <br/> 9 <br/></td>
      <td  className="r">88</td>
      <td  className="r"> 5<br/> 6<br/> 7<br/></td>
      <td  className="r"> 2 <br/> 2 <br/> 7 <br/></td>
      <td  className="r">11</td>
      <td  className="r"> 4<br/> 8<br/> 9<br/></td>
      <td>7 <br/> 7 <br/> 9 <br/></td>
      <td>36</td>
      <td>1<br/> 7<br/> 8<br/></td>
      <td>6 <br/> 9 <br/> 9 <br/></td>
      <td>43</td>
      <td>1<br/> 3<br/> 9<br/></td>
      <td>5 <br/> 6 <br/> 8 <br/></td>
      <td>90</td>
      <td>1<br/> 9<br/> 0<br/></td>
      <td  className="r"> 1 <br/> 6 <br/> 9 <br/></td>
      <td  className="r">66</td>
      <td  className="r"> 3<br/> 6<br/> 7<br/></td>
   </tr>
   <tr>
      <td>27-08-2018<br/> To <br/> 01-09-2018</td>
      <td>1 <br/> 6 <br/> 7 <br/></td>
      <td>48</td>
      <td>5<br/> 6<br/> 7<br/></td>
      <td>2 <br/> 4 <br/> 5 <br/></td>
      <td>19</td>
      <td>2<br/> 7<br/> 0<br/></td>
      <td  className="r"> 2 <br/> 7 <br/> 8 <br/></td>
      <td  className="r">77</td>
      <td  className="r"> 4<br/> 6<br/> 7<br/></td>
      <td>3 <br/> 8 <br/> 9 <br/></td>
      <td>04</td>
      <td>2<br/> 3<br/> 9<br/></td>
      <td>3 <br/> 7 <br/> 9 <br/></td>
      <td>90</td>
      <td>1<br/> 2<br/> 7<br/></td>
      <td>1 <br/> 2 <br/> 6 <br/></td>
      <td>91</td>
      <td>2<br/> 4<br/> 5<br/></td>
   </tr>
   <tr>
      <td>03-09-2018<br/> To <br/> 08-09-2018</td>
      <td>6 <br/> 8 <br/> 0 <br/></td>
      <td>47</td>
      <td>1<br/> 2<br/> 4<br/></td>
      <td>3 <br/> 6 <br/> 7 <br/></td>
      <td>62</td>
      <td>2<br/> 0<br/> 0<br/></td>
      <td>2 <br/> 3 <br/> 4 <br/></td>
      <td>97</td>
      <td>1<br/> 7<br/> 9<br/></td>
      <td>3 <br/> 8 <br/> 0 <br/></td>
      <td>10</td>
      <td>2<br/> 3<br/> 5<br/></td>
      <td>6 <br/> 7 <br/> 8 <br/></td>
      <td>12</td>
      <td>5<br/> 8<br/> 9<br/></td>
      <td>1 <br/> 2 <br/> 5 <br/></td>
      <td>84</td>
      <td>1<br/> 6<br/> 7<br/></td>
   </tr>
   <tr>
      <td>10-09-2018<br/> To <br/> 15-09-2018</td>
      <td>4 <br/> 6 <br/> 8 <br/></td>
      <td>82</td>
      <td>5<br/> 8<br/> 9<br/></td>
      <td  className="r"> 9 <br/> 9 <br/> 0 <br/></td>
      <td  className="r">88</td>
      <td  className="r"> 4<br/> 4<br/> 0<br/></td>
      <td>5 <br/> 8 <br/> 9 <br/></td>
      <td>25</td>
      <td>4<br/> 5<br/> 6<br/></td>
      <td>6 <br/> 7 <br/> 9 <br/></td>
      <td>28</td>
      <td>5<br/> 6<br/> 7<br/></td>
      <td  className="r"> 3 <br/> 4 <br/> 9 <br/></td>
      <td  className="r">66</td>
      <td  className="r"> 1<br/> 7<br/> 8<br/></td>
      <td>3 <br/> 5 <br/> 7 <br/></td>
      <td>58</td>
      <td>3<br/> 6<br/> 9<br/></td>
   </tr>
   <tr>
      <td>17-09-2018<br/> To <br/> 22-09-2018</td>
      <td>4 <br/> 6 <br/> 0 <br/></td>
      <td>04</td>
      <td>4<br/> 5<br/> 5<br/></td>
      <td>4 <br/> 5 <br/> 6 <br/></td>
      <td>51</td>
      <td>2<br/> 4<br/> 5<br/></td>
      <td>1 <br/> 6 <br/> 0 <br/></td>
      <td>75</td>
      <td>1<br/> 5<br/> 9<br/></td>
      <td>5 <br/> 6 <br/> 9 <br/></td>
      <td>08</td>
      <td>4<br/> 6<br/> 8<br/></td>
      <td  className="r"> 4 <br/> 7 <br/> 8 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 1<br/> 3<br/> 0<br/></td>
      <td>4 <br/> 9 <br/> 0 <br/></td>
      <td>39</td>
      <td>1<br/> 8<br/> 0<br/></td>
   </tr>
   <tr>
      <td>24-09-2018<br/> To <br/> 29-09-2018</td>
      <td  className="r"> 2 <br/> 7 <br/> 8 <br/></td>
      <td  className="r">77</td>
      <td  className="r"> 2<br/> 7<br/> 8<br/></td>
      <td>3 <br/> 8 <br/> 0 <br/></td>
      <td>18</td>
      <td>2<br/> 3<br/> 3<br/></td>
      <td>3 <br/> 6 <br/> 8 <br/></td>
      <td>73</td>
      <td>6<br/> 8<br/> 9<br/></td>
      <td>1 <br/> 2 <br/> 6 <br/></td>
      <td>95</td>
      <td>1<br/> 6<br/> 8<br/></td>
      <td>2 <br/> 4 <br/> 5 <br/></td>
      <td>19</td>
      <td>1<br/> 8<br/> 0<br/></td>
      <td>2 <br/> 4 <br/> 5 <br/></td>
      <td>19</td>
      <td>5<br/> 5<br/> 9<br/></td>
   </tr>
   <tr>
      <td>01-10-2018<br/> To <br/> 06-10-2018</td>
      <td  className="r"> 2 <br/> 2 <br/> 4 <br/></td>
      <td  className="r">88</td>
      <td  className="r"> 4<br/> 5<br/> 9<br/></td>
      <td>2 <br/> 5 <br/> 0 <br/></td>
      <td>75</td>
      <td>2<br/> 6<br/> 7<br/></td>
      <td  className="r"> 1 <br/> 7 <br/> 9 <br/></td>
      <td  className="r">77</td>
      <td  className="r"> 4<br/> 4<br/> 9<br/></td>
      <td>2 <br/> 6 <br/> 7 <br/></td>
      <td>53</td>
      <td>7<br/> 8<br/> 8<br/></td>
      <td  className="r"> 1 <br/> 1 <br/> 6 <br/></td>
      <td  className="r">83</td>
      <td  className="r"> 3<br/> 3<br/> 7<br/></td>
      <td>4 <br/> 6 <br/> 8 <br/></td>
      <td>84</td>
      <td>3<br/> 4<br/> 7<br/></td>
   </tr>
   <tr>
      <td>08-10-2018<br/> To <br/> 13-10-2018</td>
      <td>1 <br/> 5 <br/> 9 <br/></td>
      <td>57</td>
      <td>1<br/> 1<br/> 5<br/></td>
      <td>6 <br/> 8 <br/> 0 <br/></td>
      <td>45</td>
      <td>3<br/> 3<br/> 9<br/></td>
      <td  className="r"> 1 <br/> 6 <br/> 0 <br/></td>
      <td  className="r">72</td>
      <td  className="r"> 1<br/> 3<br/> 8<br/></td>
      <td>6 <br/> 8 <br/> 8 <br/></td>
      <td>20</td>
      <td>1<br/> 9<br/> 0<br/></td>
      <td  className="r"> 5 <br/> 7 <br/> 0 <br/></td>
      <td  className="r">27</td>
      <td  className="r"> 1<br/> 6<br/> 0<br/></td>
      <td>2 <br/> 6 <br/> 6 <br/></td>
      <td>45</td>
      <td>3<br/> 5<br/> 7<br/></td>
   </tr>
   <tr>
      <td>15-10-2018<br/> To <br/> 20-10-2018</td>
      <td>2 <br/> 6 <br/> 7 <br/></td>
      <td>52</td>
      <td>6<br/> 6<br/> 0<br/></td>
      <td  className="r"> 5 <br/> 6 <br/> 8 <br/></td>
      <td  className="r">99</td>
      <td  className="r"> 1<br/> 2<br/> 6<br/></td>
      <td>5 <br/> 8 <br/> 0 <br/></td>
      <td>30</td>
      <td>1<br/> 3<br/> 6<br/></td>
      <td>2 <br/> 2 <br/> 9 <br/></td>
      <td>34</td>
      <td>7<br/> 7<br/> 0<br/></td>
      <td>1 <br/> 6 <br/> 8 <br/></td>
      <td>52</td>
      <td>2<br/> 3<br/> 7<br/></td>
      <td>2 <br/> 4 <br/> 0 <br/></td>
      <td>68</td>
      <td>1<br/> 7<br/> 0<br/></td>
   </tr>
   <tr>
      <td>22-10-2018<br/> To <br/> 27-10-2018</td>
      <td>1 <br/> 6 <br/> 9 <br/></td>
      <td>63</td>
      <td>7<br/> 8<br/> 8<br/></td>
      <td>7 <br/> 8 <br/> 0 <br/></td>
      <td>57</td>
      <td>1<br/> 7<br/> 9<br/></td>
      <td>3 <br/> 3 <br/> 5 <br/></td>
      <td>12</td>
      <td>7<br/> 7<br/> 8<br/></td>
      <td>4 <br/> 6 <br/> 7 <br/></td>
      <td>79</td>
      <td>1<br/> 3<br/> 5<br/></td>
      <td>6 <br/> 7 <br/> 9 <br/></td>
      <td>20</td>
      <td>3<br/> 3<br/> 4<br/></td>
      <td>4 <br/> 0 <br/> 0 <br/></td>
      <td>41</td>
      <td>5<br/> 6<br/> 0<br/></td>
   </tr>
   <tr>
      <td>29-10-2018<br/> To <br/> 03-11-2018</td>
      <td>7 <br/> 0 <br/> 0 <br/></td>
      <td>78</td>
      <td>1<br/> 1<br/> 6<br/></td>
      <td>3 <br/> 6 <br/> 8 <br/></td>
      <td>74</td>
      <td>2<br/> 5<br/> 7<br/></td>
      <td>6 <br/> 6 <br/> 7 <br/></td>
      <td>97</td>
      <td>1<br/> 2<br/> 4<br/></td>
      <td>3 <br/> 0 <br/> 0 <br/></td>
      <td>37</td>
      <td>5<br/> 6<br/> 6<br/></td>
      <td>8 <br/> 9 <br/> 0 <br/></td>
      <td>74</td>
      <td>5<br/> 9<br/> 0<br/></td>
      <td>4 <br/> 6 <br/> 8 <br/></td>
      <td>81</td>
      <td>6<br/> 7<br/> 8<br/></td>
   </tr>
   <tr>
      <td>05-11-2018<br/> To <br/> 10-11-2018</td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
   </tr>
   <tr>
      <td>12-11-2018<br/> To <br/> 17-11-2018</td>
      <td>6 <br/> 8 <br/> 0 <br/></td>
      <td>43</td>
      <td>1<br/> 4<br/> 8<br/></td>
      <td>5 <br/> 8 <br/> 0 <br/></td>
      <td>31</td>
      <td>2<br/> 9<br/> 0<br/></td>
      <td  className="r"> 9 <br/> 0 <br/> 0 <br/></td>
      <td  className="r">99</td>
      <td  className="r"> 2<br/> 3<br/> 4<br/></td>
      <td>1 <br/> 7 <br/> 9 <br/></td>
      <td>79</td>
      <td>4<br/> 5<br/> 0<br/></td>
      <td>2 <br/> 6 <br/> 9 <br/></td>
      <td>73</td>
      <td>5<br/> 8<br/> 0<br/></td>
      <td>1 <br/> 2 <br/> 7 <br/></td>
      <td>09</td>
      <td>1<br/> 8<br/> 0<br/></td>
   </tr>
   <tr>
      <td>19-11-2018<br/> To <br/> 24-11-2018</td>
      <td>4 <br/> 7 <br/> 9 <br/></td>
      <td>06</td>
      <td>3<br/> 4<br/> 9<br/></td>
      <td  className="r"> 4 <br/> 6 <br/> 9 <br/></td>
      <td  className="r">99</td>
      <td  className="r"> 9<br/> 0<br/> 0<br/></td>
      <td  className="r"> 1 <br/> 3 <br/> 9 <br/></td>
      <td  className="r">33</td>
      <td  className="r"> 7<br/> 8<br/> 8<br/></td>
      <td  className="r"> 4 <br/> 9 <br/> 9 <br/></td>
      <td  className="r">27</td>
      <td  className="r"> 3<br/> 4<br/> 0<br/></td>
      <td>8 <br/> 9 <br/> 9 <br/></td>
      <td>63</td>
      <td>1<br/> 4<br/> 8<br/></td>
      <td>3 <br/> 8 <br/> 9 <br/></td>
      <td>09</td>
      <td>5<br/> 7<br/> 7<br/></td>
   </tr>
   <tr>
      <td>26-11-2018<br/> To <br/> 01-12-2018</td>
      <td>5 <br/> 6 <br/> 9 <br/></td>
      <td>09</td>
      <td>1<br/> 3<br/> 5<br/></td>
      <td  className="r"> 6 <br/> 6 <br/> 7 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 1<br/> 1<br/> 2<br/></td>
      <td>1 <br/> 2 <br/> 5 <br/></td>
      <td>84</td>
      <td>2<br/> 2<br/> 0<br/></td>
      <td>1 <br/> 2 <br/> 6 <br/></td>
      <td>91</td>
      <td>1<br/> 2<br/> 8<br/></td>
      <td>5 <br/> 6 <br/> 7 <br/></td>
      <td>85</td>
      <td>3<br/> 3<br/> 9<br/></td>
      <td>8 <br/> 8 <br/> 0 <br/></td>
      <td>62</td>
      <td>1<br/> 4<br/> 7<br/></td>
   </tr>
   <tr>
      <td>03-12-2018<br/> To <br/> 08-12-2018</td>
      <td>3 <br/> 4 <br/> 6 <br/></td>
      <td>39</td>
      <td>5<br/> 7<br/> 7<br/></td>
      <td>2 <br/> 3 <br/> 6 <br/></td>
      <td>19</td>
      <td>5<br/> 7<br/> 7<br/></td>
      <td>5 <br/> 7 <br/> 8 <br/></td>
      <td>07</td>
      <td>7<br/> 0<br/> 0<br/></td>
      <td>1 <br/> 4 <br/> 5 <br/></td>
      <td>01</td>
      <td>4<br/> 8<br/> 9<br/></td>
      <td>3 <br/> 5 <br/> 8 <br/></td>
      <td>60</td>
      <td>2<br/> 2<br/> 6<br/></td>
      <td  className="r"> 2 <br/> 4 <br/> 8 <br/></td>
      <td  className="r">49</td>
      <td  className="r"> 5<br/> 6<br/> 8<br/></td>
   </tr>
   <tr>
      <td>10-12-2018<br/> To <br/> 15-12-2018</td>
      <td>5 <br/> 5 <br/> 6 <br/></td>
      <td>62</td>
      <td>3<br/> 4<br/> 5<br/></td>
      <td>2 <br/> 8 <br/> 0 <br/></td>
      <td>02</td>
      <td>6<br/> 6<br/> 0<br/></td>
      <td>1 <br/> 7 <br/> 8 <br/></td>
      <td>68</td>
      <td>1<br/> 7<br/> 0<br/></td>
      <td>2 <br/> 9 <br/> 9 <br/></td>
      <td>06</td>
      <td>1<br/> 7<br/> 8<br/></td>
      <td>2 <br/> 2 <br/> 6 <br/></td>
      <td>07</td>
      <td>5<br/> 6<br/> 6<br/></td>
      <td>1 <br/> 3 <br/> 6 <br/></td>
      <td>06</td>
      <td>4<br/> 6<br/> 6<br/></td>
   </tr>
   <tr>
      <td>17-12-2018<br/> To <br/> 22-12-2018</td>
      <td>1 <br/> 4 <br/> 8 <br/></td>
      <td>35</td>
      <td>2<br/> 6<br/> 7<br/></td>
      <td>1 <br/> 2 <br/> 3 <br/></td>
      <td>60</td>
      <td>4<br/> 6<br/> 0<br/></td>
      <td>2 <br/> 7 <br/> 0 <br/></td>
      <td>98</td>
      <td>1<br/> 3<br/> 4<br/></td>
      <td>5 <br/> 5 <br/> 7 <br/></td>
      <td>74</td>
      <td>6<br/> 9<br/> 9<br/></td>
      <td>2 <br/> 5 <br/> 5 <br/></td>
      <td>23</td>
      <td>7<br/> 8<br/> 8<br/></td>
      <td>4 <br/> 4 <br/> 8 <br/></td>
      <td>62</td>
      <td>2<br/> 4<br/> 6<br/></td>
   </tr>
   <tr>
      <td>24-12-2018<br/> To <br/> 29-12-2018</td>
      <td>1 <br/> 7 <br/> 8 <br/></td>
      <td>62</td>
      <td>2<br/> 5<br/> 5<br/></td>
      <td>1 <br/> 8 <br/> 9 <br/></td>
      <td>87</td>
      <td>1<br/> 2<br/> 4<br/></td>
      <td>3 <br/> 7 <br/> 0 <br/></td>
      <td>04</td>
      <td>2<br/> 5<br/> 7<br/></td>
      <td>1 <br/> 4 <br/> 8 <br/></td>
      <td>34</td>
      <td>3<br/> 5<br/> 6<br/></td>
      <td>2 <br/> 5 <br/> 8 <br/></td>
      <td>58</td>
      <td>1<br/> 8<br/> 9<br/></td>
      <td>2 <br/> 7 <br/> 0 <br/></td>
      <td>90</td>
      <td>1<br/> 4<br/> 5<br/></td>
   </tr>
   <tr>
      <td>31-12-2018<br/> To <br/> 05-01-2019</td>
      <td  className="r"> 3 <br/> 3 <br/> 0 <br/></td>
      <td  className="r">66</td>
      <td  className="r"> 1<br/> 2<br/> 3<br/></td>
      <td>3 <br/> 4 <br/> 6 <br/></td>
      <td>32</td>
      <td>2<br/> 3<br/> 7<br/></td>
      <td>2 <br/> 7 <br/> 9 <br/></td>
      <td>86</td>
      <td>1<br/> 5<br/> 0<br/></td>
      <td>5 <br/> 8 <br/> 9 <br/></td>
      <td>21</td>
      <td>5<br/> 7<br/> 9<br/></td>
      <td>2 <br/> 2 <br/> 7 <br/></td>
      <td>14</td>
      <td>3<br/> 4<br/> 7<br/></td>
      <td>4 <br/> 5 <br/> 9 <br/></td>
      <td>82</td>
      <td>4<br/> 8<br/> 0<br/></td>
   </tr>
   <tr>
      <td>07-01-2019<br/> To <br/> 12-01-2019</td>
      <td>4 <br/> 8 <br/> 0 <br/></td>
      <td>28</td>
      <td>3<br/> 7<br/> 8<br/></td>
      <td>5 <br/> 9 <br/> 9 <br/></td>
      <td>34</td>
      <td>2<br/> 5<br/> 7<br/></td>
      <td>4 <br/> 9 <br/> 0 <br/></td>
      <td>34</td>
      <td>2<br/> 6<br/> 6<br/></td>
      <td>5 <br/> 8 <br/> 0 <br/></td>
      <td>32</td>
      <td>1<br/> 1<br/> 0<br/></td>
      <td>6 <br/> 7 <br/> 8 <br/></td>
      <td>17</td>
      <td>4<br/> 4<br/> 9<br/></td>
      <td>1 <br/> 3 <br/> 6 <br/></td>
      <td>09</td>
      <td>4<br/> 7<br/> 8<br/></td>
   </tr>
   <tr>
      <td>14-01-2019<br/> To <br/> 19-01-2019</td>
      <td  className="r"> 2 <br/> 8 <br/> 9 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 4<br/> 0<br/> 0<br/></td>
      <td>2 <br/> 7 <br/> 7 <br/></td>
      <td>60</td>
      <td>5<br/> 7<br/> 8<br/></td>
      <td>1 <br/> 2 <br/> 5 <br/></td>
      <td>81</td>
      <td>5<br/> 7<br/> 9<br/></td>
      <td>4 <br/> 5 <br/> 7 <br/></td>
      <td>60</td>
      <td>1<br/> 4<br/> 5<br/></td>
      <td>1 <br/> 3 <br/> 6 <br/></td>
      <td>06</td>
      <td>2<br/> 6<br/> 8<br/></td>
      <td>2 <br/> 4 <br/> 0 <br/></td>
      <td>64</td>
      <td>2<br/> 5<br/> 7<br/></td>
   </tr>
   <tr>
      <td>21-01-2019<br/> To <br/> 26-01-2019</td>
      <td  className="r"> 1 <br/> 3 <br/> 9 <br/></td>
      <td  className="r">38</td>
      <td  className="r"> 1<br/> 3<br/> 4<br/></td>
      <td>3 <br/> 8 <br/> 9 <br/></td>
      <td>09</td>
      <td>9<br/> 0<br/> 0<br/></td>
      <td>1 <br/> 6 <br/> 7 <br/></td>
      <td>41</td>
      <td>2<br/> 3<br/> 6<br/></td>
      <td>1 <br/> 8 <br/> 0 <br/></td>
      <td>95</td>
      <td>2<br/> 5<br/> 8<br/></td>
      <td>4 <br/> 5 <br/> 7 <br/></td>
      <td>69</td>
      <td>1<br/> 4<br/> 4<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
   </tr>
   <tr>
      <td>28-01-2019<br/> To <br/> 02-02-2019</td>
      <td>2 <br/> 5 <br/> 0 <br/></td>
      <td>79</td>
      <td>5<br/> 5<br/> 9<br/></td>
      <td  className="r"> 1 <br/> 3 <br/> 9 <br/></td>
      <td  className="r">38</td>
      <td  className="r"> 2<br/> 2<br/> 4<br/></td>
      <td>4 <br/> 4 <br/> 0 <br/></td>
      <td>85</td>
      <td>2<br/> 3<br/> 0<br/></td>
      <td>7 <br/> 8 <br/> 0 <br/></td>
      <td>59</td>
      <td>3<br/> 7<br/> 9<br/></td>
      <td  className="r"> 7 <br/> 9 <br/> 0 <br/></td>
      <td  className="r">66</td>
      <td  className="r"> 1<br/> 1<br/> 4<br/></td>
      <td>3 <br/> 5 <br/> 7 <br/></td>
      <td>57</td>
      <td>1<br/> 8<br/> 8<br/></td>
   </tr>
   <tr>
      <td>04-02-2019<br/> To <br/> 09-02-2019</td>
      <td>1 <br/> 7 <br/> 8 <br/></td>
      <td>65</td>
      <td>1<br/> 2<br/> 2<br/></td>
      <td>1 <br/> 1 <br/> 0 <br/></td>
      <td>29</td>
      <td>1<br/> 3<br/> 5<br/></td>
      <td>1 <br/> 9 <br/> 0 <br/></td>
      <td>09</td>
      <td>2<br/> 8<br/> 9<br/></td>
      <td>3 <br/> 7 <br/> 8 <br/></td>
      <td>85</td>
      <td>3<br/> 5<br/> 7<br/></td>
      <td>6 <br/> 8 <br/> 9 <br/></td>
      <td>35</td>
      <td>5<br/> 0<br/> 0<br/></td>
      <td>2 <br/> 2 <br/> 4 <br/></td>
      <td>87</td>
      <td>3<br/> 6<br/> 8<br/></td>
   </tr>
   <tr>
      <td>11-02-2019<br/> To <br/> 16-02-2019</td>
      <td>5 <br/> 7 <br/> 7 <br/></td>
      <td>97</td>
      <td>4<br/> 5<br/> 8<br/></td>
      <td>6 <br/> 9 <br/> 9 <br/></td>
      <td>41</td>
      <td>3<br/> 8<br/> 0<br/></td>
      <td>5 <br/> 5 <br/> 6 <br/></td>
      <td>63</td>
      <td>1<br/> 4<br/> 8<br/></td>
      <td  className="r"> 1 <br/> 7 <br/> 8 <br/></td>
      <td  className="r">66</td>
      <td  className="r"> 6<br/> 0<br/> 0<br/></td>
      <td>5 <br/> 7 <br/> 9 <br/></td>
      <td>17</td>
      <td>2<br/> 5<br/> 0<br/></td>
      <td>5 <br/> 5 <br/> 8 <br/></td>
      <td>81</td>
      <td>3<br/> 4<br/> 4<br/></td>
   </tr>
   <tr>
      <td>18-02-2019<br/> To <br/> 23-02-2019</td>
      <td>5 <br/> 6 <br/> 7 <br/></td>
      <td>87</td>
      <td>1<br/> 6<br/> 0<br/></td>
      <td>2 <br/> 2 <br/> 3 <br/></td>
      <td>74</td>
      <td>4<br/> 4<br/> 6<br/></td>
      <td>1 <br/> 5 <br/> 5 <br/></td>
      <td>12</td>
      <td>1<br/> 2<br/> 9<br/></td>
      <td  className="r"> 5 <br/> 5 <br/> 7 <br/></td>
      <td  className="r">72</td>
      <td  className="r"> 6<br/> 7<br/> 9<br/></td>
      <td>1 <br/> 3 <br/> 5 <br/></td>
      <td>95</td>
      <td>1<br/> 1<br/> 3<br/></td>
      <td  className="r"> 2 <br/> 5 <br/> 6 <br/></td>
      <td  className="r">33</td>
      <td  className="r"> 6<br/> 7<br/> 0<br/></td>
   </tr>
   <tr>
      <td>25-02-2019<br/> To <br/> 02-03-2019</td>
      <td>5 <br/> 7 <br/> 9 <br/></td>
      <td>14</td>
      <td>5<br/> 9<br/> 0<br/></td>
      <td>1 <br/> 3 <br/> 0 <br/></td>
      <td>41</td>
      <td>1<br/> 4<br/> 6<br/></td>
      <td>1 <br/> 4 <br/> 9 <br/></td>
      <td>42</td>
      <td>6<br/> 8<br/> 8<br/></td>
      <td>1 <br/> 7 <br/> 7 <br/></td>
      <td>59</td>
      <td>2<br/> 7<br/> 0<br/></td>
      <td>4 <br/> 6 <br/> 7 <br/></td>
      <td>74</td>
      <td>1<br/> 4<br/> 9<br/></td>
      <td>2 <br/> 4 <br/> 6 <br/></td>
      <td>29</td>
      <td>2<br/> 3<br/> 4<br/></td>
   </tr>
   <tr>
      <td>04-03-2019<br/> To <br/> 09-03-2019</td>
      <td  className="r"> 5 <br/> 5 <br/> 9 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 1<br/> 6<br/> 7<br/></td>
      <td>1 <br/> 3 <br/> 9 <br/></td>
      <td>39</td>
      <td>2<br/> 3<br/> 4<br/></td>
      <td>1 <br/> 5 <br/> 8 <br/></td>
      <td>43</td>
      <td>5<br/> 8<br/> 0<br/></td>
      <td>2 <br/> 5 <br/> 6 <br/></td>
      <td>39</td>
      <td>5<br/> 6<br/> 8<br/></td>
      <td>2 <br/> 4 <br/> 0 <br/></td>
      <td>64</td>
      <td>1<br/> 6<br/> 7<br/></td>
      <td  className="r"> 5 <br/> 7 <br/> 9 <br/></td>
      <td  className="r">11</td>
      <td  className="r"> 1<br/> 4<br/> 6<br/></td>
   </tr>
   <tr>
      <td>11-03-2019<br/> To <br/> 16-03-2019</td>
      <td>5 <br/> 5 <br/> 7 <br/></td>
      <td>75</td>
      <td>1<br/> 4<br/> 0<br/></td>
      <td>1 <br/> 3 <br/> 5 <br/></td>
      <td>93</td>
      <td>6<br/> 8<br/> 9<br/></td>
      <td>3 <br/> 8 <br/> 0 <br/></td>
      <td>18</td>
      <td>3<br/> 7<br/> 8<br/></td>
      <td>1 <br/> 3 <br/> 7 <br/></td>
      <td>17</td>
      <td>8<br/> 9<br/> 0<br/></td>
      <td>2 <br/> 7 <br/> 9 <br/></td>
      <td>84</td>
      <td>3<br/> 4<br/> 7<br/></td>
      <td  className="r"> 3 <br/> 6 <br/> 7 <br/></td>
      <td  className="r">61</td>
      <td  className="r"> 5<br/> 7<br/> 9<br/></td>
   </tr>
   <tr>
      <td>18-03-2019<br/> To <br/> 23-03-2019</td>
      <td>1 <br/> 3 <br/> 9 <br/></td>
      <td>35</td>
      <td>1<br/> 4<br/> 0<br/></td>
      <td  className="r"> 3 <br/> 6 <br/> 8 <br/></td>
      <td  className="r">72</td>
      <td  className="r"> 3<br/> 4<br/> 5<br/></td>
      <td>1 <br/> 4 <br/> 9 <br/></td>
      <td>42</td>
      <td>2<br/> 4<br/> 6<br/></td>
      <td  className="r"> * <br/> * <br/> * <br/></td>
      <td  className="r">**</td>
      <td  className="r"> *<br/> *<br/> *<br/></td>
      <td>3 <br/> 5 <br/> 7 <br/></td>
      <td>56</td>
      <td>1<br/> 2<br/> 3<br/></td>
      <td>5 <br/> 0 <br/> 0 <br/></td>
      <td>56</td>
      <td>2<br/> 5<br/> 9<br/></td>
   </tr>
   <tr>
      <td>25-03-2019<br/> To <br/> 30-03-2019</td>
      <td  className="r"> 4 <br/> 7 <br/> 8 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 3<br/> 3<br/> 8<br/></td>
      <td  className="r"> 5 <br/> 7 <br/> 9 <br/></td>
      <td  className="r">11</td>
      <td  className="r"> 1<br/> 2<br/> 8<br/></td>
      <td>2 <br/> 6 <br/> 0 <br/></td>
      <td>85</td>
      <td>6<br/> 9<br/> 0<br/></td>
      <td  className="r"> 4 <br/> 6 <br/> 7 <br/></td>
      <td  className="r">77</td>
      <td  className="r"> 3<br/> 7<br/> 7<br/></td>
      <td>2 <br/> 7 <br/> 9 <br/></td>
      <td>82</td>
      <td>5<br/> 8<br/> 9<br/></td>
      <td>8 <br/> 9 <br/> 0 <br/></td>
      <td>74</td>
      <td>1<br/> 5<br/> 8<br/></td>
   </tr>
   <tr>
      <td>01-04-2019<br/> To <br/> 06-04-2019</td>
      <td>5 <br/> 6 <br/> 0 <br/></td>
      <td>19</td>
      <td>2<br/> 7<br/> 0<br/></td>
      <td>1 <br/> 3 <br/> 6 <br/></td>
      <td>07</td>
      <td>1<br/> 6<br/> 0<br/></td>
      <td>1 <br/> 5 <br/> 7 <br/></td>
      <td>32</td>
      <td>4<br/> 8<br/> 0<br/></td>
      <td>6 <br/> 9 <br/> 9 <br/></td>
      <td>48</td>
      <td>1<br/> 8<br/> 9<br/></td>
      <td>3 <br/> 4 <br/> 6 <br/></td>
      <td>31</td>
      <td>5<br/> 6<br/> 0<br/></td>
      <td  className="r"> 3 <br/> 9 <br/> 0 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 3<br/> 4<br/> 5<br/></td>
   </tr>
   <tr>
      <td>08-04-2019<br/> To <br/> 13-04-2019</td>
      <td>2 <br/> 6 <br/> 8 <br/></td>
      <td>64</td>
      <td>3<br/> 5<br/> 6<br/></td>
      <td  className="r"> 2 <br/> 4 <br/> 0 <br/></td>
      <td  className="r">61</td>
      <td  className="r"> 4<br/> 7<br/> 0<br/></td>
      <td>1 <br/> 5 <br/> 8 <br/></td>
      <td>42</td>
      <td>3<br/> 4<br/> 5<br/></td>
      <td>3 <br/> 3 <br/> 0 <br/></td>
      <td>62</td>
      <td>2<br/> 3<br/> 7<br/></td>
      <td>2 <br/> 6 <br/> 7 <br/></td>
      <td>53</td>
      <td>6<br/> 8<br/> 9<br/></td>
      <td>2 <br/> 6 <br/> 0 <br/></td>
      <td>86</td>
      <td>7<br/> 9<br/> 0<br/></td>
   </tr>
   <tr>
      <td>15-04-2019<br/> To <br/> 20-04-2019</td>
      <td>1 <br/> 5 <br/> 6 <br/></td>
      <td>25</td>
      <td>1<br/> 1<br/> 3<br/></td>
      <td  className="r"> 2 <br/> 7 <br/> 9 <br/></td>
      <td  className="r">83</td>
      <td  className="r"> 3<br/> 4<br/> 6<br/></td>
      <td  className="r"> 2 <br/> 3 <br/> 8 <br/></td>
      <td  className="r">38</td>
      <td  className="r"> 3<br/> 7<br/> 8<br/></td>
      <td>1 <br/> 7 <br/> 8 <br/></td>
      <td>68</td>
      <td>3<br/> 5<br/> 0<br/></td>
      <td>1 <br/> 5 <br/> 6 <br/></td>
      <td>20</td>
      <td>5<br/> 6<br/> 9<br/></td>
      <td>1 <br/> 4 <br/> 8 <br/></td>
      <td>32</td>
      <td>1<br/> 1<br/> 0<br/></td>
   </tr>
   <tr>
      <td>22-04-2019<br/> To <br/> 27-04-2019</td>
      <td>4 <br/> 7 <br/> 8 <br/></td>
      <td>90</td>
      <td>1<br/> 3<br/> 6<br/></td>
      <td>2 <br/> 7 <br/> 9 <br/></td>
      <td>80</td>
      <td>5<br/> 7<br/> 8<br/></td>
      <td>7 <br/> 8 <br/> 8 <br/></td>
      <td>35</td>
      <td>1<br/> 2<br/> 2<br/></td>
      <td>4 <br/> 5 <br/> 9 <br/></td>
      <td>84</td>
      <td>4<br/> 5<br/> 5<br/></td>
      <td>2 <br/> 2 <br/> 9 <br/></td>
      <td>37</td>
      <td>1<br/> 7<br/> 9<br/></td>
      <td>1 <br/> 0 <br/> 0 <br/></td>
      <td>10</td>
      <td>1<br/> 4<br/> 5<br/></td>
   </tr>
   <tr>
      <td>29-04-2019<br/> To <br/> 04-05-2019</td>
      <td>2 <br/> 5 <br/> 0 <br/></td>
      <td>74</td>
      <td>1<br/> 6<br/> 7<br/></td>
      <td>2 <br/> 6 <br/> 0 <br/></td>
      <td>84</td>
      <td>5<br/> 9<br/> 0<br/></td>
      <td>2 <br/> 8 <br/> 9 <br/></td>
      <td>98</td>
      <td>2<br/> 2<br/> 4<br/></td>
      <td  className="r"> 1 <br/> 2 <br/> 7 <br/></td>
      <td  className="r">05</td>
      <td  className="r"> 7<br/> 8<br/> 0<br/></td>
      <td  className="r"> 1 <br/> 4 <br/> 8 <br/></td>
      <td  className="r">38</td>
      <td  className="r"> 1<br/> 7<br/> 0<br/></td>
      <td>2 <br/> 6 <br/> 0 <br/></td>
      <td>87</td>
      <td>4<br/> 5<br/> 8<br/></td>
   </tr>
   <tr>
      <td>06-05-2019<br/> To <br/> 11-05-2019</td>
      <td>5 <br/> 9 <br/> 0 <br/></td>
      <td>48</td>
      <td>1<br/> 7<br/> 0<br/></td>
      <td>1 <br/> 3 <br/> 6 <br/></td>
      <td>01</td>
      <td>6<br/> 7<br/> 8<br/></td>
      <td>6 <br/> 8 <br/> 9 <br/></td>
      <td>36</td>
      <td>1<br/> 5<br/> 0<br/></td>
      <td>5 <br/> 7 <br/> 8 <br/></td>
      <td>07</td>
      <td>4<br/> 6<br/> 7<br/></td>
      <td>1 <br/> 4 <br/> 9 <br/></td>
      <td>46</td>
      <td>3<br/> 6<br/> 7<br/></td>
      <td>1 <br/> 6 <br/> 7 <br/></td>
      <td>41</td>
      <td>2<br/> 9<br/> 0<br/></td>
   </tr>
   <tr>
      <td>13-05-2019<br/> To <br/> 18-05-2019</td>
      <td>5 <br/> 8 <br/> 0 <br/></td>
      <td>37</td>
      <td>1<br/> 7<br/> 9<br/></td>
      <td  className="r"> 4 <br/> 4 <br/> 7 <br/></td>
      <td  className="r">55</td>
      <td  className="r"> 7<br/> 8<br/> 0<br/></td>
      <td>1 <br/> 3 <br/> 6 <br/></td>
      <td>02</td>
      <td>1<br/> 4<br/> 7<br/></td>
      <td>6 <br/> 7 <br/> 9 <br/></td>
      <td>28</td>
      <td>3<br/> 6<br/> 9<br/></td>
      <td  className="r"> 2 <br/> 3 <br/> 4 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 5<br/> 9<br/> 0<br/></td>
      <td>2 <br/> 4 <br/> 9 <br/></td>
      <td>52</td>
      <td>4<br/> 9<br/> 9<br/></td>
   </tr>
   <tr>
      <td>20-05-2019<br/> To <br/> 25-05-2019</td>
      <td  className="r"> 6 <br/> 7 <br/> 8 <br/></td>
      <td  className="r">11</td>
      <td  className="r"> 1<br/> 0<br/> 0<br/></td>
      <td>1 <br/> 8 <br/> 0 <br/></td>
      <td>96</td>
      <td>1<br/> 2<br/> 3<br/></td>
      <td  className="r"> 3 <br/> 4 <br/> 9 <br/></td>
      <td  className="r">66</td>
      <td  className="r"> 1<br/> 5<br/> 0<br/></td>
      <td>6 <br/> 7 <br/> 8 <br/></td>
      <td>14</td>
      <td>4<br/> 5<br/> 5<br/></td>
      <td  className="r"> 5 <br/> 7 <br/> 8 <br/></td>
      <td  className="r">05</td>
      <td  className="r"> 1<br/> 1<br/> 3<br/></td>
      <td>5 <br/> 6 <br/> 6 <br/></td>
      <td>74</td>
      <td>3<br/> 5<br/> 6<br/></td>
   </tr>
   <tr>
      <td>27-05-2019<br/> To <br/> 01-06-2019</td>
      <td  className="r"> 3 <br/> 0 <br/> 0 <br/></td>
      <td  className="r">38</td>
      <td  className="r"> 5<br/> 6<br/> 7<br/></td>
      <td>1 <br/> 2 <br/> 6 <br/></td>
      <td>95</td>
      <td>1<br/> 1<br/> 3<br/></td>
      <td>4 <br/> 5 <br/> 9 <br/></td>
      <td>85</td>
      <td>1<br/> 5<br/> 9<br/></td>
      <td  className="r"> 2 <br/> 3 <br/> 4 <br/></td>
      <td  className="r">99</td>
      <td  className="r"> 3<br/> 6<br/> 0<br/></td>
      <td>2 <br/> 3 <br/> 0 <br/></td>
      <td>59</td>
      <td>1<br/> 1<br/> 7<br/></td>
      <td>1 <br/> 3 <br/> 5 <br/></td>
      <td>92</td>
      <td>4<br/> 8<br/> 0<br/></td>
   </tr>
   <tr>
      <td>03-06-2019<br/> To <br/> 08-06-2019</td>
      <td>3 <br/> 7 <br/> 9 <br/></td>
      <td>93</td>
      <td>1<br/> 4<br/> 8<br/></td>
      <td>4 <br/> 6 <br/> 8 <br/></td>
      <td>80</td>
      <td>4<br/> 8<br/> 8<br/></td>
      <td>1 <br/> 9 <br/> 9 <br/></td>
      <td>98</td>
      <td>1<br/> 3<br/> 4<br/></td>
      <td  className="r"> 2 <br/> 6 <br/> 9 <br/></td>
      <td  className="r">72</td>
      <td  className="r"> 1<br/> 3<br/> 8<br/></td>
      <td>2 <br/> 5 <br/> 5 <br/></td>
      <td>24</td>
      <td>4<br/> 5<br/> 5<br/></td>
      <td>3 <br/> 8 <br/> 9 <br/></td>
      <td>01</td>
      <td>1<br/> 2<br/> 8<br/></td>
   </tr>
   <tr>
      <td>10-06-2019<br/> To <br/> 15-06-2019</td>
      <td>3 <br/> 8 <br/> 9 <br/></td>
      <td>07</td>
      <td>3<br/> 5<br/> 9<br/></td>
      <td>3 <br/> 6 <br/> 6 <br/></td>
      <td>58</td>
      <td>2<br/> 6<br/> 0<br/></td>
      <td>3 <br/> 5 <br/> 9 <br/></td>
      <td>71</td>
      <td>1<br/> 4<br/> 6<br/></td>
      <td>3 <br/> 0 <br/> 0 <br/></td>
      <td>31</td>
      <td>5<br/> 8<br/> 8<br/></td>
      <td>1 <br/> 4 <br/> 0 <br/></td>
      <td>51</td>
      <td>2<br/> 3<br/> 6<br/></td>
      <td>4 <br/> 7 <br/> 8 <br/></td>
      <td>96</td>
      <td>3<br/> 6<br/> 7<br/></td>
   </tr>
   <tr>
      <td>17-06-2019<br/> To <br/> 22-06-2019</td>
      <td>3 <br/> 4 <br/> 8 <br/></td>
      <td>58</td>
      <td>2<br/> 6<br/> 0<br/></td>
      <td  className="r"> 6 <br/> 8 <br/> 9 <br/></td>
      <td  className="r">33</td>
      <td  className="r"> 1<br/> 2<br/> 0<br/></td>
      <td>1 <br/> 3 <br/> 7 <br/></td>
      <td>10</td>
      <td>2<br/> 2<br/> 6<br/></td>
      <td  className="r"> 1 <br/> 3 <br/> 6 <br/></td>
      <td  className="r">05</td>
      <td  className="r"> 2<br/> 4<br/> 9<br/></td>
      <td>3 <br/> 4 <br/> 8 <br/></td>
      <td>54</td>
      <td>1<br/> 4<br/> 9<br/></td>
      <td>4 <br/> 5 <br/> 8 <br/></td>
      <td>70</td>
      <td>3<br/> 3<br/> 4<br/></td>
   </tr>
   <tr>
      <td>24-06-2019<br/> To <br/> 29-06-2019</td>
      <td>6 <br/> 9 <br/> 0 <br/></td>
      <td>57</td>
      <td>1<br/> 6<br/> 0<br/></td>
      <td>3 <br/> 3 <br/> 0 <br/></td>
      <td>68</td>
      <td>2<br/> 6<br/> 0<br/></td>
      <td>1 <br/> 2 <br/> 7 <br/></td>
      <td>03</td>
      <td>7<br/> 8<br/> 8<br/></td>
      <td>5 <br/> 6 <br/> 8 <br/></td>
      <td>98</td>
      <td>2<br/> 7<br/> 9<br/></td>
      <td>3 <br/> 8 <br/> 0 <br/></td>
      <td>14</td>
      <td>7<br/> 7<br/> 0<br/></td>
      <td>3 <br/> 4 <br/> 9 <br/></td>
      <td>67</td>
      <td>1<br/> 6<br/> 0<br/></td>
   </tr>
   <tr>
      <td>01-07-2019<br/> To <br/> 06-07-2019</td>
      <td  className="r"> 5 <br/> 0 <br/> 0 <br/></td>
      <td  className="r">55</td>
      <td  className="r"> 2<br/> 4<br/> 9<br/></td>
      <td>2 <br/> 5 <br/> 9 <br/></td>
      <td>68</td>
      <td>2<br/> 7<br/> 9<br/></td>
      <td  className="r"> 4 <br/> 4 <br/> 8 <br/></td>
      <td  className="r">61</td>
      <td  className="r"> 1<br/> 3<br/> 7<br/></td>
      <td  className="r"> 4 <br/> 4 <br/> 5 <br/></td>
      <td  className="r">33</td>
      <td  className="r"> 3<br/> 0<br/> 0<br/></td>
      <td  className="r"> 2 <br/> 3 <br/> 8 <br/></td>
      <td  className="r">33</td>
      <td  className="r"> 2<br/> 4<br/> 7<br/></td>
      <td>2 <br/> 5 <br/> 6 <br/></td>
      <td>34</td>
      <td>1<br/> 5<br/> 8<br/></td>
   </tr>
   <tr>
      <td>08-07-2019<br/> To <br/> 13-07-2019</td>
      <td>3 <br/> 6 <br/> 0 <br/></td>
      <td>91</td>
      <td>1<br/> 4<br/> 6<br/></td>
      <td>5 <br/> 8 <br/> 0 <br/></td>
      <td>39</td>
      <td>5<br/> 5<br/> 9<br/></td>
      <td>3 <br/> 3 <br/> 5 <br/></td>
      <td>17</td>
      <td>5<br/> 6<br/> 6<br/></td>
      <td>6 <br/> 6 <br/> 9 <br/></td>
      <td>14</td>
      <td>7<br/> 8<br/> 9<br/></td>
      <td  className="r"> 2 <br/> 2 <br/> 4 <br/></td>
      <td  className="r">88</td>
      <td  className="r"> 3<br/> 7<br/> 8<br/></td>
      <td>4 <br/> 7 <br/> 8 <br/></td>
      <td>97</td>
      <td>2<br/> 7<br/> 8<br/></td>
   </tr>
   <tr>
      <td>15-07-2019<br/> To <br/> 20-07-2019</td>
      <td  className="r"> 3 <br/> 4 <br/> 6 <br/></td>
      <td  className="r">33</td>
      <td  className="r"> 5<br/> 8<br/> 0<br/></td>
      <td>1 <br/> 6 <br/> 8 <br/></td>
      <td>57</td>
      <td>8<br/> 9<br/> 0<br/></td>
      <td  className="r"> 7 <br/> 8 <br/> 9 <br/></td>
      <td  className="r">49</td>
      <td  className="r"> 1<br/> 3<br/> 5<br/></td>
      <td>2 <br/> 3 <br/> 0 <br/></td>
      <td>54</td>
      <td>2<br/> 6<br/> 6<br/></td>
      <td  className="r"> 3 <br/> 6 <br/> 9 <br/></td>
      <td  className="r">83</td>
      <td  className="r"> 2<br/> 3<br/> 8<br/></td>
      <td>3 <br/> 5 <br/> 6 <br/></td>
      <td>45</td>
      <td>7<br/> 8<br/> 0<br/></td>
   </tr>
   <tr>
      <td>22-07-2019<br/> To <br/> 27-07-2019</td>
      <td  className="r"> 3 <br/> 6 <br/> 7 <br/></td>
      <td  className="r">61</td>
      <td  className="r"> 3<br/> 8<br/> 0<br/></td>
      <td  className="r"> 2 <br/> 3 <br/> 7 <br/></td>
      <td  className="r">27</td>
      <td  className="r"> 1<br/> 6<br/> 0<br/></td>
      <td>3 <br/> 5 <br/> 9 <br/></td>
      <td>71</td>
      <td>1<br/> 3<br/> 7<br/></td>
      <td>5 <br/> 6 <br/> 7 <br/></td>
      <td>81</td>
      <td>2<br/> 9<br/> 0<br/></td>
      <td>4 <br/> 6 <br/> 0 <br/></td>
      <td>04</td>
      <td>5<br/> 9<br/> 0<br/></td>
      <td>1 <br/> 4 <br/> 8 <br/></td>
      <td>35</td>
      <td>7<br/> 8<br/> 0<br/></td>
   </tr>
   <tr>
      <td>29-07-2019<br/> To <br/> 03-08-2019</td>
      <td>2 <br/> 2 <br/> 7 <br/></td>
      <td>14</td>
      <td>6<br/> 9<br/> 9<br/></td>
      <td>1 <br/> 4 <br/> 6 <br/></td>
      <td>19</td>
      <td>5<br/> 6<br/> 8<br/></td>
      <td>3 <br/> 6 <br/> 8 <br/></td>
      <td>70</td>
      <td>4<br/> 7<br/> 9<br/></td>
      <td>6 <br/> 9 <br/> 9 <br/></td>
      <td>47</td>
      <td>4<br/> 6<br/> 7<br/></td>
      <td>4 <br/> 6 <br/> 0 <br/></td>
      <td>04</td>
      <td>1<br/> 6<br/> 7<br/></td>
      <td>1 <br/> 5 <br/> 8 <br/></td>
      <td>47</td>
      <td>3<br/> 6<br/> 8<br/></td>
   </tr>
   <tr>
      <td>05-08-2019<br/> To <br/> 10-08-2019</td>
      <td>8 <br/> 9 <br/> 0 <br/></td>
      <td>75</td>
      <td>4<br/> 5<br/> 6<br/></td>
      <td  className="r"> 3 <br/> 5 <br/> 7 <br/></td>
      <td  className="r">55</td>
      <td  className="r"> 1<br/> 1<br/> 3<br/></td>
      <td  className="r"> 7 <br/> 7 <br/> 8 <br/></td>
      <td  className="r">27</td>
      <td  className="r"> 1<br/> 1<br/> 5<br/></td>
      <td>2 <br/> 8 <br/> 9 <br/></td>
      <td>91</td>
      <td>5<br/> 8<br/> 8<br/></td>
      <td>3 <br/> 4 <br/> 9 <br/></td>
      <td>60</td>
      <td>5<br/> 6<br/> 9<br/></td>
      <td>1 <br/> 4 <br/> 0 <br/></td>
      <td>54</td>
      <td>1<br/> 6<br/> 7<br/></td>
   </tr>
   <tr>
      <td>12-08-2019<br/> To <br/> 17-08-2019</td>
      <td>1 <br/> 2 <br/> 4 <br/></td>
      <td>73</td>
      <td>6<br/> 7<br/> 0<br/></td>
      <td>7 <br/> 9 <br/> 0 <br/></td>
      <td>63</td>
      <td>2<br/> 4<br/> 7<br/></td>
      <td>1 <br/> 5 <br/> 7 <br/></td>
      <td>39</td>
      <td>1<br/> 2<br/> 6<br/></td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td>*<br/>*<br/>*</td>
      <td>2 <br/> 7 <br/> 8 <br/></td>
      <td>71</td>
      <td>3<br/> 3<br/> 5<br/></td>
      <td>6 <br/> 0 <br/> 0 <br/></td>
      <td>62</td>
      <td>6<br/> 8<br/> 8<br/></td>
   </tr>
   <tr>
      <td>19-08-2019<br/> To <br/> 24-08-2019</td>
      <td>5 <br/> 9 <br/> 9 <br/></td>
      <td>36</td>
      <td>6<br/> 0<br/> 0<br/></td>
      <td>1 <br/> 4 <br/> 7 <br/></td>
      <td>24</td>
      <td>4<br/> 0<br/> 0<br/></td>
      <td>3 <br/> 5 <br/> 9 <br/></td>
      <td>74</td>
      <td>1<br/> 5<br/> 8<br/></td>
      <td>1 <br/> 3 <br/> 7 <br/></td>
      <td>17</td>
      <td>1<br/> 1<br/> 5<br/></td>
      <td>3 <br/> 6 <br/> 6 <br/></td>
      <td>56</td>
      <td>4<br/> 5<br/> 7<br/></td>
      <td>1 <br/> 4 <br/> 4 <br/></td>
      <td>96</td>
      <td>2<br/> 7<br/> 7<br/></td>
   </tr>
   <tr>
      <td>26-08-2019<br/> To <br/> 31-08-2019</td>
      <td>1 <br/> 2 <br/> 6 <br/></td>
      <td>92</td>
      <td>1<br/> 3<br/> 8<br/></td>
      <td>3 <br/> 5 <br/> 0 <br/></td>
      <td>87</td>
      <td>1<br/> 1<br/> 5<br/></td>
      <td>1 <br/> 3 <br/> 8 <br/></td>
      <td>23</td>
      <td>1<br/> 3<br/> 9<br/></td>
      <td>5 <br/> 8 <br/> 9 <br/></td>
      <td>23</td>
      <td>3<br/> 4<br/> 6<br/></td>
      <td>1 <br/> 8 <br/> 0 <br/></td>
      <td>92</td>
      <td>5<br/> 8<br/> 9<br/></td>
      <td>1 <br/> 3 <br/> 8 <br/></td>
      <td>21</td>
      <td>6<br/> 7<br/> 8<br/></td>
   </tr>
   <tr>
      <td>02-09-2019<br/> To <br/> 07-09-2019</td>
      <td  className="r"> 6 <br/> 8 <br/> 0 <br/></td>
      <td  className="r">49</td>
      <td  className="r"> 5<br/> 5<br/> 9<br/></td>
      <td>2 <br/> 8 <br/> 9 <br/></td>
      <td>96</td>
      <td>1<br/> 7<br/> 8<br/></td>
      <td  className="r"> 7 <br/> 8 <br/> 9 <br/></td>
      <td  className="r">44</td>
      <td  className="r"> 6<br/> 8<br/> 0<br/></td>
      <td>7 <br/> 8 <br/> 0 <br/></td>
      <td>57</td>
      <td>3<br/> 6<br/> 8<br/></td>
      <td>2 <br/> 9 <br/> 0 <br/></td>
      <td>18</td>
      <td>3<br/> 5<br/> 0<br/></td>
      <td>4 <br/> 9 <br/> 9 <br/></td>
      <td>28</td>
      <td>1<br/> 3<br/> 4<br/></td>
   </tr>
   <tr>
      <td>09-09-2019<br/> To <br/> 14-09-2019</td>
      <td  className="r"> 2 <br/> 9 <br/> 9 <br/></td>
      <td  className="r">00</td>
      <td  className="r"> 1<br/> 4<br/> 5<br/></td>
      <td>4 <br/> 4 <br/> 9 <br/></td>
      <td>76</td>
      <td>8<br/> 9<br/> 9<br/></td>
      <td>3 <br/> 4 <br/> 9 <br/></td>
      <td>60</td>
      <td>1<br/> 2<br/> 7<br/></td>
      <td>5 <br/> 6 <br/> 9 <br/></td>
      <td>02</td>
      <td>2<br/> 5<br/> 5<br/></td>
      <td>1 <br/> 1 <br/> 7 <br/></td>
      <td>96</td>
      <td>4<br/> 6<br/> 6<br/></td>
      <td>2 <br/> 2 <br/> 3 <br/></td>
      <td>78</td>
      <td>1<br/> 7<br/> 0<br/></td>
   </tr>
   <tr>
      <td>16-09-2019<br/> To <br/> 21-09-2019</td>
      <td  className="r"> 1 <br/> 3 <br/> 8 <br/></td>
      <td  className="r">27</td>
      <td  className="r"> 8<br/> 9<br/> 0<br/></td>
      <td>5 <br/> 5 <br/> 8 <br/></td>
      <td>80</td>
      <td>1<br/> 2<br/> 7<br/></td>
      <td>4 <br/> 6 <br/> 6 <br/></td>
      <td>62</td>
      <td>7<br/> 7<br/> 8<br/></td>
      <td>1 <br/> 5 <br/> 7 <br/></td>
      <td>34</td>
      <td>3<br/> 5<br/> 6<br/></td>
      <td>1 <br/> 4 <br/> 5 <br/></td>
      <td>03</td>
      <td>5<br/> 9<br/> 9<br/></td>
      <td>3 <br/> 4 <br/> 5 <br/></td>
      <td>20</td>
      <td>2<br/> 3<br/> 5<br/></td>
   </tr>
   <tr>
      <td>23-09-2019<br/> To <br/> 28-09-2019</td>
      <td>1 <br/> 6 <br/> 8 <br/></td>
      <td>51</td>
      <td>6<br/> 6<br/> 9<br/></td>
      <td>2 <br/> 7 <br/> 9 <br/></td>
      <td>87</td>
      <td>5<br/> 6<br/> 6<br/></td>
      <td>4 <br/> 8 <br/> 0 <br/></td>
      <td>20</td>
      <td>4<br/> 7<br/> 9<br/></td>
      <td>3 <br/> 4 <br/> 9 <br/></td>
      <td>64</td>
      <td>1<br/> 1<br/> 2<br/></td>
      <td>2 <br/> 3 <br/> 9 <br/></td>
      <td>42</td>
      <td>3<br/> 4<br/> 5<br/></td>
      <td>3 <br/> 4 <br/> 7 <br/></td>
      <td>48</td>
      <td>2<br/> 6<br/> 0<br/></td>
   </tr>
   <tr>
      <td>30-09-2019<br/> To <br/> 05-10-2019</td>
      <td  className="r"> 5 <br/> 6 <br/> 9 <br/></td>
      <td  className="r">05</td>
      <td  className="r"> 2<br/> 3<br/> 0<br/></td>
      <td>2 <br/> 3 <br/> 3 <br/></td>
      <td>87</td>
      <td>1<br/> 2<br/> 4<br/></td>
      <td>1 <br/> 8 <br/> 9 <br/></td>
      <td>85</td>
      <td>3<br/> 4<br/> 8<br/></td>
      <td>1 <br/> 2 <br/> 9 <br/></td>
      <td>24</td>
      <td>5<br/> 9<br/> 0<br/></td>
      <td  className="r"> 2 <br/> 7 <br/> 0 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 1<br/> 5<br/> 8<br/></td>
      <td>4 <br/> 5 <br/> 9 <br/></td>
      <td>82</td>
      <td>1<br/> 4<br/> 7<br/></td>
   </tr>
   <tr>
      <td>07-10-2019<br/> To <br/> 12-10-2019</td>
      <td>2 <br/> 4 <br/> 6 <br/></td>
      <td>21</td>
      <td>1<br/> 4<br/> 6<br/></td>
      <td>1 <br/> 5 <br/> 7 <br/></td>
      <td>36</td>
      <td>1<br/> 5<br/> 0<br/></td>
      <td>1 <br/> 6 <br/> 9 <br/></td>
      <td>64</td>
      <td>2<br/> 2<br/> 0<br/></td>
      <td  className="r"> 1 <br/> 5 <br/> 7 <br/></td>
      <td  className="r">38</td>
      <td  className="r"> 2<br/> 6<br/> 0<br/></td>
      <td>2 <br/> 4 <br/> 8 <br/></td>
      <td>46</td>
      <td>1<br/> 2<br/> 3<br/></td>
      <td>3 <br/> 7 <br/> 0 <br/></td>
      <td>07</td>
      <td>3<br/> 6<br/> 8<br/></td>
   </tr>
   <tr>
      <td>14-10-2019<br/> To <br/> 19-10-2019</td>
      <td>2 <br/> 6 <br/> 7 <br/></td>
      <td>56</td>
      <td>3<br/> 4<br/> 9<br/></td>
      <td  className="r"> 2 <br/> 2 <br/> 4 <br/></td>
      <td  className="r">88</td>
      <td  className="r"> 4<br/> 5<br/> 9<br/></td>
      <td>1 <br/> 8 <br/> 0 <br/></td>
      <td>91</td>
      <td>1<br/> 2<br/> 8<br/></td>
      <td>1 <br/> 6 <br/> 8 <br/></td>
      <td>59</td>
      <td>1<br/> 4<br/> 4<br/></td>
      <td>4 <br/> 6 <br/> 0 <br/></td>
      <td>03</td>
      <td>6<br/> 7<br/> 0<br/></td>
      <td  className="r"> 4 <br/> 8 <br/> 9 <br/></td>
      <td  className="r">11</td>
      <td  className="r"> 6<br/> 7<br/> 8<br/></td>
   </tr>
   <tr>
      <td>21-10-2019<br/> To <br/> 26-10-2019</td>
      <td>4 <br/> 6 <br/> 0 <br/></td>
      <td>03</td>
      <td>1<br/> 3<br/> 9<br/></td>
      <td>4 <br/> 6 <br/> 9 <br/></td>
      <td>92</td>
      <td>2<br/> 4<br/> 6<br/></td>
      <td>1 <br/> 5 <br/> 6 <br/></td>
      <td>26</td>
      <td>2<br/> 5<br/> 9<br/></td>
      <td>2 <br/> 2 <br/> 4 <br/></td>
      <td>80</td>
      <td>5<br/> 7<br/> 8<br/></td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td>*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td>*<br/>*<br/>*</td>
   </tr>
   <tr>
      <td>28-10-2019<br/> To <br/> 02-11-2019</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td>*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td>*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td>*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td>*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td>*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td>*<br/>*<br/>*</td>
   </tr>
   <tr>
      <td>04-11-2019<br/> To <br/> 09-11-2019</td>
      <td  className="r"> 1 <br/> 2 <br/> 8 <br/></td>
      <td  className="r">16</td>
      <td  className="r"> 4<br/> 5<br/> 7<br/></td>
      <td>2 <br/> 8 <br/> 9 <br/></td>
      <td>95</td>
      <td>2<br/> 6<br/> 7<br/></td>
      <td>6 <br/> 7 <br/> 8 <br/></td>
      <td>19</td>
      <td>3<br/> 8<br/> 8<br/></td>
      <td>2 <br/> 2 <br/> 5 <br/></td>
      <td>91</td>
      <td>1<br/> 3<br/> 7<br/></td>
      <td>7 <br/> 7 <br/> 9 <br/></td>
      <td>39</td>
      <td>3<br/> 6<br/> 0<br/></td>
      <td>1 <br/> 4 <br/> 0 <br/></td>
      <td>51</td>
      <td>5<br/> 6<br/> 0<br/></td>
   </tr>
   <tr>
      <td>11-11-2019<br/> To <br/> 16-11-2019</td>
      <td>2 <br/> 7 <br/> 0 <br/></td>
      <td>95</td>
      <td>7<br/> 8<br/> 0<br/></td>
      <td>1 <br/> 2 <br/> 0 <br/></td>
      <td>35</td>
      <td>7<br/> 8<br/> 0<br/></td>
      <td>2 <br/> 8 <br/> 0 <br/></td>
      <td>01</td>
      <td>6<br/> 7<br/> 8<br/></td>
      <td>4 <br/> 8 <br/> 9 <br/></td>
      <td>17</td>
      <td>8<br/> 9<br/> 0<br/></td>
      <td>6 <br/> 7 <br/> 0 <br/></td>
      <td>35</td>
      <td>3<br/> 6<br/> 6<br/></td>
      <td>3 <br/> 7 <br/> 8 <br/></td>
      <td>80</td>
      <td>3<br/> 3<br/> 4<br/></td>
   </tr>
   <tr>
      <td>18-11-2019<br/> To <br/> 23-11-2019</td>
      <td>4 <br/> 7 <br/> 9 <br/></td>
      <td>04</td>
      <td>3<br/> 4<br/> 7<br/></td>
      <td>2 <br/> 2 <br/> 7 <br/></td>
      <td>17</td>
      <td>3<br/> 4<br/> 0<br/></td>
      <td>2 <br/> 3 <br/> 6 <br/></td>
      <td>15</td>
      <td>3<br/> 5<br/> 7<br/></td>
      <td>7 <br/> 8 <br/> 8 <br/></td>
      <td>36</td>
      <td>2<br/> 7<br/> 7<br/></td>
      <td>5 <br/> 8 <br/> 9 <br/></td>
      <td>25</td>
      <td>1<br/> 5<br/> 9<br/></td>
      <td>5 <br/> 8 <br/> 9 <br/></td>
      <td>29</td>
      <td>4<br/> 5<br/> 0<br/></td>
   </tr>
   <tr>
      <td>25-11-2019<br/> To <br/> 30-11-2019</td>
      <td>7 <br/> 8 <br/> 9 <br/></td>
      <td>43</td>
      <td>5<br/> 9<br/> 9<br/></td>
      <td>3 <br/> 5 <br/> 0 <br/></td>
      <td>84</td>
      <td>2<br/> 5<br/> 7<br/></td>
      <td>3 <br/> 8 <br/> 8 <br/></td>
      <td>93</td>
      <td>2<br/> 2<br/> 9<br/></td>
      <td  className="r"> 1 <br/> 6 <br/> 9 <br/></td>
      <td  className="r">61</td>
      <td  className="r"> 5<br/> 6<br/> 0<br/></td>
      <td>4 <br/> 6 <br/> 9 <br/></td>
      <td>90</td>
      <td>2<br/> 3<br/> 5<br/></td>
      <td  className="r"> 8 <br/> 8 <br/> 0 <br/></td>
      <td  className="r">66</td>
      <td  className="r"> 4<br/> 5<br/> 7<br/></td>
   </tr>
   <tr>
      <td>02-12-2019<br/> To <br/> 07-12-2019</td>
      <td>1 <br/> 7 <br/> 9 <br/></td>
      <td>73</td>
      <td>1<br/> 2<br/> 0<br/></td>
      <td  className="r"> 3 <br/> 5 <br/> 8 <br/></td>
      <td  className="r">66</td>
      <td  className="r"> 2<br/> 6<br/> 8<br/></td>
      <td>5 <br/> 6 <br/> 8 <br/></td>
      <td>95</td>
      <td>1<br/> 6<br/> 8<br/></td>
      <td>3 <br/> 9 <br/> 0 <br/></td>
      <td>25</td>
      <td>3<br/> 4<br/> 8<br/></td>
      <td>3 <br/> 6 <br/> 8 <br/></td>
      <td>70</td>
      <td>1<br/> 1<br/> 8<br/></td>
      <td>3 <br/> 4 <br/> 9 <br/></td>
      <td>68</td>
      <td>4<br/> 6<br/> 8<br/></td>
   </tr>
   <tr>
      <td>09-12-2019<br/> To <br/> 14-12-2019</td>
      <td>4 <br/> 0 <br/> 0 <br/></td>
      <td>48</td>
      <td>5<br/> 6<br/> 7<br/></td>
      <td>6 <br/> 7 <br/> 8 <br/></td>
      <td>15</td>
      <td>4<br/> 5<br/> 6<br/></td>
      <td>3 <br/> 6 <br/> 7 <br/></td>
      <td>69</td>
      <td>5<br/> 5<br/> 9<br/></td>
      <td>8 <br/> 8 <br/> 9 <br/></td>
      <td>59</td>
      <td>2<br/> 3<br/> 4<br/></td>
      <td>1 <br/> 2 <br/> 2 <br/></td>
      <td>58</td>
      <td>4<br/> 7<br/> 7<br/></td>
      <td>2 <br/> 3 <br/> 7 <br/></td>
      <td>29</td>
      <td>2<br/> 8<br/> 9<br/></td>
   </tr>
   <tr>
      <td>16-12-2019<br/> To <br/> 21-12-2019</td>
      <td>6 <br/> 8 <br/> 0 <br/></td>
      <td>48</td>
      <td>1<br/> 8<br/> 9<br/></td>
      <td  className="r"> 1 <br/> 6 <br/> 8 <br/></td>
      <td  className="r">55</td>
      <td  className="r"> 3<br/> 6<br/> 6<br/></td>
      <td  className="r"> 2 <br/> 3 <br/> 6 <br/></td>
      <td  className="r">11</td>
      <td  className="r"> 2<br/> 9<br/> 0<br/></td>
      <td>2 <br/> 3 <br/> 6 <br/></td>
      <td>10</td>
      <td>1<br/> 2<br/> 7<br/></td>
      <td  className="r"> 7 <br/> 0 <br/> 0 <br/></td>
      <td  className="r">72</td>
      <td  className="r"> 1<br/> 3<br/> 8<br/></td>
      <td>6 <br/> 7 <br/> 9 <br/></td>
      <td>23</td>
      <td>1<br/> 2<br/> 0<br/></td>
   </tr>
   <tr>
      <td>23-12-2019<br/> To <br/> 28-12-2019</td>
      <td>3 <br/> 6 <br/> 0 <br/></td>
      <td>98</td>
      <td>9<br/> 9<br/> 0<br/></td>
      <td>6 <br/> 8 <br/> 0 <br/></td>
      <td>42</td>
      <td>4<br/> 8<br/> 0<br/></td>
      <td>3 <br/> 6 <br/> 0 <br/></td>
      <td>97</td>
      <td>3<br/> 4<br/> 0<br/></td>
      <td>1 <br/> 4 <br/> 6 <br/></td>
      <td>15</td>
      <td>2<br/> 6<br/> 7<br/></td>
      <td  className="r"> 1 <br/> 2 <br/> 0 <br/></td>
      <td  className="r">38</td>
      <td  className="r"> 4<br/> 5<br/> 9<br/></td>
      <td>6 <br/> 8 <br/> 0 <br/></td>
      <td>43</td>
      <td>4<br/> 9<br/> 0<br/></td>
   </tr>
   <tr>
      <td>30-12-2019<br/> To <br/> 04-01-2020</td>
      <td  className="r"> 1 <br/> 3 <br/> 8 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 5<br/> 7<br/> 0<br/></td>
      <td>1 <br/> 2 <br/> 7 <br/></td>
      <td>02</td>
      <td>1<br/> 5<br/> 6<br/></td>
      <td>5 <br/> 7 <br/> 0 <br/></td>
      <td>23</td>
      <td>3<br/> 0<br/> 0<br/></td>
      <td  className="r"> 4 <br/> 0 <br/> 0 <br/></td>
      <td  className="r">49</td>
      <td  className="r"> 5<br/> 5<br/> 9<br/></td>
      <td>1 <br/> 1 <br/> 0 <br/></td>
      <td>21</td>
      <td>2<br/> 2<br/> 7<br/></td>
      <td>2 <br/> 4 <br/> 0 <br/></td>
      <td>68</td>
      <td>1<br/> 1<br/> 6<br/></td>
   </tr>
   <tr>
      <td>06-01-2020<br/> To <br/> 11-01-2020</td>
      <td>2 <br/> 9 <br/> 9 <br/></td>
      <td>06</td>
      <td>8<br/> 8<br/> 0<br/></td>
      <td>5 <br/> 5 <br/> 9 <br/></td>
      <td>90</td>
      <td>5<br/> 6<br/> 9<br/></td>
      <td  className="r"> 3 <br/> 7 <br/> 9 <br/></td>
      <td  className="r">94</td>
      <td  className="r"> 1<br/> 5<br/> 8<br/></td>
      <td>6 <br/> 6 <br/> 9 <br/></td>
      <td>15</td>
      <td>1<br/> 6<br/> 8<br/></td>
      <td>1 <br/> 3 <br/> 0 <br/></td>
      <td>40</td>
      <td>4<br/> 7<br/> 9<br/></td>
      <td>3 <br/> 4 <br/> 9 <br/></td>
      <td>64</td>
      <td>3<br/> 4<br/> 7<br/></td>
   </tr>
   <tr>
      <td>13-01-2020<br/> To <br/> 18-01-2020</td>
      <td>2 <br/> 6 <br/> 9 <br/></td>
      <td>76</td>
      <td>1<br/> 1<br/> 4<br/></td>
      <td  className="r"> 1 <br/> 3 <br/> 7 <br/></td>
      <td  className="r">11</td>
      <td  className="r"> 3<br/> 9<br/> 9<br/></td>
      <td>5 <br/> 6 <br/> 0 <br/></td>
      <td>12</td>
      <td>2<br/> 3<br/> 7<br/></td>
      <td>7 <br/> 7 <br/> 8 <br/></td>
      <td>29</td>
      <td>5<br/> 7<br/> 7<br/></td>
      <td  className="r"> 2 <br/> 6 <br/> 7 <br/></td>
      <td  className="r">55</td>
      <td  className="r"> 3<br/> 5<br/> 7<br/></td>
      <td>4 <br/> 6 <br/> 0 <br/></td>
      <td>04</td>
      <td>3<br/> 5<br/> 6<br/></td>
   </tr>
   <tr>
      <td>20-01-2020<br/> To <br/> 25-01-2020</td>
      <td  className="r"> 2 <br/> 3 <br/> 9 <br/></td>
      <td  className="r">49</td>
      <td  className="r"> 1<br/> 3<br/> 5<br/></td>
      <td>7 <br/> 8 <br/> 0 <br/></td>
      <td>54</td>
      <td>1<br/> 3<br/> 0<br/></td>
      <td>3 <br/> 0 <br/> 0 <br/></td>
      <td>31</td>
      <td>2<br/> 4<br/> 5<br/></td>
      <td>2 <br/> 5 <br/> 8 <br/></td>
      <td>54</td>
      <td>6<br/> 9<br/> 9<br/></td>
      <td>2 <br/> 2 <br/> 8 <br/></td>
      <td>23</td>
      <td>2<br/> 5<br/> 6<br/></td>
      <td  className="r"> 1 <br/> 7 <br/> 9 <br/></td>
      <td  className="r">77</td>
      <td  className="r"> 3<br/> 5<br/> 9<br/></td>
   </tr>
   <tr>
      <td>27-01-2020<br/> To <br/> 01-02-2020</td>
      <td>3 <br/> 4 <br/> 7 <br/></td>
      <td>41</td>
      <td>5<br/> 6<br/> 0<br/></td>
      <td  className="r"> 4 <br/> 8 <br/> 0 <br/></td>
      <td  className="r">22</td>
      <td  className="r"> 2<br/> 3<br/> 7<br/></td>
      <td>5 <br/> 5 <br/> 6 <br/></td>
      <td>67</td>
      <td>8<br/> 9<br/> 0<br/></td>
      <td>1 <br/> 3 <br/> 6 <br/></td>
      <td>04</td>
      <td>7<br/> 8<br/> 9<br/></td>
      <td>1 <br/> 1 <br/> 7 <br/></td>
      <td>95</td>
      <td>2<br/> 4<br/> 9<br/></td>
      <td>5 <br/> 7 <br/> 9 <br/></td>
      <td>10</td>
      <td>5<br/> 7<br/> 8<br/></td>
   </tr>
   <tr>
      <td>03-02-2020<br/> To <br/> 08-02-2020</td>
      <td>7 <br/> 8 <br/> 0 <br/></td>
      <td>56</td>
      <td>2<br/> 7<br/> 7<br/></td>
      <td>3 <br/> 4 <br/> 6 <br/></td>
      <td>31</td>
      <td>3<br/> 8<br/> 0<br/></td>
      <td>2 <br/> 4 <br/> 5 <br/></td>
      <td>15</td>
      <td>4<br/> 5<br/> 6<br/></td>
      <td>3 <br/> 3 <br/> 4 <br/></td>
      <td>01</td>
      <td>1<br/> 4<br/> 6<br/></td>
      <td  className="r"> 1 <br/> 3 <br/> 7 <br/></td>
      <td  className="r">16</td>
      <td  className="r"> 6<br/> 0<br/> 0<br/></td>
      <td>4 <br/> 9 <br/> 0 <br/></td>
      <td>34</td>
      <td>5<br/> 9<br/> 0<br/></td>
   </tr>
   <tr>
      <td>10-02-2020<br/> To <br/> 15-02-2020</td>
      <td>1 <br/> 7 <br/> 8 <br/></td>
      <td>64</td>
      <td>3<br/> 4<br/> 7<br/></td>
      <td>5 <br/> 0 <br/> 0 <br/></td>
      <td>59</td>
      <td>1<br/> 4<br/> 4<br/></td>
      <td>6 <br/> 8 <br/> 9 <br/></td>
      <td>37</td>
      <td>3<br/> 4<br/> 0<br/></td>
      <td>7 <br/> 0 <br/> 0 <br/></td>
      <td>73</td>
      <td>3<br/> 4<br/> 6<br/></td>
      <td>7 <br/> 9 <br/> 0 <br/></td>
      <td>69</td>
      <td>2<br/> 3<br/> 4<br/></td>
      <td>1 <br/> 3 <br/> 9 <br/></td>
      <td>34</td>
      <td>7<br/> 8<br/> 9<br/></td>
   </tr>
   <tr>
      <td>17-02-2020<br/> To <br/> 22-02-2020</td>
      <td>2 <br/> 7 <br/> 9 <br/></td>
      <td>85</td>
      <td>2<br/> 4<br/> 9<br/></td>
      <td>3 <br/> 8 <br/> 8 <br/></td>
      <td>91</td>
      <td>5<br/> 6<br/> 0<br/></td>
      <td>1 <br/> 4 <br/> 4 <br/></td>
      <td>96</td>
      <td>3<br/> 3<br/> 0<br/></td>
      <td>2 <br/> 3 <br/> 5 <br/></td>
      <td>06</td>
      <td>4<br/> 6<br/> 6<br/></td>
      <td>2 <br/> 3 <br/> 9 <br/></td>
      <td>41</td>
      <td>3<br/> 9<br/> 9<br/></td>
      <td>2 <br/> 4 <br/> 4 <br/></td>
      <td>06</td>
      <td>3<br/> 3<br/> 0<br/></td>
   </tr>
   <tr>
      <td>24-02-2020<br/> To <br/> 29-02-2020</td>
      <td>3 <br/> 6 <br/> 8 <br/></td>
      <td>74</td>
      <td>1<br/> 3<br/> 0<br/></td>
      <td>1 <br/> 9 <br/> 9 <br/></td>
      <td>91</td>
      <td>1<br/> 3<br/> 7<br/></td>
      <td>2 <br/> 3 <br/> 3 <br/></td>
      <td>80</td>
      <td>2<br/> 2<br/> 6<br/></td>
      <td>3 <br/> 4 <br/> 5 <br/></td>
      <td>25</td>
      <td>1<br/> 4<br/> 0<br/></td>
      <td>5 <br/> 9 <br/> 9 <br/></td>
      <td>39</td>
      <td>6<br/> 6<br/> 7<br/></td>
      <td>1 <br/> 6 <br/> 9 <br/></td>
      <td>67</td>
      <td>3<br/> 6<br/> 8<br/></td>
   </tr>
   <tr>
      <td>02/03/2020<br/>to<br/>07/03/2020</td>
      <td>1<br/>2<br/>4</td>
      <td>71</td>
      <td>4<br/>7<br/>0</td>
      <td>4<br/>5<br/>8</td>
      <td>78</td>
      <td>2<br/>6<br/>0</td>
      <td>3<br/>6<br/>7</td>
      <td>62</td>
      <td>6<br/>7<br/>9</td>
      <td>2<br/>5<br/>7</td>
      <td>42</td>
      <td>5<br/>7<br/>0</td>
      <td>2<br/>3<br/>5</td>
      <td>03</td>
      <td>6<br/>8<br/>9</td>
      <td>1<br/>8<br/>9</td>
      <td>87</td>
      <td>4<br/>4<br/>9</td>
   </tr>
   <tr>
      <td>09/03/2020<br/>to<br/>14/03/2020</td>
      <td>3<br/>5<br/>5</td>
      <td>30</td>
      <td>4<br/>7<br/>9</td>
      <td>*<br/>*<br/>*</td>
      <td>**</td>
      <td>*<br/>*<br/>*</td>
      <td>3<br/>4<br/>8</td>
      <td>57</td>
      <td>3<br/>6<br/>8</td>
      <td>1<br/>1<br/>5</td>
      <td>70</td>
      <td>1<br/>9<br/>0</td>
      <td>6<br/>7<br/>9</td>
      <td>26</td>
      <td>1<br/>5<br/>0</td>
      <td>1<br/>6<br/>9</td>
      <td>65</td>
      <td>6<br/>9<br/>0</td>
   </tr>
   <tr>
      <td>16/03/2020<br/>to<br/>21/03/2020</td>
      <td>5<br/>9<br/>9</td>
      <td>31</td>
      <td>5<br/>8<br/>8</td>
      <td>4<br/>8<br/>0</td>
      <td>25</td>
      <td>4<br/>4<br/>7</td>
      <td>5<br/>7<br/>7</td>
      <td>98</td>
      <td>4<br/>6<br/>8</td>
      <td>1<br/>2<br/>4</td>
      <td>78</td>
      <td>3<br/>6<br/>9</td>
      <td>1<br/>3<br/>5</td>
      <td>97</td>
      <td>2<br/>7<br/>8</td>
      <td>4<br/>4<br/>9</td>
      <td>70</td>
      <td>4<br/>8<br/>8</td>
   </tr>
   <tr>
      <td>23/03/2020<br/>to<br/>09/05/2020</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
   </tr>
   <tr>
      <td>11/05/2020<br/>to<br/>16/05/2020</td>
      <td>3<br/>5<br/>7</td>
      <td>56</td>
      <td>2<br/>6<br/>8</td>
      <td>6<br/>6<br/>8</td>
      <td>09</td>
      <td>1<br/>2<br/>6</td>
      <td>1<br/>5<br/>7</td>
      <td>39</td>
      <td>1<br/>4<br/>4</td>
      <td  className="r">6<br/>8<br/>0</td>
      <td  className="r">44</td>
      <td  className="r">3<br/>3<br/>8</td>
      <td>2<br/>5<br/>7</td>
      <td>40</td>
      <td>3<br/>3<br/>4</td>
      <td>2<br/>2<br/>8</td>
      <td>24</td>
      <td>7<br/>7<br/>0</td>
   </tr>
   <tr>
      <td>18/05/2020<br/>to<br/>23/05/2020</td>
      <td>2<br/>2<br/>9</td>
      <td>31</td>
      <td>6<br/>6<br/>9</td>
      <td>3<br/>8<br/>9</td>
      <td>01</td>
      <td>4<br/>8<br/>9</td>
      <td>4<br/>8<br/>9</td>
      <td>19</td>
      <td>4<br/>6<br/>9</td>
      <td>3<br/>0<br/>0</td>
      <td>31</td>
      <td>3<br/>8<br/>0</td>
      <td  className="r">1<br/>5<br/>5</td>
      <td  className="r">11</td>
      <td  className="r">2<br/>4<br/>5</td>
      <td  className="r">3<br/>4<br/>6</td>
      <td  className="r">38</td>
      <td  className="r">1<br/>2<br/>5</td>
   </tr>
   <tr>
      <td>25/05/2020<br/>to<br/>30/05/2020</td>
      <td  className="r">5<br/>5<br/>6</td>
      <td  className="r">61</td>
      <td  className="r">5<br/>8<br/>8</td>
      <td>4<br/>4<br/>8</td>
      <td>63</td>
      <td>7<br/>8<br/>8</td>
      <td  className="r">1<br/>3<br/>4</td>
      <td  className="r">88</td>
      <td  className="r">5<br/>6<br/>7</td>
      <td>4<br/>5<br/>0</td>
      <td>95</td>
      <td>3<br/>4<br/>8</td>
      <td>4<br/>5<br/>6</td>
      <td>54</td>
      <td>5<br/>9<br/>0</td>
      <td  className="r">1<br/>3<br/>6</td>
      <td  className="r">05</td>
      <td  className="r">3<br/>5<br/>7</td>
   </tr>
   <tr>
      <td>01/06/2020<br/>to<br/>06/06/2020</td>
      <td>7<br/>9<br/>0</td>
      <td>65</td>
      <td>1<br/>6<br/>8</td>
      <td>1<br/>2<br/>0</td>
      <td>36</td>
      <td>8<br/>9<br/>9</td>
      <td  className="r">1<br/>5<br/>7</td>
      <td  className="r">38</td>
      <td  className="r">2<br/>2<br/>4</td>
      <td>5<br/>8<br/>0</td>
      <td>37</td>
      <td>3<br/>7<br/>7</td>
      <td  className="r">6<br/>9<br/>9</td>
      <td  className="r">44</td>
      <td  className="r">7<br/>7<br/>0</td>
      <td>5<br/>6<br/>8</td>
      <td>93</td>
      <td>1<br/>3<br/>9</td>
   </tr>
   <tr>
      <td>08/06/2020<br/>to<br/>13/06/2020</td>
      <td  className="r">1<br/>3<br/>0</td>
      <td  className="r">44</td>
      <td  className="r">3<br/>5<br/>6</td>
      <td>5<br/>8<br/>9</td>
      <td>29</td>
      <td>5<br/>6<br/>8</td>
      <td>6<br/>9<br/>0</td>
      <td>51</td>
      <td>1<br/>2<br/>8</td>
      <td>1<br/>8<br/>9</td>
      <td>87</td>
      <td>4<br/>5<br/>8</td>
      <td>6<br/>6<br/>8</td>
      <td>08</td>
      <td>3<br/>7<br/>8</td>
      <td  className="r">5<br/>5<br/>7</td>
      <td  className="r">77</td>
      <td  className="r">3<br/>6<br/>8</td>
   </tr>
   <tr>
      <td>15/06/2020<br/>to<br/>20/06/2020</td>
      <td>2<br/>9<br/>9</td>
      <td>01</td>
      <td>1<br/>0<br/>0</td>
      <td>6<br/>9<br/>0</td>
      <td>57</td>
      <td>4<br/>5<br/>8</td>
      <td>2<br/>4<br/>9</td>
      <td>59</td>
      <td>4<br/>5<br/>0</td>
      <td>2<br/>6<br/>6</td>
      <td>41</td>
      <td>1<br/>2<br/>8</td>
      <td>4<br/>6<br/>9</td>
      <td>96</td>
      <td>2<br/>5<br/>9</td>
      <td>3<br/>5<br/>6</td>
      <td>48</td>
      <td>1<br/>3<br/>4</td>
   </tr>
   <tr>
      <td>22/06/2020<br/>to<br/>27/06/2020</td>
      <td>3<br/>4<br/>9</td>
      <td>64</td>
      <td>1<br/>1<br/>2</td>
      <td>4<br/>0<br/>0</td>
      <td>40</td>
      <td>1<br/>2<br/>7</td>
      <td>3<br/>4<br/>7</td>
      <td>46</td>
      <td>1<br/>2<br/>3</td>
      <td>5<br/>6<br/>9</td>
      <td>08</td>
      <td>1<br/>1<br/>6</td>
      <td>4<br/>4<br/>7</td>
      <td>51</td>
      <td>2<br/>3<br/>6</td>
      <td>2<br/>5<br/>5</td>
      <td>23</td>
      <td>4<br/>4<br/>5</td>
   </tr>
   <tr>
      <td>29/06/2020<br/>to<br/>04/07/2020</td>
      <td>2<br/>7<br/>8</td>
      <td>78</td>
      <td>3<br/>7<br/>8</td>
      <td>3<br/>3<br/>7</td>
      <td>31</td>
      <td>3<br/>9<br/>9</td>
      <td>3<br/>4<br/>5</td>
      <td>24</td>
      <td>7<br/>8<br/>9</td>
      <td>1<br/>1<br/>2</td>
      <td>40</td>
      <td>3<br/>7<br/>0</td>
      <td>1<br/>3<br/>6</td>
      <td>04</td>
      <td>3<br/>3<br/>8</td>
      <td>8<br/>9<br/>0</td>
      <td>78</td>
      <td>1<br/>8<br/>9</td>
   </tr>
   <tr>
      <td>06/07/2020<br/>to<br/>11/07/2020</td>
      <td  className="r">5<br/>6<br/>6</td>
      <td  className="r">77</td>
      <td  className="r">2<br/>5<br/>0</td>
      <td>3<br/>5<br/>9</td>
      <td>70</td>
      <td>2<br/>9<br/>9</td>
      <td  className="r">1<br/>2<br/>8</td>
      <td  className="r">11</td>
      <td  className="r">2<br/>9<br/>0</td>
      <td  className="r">2<br/>5<br/>7</td>
      <td  className="r">44</td>
      <td  className="r">3<br/>4<br/>7</td>
      <td>3<br/>7<br/>8</td>
      <td>87</td>
      <td>1<br/>8<br/>8</td>
      <td>1<br/>6<br/>7</td>
      <td>43</td>
      <td>2<br/>5<br/>6</td>
   </tr>
   <tr>
      <td>13/07/2020<br/>to<br/>18/07/2020</td>
      <td>5<br/>8<br/>9</td>
      <td>28</td>
      <td>2<br/>6<br/>0</td>
      <td  className="r">1<br/>2<br/>7</td>
      <td  className="r">05</td>
      <td  className="r">1<br/>6<br/>8</td>
      <td  className="r">1<br/>2<br/>6</td>
      <td  className="r">99</td>
      <td  className="r">1<br/>8<br/>0</td>
      <td>2<br/>3<br/>8</td>
      <td>32</td>
      <td>2<br/>0<br/>0</td>
      <td>5<br/>5<br/>8</td>
      <td>86</td>
      <td>1<br/>2<br/>3</td>
      <td>1<br/>1<br/>8</td>
      <td>03</td>
      <td>4<br/>9<br/>0</td>
   </tr>
   <tr>
      <td>20/07/2020<br/>to<br/>25/07/2020</td>
      <td>1<br/>1<br/>5</td>
      <td>71</td>
      <td>1<br/>2<br/>8</td>
      <td>1<br/>6<br/>9</td>
      <td>67</td>
      <td>5<br/>5<br/>7</td>
      <td>2<br/>4<br/>0</td>
      <td>67</td>
      <td>4<br/>6<br/>7</td>
      <td>2<br/>6<br/>8</td>
      <td>62</td>
      <td>5<br/>8<br/>9</td>
      <td>3<br/>4<br/>0</td>
      <td>73</td>
      <td>2<br/>4<br/>7</td>
      <td  className="r">1<br/>3<br/>6</td>
      <td  className="r">05</td>
      <td  className="r">3<br/>3<br/>9</td>
   </tr>
   <tr>
      <td>27/07/2020<br/>to<br/>01/08/2020</td>
      <td>2<br/>0<br/>0</td>
      <td>23</td>
      <td>1<br/>2<br/>0</td>
      <td>3<br/>5<br/>8</td>
      <td>62</td>
      <td>6<br/>7<br/>9</td>
      <td  className="r">4<br/>8<br/>8</td>
      <td  className="r">05</td>
      <td  className="r">4<br/>4<br/>7</td>
      <td>7<br/>9<br/>0</td>
      <td>69</td>
      <td>4<br/>6<br/>9</td>
      <td  className="r">5<br/>6<br/>6</td>
      <td  className="r">72</td>
      <td  className="r">2<br/>3<br/>7</td>
      <td>4<br/>5<br/>7</td>
      <td>67</td>
      <td>1<br/>6<br/>0</td>
   </tr>
   <tr>
      <td>03/08/2020<br/>to<br/>08/08/2020</td>
      <td>3<br/>5<br/>5</td>
      <td>34</td>
      <td>7<br/>8<br/>9</td>
      <td>4<br/>4<br/>7</td>
      <td>58</td>
      <td>3<br/>5<br/>0</td>
      <td>7<br/>8<br/>0</td>
      <td>52</td>
      <td>1<br/>5<br/>6</td>
      <td>4<br/>4<br/>6</td>
      <td>43</td>
      <td>2<br/>3<br/>8</td>
      <td>1<br/>5<br/>8</td>
      <td>45</td>
      <td>1<br/>5<br/>9</td>
      <td>2<br/>7<br/>8</td>
      <td>75</td>
      <td>1<br/>5<br/>9</td>
   </tr>
   <tr>
      <td>10/08/2020<br/>to<br/>15/08/2020</td>
      <td>3<br/>7<br/>8</td>
      <td>81</td>
      <td>1<br/>4<br/>6</td>
      <td>7<br/>9<br/>0</td>
      <td>60</td>
      <td>1<br/>4<br/>5</td>
      <td>2<br/>4<br/>6</td>
      <td>24</td>
      <td>1<br/>5<br/>8</td>
      <td>3<br/>8<br/>0</td>
      <td>15</td>
      <td>3<br/>4<br/>8</td>
      <td>2<br/>5<br/>5</td>
      <td>24</td>
      <td>4<br/>4<br/>6</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
   </tr>
   <tr>
      <td>17/08/2020<br/>to<br/>22/08/2020</td>
      <td  className="r">5<br/>7<br/>8</td>
      <td  className="r">05</td>
      <td  className="r">6<br/>9<br/>0</td>
      <td  className="r">7<br/>9<br/>0</td>
      <td  className="r">61</td>
      <td  className="r">2<br/>3<br/>6</td>
      <td>5<br/>7<br/>9</td>
      <td>19</td>
      <td>1<br/>1<br/>7</td>
      <td>4<br/>5<br/>9</td>
      <td>85</td>
      <td>7<br/>8<br/>0</td>
      <td>2<br/>3<br/>9</td>
      <td>43</td>
      <td>2<br/>5<br/>6</td>
      <td>7<br/>9<br/>0</td>
      <td>60</td>
      <td>5<br/>7<br/>8</td>
   </tr>
   <tr>
      <td>24/08/2020<br/>to<br/>29/08/2020</td>
      <td>7<br/>7<br/>9</td>
      <td>39</td>
      <td>2<br/>7<br/>0</td>
      <td>1<br/>5<br/>8</td>
      <td>43</td>
      <td>2<br/>2<br/>9</td>
      <td>1<br/>5<br/>7</td>
      <td>35</td>
      <td>1<br/>7<br/>7</td>
      <td  className="r">1<br/>5<br/>5</td>
      <td  className="r">11</td>
      <td  className="r">2<br/>3<br/>6</td>
      <td>4<br/>9<br/>9</td>
      <td>29</td>
      <td>5<br/>6<br/>8</td>
      <td  className="r">2<br/>3<br/>9</td>
      <td  className="r">49</td>
      <td  className="r">5<br/>6<br/>8</td>
   </tr>
   <tr>
      <td>31/08/2020<br/>to<br/>05/09/2020</td>
      <td>8<br/>8<br/>9</td>
      <td>59</td>
      <td>1<br/>2<br/>6</td>
      <td  className="r">8<br/>8<br/>0</td>
      <td  className="r">61</td>
      <td  className="r">2<br/>9<br/>0</td>
      <td>1<br/>3<br/>5</td>
      <td>92</td>
      <td>2<br/>2<br/>8</td>
      <td>4<br/>7<br/>0</td>
      <td>19</td>
      <td>1<br/>2<br/>6</td>
      <td>5<br/>7<br/>8</td>
      <td>06</td>
      <td>3<br/>5<br/>8</td>
      <td>1<br/>4<br/>7</td>
      <td>21</td>
      <td>1<br/>4<br/>6</td>
   </tr>
   <tr>
      <td>07/09/2020<br/>to<br/>12/09/2020</td>
      <td>2<br/>2<br/>8</td>
      <td>29</td>
      <td>2<br/>7<br/>0</td>
      <td  className="r">4<br/>5<br/>8</td>
      <td  className="r">77</td>
      <td  className="r">1<br/>2<br/>4</td>
      <td  className="r">6<br/>7<br/>0</td>
      <td  className="r">38</td>
      <td  className="r">1<br/>2<br/>5</td>
      <td>9<br/>9<br/>0</td>
      <td>86</td>
      <td>1<br/>5<br/>0</td>
      <td>1<br/>7<br/>0</td>
      <td>89</td>
      <td>5<br/>5<br/>9</td>
      <td  className="r">2<br/>5<br/>9</td>
      <td  className="r">66</td>
      <td  className="r">2<br/>4<br/>0</td>
   </tr>
   <tr>
      <td>14/09/2020<br/>to<br/>19/09/2020</td>
      <td>3<br/>4<br/>0</td>
      <td>71</td>
      <td>5<br/>7<br/>9</td>
      <td>3<br/>5<br/>9</td>
      <td>71</td>
      <td>2<br/>9<br/>0</td>
      <td>2<br/>3<br/>7</td>
      <td>28</td>
      <td>2<br/>7<br/>9</td>
      <td>5<br/>6<br/>8</td>
      <td>92</td>
      <td>4<br/>8<br/>0</td>
      <td>1<br/>5<br/>8</td>
      <td>40</td>
      <td>5<br/>6<br/>9</td>
      <td>2<br/>3<br/>8</td>
      <td>35</td>
      <td>7<br/>8<br/>0</td>
   </tr>
   <tr>
      <td>21/09/2020<br/>to<br/>26/09/2020</td>
      <td>1<br/>2<br/>4</td>
      <td>78</td>
      <td>2<br/>6<br/>0</td>
      <td>1<br/>3<br/>8</td>
      <td>25</td>
      <td>2<br/>6<br/>7</td>
      <td>1<br/>5<br/>0</td>
      <td>69</td>
      <td>5<br/>6<br/>8</td>
      <td>1<br/>3<br/>3</td>
      <td>75</td>
      <td>6<br/>9<br/>0</td>
      <td>1<br/>3<br/>4</td>
      <td>85</td>
      <td>7<br/>8<br/>0</td>
      <td>4<br/>6<br/>8</td>
      <td>84</td>
      <td>1<br/>4<br/>9</td>
   </tr>
   <tr>
      <td>28/09/2020<br/>to<br/>03/10/2020</td>
      <td  className="r">1<br/>3<br/>4</td>
      <td  className="r">83</td>
      <td  className="r">2<br/>2<br/>9</td>
      <td>1<br/>2<br/>2</td>
      <td>57</td>
      <td>2<br/>7<br/>8</td>
      <td  className="r">3<br/>6<br/>7</td>
      <td  className="r">66</td>
      <td  className="r">2<br/>5<br/>9</td>
      <td>7<br/>8<br/>0</td>
      <td>54</td>
      <td>2<br/>4<br/>8</td>
      <td>3<br/>7<br/>0</td>
      <td>01</td>
      <td>2<br/>4<br/>5</td>
      <td>1<br/>4<br/>0</td>
      <td>52</td>
      <td>1<br/>3<br/>8</td>
   </tr>
   <tr>
      <td>05/10/2020<br/>to<br/>10/10/2020</td>
      <td  className="r">2<br/>8<br/>0</td>
      <td  className="r">05</td>
      <td  className="r">1<br/>6<br/>8</td>
      <td>5<br/>6<br/>8</td>
      <td>98</td>
      <td>1<br/>7<br/>0</td>
      <td  className="r">6<br/>7<br/>0</td>
      <td  className="r">33</td>
      <td  className="r">2<br/>5<br/>6</td>
      <td  className="r">4<br/>9<br/>0</td>
      <td  className="r">38</td>
      <td  className="r">1<br/>2<br/>5</td>
      <td  className="r">4<br/>6<br/>7</td>
      <td  className="r">77</td>
      <td  className="r">2<br/>7<br/>8</td>
      <td>4<br/>6<br/>9</td>
      <td>95</td>
      <td>1<br/>4<br/>0</td>
   </tr>
   <tr>
      <td>12/10/2020<br/>to<br/>17/10/2020</td>
      <td  className="r">1<br/>7<br/>8</td>
      <td  className="r">66</td>
      <td  className="r">2<br/>5<br/>9</td>
      <td  className="r">2<br/>2<br/>0</td>
      <td  className="r">44</td>
      <td  className="r">5<br/>9<br/>0</td>
      <td>1<br/>6<br/>0</td>
      <td>76</td>
      <td>1<br/>2<br/>3</td>
      <td>4<br/>6<br/>8</td>
      <td>82</td>
      <td>6<br/>7<br/>9</td>
      <td>1<br/>2<br/>6</td>
      <td>97</td>
      <td>1<br/>7<br/>9</td>
      <td>1<br/>2<br/>3</td>
      <td>64</td>
      <td>6<br/>8<br/>0</td>
   </tr>
   <tr>
      <td>19/10/2020<br/>to<br/>24/10/2020</td>
      <td  className="r">1<br/>3<br/>6</td>
      <td  className="r">05</td>
      <td  className="r">3<br/>4<br/>8</td>
      <td>2<br/>4<br/>0</td>
      <td>62</td>
      <td>1<br/>5<br/>6</td>
      <td>4<br/>5<br/>0</td>
      <td>92</td>
      <td>3<br/>4<br/>5</td>
      <td>2<br/>5<br/>9</td>
      <td>62</td>
      <td>5<br/>7<br/>0</td>
      <td>1<br/>2<br/>8</td>
      <td>14</td>
      <td>2<br/>3<br/>9</td>
      <td>5<br/>7<br/>8</td>
      <td>02</td>
      <td>1<br/>3<br/>8</td>
   </tr>
   <tr>
      <td>26/10/2020<br/>to<br/>31/10/2020</td>
      <td>1<br/>7<br/>8</td>
      <td>63</td>
      <td>1<br/>4<br/>8</td>
      <td>1<br/>5<br/>9</td>
      <td>54</td>
      <td>7<br/>8<br/>9</td>
      <td>5<br/>6<br/>7</td>
      <td>80</td>
      <td>1<br/>4<br/>5</td>
      <td  className="r">5<br/>7<br/>8</td>
      <td  className="r">05</td>
      <td  className="r">1<br/>2<br/>2</td>
      <td>2<br/>6<br/>0</td>
      <td>80</td>
      <td>2<br/>3<br/>5</td>
      <td>4<br/>6<br/>0</td>
      <td>02</td>
      <td>2<br/>4<br/>6</td>
   </tr>
   <tr>
      <td>02/11/2020<br/>to<br/>07/11/2020</td>
      <td  className="r">1<br/>4<br/>9</td>
      <td  className="r">44</td>
      <td  className="r">7<br/>8<br/>9</td>
      <td>2<br/>8<br/>9</td>
      <td>96</td>
      <td>3<br/>5<br/>8</td>
      <td>2<br/>4<br/>8</td>
      <td>42</td>
      <td>6<br/>7<br/>9</td>
      <td>2<br/>7<br/>0</td>
      <td>90</td>
      <td>4<br/>7<br/>9</td>
      <td>4<br/>7<br/>8</td>
      <td>93</td>
      <td>6<br/>8<br/>9</td>
      <td>4<br/>9<br/>0</td>
      <td>36</td>
      <td>1<br/>6<br/>9</td>
   </tr>
   <tr>
      <td>09/11/2020<br/>to<br/>21/11/2020</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
   </tr>
   <tr>
      <td>23/11/2020<br/>to<br/>28/11/2020</td>
      <td  className="r">4<br/>6<br/>8</td>
      <td  className="r">88</td>
      <td  className="r">4<br/>7<br/>7</td>
      <td>2<br/>4<br/>5</td>
      <td>14</td>
      <td>1<br/>1<br/>2</td>
      <td>4<br/>5<br/>7</td>
      <td>69</td>
      <td>4<br/>5<br/>0</td>
      <td>5<br/>5<br/>6</td>
      <td>68</td>
      <td>4<br/>5<br/>9</td>
      <td>4<br/>6<br/>9</td>
      <td>93</td>
      <td>5<br/>8<br/>0</td>
      <td  className="r">1<br/>3<br/>7</td>
      <td  className="r">16</td>
      <td  className="r">3<br/>3<br/>0</td>
   </tr>
   <tr>
      <td>30/11/2020<br/>to<br/>05/12/2020</td>
      <td  className="r">1<br/>6<br/>7</td>
      <td  className="r">49</td>
      <td  className="r">1<br/>2<br/>6</td>
      <td  className="r">1<br/>5<br/>8</td>
      <td  className="r">44</td>
      <td  className="r">5<br/>9<br/>0</td>
      <td  className="r">2<br/>5<br/>9</td>
      <td  className="r">61</td>
      <td  className="r">3<br/>9<br/>9</td>
      <td  className="r">1<br/>6<br/>0</td>
      <td  className="r">72</td>
      <td  className="r">6<br/>8<br/>8</td>
      <td>1<br/>6<br/>8</td>
      <td>56</td>
      <td>3<br/>6<br/>7</td>
      <td>7<br/>9<br/>0</td>
      <td>60</td>
      <td>4<br/>7<br/>9</td>
   </tr>
   <tr>
      <td>07/12/2020<br/>to<br/>12/12/2020</td>
      <td>5<br/>7<br/>9</td>
      <td>12</td>
      <td>1<br/>3<br/>8</td>
      <td>2<br/>2<br/>6</td>
      <td>01</td>
      <td>1<br/>4<br/>6</td>
      <td>6<br/>6<br/>6</td>
      <td>89</td>
      <td>2<br/>7<br/>0</td>
      <td>3<br/>7<br/>7</td>
      <td>74</td>
      <td>4<br/>0<br/>0</td>
      <td>3<br/>5<br/>5</td>
      <td>36</td>
      <td>1<br/>5<br/>0</td>
      <td>3<br/>4<br/>6</td>
      <td>32</td>
      <td>2<br/>2<br/>8</td>
   </tr>
   <tr>
      <td>14/12/2020<br/>to<br/>19/12/2020</td>
      <td  className="r">1<br/>8<br/>8</td>
      <td  className="r">77</td>
      <td  className="r">2<br/>2<br/>3</td>
      <td>4<br/>8<br/>8</td>
      <td>03</td>
      <td>1<br/>4<br/>8</td>
      <td  className="r">1<br/>1<br/>5</td>
      <td  className="r">77</td>
      <td  className="r">4<br/>6<br/>7</td>
      <td>2<br/>5<br/>6</td>
      <td>32</td>
      <td>5<br/>8<br/>9</td>
      <td>2<br/>9<br/>0</td>
      <td>10</td>
      <td>5<br/>6<br/>9</td>
      <td>5<br/>6<br/>9</td>
      <td>03</td>
      <td>6<br/>7<br/>0</td>
   </tr>
   <tr>
      <td>21/12/2020<br/>to<br/>26/12/2020</td>
      <td>7<br/>8<br/>0</td>
      <td>54</td>
      <td>1<br/>6<br/>7</td>
      <td  className="r">1<br/>8<br/>8</td>
      <td  className="r">77</td>
      <td  className="r">3<br/>7<br/>7</td>
      <td>2<br/>9<br/>0</td>
      <td>12</td>
      <td>4<br/>4<br/>4</td>
      <td>5<br/>7<br/>8</td>
      <td>08</td>
      <td>4<br/>7<br/>7</td>
      <td>1<br/>5<br/>7</td>
      <td>32</td>
      <td>6<br/>7<br/>9</td>
      <td>1<br/>7<br/>8</td>
      <td>65</td>
      <td>5<br/>0<br/>0</td>
   </tr>
   <tr>
      <td>28/12/2020<br/>to<br/>02/01/2021</td>
      <td>5<br/>7<br/>9</td>
      <td>19</td>
      <td>5<br/>5<br/>9</td>
      <td>9<br/>9<br/>0</td>
      <td>82</td>
      <td>6<br/>6<br/>0</td>
      <td>4<br/>5<br/>8</td>
      <td>71</td>
      <td>2<br/>4<br/>5</td>
      <td>6<br/>9<br/>0</td>
      <td>54</td>
      <td>2<br/>4<br/>8</td>
      <td  className="r">8<br/>8<br/>9</td>
      <td  className="r">55</td>
      <td  className="r">1<br/>5<br/>9</td>
      <td>6<br/>8<br/>0</td>
      <td>46</td>
      <td>1<br/>6<br/>9</td>
   </tr>
   <tr>
      <td>04/01/2021<br/>to<br/>09/01/2-21</td>
      <td  className="">3<br/>4<br/>6</td>
      <td  className="">36</td>
      <td  className="">8<br/>8<br/>0</td>
      <td  className="">6<br/>7<br/>8</td>
      <td  className="">18</td>
      <td  className="">4<br/>6<br/>8</td>
      <td  className="">3<br/>3<br/>0</td>
      <td  className="">63</td>
      <td  className="">1<br/>4<br/>8</td>
      <td  className="">1<br/>2<br/>4</td>
      <td  className="">74</td>
      <td  className="">6<br/>8<br/>0</td>
      <td  className="">4<br/>5<br/>9</td>
      <td  className="">82</td>
      <td  className="">5<br/>8<br/>9</td>
      <td  className="">1<br/>2<br/>0</td>
      <td  className="">31</td>
      <td  className="">5<br/>7<br/>9</td>
   </tr>
   <tr>
      <td>11/01/2021<br/>to<br/>16/01/2021</td>
      <td  className="">5<br/>7<br/>0</td>
      <td  className="">29</td>
      <td  className="">1<br/>3<br/>5</td>
      <td  className="">1<br/>5<br/>9</td>
      <td  className="">59</td>
      <td  className="">4<br/>5<br/>0</td>
      <td  className="">1<br/>2<br/>2</td>
      <td  className="">52</td>
      <td  className="">1<br/>4<br/>7</td>
      <td  className="">1<br/>3<br/>6</td>
      <td  className="">06</td>
      <td  className="">1<br/>5<br/>0</td>
      <td  className="">8<br/>8<br/>0</td>
      <td  className="">62</td>
      <td  className="">7<br/>7<br/>8</td>
      <td  className="">1<br/>2<br/>5</td>
      <td  className="">80</td>
      <td  className="">3<br/>3<br/>4</td>
   </tr>
   <tr>
      <td>18/01/2021<br/>to<br/>23/01/2021</td>
      <td  className="">1<br/>4<br/>0</td>
      <td  className="">52</td>
      <td  className="">2<br/>0<br/>0</td>
      <td  className="">1<br/>4<br/>8</td>
      <td  className="">30</td>
      <td  className="">1<br/>4<br/>5</td>
      <td  className="">4<br/>9<br/>0</td>
      <td  className="">36</td>
      <td  className="">4<br/>4<br/>8</td>
      <td  className="">5<br/>0<br/>0</td>
      <td  className="">52</td>
      <td  className="">3<br/>4<br/>5</td>
      <td  className="">1<br/>6<br/>8</td>
      <td  className="">53</td>
      <td  className="">1<br/>2<br/>0</td>
      <td  className="">1<br/>2<br/>7</td>
      <td  className="">03</td>
      <td  className="">7<br/>7<br/>9</td>
   </tr>
   <tr>
      <td>25/01/2021<br/>to<br/>30/01/2021</td>
      <td  className="">2<br/>7<br/>0</td>
      <td  className="">98</td>
      <td  className="">1<br/>1<br/>6</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="">5<br/>6<br/>9</td>
      <td  className="">02</td>
      <td  className="">4<br/>8<br/>0</td>
      <td  className="">2<br/>4<br/>9</td>
      <td  className="">51</td>
      <td  className="">3<br/>4<br/>4</td>
      <td  className="">5<br/>9<br/>9</td>
      <td  className="">37</td>
      <td  className="">3<br/>7<br/>7</td>
      <td  className="">4<br/>4<br/>9</td>
      <td  className="">75</td>
      <td  className="">6<br/>9<br/>0</td>
   </tr>
   <tr>
      <td>01/02/2021<br/>to<br/>06/02/2021</td>
      <td  className="">2<br/>4<br/>7</td>
      <td  className="">31</td>
      <td  className="">2<br/>4<br/>5</td>
      <td  className="r">4<br/>7<br/>9</td>
      <td  className="r">00</td>
      <td  className="r">2<br/>8<br/>0</td>
      <td  className="">2<br/>8<br/>9</td>
      <td  className="">97</td>
      <td  className="">4<br/>5<br/>8</td>
      <td  className="">1<br/>5<br/>0</td>
      <td  className="">68</td>
      <td  className="">4<br/>6<br/>8</td>
      <td  className="r">5<br/>8<br/>0</td>
      <td  className="r">33</td>
      <td  className="r">1<br/>5<br/>7</td>
      <td  className="">6<br/>6<br/>9</td>
      <td  className="">18</td>
      <td  className="">1<br/>2<br/>5</td>
   </tr>
   <tr>
      <td>08/02/2021<br/>to<br/>13/02/2021</td>
      <td  className="">9<br/>9<br/>0</td>
      <td  className="">81</td>
      <td  className="">5<br/>7<br/>9</td>
      <td  className="">1<br/>1<br/>7</td>
      <td  className="">98</td>
      <td  className="">1<br/>2<br/>5</td>
      <td  className="">2<br/>9<br/>0</td>
      <td  className="">12</td>
      <td  className="">6<br/>7<br/>9</td>
      <td  className="">7<br/>8<br/>8</td>
      <td  className="">30</td>
      <td  className="">6<br/>6<br/>8</td>
      <td  className="">2<br/>7<br/>8</td>
      <td  className="">70</td>
      <td  className="">1<br/>9<br/>0</td>
      <td  className="">2<br/>4<br/>5</td>
      <td  className="">17</td>
      <td  className="">5<br/>6<br/>6</td>
   </tr>
   <tr>
      <td>15/02/2021<br/>to<br/>20/02/2021</td>
      <td  className="">1<br/>2<br/>7</td>
      <td  className="">01</td>
      <td  className="">6<br/>7<br/>8</td>
      <td  className="r">1<br/>1<br/>3</td>
      <td  className="r">55</td>
      <td  className="r">2<br/>4<br/>9</td>
      <td  className="">3<br/>8<br/>8</td>
      <td  className="">93</td>
      <td  className="">1<br/>6<br/>6</td>
      <td  className="r">2<br/>2<br/>7</td>
      <td  className="r">16</td>
      <td  className="r">8<br/>9<br/>9</td>
      <td  className="">1<br/>3<br/>0</td>
      <td  className="">42</td>
      <td  className="">6<br/>7<br/>9</td>
      <td  className="">1<br/>4<br/>0</td>
      <td  className="">57</td>
      <td  className="">2<br/>5<br/>0</td>
   </tr>
   <tr>
      <td>22/02/2021<br/>to<br/>27/02/2021</td>
      <td  className="">5<br/>9<br/>0</td>
      <td  className="">40</td>
      <td  className="">0<br/>0<br/>0</td>
      <td  className="r">6<br/>9<br/>9</td>
      <td  className="r">49</td>
      <td  className="r">1<br/>1<br/>7</td>
      <td  className="">2<br/>6<br/>0</td>
      <td  className="">80</td>
      <td  className="">4<br/>7<br/>9</td>
      <td  className="">5<br/>9<br/>0</td>
      <td  className="">43</td>
      <td  className="">2<br/>4<br/>7</td>
      <td  className="">7<br/>7<br/>0</td>
      <td  className="">48</td>
      <td  className="">2<br/>3<br/>3</td>
      <td  className="r">4<br/>4<br/>9</td>
      <td  className="r">72</td>
      <td  className="r">1<br/>3<br/>8</td>
   </tr>
   <tr>
      <td>01/03/2021<br/>to<br/>06/03/2021</td>
      <td  className="">3<br/>5<br/>6</td>
      <td  className="">45</td>
      <td  className="">3<br/>4<br/>8</td>
      <td  className="">1<br/>8<br/>8</td>
      <td  className="">70</td>
      <td  className="">1<br/>3<br/>6</td>
      <td  className="r">4<br/>5<br/>6</td>
      <td  className="r">55</td>
      <td  className="r">1<br/>5<br/>9</td>
      <td  className="">3<br/>5<br/>9</td>
      <td  className="">79</td>
      <td  className="">5<br/>6<br/>8</td>
      <td  className="r">7<br/>7<br/>0</td>
      <td  className="r">49</td>
      <td  className="r">3<br/>6<br/>0</td>
      <td  className="">2<br/>9<br/>0</td>
      <td  className="">14</td>
      <td  className="">6<br/>8<br/>0</td>
   </tr>
   <tr>
      <td>08/03/2021<br/>to<br/>13/03/2021</td>
      <td  className="r">4<br/>9<br/>9</td>
      <td  className="r">22</td>
      <td  className="r">5<br/>8<br/>9</td>
      <td  className="">2<br/>3<br/>3</td>
      <td  className="">81</td>
      <td  className="">6<br/>7<br/>8</td>
      <td  className="">1<br/>2<br/>3</td>
      <td  className="">60</td>
      <td  className="">1<br/>9<br/>0</td>
      <td  className="">1<br/>4<br/>4</td>
      <td  className="">90</td>
      <td  className="">1<br/>2<br/>7</td>
      <td  className="">2<br/>4<br/>0</td>
      <td  className="">63</td>
      <td  className="">2<br/>4<br/>7</td>
      <td  className="">5<br/>6<br/>9</td>
      <td  className="">06</td>
      <td  className="">4<br/>5<br/>7</td>
   </tr>
   <tr>
      <td>15/03/2021<br/>to<br/>20/03/2021</td>
      <td  className="">3<br/>5<br/>0</td>
      <td  className="">80</td>
      <td  className="">5<br/>7<br/>8</td>
      <td  className="r">6<br/>6<br/>9</td>
      <td  className="r">16</td>
      <td  className="r">1<br/>5<br/>0</td>
      <td  className="">2<br/>3<br/>5</td>
      <td  className="">01</td>
      <td  className="">6<br/>7<br/>8</td>
      <td  className="r">4<br/>4<br/>6</td>
      <td  className="r">49</td>
      <td  className="r">1<br/>8<br/>0</td>
      <td  className="r">3<br/>5<br/>9</td>
      <td  className="r">72</td>
      <td  className="r">1<br/>4<br/>7</td>
      <td  className="">4<br/>4<br/>5</td>
      <td  className="">34</td>
      <td  className="">1<br/>5<br/>8</td>
   </tr>
   <tr>
      <td>22/03/2021<br/>to<br/>27/03/2021</td>
      <td  className="">2<br/>5<br/>0</td>
      <td  className="">71</td>
      <td  className="">5<br/>8<br/>8</td>
      <td  className="r">1<br/>1<br/>5</td>
      <td  className="r">72</td>
      <td  className="r">4<br/>9<br/>9</td>
      <td  className="">1<br/>1<br/>6</td>
      <td  className="">84</td>
      <td  className="">1<br/>4<br/>9</td>
      <td  className="">3<br/>6<br/>8</td>
      <td  className="">76</td>
      <td  className="">8<br/>8<br/>0</td>
      <td  className="r">7<br/>8<br/>8</td>
      <td  className="r">33</td>
      <td  className="r">3<br/>0<br/>0</td>
      <td  className="r">3<br/>7<br/>9</td>
      <td  className="r">94</td>
      <td  className="r">2<br/>3<br/>9</td>
   </tr>
   <tr>
      <td>29/03/2021<br/>to<br/>03/04/2021</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="">7<br/>7<br/>0</td>
      <td  className="">48</td>
      <td  className="">2<br/>7<br/>9</td>
      <td  className="">1<br/>2<br/>5</td>
      <td  className="">84</td>
      <td  className="">6<br/>9<br/>9</td>
      <td  className="">1<br/>6<br/>9</td>
      <td  className="">68</td>
      <td  className="">1<br/>8<br/>9</td>
      <td  className="">3<br/>9<br/>9</td>
      <td  className="">18</td>
      <td  className="">2<br/>6<br/>0</td>
      <td  className="">5<br/>7<br/>9</td>
      <td  className="">19</td>
      <td  className="">4<br/>5<br/>0</td>
   </tr>
   <tr>
      <td>05/04/2021<br/>to<br/>10/04/2021</td>
      <td  className="">1<br/>4<br/>7</td>
      <td  className="">23</td>
      <td  className="">2<br/>3<br/>8</td>
      <td  className="">6<br/>8<br/>9</td>
      <td  className="">31</td>
      <td  className="">2<br/>4<br/>5</td>
      <td  className="">1<br/>5<br/>7</td>
      <td  className="">35</td>
      <td  className="">4<br/>5<br/>6</td>
      <td  className="">3<br/>8<br/>9</td>
      <td  className="">04</td>
      <td  className="">5<br/>9<br/>0</td>
      <td  className="">3<br/>5<br/>9</td>
      <td  className="">73</td>
      <td  className="">6<br/>8<br/>9</td>
      <td  className="">5<br/>8<br/>9</td>
      <td  className="">28</td>
      <td  className="">2<br/>7<br/>9</td>
   </tr>
   <tr>
      <td>12/04/2021<br/>to<br/>17/04/2021</td>
      <td  className="r">1<br/>3<br/>5</td>
      <td  className="r">99</td>
      <td  className="r">1<br/>8<br/>0</td>
      <td  className="">1<br/>3<br/>6</td>
      <td  className="">02</td>
      <td  className="">3<br/>4<br/>5</td>
      <td  className="">6<br/>8<br/>9</td>
      <td  className="">35</td>
      <td  className="">3<br/>3<br/>9</td>
      <td  className="">3<br/>4<br/>0</td>
      <td  className="">73</td>
      <td  className="">1<br/>5<br/>7</td>
      <td  className="">1<br/>3<br/>5</td>
      <td  className="">92</td>
      <td  className="">5<br/>7<br/>0</td>
      <td  className="">1<br/>7<br/>9</td>
      <td  className="">79</td>
      <td  className="">4<br/>7<br/>8</td>
   </tr>
   <tr>
      <td>19/04/2021<br/>to<br/>24/04/2021</td>
      <td  className="">1<br/>6<br/>9</td>
      <td  className="">68</td>
      <td  className="">4<br/>5<br/>9</td>
      <td  className="">5<br/>8<br/>9</td>
      <td  className="">26</td>
      <td  className="">4<br/>5<br/>7</td>
      <td  className="r">3<br/>4<br/>4</td>
      <td  className="r">16</td>
      <td  className="r">2<br/>4<br/>0</td>
      <td  className="r">4<br/>4<br/>8</td>
      <td  className="r">66</td>
      <td  className="r">3<br/>5<br/>8</td>
      <td  className="">3<br/>7<br/>0</td>
      <td  className="">06</td>
      <td  className="">4<br/>5<br/>7</td>
      <td  className="">2<br/>7<br/>7</td>
      <td  className="">68</td>
      <td  className="">1<br/>3<br/>4</td>
   </tr>
   <tr>
      <td>26/04/2021<br/>to<br/>01/05/2021</td>
      <td  className="">4<br/>6<br/>0</td>
      <td  className="">08</td>
      <td  className="">2<br/>8<br/>8</td>
      <td  className="r">3<br/>4<br/>9</td>
      <td  className="r">66</td>
      <td  className="r">1<br/>2<br/>3</td>
      <td  className="">2<br/>7<br/>8</td>
      <td  className="">70</td>
      <td  className="">1<br/>9<br/>0</td>
      <td  className="">2<br/>5<br/>7</td>
      <td  className="">41</td>
      <td  className="">4<br/>7<br/>0</td>
      <td  className="r">6<br/>7<br/>9</td>
      <td  className="r">22</td>
      <td  className="r">4<br/>8<br/>0</td>
      <td  className="">1<br/>3<br/>7</td>
      <td  className="">15</td>
      <td  className="">4<br/>5<br/>6</td>
   </tr>
   <tr>
      <td>03/05/2021<br/>to<br/>08/05/2021</td>
      <td  className="r">3<br/>6<br/>7</td>
      <td  className="r">66</td>
      <td  className="r">4<br/>6<br/>6</td>
      <td  className="">1<br/>1<br/>0</td>
      <td  className="">28</td>
      <td  className="">5<br/>5<br/>8</td>
      <td  className="">1<br/>2<br/>4</td>
      <td  className="">74</td>
      <td  className="">6<br/>9<br/>9</td>
      <td  className="">9<br/>9<br/>0</td>
      <td  className="">81</td>
      <td  className="">2<br/>2<br/>7</td>
      <td  className="r">1<br/>6<br/>0</td>
      <td  className="r">72</td>
      <td  className="r">3<br/>9<br/>0</td>
      <td  className="">5<br/>9<br/>0</td>
      <td  className="">43</td>
      <td  className="">1<br/>3<br/>9</td>
   </tr>
   <tr>
      <td>10/05/2021<br/>to<br/>15/05/2021</td>
      <td  className="r">2<br/>5<br/>6</td>
      <td  className="r">38</td>
      <td  className="r">3<br/>5<br/>0</td>
      <td  className="">1<br/>3<br/>8</td>
      <td  className="">20</td>
      <td  className="">1<br/>4<br/>5</td>
      <td  className="">1<br/>6<br/>8</td>
      <td  className="">57</td>
      <td  className="">2<br/>6<br/>9</td>
      <td  className="r">7<br/>8<br/>8</td>
      <td  className="r">38</td>
      <td  className="r">1<br/>2<br/>5</td>
      <td  className="">4<br/>6<br/>7</td>
      <td  className="">79</td>
      <td  className="">1<br/>8<br/>0</td>
      <td  className="">3<br/>0<br/>0</td>
      <td  className="">34</td>
      <td  className="">1<br/>4<br/>9</td>
   </tr>
   <tr>
      <td>17/05/2021<br/>to<br/>22/05/2021</td>
      <td  className="">1<br/>6<br/>6</td>
      <td  className="">37</td>
      <td  className="">1<br/>7<br/>9</td>
      <td  className="">1<br/>3<br/>4</td>
      <td  className="">80</td>
      <td  className="">4<br/>7<br/>9</td>
      <td  className="">4<br/>7<br/>8</td>
      <td  className="">90</td>
      <td  className="">2<br/>3<br/>5</td>
      <td  className="">1<br/>8<br/>9</td>
      <td  className="">84</td>
      <td  className="">2<br/>5<br/>7</td>
      <td  className="">2<br/>4<br/>9</td>
      <td  className="">52</td>
      <td  className="">2<br/>4<br/>6</td>
      <td  className="">4<br/>6<br/>9</td>
      <td  className="">93</td>
      <td  className="">6<br/>8<br/>9</td>
   </tr>
   <tr>
      <td>24/05/2021<br/>to<br/>29/05/2021</td>
      <td  className="r">4<br/>9<br/>0</td>
      <td  className="r">38</td>
      <td  className="r">1<br/>3<br/>4</td>
      <td  className="">2<br/>5<br/>6</td>
      <td  className="">32</td>
      <td  className="">3<br/>9<br/>0</td>
      <td  className="">1<br/>1<br/>0</td>
      <td  className="">29</td>
      <td  className="">1<br/>3<br/>5</td>
      <td  className="">3<br/>7<br/>9</td>
      <td  className="">97</td>
      <td  className="">2<br/>7<br/>8</td>
      <td  className="">1<br/>2<br/>8</td>
      <td  className="">19</td>
      <td  className="">4<br/>6<br/>9</td>
      <td  className="">3<br/>6<br/>0</td>
      <td  className="">95</td>
      <td  className="">1<br/>7<br/>7</td>
   </tr>
   <tr>
      <td>31/05/2021<br/>to<br/>05/06/2021</td>
      <td  className="">4<br/>8<br/>0</td>
      <td  className="">26</td>
      <td  className="">2<br/>6<br/>8</td>
      <td  className="r">3<br/>3<br/>8</td>
      <td  className="r">44</td>
      <td  className="r">2<br/>6<br/>6</td>
      <td  className="">6<br/>9<br/>0</td>
      <td  className="">51</td>
      <td  className="">3<br/>8<br/>0</td>
      <td  className="">3<br/>6<br/>9</td>
      <td  className="">81</td>
      <td  className="">3<br/>4<br/>4</td>
      <td  className="r">1<br/>4<br/>0</td>
      <td  className="r">50</td>
      <td  className="r">4<br/>7<br/>9</td>
      <td  className="r">2<br/>6<br/>8</td>
      <td  className="r">66</td>
      <td  className="r">2<br/>5<br/>9</td>
   </tr>
   <tr>
      <td>07/06/2021<br/>to<br/>12/06/2021</td>
      <td  className="r">1<br/>2<br/>5</td>
      <td  className="r">83</td>
      <td  className="r">3<br/>4<br/>6</td>
      <td  className="">5<br/>5<br/>8</td>
      <td  className="">80</td>
      <td  className="">5<br/>6<br/>9</td>
      <td  className="">2<br/>4<br/>6</td>
      <td  className="">28</td>
      <td  className="">1<br/>3<br/>4</td>
      <td  className="">3<br/>9<br/>0</td>
      <td  className="">23</td>
      <td  className="">2<br/>3<br/>8</td>
      <td  className="">2<br/>3<br/>7</td>
      <td  className="">21</td>
      <td  className="">5<br/>8<br/>8</td>
      <td  className="">2<br/>4<br/>8</td>
      <td  className="">43</td>
      <td  className="">1<br/>2<br/>0</td>
   </tr>
   <tr>
      <td>14/06/2021<br/>to<br/>19/06/2021</td>
      <td  className="">7<br/>9<br/>0</td>
      <td  className="">68</td>
      <td  className="">1<br/>7<br/>0</td>
      <td  className="r">4<br/>5<br/>6</td>
      <td  className="r">50</td>
      <td  className="r">2<br/>9<br/>9</td>
      <td  className="">1<br/>3<br/>5</td>
      <td  className="">96</td>
      <td  className="">7<br/>9<br/>0</td>
      <td  className="">1<br/>3<br/>6</td>
      <td  className="">07</td>
      <td  className="">5<br/>5<br/>7</td>
      <td  className="">4<br/>4<br/>6</td>
      <td  className="">47</td>
      <td  className="">1<br/>7<br/>9</td>
      <td  className="">6<br/>7<br/>7</td>
      <td  className="">09</td>
      <td  className="">1<br/>8<br/>0</td>
   </tr>
   <tr>
      <td>21/06/2021<br/>to<br/>26/06/2021</td>
      <td  className="">2<br/>5<br/>0</td>
      <td  className="">79</td>
      <td  className="">2<br/>3<br/>4</td>
      <td  className="">6<br/>9<br/>9</td>
      <td  className="">41</td>
      <td  className="">5<br/>7<br/>9</td>
      <td  className="">1<br/>1<br/>8</td>
      <td  className="">06</td>
      <td  className="">8<br/>8<br/>0</td>
      <td  className="">4<br/>4<br/>6</td>
      <td  className="">45</td>
      <td  className="">1<br/>5<br/>9</td>
      <td  className="">3<br/>3<br/>7</td>
      <td  className="">32</td>
      <td  className="">5<br/>8<br/>9</td>
      <td  className="">2<br/>6<br/>7</td>
      <td  className="">53</td>
      <td  className="">6<br/>7<br/>0</td>
   </tr>
   <tr>
      <td>28/06/2021<br/>to<br/>03/07/2021</td>
      <td  className="r">5<br/>5<br/>6</td>
      <td  className="r">61</td>
      <td  className="r">4<br/>7<br/>0</td>
      <td  className="">2<br/>6<br/>8</td>
      <td  className="">69</td>
      <td  className="">1<br/>3<br/>5</td>
      <td  className="">4<br/>5<br/>9</td>
      <td  className="">87</td>
      <td  className="">3<br/>4<br/>0</td>
      <td  className="">2<br/>8<br/>0</td>
      <td  className="">07</td>
      <td  className="">7<br/>0<br/>0</td>
      <td  className="">3<br/>5<br/>9</td>
      <td  className="">71</td>
      <td  className="">1<br/>4<br/>6</td>
      <td  className="">2<br/>6<br/>9</td>
      <td  className="">70</td>
      <td  className="">4<br/>6<br/>0</td>
   </tr>
   <tr>
      <td>05/07/2021<br/>to<br/>10/07/2021</td>
      <td  className="">5<br/>7<br/>8</td>
      <td  className="">07</td>
      <td  className="">3<br/>7<br/>7</td>
      <td  className="">1<br/>2<br/>3</td>
      <td  className="">67</td>
      <td  className="">1<br/>3<br/>3</td>
      <td  className="">3<br/>6<br/>8</td>
      <td  className="">71</td>
      <td  className="">1<br/>2<br/>8</td>
      <td  className="">2<br/>4<br/>6</td>
      <td  className="">26</td>
      <td  className="">3<br/>5<br/>8</td>
      <td  className="">3<br/>9<br/>0</td>
      <td  className="">26</td>
      <td  className="">2<br/>7<br/>7</td>
      <td  className="">2<br/>7<br/>0</td>
      <td  className="">91</td>
      <td  className="">6<br/>7<br/>8</td>
   </tr>
   <tr>
      <td>12/07/2021<br/>to<br/>17/07/2021</td>
      <td  className="">4<br/>5<br/>6</td>
      <td  className="">54</td>
      <td  className="">6<br/>8<br/>0</td>
      <td  className="">1<br/>6<br/>8</td>
      <td  className="">56</td>
      <td  className="">3<br/>6<br/>7</td>
      <td  className="r">3<br/>5<br/>0</td>
      <td  className="r">83</td>
      <td  className="r">6<br/>8<br/>9</td>
      <td  className="">5<br/>6<br/>7</td>
      <td  className="">84</td>
      <td  className="">1<br/>6<br/>7</td>
      <td  className="">2<br/>4<br/>9</td>
      <td  className="">54</td>
      <td  className="">3<br/>5<br/>6</td>
      <td  className="">8<br/>8<br/>9</td>
      <td  className="">56</td>
      <td  className="">2<br/>5<br/>9</td>
   </tr>
   <tr>
      <td>19/07/2021<br/>to<br/>24/07/2021</td>
      <td  className="">6<br/>7<br/>7</td>
      <td  className="">02</td>
      <td  className="">2<br/>4<br/>6</td>
      <td  className="r">1<br/>3<br/>9</td>
      <td  className="r">33</td>
      <td  className="r">1<br/>4<br/>8</td>
      <td  className="r">2<br/>4<br/>8</td>
      <td  className="r">49</td>
      <td  className="r">1<br/>1<br/>7</td>
      <td  className="r">2<br/>4<br/>5</td>
      <td  className="r">16</td>
      <td  className="r">6<br/>0<br/>0</td>
      <td  className="">7<br/>8<br/>0</td>
      <td  className="">59</td>
      <td  className="">3<br/>7<br/>9</td>
      <td  className="">1<br/>3<br/>9</td>
      <td  className="">34</td>
      <td  className="">1<br/>6<br/>7</td>
   </tr>
   <tr>
      <td>26/07/2021<br/>to<br/>31/07/2021</td>
      <td  className="">3<br/>6<br/>7</td>
      <td  className="">65</td>
      <td  className="">6<br/>9<br/>0</td>
      <td  className="">3<br/>5<br/>0</td>
      <td  className="">86</td>
      <td  className="">4<br/>5<br/>7</td>
      <td  className="">4<br/>4<br/>5</td>
      <td  className="">35</td>
      <td  className="">2<br/>4<br/>9</td>
      <td  className="">3<br/>7<br/>9</td>
      <td  className="">93</td>
      <td  className="">2<br/>3<br/>8</td>
      <td  className="">3<br/>4<br/>5</td>
      <td  className="">26</td>
      <td  className="">3<br/>5<br/>8</td>
      <td  className="">8<br/>8<br/>9</td>
      <td  className="">53</td>
      <td  className="">7<br/>8<br/>8</td>
   </tr>
   <tr>
      <td>02/08/2021<br/>to<br/>07/08/2021</td>
      <td  className="">3<br/>7<br/>8</td>
      <td  className="">89</td>
      <td  className="">2<br/>2<br/>5</td>
      <td  className="r">2<br/>3<br/>5</td>
      <td  className="r">00</td>
      <td  className="r">4<br/>7<br/>9</td>
      <td  className="r">8<br/>9<br/>9</td>
      <td  className="r">66</td>
      <td  className="r">1<br/>7<br/>8</td>
      <td  className="">3<br/>8<br/>9</td>
      <td  className="">08</td>
      <td  className="">1<br/>3<br/>4</td>
      <td  className="r">1<br/>5<br/>6</td>
      <td  className="r">22</td>
      <td  className="r">3<br/>9<br/>0</td>
      <td  className="">1<br/>4<br/>7</td>
      <td  className="">29</td>
      <td  className="">1<br/>3<br/>5</td>
   </tr>
   <tr>
      <td>09/08/2021<br/>to<br/>14/08/2021</td>
      <td  className="r">2<br/>4<br/>0</td>
      <td  className="r">66</td>
      <td  className="r">7<br/>9<br/>0</td>
      <td  className="">1<br/>3<br/>8</td>
      <td  className="">25</td>
      <td  className="">2<br/>4<br/>9</td>
      <td  className="r">2<br/>5<br/>9</td>
      <td  className="r">66</td>
      <td  className="r">1<br/>6<br/>9</td>
      <td  className="">3<br/>3<br/>6</td>
      <td  className="">26</td>
      <td  className="">1<br/>2<br/>3</td>
      <td  className="">4<br/>7<br/>0</td>
      <td  className="">14</td>
      <td  className="">6<br/>8<br/>0</td>
      <td  className="r">2<br/>3<br/>8</td>
      <td  className="r">33</td>
      <td  className="r">1<br/>4<br/>8</td>
   </tr>
   <tr>
      <td>16/08/2021<br/>to<br/>21/08/2021</td>
      <td  className="">2<br/>7<br/>9</td>
      <td  className="">80</td>
      <td  className="">2<br/>3<br/>5</td>
      <td  className="">2<br/>8<br/>0</td>
      <td  className="">07</td>
      <td  className="">1<br/>2<br/>4</td>
      <td  className="">1<br/>5<br/>9</td>
      <td  className="">54</td>
      <td  className="">2<br/>3<br/>9</td>
      <td  className="r">1<br/>3<br/>5</td>
      <td  className="r">94</td>
      <td  className="r">7<br/>8<br/>9</td>
      <td  className="">1<br/>1<br/>4</td>
      <td  className="">60</td>
      <td  className="">2<br/>9<br/>9</td>
      <td  className="">5<br/>7<br/>9</td>
      <td  className="">18</td>
      <td  className="">4<br/>5<br/>9</td>
   </tr>
   <tr>
      <td>23/08/2021<br/>to<br/>28/08/2021</td>
      <td  className="r">1<br/>8<br/>9</td>
      <td  className="r">83</td>
      <td  className="r">4<br/>9<br/>0</td>
      <td  className="">1<br/>0<br/>0</td>
      <td  className="">15</td>
      <td  className="">1<br/>5<br/>9</td>
      <td  className="">4<br/>7<br/>9</td>
      <td  className="">07</td>
      <td  className="">4<br/>5<br/>8</td>
      <td  className="">6<br/>7<br/>9</td>
      <td  className="">24</td>
      <td  className="">2<br/>4<br/>8</td>
      <td  className="">1<br/>6<br/>7</td>
      <td  className="">45</td>
      <td  className="">2<br/>4<br/>9</td>
      <td  className="">6<br/>6<br/>0</td>
      <td  className="">23</td>
      <td  className="">2<br/>5<br/>6</td>
   </tr>
   <tr>
      <td>30/08/2021<br/>to<br/>04/09/2021</td>
      <td  className="">1<br/>6<br/>8</td>
      <td  className="">59</td>
      <td  className="">5<br/>5<br/>9</td>
      <td  className="">6<br/>0<br/>0</td>
      <td  className="">64</td>
      <td  className="">1<br/>4<br/>9</td>
      <td  className="">6<br/>6<br/>9</td>
      <td  className="">15</td>
      <td  className="">2<br/>4<br/>9</td>
      <td  className="">1<br/>8<br/>0</td>
      <td  className="">91</td>
      <td  className="">5<br/>6<br/>0</td>
      <td  className="">5<br/>5<br/>9</td>
      <td  className="">92</td>
      <td  className="">1<br/>2<br/>9</td>
      <td  className="">2<br/>3<br/>6</td>
      <td  className="">18</td>
      <td  className="">1<br/>3<br/>4</td>
   </tr>
   <tr>
      <td>06/09/2021<br/>to<br/>11/09/2021</td>
      <td  className="">4<br/>9<br/>0</td>
      <td  className="">35</td>
      <td  className="">2<br/>6<br/>7</td>
      <td  className="">4<br/>7<br/>0</td>
      <td  className="">14</td>
      <td  className="">4<br/>5<br/>5</td>
      <td  className="r">5<br/>7<br/>0</td>
      <td  className="r">27</td>
      <td  className="r">5<br/>6<br/>6</td>
      <td  className="">3<br/>8<br/>8</td>
      <td  className="">92</td>
      <td  className="">3<br/>3<br/>6</td>
      <td  className="">1<br/>3<br/>3</td>
      <td  className="">76</td>
      <td  className="">4<br/>4<br/>8</td>
      <td  className="">2<br/>5<br/>9</td>
      <td  className="">64</td>
      <td  className="">2<br/>6<br/>6</td>
   </tr>
   <tr>
      <td>13/09/2021<br/>to<br/>18/09/2021</td>
      <td  className="">1<br/>5<br/>7</td>
      <td  className="">30</td>
      <td  className="">1<br/>1<br/>8</td>
      <td  className="">2<br/>2<br/>4</td>
      <td  className="">85</td>
      <td  className="">2<br/>6<br/>7</td>
      <td  className="">2<br/>4<br/>5</td>
      <td  className="">10</td>
      <td  className="">3<br/>8<br/>9</td>
      <td  className="">2<br/>6<br/>9</td>
      <td  className="">73</td>
      <td  className="">5<br/>8<br/>0</td>
      <td  className="r">2<br/>6<br/>7</td>
      <td  className="r">55</td>
      <td  className="r">7<br/>8<br/>0</td>
      <td  className="">2<br/>7<br/>9</td>
      <td  className="">87</td>
      <td  className="">4<br/>6<br/>7</td>
   </tr>
   <tr>
      <td>20/09/2021<br/>to<br/>25/09/2021</td>
      <td  className="">5<br/>6<br/>7</td>
      <td  className="">82</td>
      <td  className="">3<br/>4<br/>5</td>
      <td  className="">8<br/>8<br/>9</td>
      <td  className="">58</td>
      <td  className="">3<br/>5<br/>0</td>
      <td  className="">2<br/>2<br/>7</td>
      <td  className="">18</td>
      <td  className="">3<br/>6<br/>9</td>
      <td  className="">2<br/>6<br/>7</td>
      <td  className="">57</td>
      <td  className="">1<br/>7<br/>9</td>
      <td  className="">1<br/>4<br/>0</td>
      <td  className="">51</td>
      <td  className="">3<br/>8<br/>0</td>
      <td  className="r">3<br/>7<br/>9</td>
      <td  className="r">94</td>
      <td  className="r">5<br/>9<br/>0</td>
   </tr>
   <tr>
      <td>27/09/2021<br/>to<br/>02/10/2021</td>
      <td  className="">1<br/>3<br/>4</td>
      <td  className="">80</td>
      <td  className="">1<br/>4<br/>5</td>
      <td  className="r">4<br/>6<br/>9</td>
      <td  className="r">99</td>
      <td  className="r">1<br/>8<br/>0</td>
      <td  className="">2<br/>6<br/>9</td>
      <td  className="">76</td>
      <td  className="">3<br/>3<br/>0</td>
      <td  className="r">4<br/>8<br/>0</td>
      <td  className="r">22</td>
      <td  className="r">7<br/>7<br/>8</td>
      <td  className="">1<br/>4<br/>6</td>
      <td  className="">18</td>
      <td  className="">2<br/>8<br/>8</td>
      <td  className="">6<br/>7<br/>0</td>
      <td  className="">30</td>
      <td  className="">3<br/>7<br/>0</td>
   </tr>
   <tr>
      <td>04/10/2021<br/>to<br/>09/10/2021</td>
      <td  className="">3<br/>4<br/>7</td>
      <td  className="">42</td>
      <td  className="">7<br/>7<br/>8</td>
      <td  className="">6<br/>8<br/>0</td>
      <td  className="">43</td>
      <td  className="">3<br/>5<br/>5</td>
      <td  className="">1<br/>3<br/>8</td>
      <td  className="">21</td>
      <td  className="">1<br/>3<br/>7</td>
      <td  className="">1<br/>2<br/>4</td>
      <td  className="">73</td>
      <td  className="">6<br/>7<br/>0</td>
      <td  className="">3<br/>3<br/>9</td>
      <td  className="">58</td>
      <td  className="">1<br/>1<br/>6</td>
      <td  className="">1<br/>4<br/>0</td>
      <td  className="">52</td>
      <td  className="">5<br/>7<br/>0</td>
   </tr>
   <tr>
      <td>11/10/2021<br/>to<br/>16/10/2021</td>
      <td  className="">1<br/>2<br/>9</td>
      <td  className="">24</td>
      <td  className="">6<br/>8<br/>0</td>
      <td  className="r">4<br/>9<br/>9</td>
      <td  className="r">22</td>
      <td  className="r">1<br/>4<br/>7</td>
      <td  className="">3<br/>7<br/>9</td>
      <td  className="">91</td>
      <td  className="">1<br/>0<br/>0</td>
      <td  className="">4<br/>6<br/>7</td>
      <td  className="">78</td>
      <td  className="">2<br/>8<br/>8</td>
      <td  className="">1<br/>3<br/>5</td>
      <td  className="">92</td>
      <td  className="">1<br/>4<br/>7</td>
      <td  className="">4<br/>6<br/>8</td>
      <td  className="">86</td>
      <td  className="">3<br/>6<br/>7</td>
   </tr>
   <tr>
      <td>18/10/2021<br/>to<br/>23/10/2021</td>
      <td  className="">3<br/>6<br/>8</td>
      <td  className="">74</td>
      <td  className="">3<br/>3<br/>8</td>
      <td  className="">3<br/>6<br/>6</td>
      <td  className="">59</td>
      <td  className="">2<br/>7<br/>0</td>
      <td  className="r">5<br/>6<br/>6</td>
      <td  className="r">72</td>
      <td  className="r">6<br/>8<br/>8</td>
      <td  className="">2<br/>4<br/>5</td>
      <td  className="">12</td>
      <td  className="">1<br/>2<br/>9</td>
      <td  className="r">3<br/>4<br/>5</td>
      <td  className="r">27</td>
      <td  className="r">8<br/>9<br/>0</td>
      <td  className="r">4<br/>6<br/>9</td>
      <td  className="r">94</td>
      <td  className="r">3<br/>4<br/>7</td>
   </tr>
   <tr>
      <td>25/10/2021<br/>to<br/>30/10/2021</td>
      <td  className="r">6<br/>6<br/>7</td>
      <td  className="r">94</td>
      <td  className="r">1<br/>3<br/>0</td>
      <td  className="r">2<br/>3<br/>6</td>
      <td  className="r">16</td>
      <td  className="r">2<br/>5<br/>9</td>
      <td  className="">3<br/>6<br/>6</td>
      <td  className="">57</td>
      <td  className="">3<br/>5<br/>9</td>
      <td  className="">6<br/>0<br/>0</td>
      <td  className="">69</td>
      <td  className="">1<br/>3<br/>5</td>
      <td  className="">1<br/>4<br/>7</td>
      <td  className="">21</td>
      <td  className="">1<br/>2<br/>8</td>
      <td  className="">3<br/>6<br/>7</td>
      <td  className="">65</td>
      <td  className="">1<br/>5<br/>9</td>
   </tr>
   <tr>
      <td>01/11/2021<br/>to<br/>06/11/2021</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
   </tr>
   <tr>
      <td>08/11/2021<br/>to<br/>13/11/2021</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="">1<br/>3<br/>5</td>
      <td  className="">92</td>
      <td  className="">2<br/>3<br/>7</td>
      <td  className="">3<br/>4<br/>5</td>
      <td  className="">25</td>
      <td  className="">3<br/>5<br/>7</td>
      <td  className="">3<br/>6<br/>8</td>
      <td  className="">70</td>
      <td  className="">2<br/>9<br/>9</td>
      <td  className="r">3<br/>3<br/>4</td>
      <td  className="r">00</td>
      <td  className="r">2<br/>8<br/>0</td>
      <td  className="r">1<br/>7<br/>9</td>
      <td  className="r">72</td>
      <td  className="r">3<br/>9<br/>0</td>
   </tr>
   <tr>
      <td>15/11/2021<br/>to<br/>20/11/2021</td>
      <td  className="">4<br/>7<br/>8</td>
      <td  className="">97</td>
      <td  className="">4<br/>5<br/>8</td>
      <td  className="">1<br/>1<br/>5</td>
      <td  className="">76</td>
      <td  className="">1<br/>2<br/>3</td>
      <td  className="">4<br/>7<br/>7</td>
      <td  className="">87</td>
      <td  className="">2<br/>6<br/>9</td>
      <td  className="">2<br/>7<br/>0</td>
      <td  className="">90</td>
      <td  className="">2<br/>3<br/>5</td>
      <td  className="r">5<br/>6<br/>0</td>
      <td  className="r">16</td>
      <td  className="r">4<br/>6<br/>6</td>
      <td  className="">2<br/>6<br/>7</td>
      <td  className="">56</td>
      <td  className="">5<br/>5<br/>6</td>
   </tr>
   <tr>
      <td>22/11/2021<br/>to<br/>27/11/2021</td>
      <td  className="">1<br/>3<br/>0</td>
      <td  className="">40</td>
      <td  className="">1<br/>1<br/>8</td>
      <td  className="">2<br/>2<br/>9</td>
      <td  className="">30</td>
      <td  className="">5<br/>6<br/>9</td>
      <td  className="">8<br/>9<br/>0</td>
      <td  className="">73</td>
      <td  className="">5<br/>8<br/>0</td>
      <td  className="">2<br/>4<br/>7</td>
      <td  className="">39</td>
      <td  className="">2<br/>7<br/>0</td>
      <td  className="">4<br/>6<br/>9</td>
      <td  className="">93</td>
      <td  className="">5<br/>8<br/>0</td>
      <td  className="">1<br/>2<br/>0</td>
      <td  className="">30</td>
      <td  className="">4<br/>7<br/>9</td>
   </tr>
   <tr>
      <td>29/11/2021<br/>to<br/>04/12/2021</td>
      <td  className="">2<br/>4<br/>5</td>
      <td  className="">17</td>
      <td  className="">1<br/>2<br/>4</td>
      <td  className="">1<br/>2<br/>9</td>
      <td  className="">23</td>
      <td  className="">1<br/>5<br/>7</td>
      <td  className="r">3<br/>8<br/>0</td>
      <td  className="r">11</td>
      <td  className="r">2<br/>9<br/>0</td>
      <td  className="r">1<br/>6<br/>8</td>
      <td  className="r">50</td>
      <td  className="r">1<br/>9<br/>0</td>
      <td  className="">4<br/>4<br/>5</td>
      <td  className="">31</td>
      <td  className="">1<br/>3<br/>7</td>
      <td  className="">1<br/>4<br/>5</td>
      <td  className="">09</td>
      <td  className="">4<br/>7<br/>8</td>
   </tr>
   <tr>
      <td>06/12/2021<br/>to<br/>11/12/2021</td>
      <td  className="">2<br/>4<br/>8</td>
      <td  className="">42</td>
      <td  className="">3<br/>4<br/>5</td>
      <td  className="r">4<br/>4<br/>7</td>
      <td  className="r">55</td>
      <td  className="r">6<br/>9<br/>0</td>
      <td  className="">7<br/>8<br/>0</td>
      <td  className="">53</td>
      <td  className="">1<br/>2<br/>0</td>
      <td  className="">2<br/>8<br/>0</td>
      <td  className="">02</td>
      <td  className="">5<br/>8<br/>9</td>
      <td  className="">2<br/>2<br/>9</td>
      <td  className="">30</td>
      <td  className="">5<br/>7<br/>8</td>
      <td  className="">3<br/>5<br/>6</td>
      <td  className="">48</td>
      <td  className="">2<br/>6<br/>0</td>
   </tr>
   <tr>
      <td>13/12/2021<br/>to<br/>18/12/2021</td>
      <td  className="">6<br/>6<br/>7</td>
      <td  className="">90</td>
      <td  className="">4<br/>7<br/>9</td>
      <td  className="">1<br/>5<br/>7</td>
      <td  className="">37</td>
      <td  className="">3<br/>6<br/>8</td>
      <td  className="r">9<br/>9<br/>0</td>
      <td  className="r">88</td>
      <td  className="r">1<br/>3<br/>4</td>
      <td  className="">2<br/>7<br/>8</td>
      <td  className="">74</td>
      <td  className="">4<br/>4<br/>6</td>
      <td  className="">3<br/>6<br/>7</td>
      <td  className="">68</td>
      <td  className="">1<br/>3<br/>4</td>
      <td  className="">4<br/>6<br/>8</td>
      <td  className="">82</td>
      <td  className="">3<br/>9<br/>0</td>
   </tr>
   <tr>
      <td>20/12/2021<br/>to<br/>25/12/2021</td>
      <td  className="">2<br/>4<br/>8</td>
      <td  className="">45</td>
      <td  className="">1<br/>6<br/>8</td>
      <td  className="r">4<br/>4<br/>7</td>
      <td  className="r">55</td>
      <td  className="r">4<br/>5<br/>6</td>
      <td  className="">4<br/>5<br/>6</td>
      <td  className="">52</td>
      <td  className="">4<br/>9<br/>9</td>
      <td  className="">1<br/>0<br/>0</td>
      <td  className="">19</td>
      <td  className="">4<br/>6<br/>9</td>
      <td  className="">1<br/>4<br/>8</td>
      <td  className="">34</td>
      <td  className="">4<br/>4<br/>6</td>
      <td  className="">3<br/>5<br/>6</td>
      <td  className="">41</td>
      <td  className="">6<br/>7<br/>8</td>
   </tr>
   <tr>
      <td>27/12/2021<br/>to<br/>01/01/2022</td>
      <td  className="">5<br/>6<br/>9</td>
      <td  className="">08</td>
      <td  className="">1<br/>8<br/>9</td>
      <td  className="">1<br/>8<br/>9</td>
      <td  className="">80</td>
      <td  className="">4<br/>7<br/>9</td>
      <td  className="">3<br/>5<br/>8</td>
      <td  className="">60</td>
      <td  className="">2<br/>8<br/>0</td>
      <td  className="">1<br/>3<br/>6</td>
      <td  className="">08</td>
      <td  className="">1<br/>8<br/>9</td>
      <td  className="">3<br/>9<br/>9</td>
      <td  className="">17</td>
      <td  className="">3<br/>4<br/>0</td>
      <td  className="">2<br/>3<br/>8</td>
      <td  className="">31</td>
      <td  className="">5<br/>7<br/>9</td>
   </tr>
   <tr>
      <td>03/01/2022<br/>to<br/>08/01/2022</td>
      <td  className="">3<br/>5<br/>0</td>
      <td  className="">84</td>
      <td  className="">5<br/>9<br/>0</td>
      <td  className="">2<br/>7<br/>7</td>
      <td  className="">64</td>
      <td  className="">1<br/>4<br/>9</td>
      <td  className="">3<br/>3<br/>5</td>
      <td  className="">19</td>
      <td  className="">2<br/>7<br/>0</td>
      <td  className="">6<br/>6<br/>0</td>
      <td  className="">23</td>
      <td  className="">5<br/>8<br/>0</td>
      <td  className="">6<br/>8<br/>9</td>
      <td  className="">37</td>
      <td  className="">5<br/>5<br/>7</td>
      <td  className="">3<br/>7<br/>0</td>
      <td  className="">07</td>
      <td  className="">2<br/>7<br/>8</td>
   </tr>
   <tr>
      <td>10/01/2022<br/>to<br/>15/01/2022</td>
      <td  className="">3<br/>7<br/>0</td>
      <td  className="">09</td>
      <td  className="">4<br/>7<br/>8</td>
      <td  className="">5<br/>0<br/>0</td>
      <td  className="">57</td>
      <td  className="">3<br/>4<br/>0</td>
      <td  className="">3<br/>6<br/>0</td>
      <td  className="">91</td>
      <td  className="">4<br/>8<br/>9</td>
      <td  className="">5<br/>0<br/>0</td>
      <td  className="">52</td>
      <td  className="">4<br/>8<br/>0</td>
      <td  className="">2<br/>8<br/>0</td>
      <td  className="">09</td>
      <td  className="">1<br/>8<br/>0</td>
      <td  className="">1<br/>2<br/>0</td>
      <td  className="">31</td>
      <td  className="">4<br/>8<br/>9</td>
   </tr>
   <tr>
      <td>17/01/2022<br/>to<br/>22/01/2022</td>
      <td  className="r">5<br/>6<br/>9</td>
      <td  className="r">05</td>
      <td  className="r">3<br/>3<br/>9</td>
      <td  className="">2<br/>4<br/>6</td>
      <td  className="">20</td>
      <td  className="">5<br/>7<br/>8</td>
      <td  className="">2<br/>6<br/>7</td>
      <td  className="">51</td>
      <td  className="">6<br/>7<br/>8</td>
      <td  className="r">1<br/>6<br/>7</td>
      <td  className="r">44</td>
      <td  className="r">1<br/>5<br/>8</td>
      <td  className="r">5<br/>6<br/>7</td>
      <td  className="r">88</td>
      <td  className="r">1<br/>3<br/>4</td>
      <td  className="r">1<br/>7<br/>0</td>
      <td  className="r">88</td>
      <td  className="r">3<br/>6<br/>9</td>
   </tr>
   <tr>
      <td>24/01/2022<br/>to<br/>29/01/2022</td>
      <td  className="">2<br/>2<br/>0</td>
      <td  className="">40</td>
      <td  className="">2<br/>3<br/>5</td>
      <td  className="">1<br/>4<br/>5</td>
      <td  className="">01</td>
      <td  className="">6<br/>7<br/>8</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="">5<br/>6<br/>9</td>
      <td  className="">08</td>
      <td  className="">2<br/>6<br/>0</td>
      <td  className="">3<br/>3<br/>8</td>
      <td  className="">41</td>
      <td  className="">4<br/>7<br/>0</td>
      <td  className="">5<br/>8<br/>9</td>
      <td  className="">24</td>
      <td  className="">1<br/>3<br/>0</td>
   </tr>
   <tr>
      <td>31/01/2022<br/>to<br/>05/02/2022</td>
      <td  className="">2<br/>4<br/>8</td>
      <td  className="">48</td>
      <td  className="">1<br/>3<br/>4</td>
      <td  className="">6<br/>8<br/>9</td>
      <td  className="">39</td>
      <td  className="">3<br/>6<br/>0</td>
      <td  className="r">1<br/>5<br/>9</td>
      <td  className="r">55</td>
      <td  className="r">1<br/>7<br/>7</td>
      <td  className="">1<br/>1<br/>4</td>
      <td  className="">69</td>
      <td  className="">3<br/>8<br/>8</td>
      <td  className="r">1<br/>3<br/>7</td>
      <td  className="r">16</td>
      <td  className="r">1<br/>2<br/>3</td>
      <td  className="">4<br/>0<br/>0</td>
      <td  className="">40</td>
      <td  className="">1<br/>3<br/>6</td>
   </tr>
   <tr>
      <td>07/02/2022<br/>to<br/>12/02/2022</td>
      <td  className="r">1<br/>7<br/>9</td>
      <td  className="r">72</td>
      <td  className="r">2<br/>2<br/>8</td>
      <td  className="r">1<br/>6<br/>8</td>
      <td  className="r">55</td>
      <td  className="r">3<br/>4<br/>8</td>
      <td  className="">6<br/>8<br/>9</td>
      <td  className="">37</td>
      <td  className="">5<br/>6<br/>6</td>
      <td  className="r">3<br/>7<br/>9</td>
      <td  className="r">94</td>
      <td  className="r">2<br/>4<br/>8</td>
      <td  className="">4<br/>7<br/>7</td>
      <td  className="">81</td>
      <td  className="">4<br/>8<br/>9</td>
      <td  className="r">3<br/>7<br/>9</td>
      <td  className="r">99</td>
      <td  className="r">4<br/>6<br/>9</td>
   </tr>
   <tr>
      <td>14/02/2022<br/>to<br/>19/02/2022</td>
      <td  className="">2<br/>7<br/>8</td>
      <td  className="">76</td>
      <td  className="">2<br/>5<br/>9</td>
      <td  className="">1<br/>6<br/>9</td>
      <td  className="">63</td>
      <td  className="">2<br/>4<br/>7</td>
      <td  className="">3<br/>4<br/>8</td>
      <td  className="">58</td>
      <td  className="">1<br/>7<br/>0</td>
      <td  className="r">2<br/>0<br/>0</td>
      <td  className="r">27</td>
      <td  className="r">3<br/>5<br/>9</td>
      <td  className="">1<br/>3<br/>6</td>
      <td  className="">08</td>
      <td  className="">4<br/>6<br/>8</td>
      <td  className="r">2<br/>3<br/>6</td>
      <td  className="r">11</td>
      <td  className="r">1<br/>2<br/>8</td>
   </tr>
   <tr>
      <td>21/02/2022<br/>to<br/>26/02/2022</td>
      <td  className="">5<br/>5<br/>8</td>
      <td  className="">81</td>
      <td  className="">2<br/>3<br/>6</td>
      <td  className="">2<br/>6<br/>0</td>
      <td  className="">84</td>
      <td  className="">2<br/>3<br/>9</td>
      <td  className="">1<br/>7<br/>9</td>
      <td  className="">76</td>
      <td  className="">3<br/>5<br/>8</td>
      <td  className="">1<br/>6<br/>6</td>
      <td  className="">37</td>
      <td  className="">3<br/>6<br/>8</td>
      <td  className="">2<br/>2<br/>4</td>
      <td  className="">85</td>
      <td  className="">1<br/>7<br/>7</td>
      <td  className="">1<br/>2<br/>4</td>
      <td  className="">74</td>
      <td  className="">1<br/>5<br/>8</td>
   </tr>
   <tr>
      <td>28/02/2022<br/>to<br/>05/03/2022</td>
      <td  className="">1<br/>3<br/>5</td>
      <td  className="">96</td>
      <td  className="">1<br/>6<br/>9</td>
      <td  className="">4<br/>5<br/>5</td>
      <td  className="">43</td>
      <td  className="">6<br/>8<br/>9</td>
      <td  className="">1<br/>2<br/>7</td>
      <td  className="">08</td>
      <td  className="">2<br/>6<br/>0</td>
      <td  className="">5<br/>6<br/>6</td>
      <td  className="">74</td>
      <td  className="">3<br/>3<br/>8</td>
      <td  className="">1<br/>4<br/>7</td>
      <td  className="">25</td>
      <td  className="">2<br/>6<br/>7</td>
      <td  className="">7<br/>9<br/>9</td>
      <td  className="">51</td>
      <td  className="">4<br/>8<br/>9</td>
   </tr>
   <tr>
      <td>07/03/2022<br/>to<br/>12/03/2022</td>
      <td  className="">9<br/>0<br/>0</td>
      <td  className="">93</td>
      <td  className="">2<br/>5<br/>6</td>
      <td  className="">1<br/>7<br/>9</td>
      <td  className="">71</td>
      <td  className="">1<br/>4<br/>6</td>
      <td  className="r">6<br/>6<br/>8</td>
      <td  className="r">05</td>
      <td  className="r">7<br/>9<br/>9</td>
      <td  className="">1<br/>1<br/>4</td>
      <td  className="">63</td>
      <td  className="">6<br/>7<br/>0</td>
      <td  className="">1<br/>5<br/>7</td>
      <td  className="">39</td>
      <td  className="">3<br/>6<br/>0</td>
      <td  className="">1<br/>6<br/>8</td>
      <td  className="">53</td>
      <td  className="">3<br/>5<br/>5</td>
   </tr>
   <tr>
      <td>14/03/2022<br/>to<br/>19/03/2022</td>
      <td  className="">1<br/>7<br/>7</td>
      <td  className="">52</td>
      <td  className="">5<br/>7<br/>0</td>
      <td  className="r">3<br/>7<br/>9</td>
      <td  className="r">99</td>
      <td  className="r">5<br/>6<br/>8</td>
      <td  className="r">6<br/>7<br/>0</td>
      <td  className="r">33</td>
      <td  className="r">1<br/>2<br/>0</td>
      <td  className="">8<br/>9<br/>0</td>
      <td  className="">74</td>
      <td  className="">1<br/>5<br/>8</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="r">**</td>
      <td  className="r">*<br/>*<br/>*</td>
      <td  className="">5<br/>7<br/>8</td>
      <td  className="">01</td>
      <td  className="">1<br/>5<br/>5</td>
   </tr>
   <tr>
      <td>21/03/2022<br/>to<br/>26/03/2022</td>
      <td  className="">5<br/>5<br/>7</td>
      <td  className="">70</td>
      <td  className="">3<br/>8<br/>9</td>
      <td  className="">2<br/>2<br/>8</td>
      <td  className="">23</td>
      <td  className="">7<br/>7<br/>9</td>
      <td  className="">1<br/>2<br/>9</td>
      <td  className="">23</td>
      <td  className="">2<br/>5<br/>6</td>
      <td  className="r">4<br/>4<br/>9</td>
      <td  className="r">72</td>
      <td  className="r">2<br/>5<br/>5</td>
      <td  className="r">1<br/>3<br/>5</td>
      <td  className="r">99</td>
      <td  className="r">2<br/>3<br/>4</td>
      <td  className="">1<br/>3<br/>0</td>
      <td  className="">47</td>
      <td  className="">2<br/>7<br/>8</td>
   </tr>
   <tr>
      <td>28/03/2022<br/>to<br/>02/04/2022</td>
      <td  className="r">3<br/>5<br/>8</td>
      <td  className="r">66</td>
      <td  className="r">1<br/>5<br/>0</td>
      <td  className="">2<br/>4<br/>0</td>
      <td  className="">65</td>
      <td  className="">2<br/>4<br/>9</td>
      <td  className="">9<br/>0<br/>0</td>
      <td  className="">90</td>
      <td  className="">1<br/>1<br/>8</td>
      <td  className="">2<br/>2<br/>6</td>
      <td  className="">06</td>
      <td  className="">4<br/>4<br/>8</td>
      <td  className="">4<br/>7<br/>8</td>
      <td  className="">93</td>
      <td  className="">5<br/>9<br/>9</td>
      <td  className="">2<br/>5<br/>9</td>
      <td  className="">68</td>
      <td  className="">9<br/>9<br/>0</td>
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

export default Kalyanp;


