import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Quotes} from "./screens/Quotes";
import {Timeout} from "./screens/Timeout";
import {BadDesign} from "./screens/Memleak";

function App() {
  return (
      <Router>
          <Switch>
            <Route path="/quotes">
              <Quotes />
            </Route>
            <Route path="/timeout">
                <Timeout />
            </Route>
            <Route path="/bad">
                <BadDesign />
            </Route>
            <Route path="/">
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
