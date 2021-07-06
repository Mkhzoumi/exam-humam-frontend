import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorite from './Components/Favorite';
import Main from './Components/Main';
import Header from './Components/Header';

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router>
        <Switch>
          <Route path="/Main">
            <Main />
          </Route>
          <Route path="/Favorite">
        <Favorite/>
          </Route>
        </Switch>
    </Router>
        
      </div>
    )
  }
}

export default App
