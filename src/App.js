import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Launches from './components/Launches/Launches';
import LaunchDetails from './components/LaunchDetails/LaunchDetails';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';

import 'antd/dist/antd.css';
import './App.css';

const App = () => (
  <Router>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/launches" component={Launches}></Route>  
    <Route path="/register" component={Register}></Route>  
    <Route path="/login" component={Login} />
    <Route path="/launch/:flightNumber" component={LaunchDetails} /> 
    </Switch>

  </Router>
);

export default App;
