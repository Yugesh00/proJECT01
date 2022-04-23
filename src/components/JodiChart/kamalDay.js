import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBListGroupItem } from "mdbreact";  
import { Link } from "react-router-dom";
import DataService from "../../services/database" 
import './../table.css'
import { Tabs, Button,  Row, Col, Checkbox, Input, Spin  } from 'antd';
import firebase from "./../firebase";
const db = firebase;


const KamalDayj = () => { 
   const [loading, setLoading] = useState(true);
   const [myList, setMyList] = useState(true);

   useEffect(() => {
      getUser()
    }, [loading]); 

    const getUser = () =>{
      const getPostsFromFirebase = [];
      const subscriber = db.collection("market_charts").doc("kalyan").collection("panel")
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            getPostsFromFirebase.push({
              ...doc.data(),  
              key: doc.id, 
            });
          });
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
        top: document.documentElement.scrollHeight
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
	<div>  
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
            <table style={{  textAlign:'center'}} className="leaderboard chart-table" cellpadding="2">
            <thead>
      <tr>
         <th>Mon</th>
         <th>Tue</th>
         <th>Wed</th>
         <th>Thu</th>
         <th>Fri</th>
         <th>Sat</th>
      </tr>
   </thead>
   <tbody>
							<tr>
								<td style={{color:'red'}}>38</td>
								<td style={{color:'red'}}>77</td>
								<td  >79</td>
								<td style={{color:'red'}}>55</td>
								<td style={{color:'red'}}>94</td>
								<td style={{color:'red'}}>77</td>
								 
							</tr>
														<tr>
								<td  >65</td>
								<td  >40</td>
								<td  >86</td>
								<td  >01</td>
								<td  >62</td>
								<td  >45</td>
								 
							</tr>
														<tr>
								<td  >09</td>
								<td  >94</td>
								<td  >84</td>
								<td  >91</td>
								<td  >85</td>
								<td  >62</td>
								 
							</tr>
														<tr>
								<td  >57</td>
								<td  >45</td>
								<td style={{color:'red'}}>72</td>
								<td  >20</td>
								<td  >34</td>
								<td  >79</td>
								 
							</tr>
														<tr>
								<td  >47</td>
								<td  >62</td>
								<td  >97</td>
								<td  >10</td>
								<td  >12</td>
								<td  >84</td>
								 
							</tr>
														<tr>
								<td  >91</td>
								<td  >73</td>
								<td  >43</td>
								<td  >86</td>
								<td  >32</td>
								<td  >01</td>
								 
							</tr>
														<tr>
								<td  >87</td>
								<td style={{color:'red'}}>99</td>
								<td  >69</td>
								<td  >85</td>
								<td style={{color:'red'}}>22</td>
								<td  >36</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>05</td>
								<td  >67</td>
								<td  >21</td>
								<td  >70</td>
								<td  >96</td>
								<td  >03</td>
								 
							</tr>
														<tr>
								<td  >10</td>
								<td  >58</td>
								<td  >14</td>
								<td  >82</td>
								<td  >43</td>
								<td  >08</td>
								 
							</tr>
														<tr>
								<td  >37</td>
								<td  >92</td>
								<td style={{color:'red'}}>38</td>
								<td  >17</td>
								<td  >69</td>
								<td  >25</td>
								 
							</tr>
														<tr>
								<td  >04</td>
								<td  >42</td>
								<td  >65</td>
								<td  >02</td>
								<td style={{color:'red'}}>16</td>
								<td style={{color:'red'}}>94</td>
								 
							</tr>
														<tr>
								<td  >51</td>
								<td  >39</td>
								<td  >82</td>
								<td  >78</td>
								<td style={{color:'red'}}>94</td>
								<td  >21</td>
								 
							</tr>
														<tr>
								<td  >69</td>
								<td  >87</td>
								<td  >03</td>
								<td  >56</td>
								<td  >70</td>
								<td  >32</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>11</td>
								<td  >36</td>
								<td  >42</td>
								<td  >64</td>
								<td  >29</td>
								<td style={{color:'red'}}>50</td>
								 
							</tr>
														<tr>
								<td  >06</td>
								<td  >17</td>
								<td  >30</td>
								<td  >51</td>
								<td  >78</td>
								<td  >29</td>
								 
							</tr>
														<tr>
								<td  >35</td>
								<td  >87</td>
								<td  >53</td>
								<td  >28</td>
								<td style={{color:'red'}}>49</td>
								<td  >14</td>
								 
							</tr>
														<tr>
								<td  >40</td>
								<td  >65</td>
								<td  >08</td>
								<td  >76</td>
								<td  >13</td>
								<td  >86</td>
								 
							</tr>
														<tr>
								<td  >79</td>
								<td  >81</td>
								<td  >54</td>
								<td style={{color:'red'}}>49</td>
								<td  >70</td>
								<td  >52</td>
								 
							</tr>
														<tr>
								<td  >23</td>
								<td  >04</td>
								<td  >58</td>
								<td  >84</td>
								<td  >30</td>
								<td  >45</td>
								 
							</tr>
														<tr>
								<td  >47</td>
								<td  >19</td>
								<td  >81</td>
								<td  >26</td>
								<td  >67</td>
								<td style={{color:'red'}}>94</td>
								 
							</tr>
														<tr>
								<td  >98</td>
								<td  >76</td>
								<td  >06</td>
								<td  >89</td>
								<td  >13</td>
								<td  >46</td>
								 
							</tr>
														<tr>
								<td  >14</td>
								<td style={{color:'red'}}>27</td>
								<td  >70</td>
								<td  >68</td>
								<td  >54</td>
								<td  >13</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>05</td>
								<td  >47</td>
								<td  >08</td>
								<td  >86</td>
								<td  >97</td>
								<td  >67</td>
								 
							</tr>
														<tr>
								<td  >68</td>
								<td  >92</td>
								<td  >71</td>
								<td  >12</td>
								<td  >06</td>
								<td  >74</td>
								 
							</tr>
														<tr>
								<td  >81</td>
								<td  >78</td>
								<td  >13</td>
								<td  >80</td>
								<td  >29</td>
								<td  >68</td>
								 
							</tr>
														<tr>
								<td  >57</td>
								<td  >96</td>
								<td  >62</td>
								<td  >31</td>
								<td style={{color:'red'}}>55</td>
								<td  >20</td>
								 
							</tr>
														<tr>
								<td  >32</td>
								<td  >18</td>
								<td  >25</td>
								<td  >67</td>
								<td  >04</td>
								<td  >60</td>
								 
							</tr>
														<tr>
								<td  >71</td>
								<td  >74</td>
								<td  >31</td>
								<td  >36</td>
								<td  >60</td>
								<td  >04</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>94</td>
								<td  >13</td>
								<td  >02</td>
								<td  >67</td>
								<td  >79</td>
								<td  >73</td>
								 
							</tr>
														<tr>
								<td  >68</td>
								<td  >14</td>
								<td  >26</td>
								<td  >76</td>
								<td  >92</td>
								<td  >69</td>
								 
							</tr>
														<tr>
								<td  >81</td>
								<td style={{color:'red'}}>94</td>
								<td  >54</td>
								<td  >65</td>
								<td  >71</td>
								<td style={{color:'red'}}>27</td>
								 
							</tr>
														<tr>
								<td  >14</td>
								<td style={{color:'red'}}>05</td>
								<td  >73</td>
								<td  >57</td>
								<td  >91</td>
								<td  >10</td>
								 
							</tr>
														<tr>
								<td  >54</td>
								<td  >43</td>
								<td style={{color:'red'}}>88</td>
								<td  >68</td>
								<td  >71</td>
								<td  >98</td>
								 
							</tr>
														<tr>
								<td  >07</td>
								<td  >37</td>
								<td  >53</td>
								<td style={{color:'red'}}>61</td>
								<td style={{color:'red'}}>22</td>
								<td  >18</td>
								 
							</tr>
														<tr>
								<td  >78</td>
								<td  >92</td>
								<td  >96</td>
								<td  >41</td>
								<td  >25</td>
								<td  >84</td>
								 
							</tr>
														<tr>
								<td  >13</td>
								<td  >58</td>
								<td  >74</td>
								<td  >80</td>
								<td  >39</td>
								<td  >67</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>05</td>
								<td  >29</td>
								<td  >51</td>
								<td  >67</td>
								<td  >84</td>
								<td  >01</td>
								 
							</tr>
														<tr>
								<td  >74</td>
								<td  >67</td>
								<td  >39</td>
								<td  >92</td>
								<td  >06</td>
								<td  >89</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>16</td>
								<td  >54</td>
								<td  >62</td>
								<td  >34</td>
								<td  >34</td>
								<td  >34</td>
								 
							</tr>
														<tr>
								<td  >34</td>
								<td  >34</td>
								<td  >40</td>
								<td style={{color:'red'}}>55</td>
								<td  >67</td>
								<td style={{color:'red'}}>27</td>
								 
							</tr>
														<tr>
								<td  >19</td>
								<td  >24</td>
								<td  >47</td>
								<td  >97</td>
								<td style={{color:'red'}}>05</td>
								<td  >84</td>
								 
							</tr>
														<tr>
								<td  >24</td>
								<td  >57</td>
								<td  >30</td>
								<td  >81</td>
								<td  >90</td>
								<td  >21</td>
								 
							</tr>
														<tr>
								<td  >76</td>
								<td  >84</td>
								<td style={{color:'red'}}>61</td>
								<td  >23</td>
								<td  >02</td>
								<td  >30</td>
								 
							</tr>
														<tr>
								<td  >17</td>
								<td  >73</td>
								<td  >23</td>
								<td style={{color:'red'}}>66</td>
								<td  >97</td>
								<td  >71</td>
								 
							</tr>
														<tr>
								<td  >53</td>
								<td  >32</td>
								<td  >17</td>
								<td  >59</td>
								<td  >79</td>
								<td  >31</td>
								 
							</tr>
														<tr>
								<td  >86</td>
								<td  >28</td>
								<td style={{color:'red'}}>11</td>
								<td  >59</td>
								<td  >98</td>
								<td  >17</td>
								 
							</tr>
														<tr>
								<td  >41</td>
								<td  >86</td>
								<td  >87</td>
								<td style={{color:'red'}}>16</td>
								<td  >43</td>
								<td  >17</td>
								 
							</tr>
														<tr>
								<td  >32</td>
								<td style={{color:'red'}}>27</td>
								<td  >06</td>
								<td style={{color:'red'}}>99</td>
								<td  >01</td>
								<td  >37</td>
								 
							</tr>
														<tr>
								<td  >73</td>
								<td  >87</td>
								<td  >12</td>
								<td  >48</td>
								<td  >67</td>
								<td  >28</td>
								 
							</tr>
														<tr>
								<td  >79</td>
								<td  >34</td>
								<td style={{color:'red'}}>49</td>
								<td  >52</td>
								<td  >67</td>
								<td  >59</td>
								 
							</tr>
														<tr>
								<td  >59</td>
								<td  >97</td>
								<td style={{color:'red'}}>16</td>
								<td style={{color:'red'}}>83</td>
								<td style={{color:'red'}}>50</td>
								<td  >43</td>
								 
							</tr>
														<tr>
								<td  >54</td>
								<td  >18</td>
								<td  >74</td>
								<td  >37</td>
								<td style={{color:'red'}}>16</td>
								<td  >54</td>
								 
							</tr>
														<tr>
								<td  >08</td>
								<td  >73</td>
								<td  >09</td>
								<td  >87</td>
								<td  >10</td>
								<td  >24</td>
								 
							</tr>
														<tr>
								<td  >97</td>
								<td  >24</td>
								<td  >17</td>
								<td style={{color:'red'}}>88</td>
								<td  >59</td>
								<td  >70</td>
								 
							</tr>
														<tr>
								<td  >28</td>
								<td style={{color:'red'}}>05</td>
								<td  >78</td>
								<td style={{color:'red'}}>16</td>
								<td  >32</td>
								<td  >09</td>
								 
							</tr>
														<tr>
								<td  >63</td>
								<td  >21</td>
								<td  >02</td>
								<td  >89</td>
								<td  >62</td>
								<td  >70</td>
								 
							</tr>
														<tr>
								<td  >13</td>
								<td  >96</td>
								<td  >64</td>
								<td style={{color:'red'}}>99</td>
								<td  >29</td>
								<td  >89</td>
								 
							</tr>
														<tr>
								<td  >32</td>
								<td  >00</td>
								<td  >17</td>
								<td  >64</td>
								<td  >57</td>
								<td  >08</td>
								 
							</tr>
														<tr>
								<td  >06</td>
								<td  >02</td>
								<td  >96</td>
								<td  >42</td>
								<td  >23</td>
								<td style={{color:'red'}}>44</td>
								 
							</tr>
														<tr>
								<td  >29</td>
								<td  >30</td>
								<td  >87</td>
								<td  >09</td>
								<td  >24</td>
								<td  >40</td>
								 
							</tr>
														<tr>
								<td  >80</td>
								<td  >29</td>
								<td  >40</td>
								<td  >83</td>
								<td  >75</td>
								<td  >45</td>
								 
							</tr>
														<tr>
								<td  >40</td>
								<td  >17</td>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								 
							</tr>
														<tr>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								 
							</tr>
														<tr>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								 
							</tr>
														<tr>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								<td  >80</td>
								<td  >50</td>
								<td  >72</td>
								 
							</tr>
														<tr>
								<td  >23</td>
								<td  >79</td>
								<td style={{color:'red'}}>38</td>
								<td style={{color:'red'}}>49</td>
								<td style={{color:'red'}}>50</td>
								<td style={{color:'red'}}>77</td>
								 
							</tr>
														<tr>
								<td  >87</td>
								<td  >15</td>
								<td  >63</td>
								<td style={{color:'red'}}>27</td>
								<td  >04</td>
								<td  >57</td>
								 
							</tr>
														<tr>
								<td  >01</td>
								<td  >29</td>
								<td  >67</td>
								<td  >40</td>
								<td  >86</td>
								<td  >63</td>
								 
							</tr>
														<tr>
								<td  >20</td>
								<td style={{color:'red'}}>94</td>
								<td  >87</td>
								<td  >06</td>
								<td  >71</td>
								<td  >98</td>
								 
							</tr>
														<tr>
								<td  >18</td>
								<td style={{color:'red'}}>66</td>
								<td  >89</td>
								<td style={{color:'red'}}>50</td>
								<td style={{color:'red'}}>05</td>
								<td  >68</td>
								 
							</tr>
														<tr>
								<td  >26</td>
								<td  >17</td>
								<td  >67</td>
								<td  >92</td>
								<td  >18</td>
								<td style={{color:'red'}}>05</td>
								 
							</tr>
														<tr>
								<td  >25</td>
								<td  >34</td>
								<td  >57</td>
								<td  >20</td>
								<td  >81</td>
								<td  > 31</td>
								 
							</tr>
														<tr>
								<td  >90</td>
								<td  >74</td>
								<td  >08</td>
								<td  >84</td>
								<td  >31</td>
								<td  >09</td>
								 
							</tr>
														<tr>
								<td  >57</td>
								<td  >**</td>
								<td  >82</td>
								<td style={{color:'red'}}>16</td>
								<td  >90</td>
								<td  >16</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>77</td>
								<td  >93</td>
								<td  >19</td>
								<td style={{color:'red'}}>55</td>
								<td  >38</td>
								<td style={{color:'red'}}>11</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>83</td>
								<td  >26</td>
								<td  >87</td>
								<td style={{color:'red'}}>16</td>
								<td  >01</td>
								<td  >09</td>
								 
							</tr>
														<tr>
								<td  >36</td>
								<td  >28</td>
								<td  >43</td>
								<td style={{color:'red'}}>94</td>
								<td  >01</td>
								<td style={{color:'red'}}>05</td>
								 
							</tr>
														<tr>
								<td  >14</td>
								<td  >10</td>
								<td  >76</td>
								<td  >63</td>
								<td  >89</td>
								<td  >79</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>22</td>
								<td style={{color:'red'}}>05</td>
								<td  >93</td>
								<td style={{color:'red'}}>94</td>
								<td  >31</td>
								<td  >18</td>
								 
							</tr>
														<tr>
								<td  >96</td>
								<td  >28</td>
								<td  >15</td>
								<td  >79</td>
								<td  >35</td>
								<td style={{color:'red'}}>94</td>
								 
							</tr>
														<tr>
								<td  >13</td>
								<td style={{color:'red'}}>77</td>
								<td style={{color:'red'}}>44</td>
								<td  >76</td>
								<td  >95</td>
								<td  >06</td>
								 
							</tr>
														<tr>
								<td  >28</td>
								<td  >90</td>
								<td  >92</td>
								<td style={{color:'red'}}>33</td>
								<td  >13</td>
								<td style={{color:'red'}}>16</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>**</td>
								<td  >48</td>
								<td  >53</td>
								<td  >80</td>
								<td  >54</td>
								<td  >39</td>
								 
							</tr>
														<tr>
								<td  >10</td>
								<td  >32</td>
								<td  >96</td>
								<td  >52</td>
								<td  >85</td>
								<td  >93</td>
								 
							</tr>
														<tr>
								<td  >73</td>
								<td  >95</td>
								<td style={{color:'red'}}>83</td>
								<td  >24</td>
								<td style={{color:'red'}}>11</td>
								<td  >96</td>
								 
							</tr>
														<tr>
								<td  >75</td>
								<td  >42</td>
								<td style={{color:'red'}}>50</td>
								<td style={{color:'red'}}>16</td>
								<td  >98</td>
								<td style={{color:'red'}}>44</td>
								 
							</tr>
														<tr>
								<td  >65</td>
								<td  >37</td>
								<td  >42</td>
								<td style={{color:'red'}}>61</td>
								<td  >24</td>
								<td  >98</td>
								 
							</tr>
														<tr>
								<td  >31</td>
								<td  >54</td>
								<td  >90</td>
								<td  >51</td>
								<td  >06</td>
								<td  >78</td>
								 
							</tr>
														<tr>
								<td  >25</td>
								<td  >63</td>
								<td  >76</td>
								<td  >40</td>
								<td style={{color:'red'}}>22</td>
								<td  >91</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>05</td>
								<td  >98</td>
								<td  >06</td>
								<td  >78</td>
								<td  >60</td>
								<td style={{color:'red'}}>61</td>
								 
							</tr>
														<tr>
								<td  >19</td>
								<td  >12</td>
								<td  >23</td>
								<td  >79</td>
								<td style={{color:'red'}}>55</td>
								<td style={{color:'red'}}>83</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>49</td>
								<td  >92</td>
								<td  >57</td>
								<td  >86</td>
								<td style={{color:'red'}}>16</td>
								<td  >20</td>
								 
							</tr>
														<tr>
								<td  >64</td>
								<td  >82</td>
								<td  >30</td>
								<td style={{color:'red'}}>77</td>
								<td  >24</td>
								<td  >93</td>
								 
							</tr>
														<tr>
								<td  >67</td>
								<td  >19</td>
								<td  >92</td>
								<td  >56</td>
								<td  >20</td>
								<td  >63</td>
								 
							</tr>
														<tr>
								<td  >85</td>
								<td style={{color:'red'}}>27</td>
								<td  >73</td>
								<td style={{color:'red'}}>00</td>
								<td  >31</td>
								<td  >08</td>
								 
							</tr>
														<tr>
								<td  >19</td>
								<td  >41</td>
								<td  >24</td>
								<td  >60</td>
								<td  >93</td>
								<td  >56</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>77</td>
								<td style={{color:'red'}}>38</td>
								<td  >46</td>
								<td  >54</td>
								<td  >23</td>
								<td  >70</td>
								 
							</tr>
														<tr>
								<td  > 81</td>
								<td  >34</td>
								<td  >95</td>
								<td style={{color:'red'}}>49</td>
								<td  >01</td>
								<td  >23</td>
								 
							</tr>
														<tr>
								<td  >23</td>
								<td style={{color:'red'}}>66</td>
								<td  >08</td>
								<td  >13</td>
								<td  >58</td>
								<td  >02</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>83</td>
								<td  >39</td>
								<td  >28</td>
								<td  >76</td>
								<td  >21</td>
								<td  >15</td>
								 
							</tr>
														<tr>
								<td  >16</td>
								<td  >84</td>
								<td  >40</td>
								<td style={{color:'red'}}>44</td>
								<td  >35</td>
								<td  >03</td>
								 
							</tr>
														<tr>
								<td  >73</td>
								<td  >86</td>
								<td  >89</td>
								<td  >37</td>
								<td  >01</td>
								<td  >59</td>
								 
							</tr>
														<tr>
								<td  >95</td>
								<td style={{color:'red'}}>27</td>
								<td style={{color:'red'}}>38</td>
								<td  >70</td>
								<td  >68</td>
								<td  >67</td>
								 
							</tr>
														<tr>
								<td  >71</td>
								<td  >35</td>
								<td  >01</td>
								<td  >58</td>
								<td  >60</td>
								<td  >92</td>
								 
							</tr>
														<tr>
								<td  >24</td>
								<td  >36</td>
								<td  >69</td>
								<td style={{color:'red'}}>94</td>
								<td  >02</td>
								<td  >62</td>
								 
							</tr>
														<tr>
								<td  >65</td>
								<td  >13</td>
								<td  >84</td>
								<td style={{color:'red'}}>00</td>
								<td  >56</td>
								<td  >97</td>
								 
							</tr>
														<tr>
								<td  >84</td>
								<td  >02</td>
								<td  >13</td>
								<td  >57</td>
								<td  >09</td>
								<td  >65</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>44</td>
								<td  >95</td>
								<td  >34</td>
								<td  >10</td>
								<td style={{color:'red'}}>27</td>
								<td  >67</td>
								 
							</tr>
														<tr>
								<td  >44</td>
								<td  >95</td>
								<td  >34</td>
								<td  >10</td>
								<td  >27</td>
								<td  >67</td>
								 
							</tr>
														<tr>
								<td  >58</td>
								<td  >91</td>
								<td  >52</td>
								<td  >75</td>
								<td  >08</td>
								<td  >41</td>
								 
							</tr>
														<tr>
								<td  >35</td>
								<td  >24</td>
								<td  >89</td>
								<td style={{color:'red'}}>94</td>
								<td  >67</td>
								<td  >92</td>
								 
							</tr>
														<tr>
								<td  >21</td>
								<td  >23</td>
								<td  >67</td>
								<td  >40</td>
								<td  >07</td>
								<td  >81</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>38</td>
								<td style={{color:'red'}}>55</td>
								<td  >19</td>
								<td  >63</td>
								<td  >29</td>
								<td style={{color:'red'}}>27</td>
								 
							</tr>
														<tr>
								<td  >58</td>
								<td  >73</td>
								<td  >36</td>
								<td  >97</td>
								<td style={{color:'red'}}>11</td>
								<td  >48</td>
								 
							</tr>
														<tr>
								<td  >84</td>
								<td  >24</td>
								<td  >78</td>
								<td  >13</td>
								<td  >25</td>
								<td  >54</td>
								 
							</tr>
														<tr>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								<td  >**</td>
								 
							</tr>
														<tr>
								<td  >**</td>
								<td  >41</td>
								<td  >32</td>
								<td  >10</td>
								<td  >78</td>
								<td  >96</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>72</td>
								<td style={{color:'red'}}>83</td>
								<td  >03</td>
								<td  >15</td>
								<td  >13</td>
								<td  >98</td>
								 
							</tr>
														<tr>
								<td  >53</td>
								<td  >06</td>
								<td  >79</td>
								<td  >91</td>
								<td  >46</td>
								<td  >02</td>
								 
							</tr>
														<tr>
								<td  >47</td>
								<td  >68</td>
								<td  >97</td>
								<td  >48</td>
								<td  >39</td>
								<td style={{color:'red'}}>55</td>
								 
							</tr>
														<tr>
								<td  >73</td>
								<td  >80</td>
								<td  >59</td>
								<td  >40</td>
								<td  >43</td>
								<td  >39</td>
								 
							</tr>
														<tr>
								<td  >06</td>
								<td  >91</td>
								<td  >59</td>
								<td  >87</td>
								<td  >40</td>
								<td  >12</td>
								 
							</tr>
														<tr>
								<td  >39</td>
								<td style={{color:'red'}}>88</td>
								<td  >01</td>
								<td style={{color:'red'}}>94</td>
								<td  >02</td>
								<td  >69</td>
								 
							</tr>
														<tr>
								<td  >56</td>
								<td  >48</td>
								<td style={{color:'red'}}>35</td>
								<td style={{color:'red'}}>84</td>
								<td style={{color:'red'}}>90</td>
								<td style={{color:'red'}}>86</td>
								 
							</tr>
														<tr>
								<td  >52</td>
								<td style={{color:'red'}}>54</td>
								<td style={{color:'red'}}>43</td>
								<td style={{color:'red'}}>87</td>
								<td  >34</td>
								<td style={{color:'red'}}>14</td>
								 
							</tr>
														<tr>
								<td  >82</td>
								<td  >42</td>
								<td  >31</td>
								<td  >28</td>
								<td  >74</td>
								<td  >45</td>
								 
							</tr>
														<tr>
								<td  >46</td>
								<td style={{color:'red'}}>43</td>
								<td  >90</td>
								<td style={{color:'red'}}>27</td>
								<td style={{color:'red'}}>11</td>
								<td  >69</td>
								 
							</tr>
														<tr>
								<td  >10</td>
								<td  >89</td>
								<td  >**</td>
								<td style={{color:'red'}}>38</td>
								<td  >70</td>
								<td style={{color:'red'}}>38</td>
								 
							</tr>
														<tr>
								<td  >43</td>
								<td  >29</td>
								<td style={{color:'red'}}>48</td>
								<td  >40</td>
								<td  >63</td>
								<td style={{color:'red'}}>10</td>
								 
							</tr>
														<tr>
								<td  >18</td>
								<td  >96</td>
								<td  >02</td>
								<td style={{color:'red'}}>16</td>
								<td  >02</td>
								<td style={{color:'red'}}>49</td>
								 
							</tr>
														<tr>
								<td  >78</td>
								<td style={{color:'red'}}>37</td>
								<td  >12</td>
								<td  >47</td>
								<td style={{color:'red'}}>72</td>
								<td  >64</td>
								 
							</tr>
														<tr>
								<td  >17</td>
								<td  >48</td>
								<td  >07</td>
								<td  >36</td>
								<td  >41</td>
								<td  >10</td>
								 
							</tr>
														<tr>
								<td style={{color:'red'}}>82</td>
								<td  >46</td>
								<td  >34</td>
								<td  >19</td>
								<td  >34</td>
								<td  >67</td>
								 
							</tr>
														<tr>
								<td  >20</td>
								<td  >89</td>
								<td  >14</td>
								<td  >25</td>
								<td  >09</td>
								<td style={{color:'red'}}>05</td>
								 
							</tr>
														<tr>
								<td  >32</td>
								<td  >18</td>
								<td  >30</td>
								<td  >29</td>
								<td style={{color:'red'}}>**</td>
								<td  >07</td>
								 
							</tr>
														<tr>
								<td  >87</td>
								<td  >43</td>
								<td  >59</td>
								<td  >98</td>
								<td  >24</td>
								<td  >01</td>
								 
							</tr>
														<tr>
								<td  >45</td>
								<td  >38</td>
								<td  >17</td>
								<td style={{color:'red'}}>50</td>
								<td  >78</td>
								<td  >10</td>
								 
							</tr>
														<tr>
								<td  >67</td>
								<td  >03</td>
								<td  >37</td>
								<td  >93</td>
								<td  >21</td>
								<td  >81</td>
								 
							</tr>
														<tr>
								<td  >21</td>
								<td style={{color:'red'}}>05</td>
								<td  >54</td>
								<td  >25</td>
								<td  >39</td>
								<td style={{color:'red'}}>11</td>
								 
							</tr>
														<tr>
								<td  >48</td>
								<td  >56</td>
								<td  >31</td>
								<td  >03</td>
								<td  >31</td>
								<td  >36</td>
								 
							</tr>
							{myList.map(current => {
        return (  
              <tr> 
                {current.number.map(num => {
                  return <td>{num}</td>;
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
    </div>
  );
}

export default KamalDayj;
