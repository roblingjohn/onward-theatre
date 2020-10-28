import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Redirect } from "react-router-dom";
// import moment from "moment";
import moment from "moment-timezone";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "../events/events";
import API from "../util/API";

moment.tz.setDefault("America/New_York");

const localizer = momentLocalizer(moment);

class EventCalendar extends Component {
  state = {
    shows: [],
    redirect: false,
  };

  componentDidMount() {
    API.getAllEvents().then((res) => {
      console.log(res.data);
      this.setState({ shows: res.data });
    });
  }

  eventLink = "";
  eventInfo = {};

  onEventClick = (event) => {
    console.log(event.title);
    this.eventLink = `/show/${event._id}`;
    this.eventInfo = event;
    this.setState({
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.eventLink} />;
    }
    return (
      <div>
        <Calendar
          className="calendar"
          localizer={localizer}
          events={this.state.shows}
          defaultDate={new Date()}
          defaultView="month"
          style={{ height: "100vh" }}
          onSelectEvent={(event) => this.onEventClick(event)}
        />
      </div>
    );
  }
}

export default EventCalendar;
