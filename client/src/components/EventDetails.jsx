import React from "react";
import { Link } from "react-router-dom";
import moment from "moment-timezone"
import events from "../events/events";

const EventDetails = (props) => {
  const eventInfo = events[props.match.params.id - 1];

  function handleEvent() {
      alert(`You bought a ticket to ${eventInfo.title}!`)
  }

  return (
    <div>
        <Link to="/shows">back to calendar</Link>
      <h2>
        {moment(eventInfo.start).format("dddd, MMMM DD")} at {moment(eventInfo.start).format("h:mm")}
      </h2>
      <h1>{eventInfo.title}</h1>
      <h2>{eventInfo.tagline}</h2>
      <p>{eventInfo.description}</p>
      <button onClick={handleEvent}>Buy Tickets</button>
    </div>
  );
};

export default EventDetails;
