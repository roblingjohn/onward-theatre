import React, { Component } from "react";
import moment from "moment-timezone";
import ShowInfo from "./ShowInfo";
import events from "../events/events";
import API from "../util/API";

class UpcomingShows extends Component {
  // This will all be changed to use context at a future date.
  state = {
    shows: [],
  };
  componentDidMount() {
    API.getAllEvents().then((res) => {
      console.log(res.data);
      this.setState({ shows: res.data });
    });
  }

  render() {
    return (
      <div>
        {/* The show dates will be generated dynamically in the future. It will also take in a range as props. */}
        <h2>Friday</h2>
        {this.state.shows.map(
          (show) =>
            moment(show.start).day() === 5 && (
              <>
                <ShowInfo
                  showTime={moment(show.start).format("h:mm")}
                  showName={show.eventName}
                  tagline={show.tagline}
                  description={show.description}
                />
              </>
            )
        )}
        <h2>Saturday</h2>
        {this.state.shows.map(
          (show) =>
            moment(show.start).day() === 6 && (
              <>
                <ShowInfo
                  showTime={moment(show.start).format("h:mm")}
                  showName={show.eventName}
                  tagline={show.tagline}
                  description={show.description}
                />
              </>
            )
        )}
      </div>
    );
  }
}

export default UpcomingShows;
