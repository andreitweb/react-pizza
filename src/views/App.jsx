import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {routes} from "./routes";
import {Header, Main} from './containers';

const App = () => {
  return (
    <Router>
      <Header/>
      <Main>
        <Switch>
          {routes.map( props => (
            <Route {...props}/>
          ))}
        </Switch>
      </Main>
    </Router>
  )
}

export default App;