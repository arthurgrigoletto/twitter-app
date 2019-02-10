import React, { Component } from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import Timeline from './pages/Timeline';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <Routes>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/timeline" component={Timeline} />
        </Switch>
      </Routes>
    );
  }
}

export default App;
