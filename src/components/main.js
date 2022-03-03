import logo from '../pslLogo1.png';
import 'mdbreact/dist/css/mdb.css';
import Question from './question'
import { MDBBtn } from "mdbreact";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import audio from '../assests/onclick.mp3';
import { Tabs, Row, Col  } from 'antd'; 
const { TabPane } = Tabs;

const Main = () => {
 
  const Play = () => {
    new Audio(audio).play();
  }

  return (
    <div className="App">  
      <header className="App-header ">
      <div className='card  headSection'>
        <span style={{fontWeight:'14px'}}>
          DPBoss.net
         </span>
      </div>
       <div className='card elegant-color white-text  welcomeSection'>
        <marquee  direction="left" style={{fontWeight:'10px'}}>
        !! Welcome Friends in the world of DPBoss.net in INDIA. May you always Win. !!
         </marquee> 
      </div>
      <div className='card luckySection'>
        <div className='elegant-color white-text card'>
          <span style={{fontWeight:'14px'}}>
          Today's Lucky Number
          </span>
         </div>
         <div className='topMar1'>
         <Row >
            <Col className='subSection1' span={12}>
            <p> Golden Ank </p>
            <p>  Golden Ank </p> </Col>
          <Col className='  subSection2' span={12}>
          <p>  Golden Ank  </p>
          <p> Golden Ank </p>  </Col>
        </Row>
         </div>
      </div>
      <div className='card liveResultSection'>
         <div className='card elegant-color white-text'>
          <span style={{fontWeight:'14px'}}>
          Live Result
          </span>
         </div>
         <div className='topMar1'>
         <Row >
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Golden Ank </p>
            <p>  312321 </p> 
            <button type="button"  className='btn-primary'>
              <p  style={{fontSize:'12px'}}>
              Refresh
              </p> 
           </button>
            </Col>
          <Col className='liveResultSubSection bottomPad' span={24}>
          <p>  Golden Ank  </p>
          <p> 1232</p>  
          <button type="button"  className='btn-primary'>
              <p  style={{fontSize:'12px'}}>
              Refresh
              </p> 
           </button>
          </Col>
          <Col className='liveResultSubSection bottomPad' span={24}>
          <p>  Golden Ank  </p>
          <p> 122 </p>  
          <button type="button"  className='btn-primary'>
              <p  style={{fontSize:'12px'}}>
              Refresh
              </p> 
           </button>
          </Col>
        </Row>
         </div>
      </div>
      <br/>

      {/* WORLD ME SABSE FAST SATTA MATKA RESULT */}
      <div className='card liveResultSection'>
         <div className='card elegant-color white-text'>
          <span style={{fontSize:'25px'}}>
          WORLD ME SABSE FAST SATTA MATKA RESULT
          </span>
         </div>
         <div className='topMar1 '>
         <Row justify="center" align="top" className='liveResultSubSection bottomPad'> 
            <Col className='' span={8}> 
              <button type="button"  className='btn-primary'>
                <p  style={{fontSize:'12px'}}>
                Jodi
                </p> 
              </button>
            </Col>
          <Col className='' span={8}>
              <p>  MADHURI  </p>
              <p> 129-29-360</p>  
              <p>11:45 AM    12:45 PM</p>
          </Col>
          <Col className='' span={8}>  
              <button type="button"  className='btn-primary'>
                  <p  style={{fontSize:'12px'}}>
                  Panel
                  </p> 
              </button>
          </Col>
        </Row>
        <Row justify="center" align="top" className='liveResultSubSection bottomPad'> 
            <Col className='' span={8}> 
              <button type="button"  className='btn-primary'>
                <p  style={{fontSize:'12px'}}>
                Jodi
                </p> 
              </button>
            </Col>
          <Col className='' span={8}>
              <p>  MADHURI  </p>
              <p> 129-29-360</p>  
              <p>11:45 AM    12:45 PM</p>
          </Col>
          <Col className='' span={8}>  
              <button type="button"  className='btn-primary'>
                  <p  style={{fontSize:'12px'}}>
                  Panel
                  </p> 
              </button>
          </Col>
        </Row>
         </div>
      </div> 

        {/* SATTA MATKA JODI CHART */}
        <div className='card liveResultSection'>
         <div className='card elegant-color white-text'>
          <span style={{fontSize:'25px'}}>
          SATTA MATKA JODI CHART
          </span>
         </div>
         <div className='topMar1 '> 
        <Row> 
           <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
        </Row>
         </div>
      </div>

       {/* MATKA PANEL CHART */}
       <div className='card liveResultSection'>
         <div className='card elegant-color white-text'>
          <span style={{fontSize:'25px'}}>
          MATKA PANEL CHART
          </span>
         </div>
         <div className='topMar1 '> 
        <Row> 
           <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
            <Col className='liveResultSubSection bottomPad' span={24}>
            <p> Time Chart </p> 
            </Col>
        </Row>
         </div>
      </div>
      <table style={{width: '100%', textAlign:'center'}} className="panel-chart chart-table" cellpadding="2">
<thead>
<tr>
<th>Mo</th>
<th>Tue</th>
<th>Wed</th>
<th>Thu</th>
<th>Fri</th>
<th>Sat</th>
<th>Sun</th>
</tr>
</thead>                	
<tbody>
	<tr>
		<td class="r">55</td>
		<td>81</td>
		<td>65</td>
		<td>20</td>
		<td class="r">49</td>
		<td>46</td>
		<td>12</td>
	</tr>
	<tr>
		<td>42</td>
		<td>85</td>
		<td>31</td>
		<td>32</td>
		<td>90</td>
		<td>73</td>
		<td>98</td>
	</tr>
	<tr>
		<td>17</td>
		<td>65</td>
		<td>14</td>
		<td>20</td>
		<td>28</td>
		<td>74</td>
		<td>92</td>
	</tr>
	<tr>
		<td class="r">55</td>
		<td class="r">38</td>
		<td>93</td>
		<td>10</td>
		<td>23</td>
		<td>92</td>
		<td>35</td>
	</tr>
	<tr>
		<td>34</td>
		<td>95</td>
		<td class="r">11</td>
		<td>81</td>
		<td class="r">50</td>
		<td>85</td>
		<td>96</td>
	</tr>
	<tr>
		<td>52</td>
		<td>95</td>
		<td>39</td>
		<td>59</td>
		<td>82</td>
		<td>47</td>
		<td>87</td>
	</tr>
	<tr>
		<td>47</td>
		<td>51</td>
		<td>39</td>
		<td>71</td>
		<td>80</td>
		<td>81</td>
		<td>42</td>
	</tr>
	<tr>
		<td>47</td>
		<td>02</td>
		<td>13</td>
		<td>04</td>
		<td>87</td>
		<td>30</td>
		<td>07</td>
	</tr>
	<tr>
		<td>51</td>
		<td>31</td>
		<td>19</td>
		<td>89</td>
		<td>69</td>
		<td>69</td>
		<td class="r">**</td>
	</tr>
	<tr>
		<td class="r">55</td>
		<td>89</td>
		<td>95</td>
		<td class="r">66</td>
		<td>32</td>
		<td>30</td>
		<td>65</td>
	</tr>
	<tr>
		<td>75</td>
		<td>58</td>
		<td>70</td>
		<td>78</td>
		<td>32</td>
		<td>28</td>
		<td>46</td>
	</tr>
	<tr>
		<td>60</td>
		<td class="r">88</td>
		<td>06</td>
		<td>64</td>
		<td>10</td>
		<td class="r">55</td>
		<td>81</td>
	</tr>
	<tr>
		<td class="r">44</td>
		<td>60</td>
		<td>89</td>
		<td class="r">50</td>
		<td>70</td>
		<td>24</td>
		<td>96</td>
	</tr>
	<tr>
		<td>96</td>
		<td>40</td>
		<td>42</td>
		<td>29</td>
		<td>89</td>
		<td class="r">00</td>
		<td>39</td>
	</tr>
	<tr>
		<td class="r">66</td>
		<td class="r">22</td>
		<td>01</td>
		<td>70</td>
		<td>36</td>
		<td class="r">27</td>
		<td>02</td>
	</tr>
	<tr>
		<td>20</td>
		<td class="r">**</td>
		<td class="r">38</td>
		<td>37</td>
		<td class="r">55</td>
		<td>32</td>
		<td>02</td>
	</tr>
	<tr>
		<td>89</td>
		<td>04</td>
		<td>08</td>
		<td>26</td>
		<td>37</td>
		<td>30</td>
		<td class="chart-00">**</td>
	</tr>
		<tr>
											<td class="chart-00">**</td>
											<td class="chart-00">**</td>
											<td class="chart-00">**</td>
											<td class="chart-00">**</td>
											<td class="chart-00">**</td>
											<td class="chart-00">**</td>
											<td class="chart-00">**</td>
										</tr>
	<tr>
		<td>01</td>
		<td>51</td>
		<td class="r">99</td>
		<td>06</td>
		<td>81</td>
		<td>96</td>
		<td>17</td>
	</tr>
	<tr>
		<td>53</td>
		<td>56</td>
		<td>97</td>
		<td>03</td>
		<td>20</td>
		<td>47</td>
		<td class="r">83</td>
	</tr>
	<tr>
		<td>21</td>
		<td>15</td>
		<td>03</td>
		<td class="r">22</td>
		<td>51</td>
		<td>31</td>
		<td>15</td>
	</tr>
	<tr>
		<td>95</td>
		<td>93</td>
		<td>17</td>
		<td>54</td>
		<td>97</td>
		<td>51</td>
		<td>98</td>
	</tr>
	<tr>
		<td>36</td>
		<td>29</td>
		<td>85</td>
		<td class="r">44</td>
		<td class="r">11</td>
		<td>64</td>
		<td>73</td>
	</tr>
	<tr>
		<td>13</td>
		<td>29</td>
		<td>13</td>
		<td class="r">38</td>
		<td>57</td>
		<td>39</td>
		<td class="r">77</td>
	</tr>
	<tr>
		<td>89</td>
		<td class="r">44</td>
		<td>39</td>
		<td>09</td>
		<td>20</td>
		<td class="r">50</td>
		<td>79</td>
	</tr>
	<tr>
		<td class="r">99</td>
		<td>26</td>
		<td class="r">44</td>
		<td>20</td>
		<td>87</td>
		<td>13</td>
		<td class="r">38</td>
	</tr>
	<tr>
		<td>96</td>
		<td>37</td>
		<td>57</td>
		<td>70</td>
		<td>25</td>
		<td>26</td>
		<td>20</td>
	</tr>
	<tr>
		<td>52</td>
		<td>35</td>
		<td class="r">00</td>
		<td>21</td>
		<td>85</td>
		<td>80</td>
		<td>59</td>
	</tr>
	<tr>
		<td class="r">33</td>
		<td>80</td>
		<td>91</td>
		<td class="r">22</td>
		<td>48</td>
		<td>42</td>
		<td>20</td>
	</tr>
	<tr>
		<td>43</td>
		<td>21</td>
		<td>48</td>
		<td class="r">77</td>
		<td>36</td>
		<td>42</td>
		<td class="r">16</td>
	</tr>
	<tr>
		<td>37</td>
		<td class="r">83</td>
		<td>82</td>
		<td>23</td>
		<td>12</td>
		<td>10</td>
		<td class="r">83</td>
	</tr>
	<tr>
		<td>23</td>
		<td>54</td>
		<td>01</td>
		<td class="r">16</td>
		<td class="r">99</td>
		<td class="r">77</td>
		<td>14</td>
	</tr>
	<tr>
		<td>93</td>
		<td class="r">22</td>
		<td>86</td>
		<td>81</td>
		<td>70</td>
		<td>08</td>
		<td>86</td>
	</tr>
	<tr>
		<td class="r">00</td>
		<td>41</td>
		<td>80</td>
		<td>81</td>
		<td>47</td>
		<td>78</td>
		<td>37</td>
	</tr>
	<tr>
		<td>07</td>
		<td>39</td>
		<td>30</td>
		<td>54</td>
		<td class="r">16</td>
		<td>85</td>
		<td>65</td>
	</tr>
	<tr>
		<td>91</td>
		<td>81</td>
		<td>36</td>
		<td class="r">66</td>
		<td>41</td>
		<td class="r">00</td>
		<td>15</td>
	</tr>
	<tr>
		<td class="r">77</td>
		<td>06</td>
		<td>15</td>
		<td>95</td>
		<td class="r">44</td>
		<td>15</td>
		<td>47</td>
	</tr>
	<tr>
		<td class="r">99</td>
		<td>67</td>
		<td class="r">44</td>
		<td>91</td>
		<td>67</td>
		<td class="r">**</td>
		<td class="r">**</td>
	</tr>
	<tr>
		<td>15</td>
		<td>09</td>
		<td>64</td>
		<td>42</td>
		<td>80</td>
		<td class="r">27</td>
		<td class="r">**</td>
	</tr>
	<tr>
		<td>73</td>
		<td>98</td>
		<td>42</td>
		<td>10</td>
		<td>95</td>
		<td class="r">72</td>
		<td>71</td>
	</tr>
	<tr>
		<td>84</td>
		<td class="r">38</td>
		<td>40</td>
		<td>97</td>
		<td>51</td>
		<td>73</td>
		<td>09</td>
	</tr>
	<tr>
		<td>03</td>
		<td>35</td>
		<td class="r">83</td>
		<td>89</td>
		<td>60</td>
		<td>09</td>
		<td class="r">27</td>
	</tr>
	<tr>
		<td>93</td>
		<td>52</td>
		<td>45</td>
		<td>20</td>
		<td>40</td>
		<td class="r">38</td>
		<td>56</td>
	</tr>
	<tr>
		<td>84</td>
		<td>53</td>
		<td>26</td>
		<td class="r">00</td>
		<td>41</td>
		<td>87</td>
		<td>48</td>
	</tr><tr>
											<td class="chart-00">55</td>
											<td class="chart-69">75</td>
											<td class="chart-69">08</td>
											<td class="chart-00">94</td>
											<td class="chart-69">10</td>
											<td class="chart-69">20</td>
											<td class="chart-69">54</td>
										</tr>
										<tr>
											<td class="chart-69">64</td>
											<td class="chart-69">08</td>
											<td class="chart-69">79</td>
											<td class="chart-00">16</td>
											<td class="chart-69">92</td>
											<td class="chart-69">81</td>
											<td class="chart-00">00</td>
										</tr>
	<tr>
		<td>86</td>
		<td>04</td>
		<td>35</td>
		<td>74</td>
		<td>69</td>
		<td class="r">55</td>
		<td>21</td>
	</tr>
	<tr>
		<td>47</td>
		<td>51</td>
		<td class="r">77</td>
		<td>96</td>
		<td>28</td>
		<td>68</td>
		<td>01</td>
	</tr>
	<tr>
		<td>53</td>
		<td>90</td>
		<td>82</td>
		<td>69</td>
		<td class="r">05</td>
		<td>51</td>
		<td class="r">**</td>
	</tr>
										<tr>
											<td class="chart-00">**</td>
											<td class="chart-00">**</td>
											<td class="chart-00">**</td>
											<td class="chart-00">**</td>
											<td class="chart-00">**</td>
											<td class="chart-00">**</td>
											<td class="chart-00">**</td>
										</tr>
	<tr>
		<td class="r">66</td>
		<td>97</td>
		<td>06</td>
		<td>85</td>
		<td>28</td>
		<td>86</td>
		<td class="r">50</td>
	</tr>
	<tr>
		<td>62</td>
		<td>32</td>
		<td>03</td>
		<td>89</td>
		<td class="r">22</td>
		<td>28</td>
		<td>15</td>
	</tr>
	<tr>
		<td>97</td>
		<td>35</td>
		<td class="r">22</td>
		<td>56</td>
		<td>73</td>
		<td>69</td>
		<td>95</td>
	</tr>
	<tr>
		<td>04</td>
		<td>92</td>
		<td>59</td>
		<td>67</td>
		<td>29</td>
		<td>64</td>
		<td>40</td>
	</tr>
	<tr>
		<td class="r">88</td>
		<td>64</td>
		<td>01</td>
		<td>79</td>
		<td>47</td>
		<td class="r">55</td>
		<td>03</td>
	</tr>
	<tr>
		<td>85</td>
		<td>34</td>
		<td>92</td>
		<td>04</td>
		<td>29</td>
		<td class="r">61</td>
		<td>75</td>
	</tr>
	<tr>
		<td>06</td>
		<td>67</td>
		<td>18</td>
		<td>31</td>
		<td>91</td>
		<td>51</td>
		<td>82</td>
	</tr>
	<tr>
		<td>15</td>
		<td>90</td>
		<td>68</td>
		<td>29</td>
		<td>10</td>
		<td class="r">61</td>
		<td class="r">49</td>
	</tr>
	<tr>
		<td class="r">72</td>
		<td>57</td>
		<td class="r">33</td>
		<td>48</td>
		<td>17</td>
		<td>90</td>
		<td>68</td>
	</tr>
	
	
	<tr>
		<td>63</td>
		<td>01</td>
		<td>04</td>
		<td>81</td>
		<td>01</td>
		<td>21</td>
		<td>24</td>
	</tr>
  </tbody> 
	  </table>  
      </header> 
    </div>
  );
}

export default Main;
{/* <Link to={"/user"} onClick={Play}>
      <button>
         <span style={{fontWeight:'14px'}}>
         Let's Begin
         </span>
         
        </button>
        </Link> */}


  {/* <div className="bg" style={{padding:'2%'}}>
      <img src={logo} className="App-logo" alt="logo" />
      </div>  */}
      // <div className="card-container">
      // <Tabs tabPosition="left" type="card">
      //   <TabPane tab="Tab Title 1" key="1">
      //   <p>Content of Tab Pane 1</p>
      //   <p>Content of Tab Pane 1</p>
      //   <p>Content of Tab Pane 1</p>
      // </TabPane>
      // <TabPane tab="Tab Title 2" key="2">
      //     <p>Content of Tab Pane 2</p>
      //     <p>Content of Tab Pane 2</p>
      //     <p>Content of Tab Pane 2</p>
      // </TabPane>
      // <TabPane tab="Tab Title 3" key="3">
      //     <p>Content of Tab Pane 3</p>
      //     <p>Content of Tab Pane 3</p>
      //     <p>Content of Tab Pane 3</p>
      // </TabPane>
      // </Tabs>
      // </div>