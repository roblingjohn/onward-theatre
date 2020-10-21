import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <h3>123 Fake Street Atlanta, GA 30300</h3>
      {/* When the theater location is decided on, this will include a Google Maps box showing it */}
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1qfR92O-H17kOQC0qBgOT3HE7UdY"
        width="640"
        height="480"
      ></iframe>
      <h3>
        Email:{" "}
        <a href="mailto:onwardtheatre@gmail.com">onwardtheatre@gmail.com</a>
      </h3>
    </div>
  );
};

export default Contact;
