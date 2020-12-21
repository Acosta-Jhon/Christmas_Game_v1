import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'font-awesome/css/font-awesome.css';
//import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './Home';
import LevelOne from "./levels/LevelOne/LevelOne"
//import LevelTwo from './levels/LevelTwo/LevelTwo';
import LevelThree from './levels/LevelThree/LevelThree';

render(
  <Router>
    <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/level_one" component={LevelOne} />
      <Route exact path="/level_two" component={LevelThree} />

    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
