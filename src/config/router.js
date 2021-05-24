import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom"
import React from 'react';
import Home from "../screens/home"
import About from "../screens/about";
import Help from "../screens/help";
import Directories from "../screens/directories";
import Compagny from "../screens/compagny";
import Blog from "../screens/blog";
import Jobs from "../screens/jobs";
import Cart from "../screens/cart";
import Registered from "../screens/Registered";
import Events from "../screens/events";

const Routes =()=>{
    return (
    <Router>
        <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/about" component={About} exact></Route>
            <Route path="/help" component={Help} exact></Route>
            <Route path="/directories" component={Directories} exact></Route>
            <Route path="/compagnies" component={Compagny} ></Route>
            <Route path="/blog" component={Blog} exact></Route>
            <Route path="/cart" component={About} exact></Route>
            <Route path="/jobs" component={Jobs} exact></Route>
            <Router path="/cart" component={Cart} exact></Router>
            <Router path="/register" component={Registered} exact></Router>
            <Router path="/event" component={Events} exact></Router>
            <Router path="/publish" component={About}></Router>
            <Redirect to ="/"></Redirect>
        </Switch>
    </Router>)

}


export default Routes