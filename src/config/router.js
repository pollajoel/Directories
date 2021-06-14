import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom"
import React from 'react';
import Home from "../screens/home"
import Help from "../screens/help";
import Contact from "../screens/contact";
import Compagny from "../screens/compagny";
import  Login from "../screens/login";
import Jobs from "../screens/jobs";
import Cart from "../screens/cart";
import Registered from "../screens/Registered";
import Events from "../screens/events";

const Routes =()=>{
    return (
    <Router>
        <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/help" component={Help} exact></Route>
            <Route path="/contact-us" component={Contact} exact></Route>
            <Route path="/compagnies" component={Compagny} ></Route>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/jobs" component={Jobs} exact></Route>
            <Router path="/cart" component={Cart} exact></Router>
            <Router path="/register" component={Registered} exact></Router>
            <Router path="/event" component={Events} exact></Router>
            <Redirect to ="/"></Redirect>
        </Switch>
    </Router>)

}


export default Routes