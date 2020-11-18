import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from '../pages/main';
import Users from '../pages/users';
import Weddings from '../pages/weddings';
import Schedules from '../pages/schedules';
import Invoices from '../pages/invoices';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/users" component={Users}/>
      <Route path="/weddings" component={Weddings}/>
      <Route path="/schedules" component={Schedules}/>
      <Route path="/invoices" component={Invoices}/>
    </Switch>
  </BrowserRouter>
)

export default Routes