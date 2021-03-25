import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

// import App from './App';
import Checkout from './Component/Checkout';
import Payment from './Component/Payment';
import Register from './Component/Register';
import RegisterVendor from './Component/RegisterVendor';
import RegisterUser from './Component/RegisterUser';
import Login from './Component/Login';
import Plan from './Component/Plan';


ReactDOM.render((
  <Router>
    <Route path="/checkout" component={Checkout} />
    <Route path="/payment" component={Payment} />
    <Route path="/register" component={Register} />
    <Route path="/registerVendor" component={RegisterVendor} />
    <Route path="/registerUser" component={RegisterUser} />
    <Route path="/login" component={Login} />
    <Route path="/plan" component={Plan} />
  </Router>), 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

