import React from 'react';

import {
  BrowserRouter as Router,
  Route, Switch, Redirect
} from "react-router-dom";

import Menu from './components/Menu';

import './styles.scss';

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/:id">
   <Menu />
   </Route>
   <Route path="/">
      <Redirect to="/list" />
   </Route>
   </Switch>
   </Router>
  );
}

export default App;
