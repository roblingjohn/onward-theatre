import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import UnderConstruction from './components/UnderConstruction'

function App() {
  // useEffect(() => {
  //   axios.get("/api/config").then(res => {
  //     console.log(res.data)
  //   });
  // });
  return (
    <div className="App">
      <UnderConstruction />
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
