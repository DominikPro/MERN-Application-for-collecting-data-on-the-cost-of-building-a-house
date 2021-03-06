import React from "react";
import CostForm from "./Components/CostForm/CostForm";
import Navigation from "./Components/Navigation/Navigation"
import Stats from "./Components/StatisticForm/StatisticForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Page/HomePage"

const App = () => {
 
  return (
    <div>
    
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            
             <HomePage/> 
            
          </Route>
          <Route path="/form">
            <CostForm />
          </Route>

          <Route path="/stats">
            <Stats />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
