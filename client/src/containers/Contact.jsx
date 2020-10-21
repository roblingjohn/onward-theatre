import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <h3>123 Fake Street Atlanta, GA 30300</h3>
      {/* When the theater location is decided on, this will include a Google Maps box showing it */}
      <iframe
        className="onward-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.03506475745!2d-84.56103205848396!3d33.767918805688744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1603319571619!5m2!1sen!2sus"
        width="600"
        height="450"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      <h3>
        Email:{" "}
        <a href="mailto:onwardtheatre@gmail.com">onwardtheatre@gmail.com</a>
      </h3>
    </div>
  );
};

export default Contact;
