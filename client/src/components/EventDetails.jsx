import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import events from "../events/events";
import API from "../util/API";

const EventDetails = (props) => {
  const [eventInfo, setEventInfo] = useState([]);

  useEffect(() => {
    API.getOneEvent(props.match.params.id).then((res) => {
      setEventInfo(res.data);
    });
  });

  function handleEvent() {
    alert(`You bought a ticket to ${eventInfo.title}!`);
  }

  return (
    <div>
      <Link to="/shows">back to calendar</Link>
      <h2>
        {moment(eventInfo.start).format("dddd, MMMM DD")} at{" "}
        {moment(eventInfo.start).format("h:mm")}
      </h2>
      <h1>{eventInfo.eventName}</h1>
      <h2>{eventInfo.tagline}</h2>
      <p>{eventInfo.description}</p>
      <button onClick={handleEvent}>Buy Tickets</button>
    </div>
  );
};

export default EventDetails;
