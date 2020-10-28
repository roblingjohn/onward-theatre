const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Event = new Schema({
  eventName: {
    type: String,
    required: "Event name required",
  },
  tagline: {
    type: String,
  },
  description: {
    type: String,
  },
  start: {
    type: Date,
    required: "Event start required",
  },
  end: {
    type: Date,
    required: "Event end required",
  },
  eventType: {
    type: String,
  },
});

module.exports = mongoose.model("Event", Event);
