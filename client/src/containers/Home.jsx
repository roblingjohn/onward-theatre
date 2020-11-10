import React from "react";
import OTJumbotron from "../components/OTJumbotron";
import UpcomingShows from "../components/UpcomingShows";
import ThisWeekend from "../components/ThisWeekend"

const Home = () => {
  return (
    <div>
      <OTJumbotron />
      {/* The following section will change based on whether there is a show today */}
      <h1>This Weekend at Onward:</h1>
      <ThisWeekend />
    </div>
  );
};

export default Home;
