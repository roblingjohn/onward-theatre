import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
import moment from "moment-timezone";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "../events/events"

moment.tz.setDefault("America/New_York");

const localizer = momentLocalizer(moment);

class EventCalendar extends Component {
  state = {
    shows: events
  };
  render() {
    return (
      <div>
        <Calendar
          className="calendar"
          localizer={localizer}
          events={this.state.shows}
          defaultDate={new Date()}
          defaultView="month"
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default EventCalendar;
