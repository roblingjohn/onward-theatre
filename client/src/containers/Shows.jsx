import React, { Component } from "react";
import UpcomingShows from "../components/UpcomingShows";
import EventCalendar from "../components/EventCalendar";

class Shows extends Component {
  render() {
    return (
      <div>
        <h1>Upcoming Shows</h1>
        <EventCalendar />
        <UpcomingShows />
      </div>
    );
  }
}

export default Shows;
