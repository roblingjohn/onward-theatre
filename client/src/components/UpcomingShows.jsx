import React, { Component } from "react";
import ShowInfo from "./ShowInfo";
import events from '../events/events'

class UpcomingShows extends Component {
    // This will all be changed to use context at a future date.
  state = {
    shows: events
  };
  render() {
    return (
      <div>
          {/* The show dates will be generated dynamically in the future. It will also take in a range as props. */}
        <h2>Friday</h2>
        {this.state.shows.map(
          (show) =>
            show.showTime.showDate === "Friday" && (
              <>
                <ShowInfo
                  showTime={show.showTime.showTime}
                  showName={show.title}
                  tagline={show.tagline}
                  description={show.description}
                />
              </>
            )
        )}
        <h2>Saturday</h2>
        {this.state.shows.map(
          (show) =>
            show.showTime.showDate === "Saturday" && (
              <>
                <ShowInfo
                  showTime={show.showTime.showTime}
                  showName={show.title}
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
