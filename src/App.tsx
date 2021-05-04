import React from 'react';
import '@/App.css';
import 'antd/dist/antd.css';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';

import Home from '@/pages/Home';
import History from '@/pages/History';
import About from '@/pages/About';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

function App () {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/history" component={History} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/register" component={Register} exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
