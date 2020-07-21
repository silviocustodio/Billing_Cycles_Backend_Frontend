import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

//  COM REDUX
import Dashboard from '../dashboard/dashboard';
//  SEM REDUX
// import Dashboard2 from '../dashboard2/dashboard2';
import BillingCycle from '../billingCycle/billingCycle';

export default (props) => (
  <Router history={hashHistory}>
    {/* COM REDUX */}
    <Route path="/" component={Dashboard} />
    {/* SEM REDUX */}
    {/* <Route path="/" component={Dashboard2} /> */}
    <Route path="/billingCycles" component={BillingCycle} />
    <Redirect from="*" to="/" />
  </Router>
);
