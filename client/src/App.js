import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import UnderConstruction from "./components/UnderConstruction";
import Home from "./containers/Home";
import Shows from "./containers/Shows";
import Classes from "./containers/Classes";
import OTNavbar from "./components/OTNavbar";
import Contact from "./containers/Contact";
import About from "./containers/About";
import EventDetails from "./components/EventDetails";

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
        <OTNavbar />
        <div className="container">
          <Switch>
            <Route exact path="/shows" component={Shows} />
            <Route exact path="/classes" component={Classes} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/show/:id" component={EventDetails}/>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
