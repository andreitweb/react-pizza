import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './styles/app.scss';

import {routes} from "./routes";
import {Header, Main} from './containers';

const App = () => {
  return (
    <Router>
      <Header/>
      <Main>
        <Switch>
          {routes.map( props => (
            <Route key={props.path} {...props}/>
          ))}
        </Switch>
      </Main>
    </Router>
  )
}

export default App;