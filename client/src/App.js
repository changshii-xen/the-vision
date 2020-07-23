import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import About from './components/pages/About';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  return (
    <Router >
    <Fragment>
    <Navbar />
    <div className="container">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/about' component={About}/>
      </Switch>
    </div>
    </Fragment>
    </Router>
  );
}

export default App;
