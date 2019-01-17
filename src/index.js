import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Homepage from './components/Homepage/Homepage'


ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/Homepage" component={Homepage}/>
    </Router>
), document.getElementById('root'))



