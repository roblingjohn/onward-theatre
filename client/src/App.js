import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import UnderConstruction from "./components/UnderConstruction";
import Home from "./containers/Home";
import Shows from "./containers/Shows";
import Classes from "./containers/Classes";

function App() {
  // useEffect(() => {
  //   axios.get("/api/config").then(res => {
  //     console.log(res.data)
  //   });
  // });
  return (
    <div className="App">
      <UnderConstruction />
      <Router>
        <Switch>
          <Route exact path="/shows" component={Shows} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
