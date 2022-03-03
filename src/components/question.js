import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBListGroupItem } from "mdbreact";  
import { Link } from "react-router-dom";
import DataService from "../services/database" 
 
 

const Question = () => { 

  return (
    <table style={{width: '100%', textAlign:'center'}} className="panel-chart chart-table" cellpadding="2">
		<thead> 
		<tr>
			<th>Date</th>
			<th colspan="3">Mon</th>
			<th colspan="3">Tue</th>
			<th colspan="3">Wed</th>
			<th colspan="3">Thu</th>
			<th colspan="3">Fri</th>
		</tr>
		</thead>                	
		<tbody>
			<tr>
				<td>07-01-2019<br/> To <br/> 11-01-2019</td>
				<td> 1 <br/> 4 <br/> 9 <br/></td>
				<td>46</td>
				<td> 2<br/> 6<br/> 8<br/></td>
				<td> 5 <br/> 6 <br/> 8 <br/></td>
				<td>98</td>
				<td> 1<br/> 3<br/> 4<br/></td>
				<td> 2 <br/> 4 <br/> 7 <br/></td>
				<td>39</td>
				<td> 4<br/> 5<br/> 0<br/></td>
				<td> 8 <br/> 8 <br/> 0 <br/></td>
				<td>65</td>
				<td> 3<br/> 4<br/> 8<br/></td>
				<td> 3 <br/> 8 <br/> 0 <br/></td>
				<td>15</td>
				<td> 4<br/> 5<br/> 6<br/></td>
			</tr>
			<tr>
				<td>14-01-2019<br/> To <br/> 18-01-2019</td>
				<td class="r"> 4 <br/> 5 <br/> 6 <br/></td>
				<td class="r">50</td>
				<td class="r"> 5<br/> 6<br/> 9<br/></td>
				<td> 2 <br/> 7 <br/> 0 <br/></td>
				<td>95</td>
				<td> 7<br/> 9<br/> 9<br/></td>
				<td class="r"> 5 <br/> 9 <br/> 9 <br/></td>
				<td class="r">38</td>
				<td class="r"> 3<br/> 6<br/> 9<br/></td>
				<td> 4 <br/> 5 <br/> 0 <br/></td>
				<td>98</td>
				<td> 5<br/> 5<br/> 8<br/></td>
				<td> 3 <br/> 5 <br/> 7 <br/></td>
				<td>52</td>
				<td> 4<br/> 9<br/> 9<br/></td>
			</tr>
			<tr>
				<td>21-01-2019<br/> To <br/> 25-01-2019</td>
				<td> 2 <br/> 6 <br/> 9 <br/></td>
				<td>78</td>
				<td> 1<br/> 3<br/> 4<br/></td>
				<td> 3 <br/> 6 <br/> 8 <br/></td>
				<td>73</td>
				<td> 5<br/> 8<br/> 0<br/></td>
				<td> 4 <br/> 8 <br/> 0 <br/></td>
				<td>20</td>
				<td> 5<br/> 7<br/> 8<br/></td>
				<td class="r"> 5 <br/> 6 <br/> 7 <br/></td>
				<td class="r">83</td>
				<td class="r"> 5<br/> 9<br/> 9<br/></td>
				<td> 3 <br/> 4 <br/> 7 <br/></td>
				<td>48</td>
				<td> 1<br/> 8<br/> 9<br/></td>
			</tr>
			<tr>
				<td>28-01-2019<br/> To <br/> 01-02-2019</td>
				<td> 1 <br/> 7 <br/> 9 <br/></td>
				<td>71</td>
				<td> 1<br/> 0<br/> 0<br/></td>
				<td class="r"> 7 <br/> 8 <br/> 9 <br/></td>
				<td class="r">49</td>
				<td class="r"> 1<br/> 3<br/> 5<br/></td>
				<td> 5 <br/> 7 <br/> 7 <br/></td>
				<td>96</td>
				<td> 4<br/> 5<br/> 7<br/></td>
				<td> 4 <br/> 7 <br/> 8 <br/></td>
				<td>91</td>
				<td> 4<br/> 8<br/> 9<br/></td>
				<td> 4 <br/> 7 <br/> 7 <br/></td>
				<td>89</td>
				<td> 2<br/> 7<br/> 0<br/></td>
			</tr>
			<tr>
				<td>04-02-2019<br/> To <br/> 08-02-2019</td>
				<td> 8 <br/> 9 <br/> 0 <br/></td>
				<td>76</td>
				<td> 1<br/> 5<br/> 0<br/></td>
				<td> 2 <br/> 8 <br/> 0 <br/></td>
				<td>07</td>
				<td> 1<br/> 2<br/> 4<br/></td>
				<td> 3 <br/> 4 <br/> 5 <br/></td>
				<td>21</td>
				<td> 1<br/> 4<br/> 6<br/></td>
				<td class="r"> 5 <br/> 8 <br/> 9 <br/></td>
				<td class="r">27</td>
				<td class="r"> 1<br/> 7<br/> 9<br/></td>
				<td> 2 <br/> 5 <br/> 9 <br/></td>
				<td>69</td>
				<td> 1<br/> 2<br/> 6<br/></td>
			</tr>
			<tr>
				<td>11-02-2019<br/> To <br/> 15-02-2019</td>
				<td class="r"> 3 <br/> 5 <br/> 6 <br/></td>
				<td class="r">44</td>
				<td class="r"> 7<br/> 8<br/> 9<br/></td>
				<td> 5 <br/> 7 <br/> 0 <br/></td>
				<td>20</td>
				<td> 1<br/> 3<br/> 6<br/></td>
				<td> 6 <br/> 7 <br/> 7 <br/></td>
				<td>07</td>
				<td> 4<br/> 6<br/> 7<br/></td>
				<td> 4 <br/> 8 <br/> 0 <br/></td>
				<td>25</td>
				<td> 1<br/> 5<br/> 9<br/></td>
				<td class="r"> 4 <br/> 7 <br/> 0 <br/></td>
				<td class="r">11</td>
				<td class="r"> 6<br/> 7<br/> 8<br/></td>
			</tr>
			<tr>
				<td>18-02-2019<br/> To <br/> 22-02-2019</td>
				<td class="r"> 2 <br/> 4 <br/> 6 <br/></td>
				<td class="r">27</td>
				<td class="r"> 2<br/> 7<br/> 8<br/></td>
				<td> 6 <br/> 6 <br/> 9 <br/></td>
				<td>13</td>
				<td> 2<br/> 5<br/> 6<br/></td>
				<td> 2 <br/> 8 <br/> 9 <br/></td>
				<td>91</td>
				<td> 5<br/> 6<br/> 0<br/></td>
				<td> 1 <br/> 6 <br/> 7 <br/></td>
				<td>48</td>
				<td> 4<br/> 6<br/> 8<br/></td>
				<td> 6 <br/> 7 <br/> 0 <br/></td>
				<td>35</td>
				<td> 4<br/> 5<br/> 6<br/></td>
			</tr>
			<tr>
				<td>25-02-2019<br/> To <br/> 01-03-2019</td>
				<td> 1 <br/> 3 <br/> 5 <br/></td>
				<td>97</td>
				<td> 2<br/> 5<br/> 0<br/></td>
				<td> 5 <br/> 6 <br/> 8 <br/></td>
				<td>95</td>
				<td> 5<br/> 0<br/> 0<br/></td>
				<td class="r"> 2 <br/> 9 <br/> 0 <br/></td>
				<td class="r">11</td>
				<td class="r"> 4<br/> 7<br/> 0<br/></td>
				<td> 4 <br/> 5 <br/> 9 <br/></td>
				<td>85</td>
				<td> 1<br/> 6<br/> 8<br/></td>
				<td> 7 <br/> 7 <br/> 9 <br/></td>
				<td>37</td>
				<td> 3<br/> 5<br/> 9<br/></td>
			</tr>
			<tr>
				<td>04-03-2019<br/> To <br/> 08-03-2019</td>
				<td> 1 <br/> 5 <br/> 9 <br/></td>
				<td>54</td>
				<td> 5<br/> 9<br/> 0<br/></td>
				<td> 4 <br/> 7 <br/> 0 <br/></td>
				<td>13</td>
				<td> 2<br/> 5<br/> 6<br/></td>
				<td> 6 <br/> 6 <br/> 0 <br/></td>
				<td>23</td>
				<td> 3<br/> 4<br/> 6<br/></td>
				<td> 1 <br/> 6 <br/> 7 <br/></td>
				<td>41</td>
				<td> 5<br/> 7<br/> 9<br/></td>
				<td> 2 <br/> 3 <br/> 7 <br/></td>
				<td>28</td>
				<td> 5<br/> 6<br/> 7<br/></td>
			</tr>
			<tr>
				<td>11-03-2019<br/> To <br/> 15-03-2019</td>
				<td> 1 <br/> 9 <br/> 0 <br/></td>
				<td>09</td>
				<td> 3<br/> 7<br/> 9<br/></td>
				<td> 2 <br/> 3 <br/> 7 <br/></td>
				<td>24</td>
				<td> 7<br/> 8<br/> 9<br/></td>
				<td> 3 <br/> 8 <br/> 9 <br/></td>
				<td>04</td>
				<td> 5<br/> 9<br/> 0<br/></td>
				<td> 1 <br/> 5 <br/> 6 <br/></td>
				<td>26</td>
				<td> 4<br/> 6<br/> 6<br/></td>
				<td class="r"> 2 <br/> 3 <br/> 8 <br/></td>
				<td class="r">33</td>
				<td class="r"> 6<br/> 7<br/> 0<br/></td>
			</tr>
			<tr>
				<td>18-03-2019<br/> To <br/> 22-03-2019</td>
				<td> 3 <br/> 6 <br/> 8 <br/></td>
				<td>76</td>
				<td> 1<br/> 5<br/> 0<br/></td>
				<td> 5 <br/> 7 <br/> 0 <br/></td>
				<td>24</td>
				<td> 3<br/> 5<br/> 6<br/></td>
				<td> 7 <br/> 8 <br/> 8 <br/></td>
				<td>32</td>
				<td> 4<br/> 8<br/> 0<br/></td>
				<td class="r">*<br/>*<br/>*</td>
				<td class="r">**</td>
				<td>*<br/>*<br/>* </td>
				<td> 2 <br/> 6 <br/> 8 <br/></td>
				<td>64</td>
				<td> 1<br/> 6<br/> 7<br/></td>
			</tr>
			<tr>
				<td>25-03-2019<br/> To <br/> 29-03-2019</td>
				<td> 2 <br/> 5 <br/> 0 <br/></td>
				<td>71</td>
				<td> 5<br/> 7<br/> 9<br/></td>
				<td> 1 <br/> 2 <br/> 3 <br/></td>
				<td>68</td>
				<td> 2<br/> 7<br/> 9<br/></td>
				<td> 2 <br/> 4 <br/> 6 <br/></td>
				<td>28</td>
				<td> 4<br/> 7<br/> 7<br/></td>
				<td> 4 <br/> 7 <br/> 8 <br/></td>
				<td>92</td>
				<td> 3<br/> 9<br/> 0<br/></td>
				<td class="r"> 2 <br/> 5 <br/> 9 <br/></td>
				<td class="r">66</td>
				<td class="r"> 7<br/> 9<br/> 0<br/></td>
			</tr>
			<tr>
				<td>01-04-2019<br/> To <br/> 05-04-2019</td>
				<td> 2 <br/> 4 <br/> 7 <br/></td>
				<td>31</td>
				<td> 2<br/> 3<br/> 6<br/></td>
				<td class="r"> 3 <br/> 5 <br/> 7 <br/></td>
				<td class="r">55</td>
				<td class="r"> 4<br/> 4<br/> 7<br/></td>
				<td> 6 <br/> 8 <br/> 9 <br/></td>
				<td>32</td>
				<td> 3<br/> 9<br/> 0<br/></td>
				<td class="r"> 2 <br/> 3 <br/> 3 <br/></td>
				<td class="r">83</td>
				<td class="r"> 6<br/> 7<br/> 0<br/></td>
				<td> 2 <br/> 7 <br/> 8 <br/></td>
				<td>78</td>
				<td> 5<br/> 5<br/> 8<br/></td>
			</tr>
			<tr>
				<td>08-04-2019<br/> To <br/> 12-04-2019</td>
				<td class="r"> 5 <br/> 8 <br/> 0 <br/></td>
				<td class="r">38</td>
				<td class="r"> 1<br/> 8<br/> 9<br/></td>
				<td> 2 <br/> 2 <br/> 5 <br/></td>
				<td>98</td>
				<td> 4<br/> 6<br/> 8<br/></td>
				<td class="r"> 2 <br/> 3 <br/> 9 <br/></td>
				<td class="r">49</td>
				<td class="r"> 4<br/> 5<br/> 0<br/></td>
				<td> 3 <br/> 7 <br/> 7 <br/></td>
				<td>76</td>
				<td> 3<br/> 4<br/> 9<br/></td>
				<td class="r"> 1 <br/> 2 <br/> 3 <br/></td>
				<td class="r">61</td>
				<td class="r"> 5<br/> 6<br/> 0<br/></td>
			</tr>
			<tr>
				<td>15-04-2019<br/> To <br/> 19-04-2019</td>
				<td> 3 <br/> 6 <br/> 8 <br/></td>
				<td>71</td>
				<td> 6<br/> 7<br/> 8<br/></td>
				<td> 6 <br/> 9 <br/> 0 <br/></td>
				<td>57</td>
				<td> 4<br/> 5<br/> 8<br/></td>
				<td> 1 <br/> 6 <br/> 0 <br/></td>
				<td>79</td>
				<td> 3<br/> 7<br/> 9<br/></td>
				<td> 4 <br/> 4 <br/> 5 <br/></td>
				<td>35</td>
				<td> 4<br/> 5<br/> 6<br/></td>
				<td> 1 <br/> 3 <br/> 6 <br/></td>
				<td>06</td>
				<td> 3<br/> 6<br/> 7<br/></td>
			</tr>
			<tr>
				<td>22-04-2019<br/> To <br/> 26-04-2019</td>
				<td> 6 <br/> 8 <br/> 0 <br/></td>
				<td>47</td>
				<td> 3<br/> 4<br/> 0<br/></td>
				<td> 1 <br/> 7 <br/> 9 <br/></td>
				<td>71</td>
				<td> 2<br/> 3<br/> 6<br/></td>
				<td> 5 <br/> 8 <br/> 9 <br/></td>
				<td>21</td>
				<td> 6<br/> 6<br/> 9<br/></td>
				<td> 1 <br/> 5 <br/> 6 <br/></td>
				<td>28</td>
				<td> 3<br/> 7<br/> 8<br/></td>
				<td> 8 <br/> 9 <br/> 0 <br/></td>
				<td>76</td>
				<td> 2<br/> 5<br/> 9<br/></td>
			</tr>
			<tr>
				<td>29-04-2019<br/> To <br/> 03-05-2019</td>
				<td> 2 <br/> 4 <br/> 9 <br/></td>
				<td>58</td>
				<td> 4<br/> 6<br/> 8<br/></td>
				<td> 1 <br/> 3 <br/> 6 <br/></td>
				<td>04</td>
				<td> 7<br/> 7<br/> 0<br/></td>
				<td> 2 <br/> 7 <br/> 8 <br/></td>
				<td>73</td>
				<td> 1<br/> 4<br/> 8<br/></td>
				<td> 4 <br/> 6 <br/> 8 <br/></td>
				<td>81</td>
				<td> 3<br/> 8<br/> 0<br/></td>
				<td> 1 <br/> 5 <br/> 6 <br/></td>
				<td>28</td>
				<td> 3<br/> 7<br/> 8<br/></td>
			</tr>
			<tr>
				<td>06-05-2019<br/> To <br/> 10-05-2019</td>
				<td> 6 <br/> 6 <br/> 0 <br/></td>
				<td>21</td>
				<td> 2<br/> 4<br/> 5<br/></td>
				<td class="r"> 1 <br/> 7 <br/> 0 <br/></td>
				<td class="r">88</td>
				<td class="r"> 3<br/> 6<br/> 9<br/></td>
				<td> 3 <br/> 5 <br/> 0 <br/></td>
				<td>84</td>
				<td> 2<br/> 5<br/> 7<br/></td>
				<td class="r"> 4 <br/> 7 <br/> 9 <br/></td>
				<td class="r">05</td>
				<td class="r"> 3<br/> 6<br/> 6<br/></td>
				<td> 1 <br/> 2 <br/> 4 <br/></td>
				<td>75</td>
				<td> 6<br/> 9<br/> 0<br/></td>
			</tr>
			<tr>
				<td>13-05-2019<br/> To <br/> 17-05-2019</td>
				<td> 5 <br/> 6 <br/> 9 <br/></td>
				<td>02</td>
				<td> 3<br/> 9<br/> 0<br/></td>
				<td> 3 <br/> 6 <br/> 7 <br/></td>
				<td>69</td>
				<td> 1<br/> 1<br/> 7<br/></td>
				<td> 4 <br/> 5 <br/> 8 <br/></td>
				<td>74</td>
				<td> 2<br/> 3<br/> 9<br/></td>
				<td class="r"> 8 <br/> 8 <br/> 9 <br/></td>
				<td class="r">55</td>
				<td class="r"> 1<br/> 5<br/> 9<br/></td>
				<td> 3 <br/> 4 <br/> 7 <br/></td>
				<td>48</td>
				<td> 4<br/> 6<br/> 8<br/></td>
			</tr>
			<tr>
				<td>20-05-2019<br/> To <br/> 24-05-2019</td>
				<td> 3 <br/> 5 <br/> 8 <br/></td>
				<td>69</td>
				<td> 1<br/> 8<br/> 0<br/></td>
				<td> 5 <br/> 9 <br/> 9 <br/></td>
				<td>32</td>
				<td> 5<br/> 7<br/> 0<br/></td>
				<td> 8 <br/> 9 <br/> 0 <br/></td>
				<td>76</td>
				<td> 1<br/> 5<br/> 0<br/></td>
				<td> 7 <br/> 7 <br/> 9 <br/></td>
				<td>36</td>
				<td> 4<br/> 5<br/> 7<br/></td>
				<td> 1 <br/> 4 <br/> 8 <br/></td>
				<td>35</td>
				<td> 3<br/> 4<br/> 8<br/></td>
			</tr>
			<tr>
				<td>27-05-2019<br/> To <br/> 31-05-2019</td>
				<td> 3 <br/> 6 <br/> 9 <br/></td>
				<td>82</td>
				<td> 5<br/> 7<br/> 0<br/></td>
				<td> 1 <br/> 2 <br/> 6 <br/></td>
				<td>93</td>
				<td> 6<br/> 8<br/> 9<br/></td>
				<td> 6 <br/> 6 <br/> 9 <br/></td>
				<td>13</td>
				<td> 1<br/> 4<br/> 8<br/></td>
				<td> 1 <br/> 7 <br/> 9 <br/></td>
				<td>70</td>
				<td> 5<br/> 7<br/> 8<br/></td>
				<td> 4 <br/> 4 <br/> 7 <br/></td>
				<td>54</td>
				<td> 1<br/> 6<br/> 7<br/></td>
			</tr>
			<tr>
				<td>03-06-2019<br/> To <br/> 07-06-2019</td>
				<td> 1 <br/> 9 <br/> 0 <br/></td>
				<td>08</td>
				<td> 4<br/> 5<br/> 9<br/></td>
				<td> 2 <br/> 4 <br/> 7 <br/></td>
				<td>39</td>
				<td> 4<br/> 7<br/> 8<br/></td>
				<td> 1 <br/> 3 <br/> 9 <br/></td>
				<td>30</td>
				<td> 6<br/> 7<br/> 7<br/></td>
				<td> 4 <br/> 7 <br/> 0 <br/></td>
				<td>13</td>
				<td> 2<br/> 3<br/> 8<br/></td>
				<td> 3 <br/> 6 <br/> 8 <br/></td>
				<td>73</td>
				<td> 3<br/> 0<br/> 0<br/></td>
			</tr>
			<tr>
				<td>10-06-2019<br/> To <br/> 14-06-2019</td>
				<td> 3 <br/> 5 <br/> 9 <br/></td>
				<td>70</td>
				<td> 4<br/> 8<br/> 8<br/></td>
				<td> 7 <br/> 0 <br/> 0 <br/></td>
				<td>76</td>
				<td> 3<br/> 4<br/> 9<br/></td>
				<td class="r"> 1 <br/> 3 <br/> 5 <br/></td>
				<td class="r">99</td>
				<td class="r"> 1<br/> 8<br/> 0<br/></td>
				<td class="r"> 2 <br/> 3 <br/> 9 <br/></td>
				<td class="r">49</td>
				<td class="r"> 3<br/> 7<br/> 9<br/></td>
				<td class="r"> 1 <br/> 1 <br/> 9 <br/></td>
				<td class="r">11</td>
				<td class="r"> 5<br/> 6<br/> 0<br/></td>
			</tr>
			<tr>
				<td>17-06-2019<br/> To <br/> 21-06-2019</td>
				<td> 1 <br/> 6 <br/> 7 <br/></td>
				<td>42</td>
				<td> 2<br/> 3<br/> 7<br/></td>
				<td> 1 <br/> 7 <br/> 7 <br/></td>
				<td>56</td>
				<td> 3<br/> 5<br/> 8<br/></td>
				<td> 6 <br/> 6 <br/> 8 <br/></td>
				<td>07</td>
				<td> 4<br/> 6<br/> 7<br/></td>
				<td> 5 <br/> 8 <br/> 9 <br/></td>
				<td>26</td>
				<td> 2<br/> 4<br/> 0<br/></td>
				<td> 3 <br/> 6 <br/> 8 <br/></td>
				<td>74</td>
				<td> 6<br/> 8<br/> 0<br/></td>
			</tr>
			<tr>
				<td>24-06-2019<br/> To <br/> 28-06-2019</td>
				<td> 3 <br/> 8 <br/> 9 <br/></td>
				<td>09</td>
				<td> 6<br/> 6<br/> 7<br/></td>
				<td class="r"> 2 <br/> 6 <br/> 9 <br/></td>
				<td class="r">72</td>
				<td class="r"> 2<br/> 3<br/> 7<br/></td>
				<td> 4 <br/> 6 <br/> 7 <br/></td>
				<td>73</td>
				<td> 1<br/> 4<br/> 8<br/></td>
				<td> 5 <br/> 8 <br/> 9 <br/></td>
				<td>26</td>
				<td> 1<br/> 2<br/> 3<br/></td>
				<td> 2 <br/> 2 <br/> 5 <br/></td>
				<td>92</td>
				<td> 3<br/> 9<br/> 0<br/></td>
			</tr>
			<tr>
				<td>01-07-2019<br/> To <br/> 05-07-2019</td>
				<td> 5 <br/> 8 <br/> 9 <br/></td>
				<td>24</td>
				<td> 2<br/> 5<br/> 7<br/></td>
				<td> 2 <br/> 6 <br/> 9 <br/></td>
				<td>75</td>
				<td> 3<br/> 5<br/> 7<br/></td>
				<td> 1 <br/> 5 <br/> 7 <br/></td>
				<td>39</td>
				<td> 2<br/> 8<br/> 9<br/></td>
				<td> 5 <br/> 8 <br/> 0 <br/></td>
				<td>37</td>
				<td> 8<br/> 9<br/> 0<br/></td>
				<td> 2 <br/> 3 <br/> 0 <br/></td>
				<td>57</td>
				<td> 3<br/> 5<br/> 9<br/></td>
			</tr>
			<tr>
				<td>08-07-2019<br/> To <br/> 12-07-2019</td>
				<td> 2 <br/> 3 <br/> 6 <br/></td>
				<td>13</td>
				<td> 7<br/> 7<br/> 9<br/></td>
				<td> 1 <br/> 1 <br/> 6 <br/></td>
				<td>89</td>
				<td> 2<br/> 2<br/> 5<br/></td>
				<td> 5 <br/> 7 <br/> 8 <br/></td>
				<td>02</td>
				<td> 4<br/> 8<br/> 0<br/></td>
				<td class="r"> 4 <br/> 5 <br/> 7 <br/></td>
				<td class="r">66</td>
				<td class="r"> 2<br/> 6<br/> 8<br/></td>
				<td> 1 <br/> 2 <br/> 7 <br/></td>
				<td>09</td>
				<td> 5<br/> 7<br/> 7<br/></td>
			</tr>
			<tr>
				<td>15-07-2019<br/> To <br/> 19-07-2019</td>
				<td> 3 <br/> 3 <br/> 5 <br/></td>
				<td>14</td>
				<td> 2<br/> 4<br/> 8<br/></td>
				<td> 4 <br/> 8 <br/> 9 <br/></td>
				<td>13</td>
				<td> 2<br/> 5<br/> 6<br/></td>
				<td> 2 <br/> 8 <br/> 0 <br/></td>
				<td>02</td>
				<td> 2<br/> 5<br/> 5<br/></td>
				<td> 2 <br/> 3 <br/> 7 <br/></td>
				<td>20</td>
				<td> 1<br/> 3<br/> 6<br/></td>
				<td> 5 <br/> 6 <br/> 9 <br/></td>
				<td>08</td>
				<td> 1<br/> 3<br/> 4<br/></td>
			</tr>
			<tr>
				<td>22-07-2019<br/> To <br/> 26-07-2019</td>
				<td> 3 <br/> 6 <br/> 6 <br/></td>
				<td>59</td>
				<td> 5<br/> 5<br/> 9<br/></td>
				<td class="r"> 5 <br/> 8 <br/> 8 <br/></td>
				<td class="r">11</td>
				<td class="r"> 5<br/> 6<br/> 0<br/></td>
				<td> 1 <br/> 5 <br/> 6 <br/></td>
				<td>25</td>
				<td> 1<br/> 6<br/> 8<br/></td>
				<td> 3 <br/> 8 <br/> 8 <br/></td>
				<td>95</td>
				<td> 1<br/> 6<br/> 8<br/></td>
				<td> 4 <br/> 5 <br/> 0 <br/></td>
				<td>93</td>
				<td> 3<br/> 4<br/> 6<br/></td>
			</tr>
			<tr>
				<td>29-07-2019<br/> To <br/> 02-08-2019</td>
				<td> 1 <br/> 5 <br/> 6 <br/></td>
				<td>21</td>
				<td> 6<br/> 7<br/> 8<br/></td>
				<td> 1 <br/> 4 <br/> 7 <br/></td>
				<td>23</td>
				<td> 7<br/> 8<br/> 8<br/></td>
				<td> 3 <br/> 7 <br/> 9 <br/></td>
				<td>98</td>
				<td> 4<br/> 6<br/> 8<br/></td>
				<td> 7 <br/> 8 <br/> 9 <br/></td>
				<td>46</td>
				<td> 5<br/> 5<br/> 6<br/></td>
				<td> 3 <br/> 4 <br/> 7 <br/></td>
				<td>43</td>
				<td> 2<br/> 4<br/> 7<br/></td>
			</tr>
			<tr>
				<td>05-08-2019<br/> To <br/> 09-08-2019</td>
				<td> 1 <br/> 3 <br/> 8 <br/></td>
				<td>20</td>
				<td> 2<br/> 3<br/> 5<br/></td>
				<td class="r"> 3 <br/> 5 <br/> 6 <br/></td>
				<td class="r">44</td>
				<td class="r"> 6<br/> 9<br/> 9<br/></td>
				<td> 1 <br/> 5 <br/> 9 <br/></td>
				<td>52</td>
				<td> 3<br/> 9<br/> 0<br/></td>
				<td> 3 <br/> 4 <br/> 9 <br/></td>
				<td>63</td>
				<td> 1<br/> 5<br/> 7<br/></td>
				<td class="r"> 1 <br/> 5 <br/> 8 <br/></td>
				<td class="r">49</td>
				<td class="r"> 2<br/> 3<br/> 4<br/></td>
			</tr>
			<tr>
				<td>12-08-2019<br/> To <br/> 16-08-2019</td>
				<td> 3 <br/> 7 <br/> 8 <br/></td>
				<td>80</td>
				<td> 5<br/> 7<br/> 8<br/></td>
				<td> 3 <br/> 4 <br/> 7 <br/></td>
				<td>41</td>
				<td> 1<br/> 5<br/> 5<br/></td>
				<td> 4 <br/> 5 <br/> 0 <br/></td>
				<td>95</td>
				<td> 3<br/> 3<br/> 9<br/></td>
				<td class="r">*<br/>*<br/>*</td>
				<td class="r">**</td>
				<td>*<br/>*<br/>*</td>
				<td> 4 <br/> 7 <br/> 0 <br/></td>
				<td>18</td>
				<td> 8<br/> 0<br/> 0<br/></td>
			</tr>
			<tr>
				<td>19-08-2019<br/> To <br/> 23-08-2019</td>
				<td> 4 <br/> 9 <br/> 0 <br/></td>
				<td>35</td>
				<td> 4<br/> 5<br/> 6<br/></td>
				<td> 1 <br/> 8 <br/> 9 <br/></td>
				<td>86</td>
				<td> 4<br/> 4<br/> 8<br/></td>
				<td> 3 <br/> 7 <br/> 8 <br/></td>
				<td>82</td>
				<td> 5<br/> 7<br/> 0<br/></td>
				<td class="r"> 2 <br/> 2 <br/> 7 <br/></td>
				<td class="r">11</td>
				<td class="r"> 6<br/> 7<br/> 8<br/></td>
				<td class="r"> 6 <br/> 9 <br/> 9 <br/></td>
				<td class="r">49</td>
				<td class="r"> 5<br/> 7<br/> 7<br/></td>
			</tr>
			<tr>
				<td>26-08-2019<br/> To <br/> 30-08-2019</td>
				<td class="r"> 6 <br/> 7 <br/> 8 <br/></td>
				<td class="r">11</td>
				<td class="r"> 6<br/> 7<br/> 8<br/></td>
				<td> 4 <br/> 6 <br/> 0 <br/></td>
				<td>01</td>
				<td> 2<br/> 4<br/> 5<br/></td>
				<td> 3 <br/> 4 <br/> 8 <br/></td>
				<td>59</td>
				<td> 2<br/> 2<br/> 5<br/></td>
				<td> 1 <br/> 3 <br/> 0 <br/></td>
				<td>42</td>
				<td> 5<br/> 7<br/> 0<br/></td>
				<td> 2 <br/> 3 <br/> 6 <br/></td>
				<td>12</td>
				<td> 5<br/> 8<br/> 9<br/></td>
			</tr>
			<tr>
				<td>02-09-2019<br/> To <br/> 06-09-2019</td>
				<td> 2 <br/> 8 <br/> 9 <br/></td>
				<td>97</td>
				<td> 1<br/> 6<br/> 0<br/></td>
				<td> 1 <br/> 4 <br/> 5 <br/></td>
				<td>09</td>
				<td> 1<br/> 1<br/> 7<br/></td>
				<td> 2 <br/> 4 <br/> 7 <br/></td>
				<td>31</td>
				<td> 3<br/> 8<br/> 0<br/></td>
				<td class="r"> 3 <br/> 5 <br/> 7 <br/></td>
				<td class="r">50</td>
				<td class="r"> 5<br/> 6<br/> 9<br/></td>
				<td> 1 <br/> 2 <br/> 3 <br/></td>
				<td>65</td>
				<td> 1<br/> 5<br/> 9<br/></td>
			</tr>
			<tr>
				<td>09-09-2019<br/> To <br/> 13-09-2019</td>
				<td> 5 <br/> 7 <br/> 9 <br/></td>
				<td>17</td>
				<td> 2<br/> 5<br/> 0<br/></td>
				<td> 1 <br/> 7 <br/> 8 <br/></td>
				<td>60</td>
				<td> 4<br/> 7<br/> 9<br/></td>
				<td> 4 <br/> 5 <br/> 5 <br/></td>
				<td>48</td>
				<td> 2<br/> 2<br/> 4<br/></td>
				<td> 5 <br/> 7 <br/> 8 <br/></td>
				<td>02</td>
				<td> 1<br/> 5<br/> 6<br/></td>
				<td> 4 <br/> 8 <br/> 9 <br/></td>
				<td>17</td>
				<td> 3<br/> 5<br/> 9<br/></td>
			</tr>
			<tr>
				<td>16-09-2019<br/> To <br/> 20-09-2019</td>
				<td> 2 <br/> 3 <br/> 5 <br/></td>
				<td>08</td>
				<td> 8<br/> 0<br/> 0<br/></td>
				<td> 3 <br/> 4 <br/> 7 <br/></td>
				<td>46</td>
				<td> 1<br/> 7<br/> 8<br/></td>
				<td class="r"> 2 <br/> 3 <br/> 6 <br/></td>
				<td class="r">11</td>
				<td class="r"> 5<br/> 7<br/> 9<br/></td>
				<td> 1 <br/> 3 <br/> 5 <br/></td>
				<td>93</td>
				<td> 1<br/> 6<br/> 6<br/></td>
				<td class="r"> 6 <br/> 8 <br/> 9 <br/></td>
				<td class="r">38</td>
				<td class="r"> 9<br/> 9<br/> 0<br/></td>
			</tr>
			<tr>
				<td>23-09-2019<br/> To <br/> 27-09-2019</td>
				<td class="r"> 1 <br/> 6 <br/> 6 <br/></td>
				<td class="r">38</td>
				<td class="r"> 2<br/> 2<br/> 4<br/></td>
				<td> 2 <br/> 9 <br/> 9 <br/></td>
				<td>08</td>
				<td> 2<br/> 6<br/> 0<br/></td>
				<td> 5 <br/> 7 <br/> 9 <br/></td>
				<td>18</td>
				<td> 1<br/> 1<br/> 6<br/></td>
				<td> 7 <br/> 9 <br/> 0 <br/></td>
				<td>62</td>
				<td> 4<br/> 8<br/> 0<br/></td>
				<td> 1 <br/> 4 <br/> 6 <br/></td>
				<td>13</td>
				<td> 6<br/> 7<br/> 0<br/></td>
			</tr>
			<tr>
				<td>30-09-2019<br/> To <br/> 04-10-2019</td>
				<td> 2 <br/> 5 <br/> 9 <br/></td>
				<td>63</td>
				<td> 2<br/> 4<br/> 7<br/></td>
				<td> 4 <br/> 7 <br/> 9 <br/></td>
				<td>01</td>
				<td> 3<br/> 8<br/> 0<br/></td>
				<td class="r"> 2 <br/> 5 <br/> 7 <br/></td>
				<td class="r">49</td>
				<td class="r"> 1<br/> 3<br/> 5<br/></td>
				<td class="r"> 2 <br/> 3 <br/> 9 <br/></td>
				<td class="r">49</td>
				<td class="r"> 3<br/> 7<br/> 9<br/></td>
				<td> 3 <br/> 4 <br/> 9 <br/></td>
				<td>62</td>
				<td> 5<br/> 7<br/> 0<br/></td>
			</tr>
			<tr>
				<td>07-10-2019<br/> To <br/> 11-10-2019</td>
				<td> 1 <br/> 8 <br/> 9 <br/></td>
				<td>87</td>
				<td> 4<br/> 6<br/> 7<br/></td>
				<td class="r"> 4 <br/> 6 <br/> 7 <br/></td>
				<td class="r">77</td>
				<td class="r"> 1<br/> 7<br/> 9<br/></td>
				<td> 2 <br/> 9 <br/> 0 <br/></td>
				<td>15</td>
				<td> 2<br/> 4<br/> 9<br/></td>
				<td> 4 <br/> 4 <br/> 5 <br/></td>
				<td>30</td>
				<td> 4<br/> 6<br/> 0<br/></td>
				<td> 3 <br/> 4 <br/> 6 <br/></td>
				<td>30</td>
				<td> 1<br/> 4<br/> 5<br/></td>
			</tr>
			<tr>
				<td>14-10-2019<br/> To <br/> 18-10-2019</td>
				<td> 6 <br/> 6 <br/> 9 <br/></td>
				<td>13</td>
				<td> 5<br/> 9<br/> 9<br/></td>
				<td> 3 <br/> 7 <br/> 8 <br/></td>
				<td>85</td>
				<td> 2<br/> 6<br/> 7<br/></td>
				<td> 6 <br/> 7 <br/> 0 <br/></td>
				<td>31</td>
				<td> 5<br/> 6<br/> 0<br/></td>
				<td> 6 <br/> 9 <br/> 0 <br/></td>
				<td>59</td>
				<td> 4<br/> 6<br/> 9<br/></td>
				<td class="r"> 6 <br/> 9 <br/> 0 <br/></td>
				<td class="r">50</td>
				<td class="r"> 1<br/> 3<br/> 6<br/></td>
			</tr>
			<tr>
				<td>21-10-2019<br/> To <br/> 25-10-2019</td>
				<td> 1 <br/> 4 <br/> 6 <br/></td>
				<td>17</td>
				<td> 1<br/> 3<br/> 3<br/></td>
				<td> 4 <br/> 7 <br/> 8 <br/></td>
				<td>98</td>
				<td> 1<br/> 8<br/> 9<br/></td>
				<td> 1 <br/> 1 <br/> 7 <br/></td>
				<td>91</td>
				<td> 6<br/> 7<br/> 8<br/></td>
				<td> 3 <br/> 4 <br/> 7 <br/></td>
				<td>46</td>
				<td> 4<br/> 5<br/> 7<br/></td>
				<td class="r">*<br/>*<br/>*</td>
				<td class="r">**</td>
				<td>*<br/>*<br/>*</td>
			</tr>
			<tr>
				<td>28-10-2019<br/> To <br/> 01-11-2019</td>
				<td class="r">*<br/>*<br/>*</td>
				<td class="r">**</td>
				<td>*<br/>*<br/>*</td>
				<td class="r">*<br/>*<br/>*</td>
				<td class="r">**</td>
				<td>*<br/>*<br/>*</td>
				<td class="r">*<br/>*<br/>*</td>
				<td class="r">**</td>
				<td>*<br/>*<br/>*</td>
				<td class="r">*<br/>*<br/>*</td>
				<td class="r">**</td>
				<td>*<br/>*<br/>*</td>
				<td class="r">*<br/>*<br/>*</td>
				<td class="r">**</td>
				<td>*<br/>*<br/>*</td>
			</tr>
			<tr>
				<td>04-11-2019<br/> To <br/> 08-11-2019</td>
				<td> 1 <br/> 3 <br/> 0 <br/></td>
				<td>40</td>
				<td> 6<br/> 6<br/> 8<br/></td>
				<td> 3 <br/> 7 <br/> 0 <br/></td>
				<td>04</td>
				<td> 3<br/> 5<br/> 6<br/></td>
				<td> 2 <br/> 7 <br/> 0 <br/></td>
				<td>96</td>
				<td> 8<br/> 9<br/> 9<br/></td>
				<td> 2 <br/> 9 <br/> 9 <br/></td>
				<td>04</td>
				<td> 2<br/> 4<br/> 8<br/></td>
				<td class="r"> 4 <br/> 5 <br/> 7 <br/></td>
				<td class="r">66</td>
				<td class="r"> 2<br/> 5<br/> 9<br/></td>
			</tr>
			<tr>
				<td>11-11-2019<br/> To <br/> 15-11-2019</td>
				<td> 3 <br/> 4 <br/> 9 <br/></td>
				<td>65</td>
				<td> 3<br/> 5<br/> 7<br/></td>
				<td> 6 <br/> 8 <br/> 8 <br/></td>
				<td>24</td>
				<td> 2<br/> 5<br/> 7<br/></td>
				<td> 2 <br/> 7 <br/> 0 <br/></td>
				<td>90</td>
				<td> 2<br/> 9<br/> 9<br/></td>
				<td> 2 <br/> 3 <br/> 5 <br/></td>
				<td>04</td>
				<td> 4<br/> 4<br/> 6<br/></td>
				<td> 4 <br/> 6 <br/> 7 <br/></td>
				<td>78</td>
				<td> 4<br/> 5<br/> 9<br/></td>
			</tr>
			<tr>
				<td>18-11-2019<br/> To <br/> 22-11-2019</td>
				<td class="r"> 4 <br/> 4 <br/> 5 <br/></td>
				<td class="r">33</td>
				<td class="r"> 7<br/> 8<br/> 8<br/></td>
				<td> 3 <br/> 5 <br/> 5 <br/></td>
				<td>37</td>
				<td> 8<br/> 9<br/> 0<br/></td>
				<td> 1 <br/> 6 <br/> 6 <br/></td>
				<td>32</td>
				<td> 3<br/> 9<br/> 0<br/></td>
				<td class="r"> 7 <br/> 9 <br/> 0 <br/></td>
				<td class="r">61</td>
				<td class="r"> 4<br/> 7<br/> 0<br/></td>
				<td> 5 <br/> 6 <br/> 8 <br/></td>
				<td>98</td>
				<td> 3<br/> 7<br/> 8<br/></td>
			</tr>
			<tr>
				<td>25-11-2019<br/> To <br/> 29-11-2019</td>
				<td> 4 <br/> 9 <br/> 9 <br/></td>
				<td>29</td>
				<td> 4<br/> 6<br/> 9<br/></td>
				<td class="r"> 4 <br/> 5 <br/> 8 <br/></td>
				<td class="r">72</td>
				<td class="r"> 6<br/> 8<br/> 8<br/></td>
				<td class="r"> 3 <br/> 4 <br/> 6 <br/></td>
				<td class="r">38</td>
				<td class="r"> 8<br/> 0<br/> 0<br/></td>
				<td> 1 <br/> 5 <br/> 7 <br/></td>
				<td>32</td>
				<td> 1<br/> 4<br/> 7<br/></td>
				<td class="r"> 5 <br/> 6 <br/> 8 <br/></td>
				<td class="r">99</td>
				<td class="r"> 1<br/> 4<br/> 4<br/></td>
			</tr>
			<tr>
				<td>02-12-2019<br/> To <br/> 06-12-2019</td>
				<td class="r"> 7 <br/> 8 <br/> 9 <br/></td>
				<td class="r">44</td>
				<td class="r"> 1<br/> 5<br/> 8<br/></td>
				<td class="r"> 8 <br/> 9 <br/> 0 <br/></td>
				<td class="r">72</td>
				<td class="r"> 1<br/> 2<br/> 9<br/></td>
				<td> 3 <br/> 8 <br/> 8 <br/></td>
				<td>97</td>
				<td> 4<br/> 5<br/> 8<br/></td>
				<td> 1 <br/> 4 <br/> 5 <br/></td>
				<td>02</td>
				<td> 5<br/> 7<br/> 0<br/></td>
				<td class="r"> 2 <br/> 7 <br/> 0 <br/></td>
				<td class="r">94</td>
				<td class="r"> 1<br/> 4<br/> 9<br/></td>
			</tr>
			<tr>
				<td>09-12-2019<br/> To <br/> 13-12-2019</td>
				<td> 1 <br/> 3 <br/> 4 <br/></td>
				<td>81</td>
				<td> 6<br/> 6<br/> 9<br/></td>
				<td class="r"> 6 <br/> 6 <br/> 8 <br/></td>
				<td class="r">00</td>
				<td class="r"> 5<br/> 7<br/> 8<br/></td>
				<td> 7 <br/> 9 <br/> 0 <br/></td>
				<td>69</td>
				<td> 1<br/> 3<br/> 5<br/></td>
				<td class="r"> 3 <br/> 5 <br/> 9 <br/></td>
				<td class="r">72</td>
				<td class="r"> 5<br/> 7<br/> 0<br/></td>
				<td> 1 <br/> 6 <br/> 0 <br/></td>
				<td>70</td>
				<td> 2<br/> 4<br/> 4<br/></td>
			</tr>
			<tr>
				<td>16-12-2019<br/> To <br/> 20-12-2019</td>
				<td> 2 <br/> 2 <br/> 8 <br/></td>
				<td>24</td>
				<td> 4<br/> 4<br/> 6<br/></td>
				<td> 5 <br/> 9 <br/> 0 <br/></td>
				<td>42</td>
				<td> 5<br/> 7<br/> 0<br/></td>
				<td> 2 <br/> 3 <br/> 9 <br/></td>
				<td>41</td>
				<td> 1<br/> 4<br/> 6<br/></td>
				<td> 2 <br/> 2 <br/> 3 <br/></td>
				<td>76</td>
				<td> 2<br/> 7<br/> 7<br/></td>
				<td class="r"> 1 <br/> 3 <br/> 6 <br/></td>
				<td class="r">00</td>
				<td class="r"> 2<br/> 2<br/> 6<br/></td>
			</tr>
			<tr>
				<td>23-12-2019<br/> To <br/> 27-12-2019</td>
				<td> 1 <br/> 8 <br/> 0 <br/></td>
				<td>97</td>
				<td> 1<br/> 8<br/> 8<br/></td>
				<td> 2 <br/> 3 <br/> 5 <br/></td>
				<td>09</td>
				<td> 3<br/> 6<br/> 0<br/></td>
				<td> 8 <br/> 9 <br/> 0 <br/></td>
				<td>71</td>
				<td> 4<br/> 8<br/> 9<br/></td>
				<td> 1 <br/> 3 <br/> 6 <br/></td>
				<td>06</td>
				<td> 8<br/> 9<br/> 9<br/></td>
				<td> 2 <br/> 4 <br/> 8 <br/></td>
				<td>46</td>
				<td> 2<br/> 5<br/> 9<br/></td>
			</tr>
			<tr>
				<td>30-12-2019<br/> To <br/> 03-01-2020</td>
				<td> 3 <br/> 4 <br/> 6 <br/></td>
				<td>30</td>
				<td> 5<br/> 7<br/> 8<br/></td>
				<td> 2 <br/> 6 <br/> 7 <br/></td>
				<td>59</td>
				<td> 1<br/> 8<br/> 0<br/></td>
				<td> 1 <br/> 6 <br/> 0 <br/></td>
				<td>73</td>
				<td> 4<br/> 4<br/> 5<br/></td>
				<td> 3 <br/> 5 <br/> 6 <br/></td>
				<td>45</td>
				<td> 3<br/> 3<br/> 9<br/></td>
				<td> 3 <br/> 5 <br/> 6 <br/></td>
				<td>45</td>
				<td> 2<br/> 4<br/> 9<br/></td>
			</tr>
			<tr>
				<td>06-01-2020<br/> To <br/> 10-01-2020</td>
				<td> 1 <br/> 4 <br/> 0 <br/></td>
				<td>59</td>
				<td> 2<br/> 3<br/> 4<br/></td>
				<td> 1 <br/> 2 <br/> 5 <br/></td>
				<td>84</td>
				<td> 7<br/> 8<br/> 9<br/></td>
				<td> 4 <br/> 7 <br/> 8 <br/></td>
				<td>90</td>
				<td> 2<br/> 8<br/> 0<br/></td>
				<td> 4 <br/> 8 <br/> 8 <br/></td>
				<td>07</td>
				<td> 5<br/> 6<br/> 6<br/></td>
				<td> 6 <br/> 6 <br/> 0 <br/></td>
				<td>29</td>
				<td> 1<br/> 8<br/> 0<br/></td>
			</tr>
			<tr>
				<td>13-01-2020<br/> To <br/> 17-01-2020</td>
				<td> 1 <br/> 3 <br/> 6 <br/></td>
				<td>09</td>
				<td> 1<br/> 3<br/> 5<br/></td>
				<td> 3 <br/> 4 <br/> 5 <br/></td>
				<td>24</td>
				<td> 2<br/> 6<br/> 6<br/></td>
				<td> 1 <br/> 7 <br/> 9 <br/></td>
				<td>74</td>
				<td> 4<br/> 0<br/> 0<br/></td>
				<td class="r"> 2 <br/> 3 <br/> 7 <br/></td>
				<td class="r">27</td>
				<td class="r"> 2<br/> 6<br/> 9<br/></td>
				<td> 1 <br/> 2 <br/> 7 <br/></td>
				<td>04</td>
				<td> 1<br/> 1<br/> 2<br/></td>
			</tr>
			<tr>
				<td>20-01-2020<br/> To <br/> 24-01-2020</td>
				<td> 2 <br/> 4 <br/> 0 <br/></td>
				<td>67</td>
				<td> 1<br/> 6<br/> 0<br/></td>
				<td> 2 <br/> 6 <br/> 7 <br/></td>
				<td>53</td>
				<td> 7<br/> 8<br/> 8<br/></td>
				<td> 1 <br/> 3 <br/> 4 <br/></td>
				<td>81</td>
				<td> 1<br/> 4<br/> 6<br/></td>
				<td> 4 <br/> 4 <br/> 9 <br/></td>
				<td>79</td>
				<td> 4<br/> 7<br/> 8<br/></td>
				<td> 5 <br/> 6 <br/> 6 <br/></td>
				<td>73</td>
				<td> 7<br/> 7<br/> 9<br/></td>
			</tr>
			<tr>
				<td>27-01-2020<br/> To <br/> 31-01-2020</td>
				<td> 1 <br/> 3 <br/> 6 <br/></td>
				<td>08</td>
				<td> 3<br/> 5<br/> 0<br/></td>
				<td class="r"> 3 <br/> 6 <br/> 7 <br/></td>
				<td class="r">66</td>
				<td class="r"> 3<br/> 6<br/> 7<br/></td>
				<td class="r"> 1 <br/> 1 <br/> 6 <br/></td>
				<td class="r">88</td>
				<td class="r"> 5<br/> 6<br/> 7<br/></td>
				<td> 3 <br/> 7 <br/> 0 <br/></td>
				<td>06</td>
				<td> 3<br/> 3<br/> 0<br/></td>
				<td> 3 <br/> 5 <br/> 8 <br/></td>
				<td>64</td>
				<td> 2<br/> 6<br/> 6<br/></td>
			</tr>
			<tr>
				<td>03-02-2020<br/> To <br/> 07-02-2020</td>
				<td> 1 <br/> 5 <br/> 9 <br/></td>
				<td>51</td>
				<td> 2<br/> 9<br/> 0<br/></td>
				<td> 1 <br/> 3 <br/> 0 <br/></td>
				<td>45</td>
				<td> 2<br/> 6<br/> 7<br/></td>
				<td class="r"> 2 <br/> 6 <br/> 8 <br/></td>
				<td class="r">66</td>
				<td class="r"> 2<br/> 5<br/> 9<br/></td>
				<td> 5 <br/> 7 <br/> 9 <br/></td>
				<td>12</td>
				<td> 1<br/> 3<br/> 8<br/></td>
				<td> 1 <br/> 4 <br/> 5 <br/></td>
				<td>01</td>
				<td> 1<br/> 3<br/> 7<br/></td>
			</tr>
			<tr>
				<td>10-02-2020<br/> To <br/> 14-02-2020</td>
				<td> 6 <br/> 7 <br/> 8 <br/></td>
				<td>17</td>
				<td> 3<br/> 4<br/> 0<br/></td>
				<td class="r"> 1 <br/> 3 <br/> 3 <br/></td>
				<td class="r">72</td>
				<td class="r"> 1<br/> 2<br/> 9<br/></td>
				<td class="r"> 1 <br/> 2 <br/> 6 <br/></td>
				<td class="r">99</td>
				<td class="r"> 4<br/> 7<br/> 8<br/></td>
				<td> 4 <br/> 6 <br/> 6 <br/></td>
				<td>67</td>
				<td> 2<br/> 6<br/> 9<br/></td>
				<td> 4 <br/> 7 <br/> 7 <br/></td>
				<td>87</td>
				<td> 8<br/> 9<br/> 0<br/></td>
			</tr>
			<tr>
				<td>17-02-2020<br/> To <br/> 21-02-2020</td>
				<td> 8 <br/> 9 <br/> 0 <br/></td>
				<td>76</td>
				<td> 3<br/> 5<br/> 8<br/></td>
				<td> 1 <br/> 2 <br/> 9 <br/></td>
				<td>25</td>
				<td> 4<br/> 5<br/> 6<br/></td>
				<td> 3 <br/> 5 <br/> 0 <br/></td>
				<td>80</td>
				<td> 1<br/> 9<br/> 0<br/></td>
				<td> 2 <br/> 5 <br/> 9 <br/></td>
				<td>67</td>
				<td> 4<br/> 4<br/> 9<br/></td>
				<td> 1 <br/> 2 <br/> 7 <br/></td>
				<td>03</td>
				<td> 1<br/> 5<br/> 7<br/></td>
			</tr>
			<tr>
				<td>24-02-2020<br/> To <br/> 28-02-2020</td>
				<td> 2 <br/> 4 <br/> 8 <br/></td>
				<td>48</td>
				<td> 4<br/> 7<br/> 7<br/></td>
				<td> 2 <br/> 5 <br/> 9 <br/></td>
				<td>67</td>
				<td> 1<br/> 6<br/> 0<br/></td>
				<td class="r"> 4 <br/> 5 <br/> 7 <br/></td>
				<td class="r">66</td>
				<td class="r"> 2<br/> 4<br/> 0<br/></td>
				<td> 4 <br/> 5 <br/> 9 <br/></td>
				<td>84</td>
				<td> 2<br/> 3<br/> 9<br/></td>
				<td> 4 <br/> 7 <br/> 0 <br/></td>
				<td>15</td>
				<td> 7<br/> 8<br/> 0<br/></td>
			</tr> 
</tbody>
</table>
    
  );
}

export default Question;


