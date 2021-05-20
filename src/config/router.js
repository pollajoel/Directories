import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom"
import React from 'react';
import Home from "../screens/home"

const Routes =()=>{
    return (
    <Router>
        <Switch>
            <Route path="/" component={Home} exact></Route>
            <Redirect to ="/"></Redirect>
        </Switch>
    </Router>)

}


export default Routes