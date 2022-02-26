import React, { Component} from "react";
import logo from './pslLogo1.png';
import 'antd/dist/antd.css';
import './App.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Quiz from './components/question'
import Quiz1 from './components/question2'
import Main from './components/main'
import Type from './components/type'
import GetUser from './components/getUser'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  render() {
  return (
    <div className="App">
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
    <Route exact path={["/","/main"]} component={Main}/>
    <Route exact path={"/atharvaveda"} component={Quiz}/>
    <Route exact path={"/rigveda"} component={Quiz1}/>
    <Route exact path={"/selection"} component={Type}/>
    <Route exact path={"/user"} component={GetUser}/> 
    </div>
    </Router> 
    </div>
  );
  }
}

export default App;
