import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import App from './App';
import Signup from './Component/Signup';
import Landing from './Component/Landing';
import Job from './Component/JobDetails';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/job:id" component={Job} />
      <Route path="/landing" component={Landing} />
      <Route path="/signup" component={Signup} />
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
