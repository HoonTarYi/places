import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Historical from './components/Historical';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/historical" component={Historical} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
