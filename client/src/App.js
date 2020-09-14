import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import UnderConstruction from "./components/UnderConstruction";
import Home from "./containers/Home";

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
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
