const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    eventName: {
        type: String,
        required: "Event name required"
    },
    tagline: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        required: "Event date required"
    },
    eventType: {
        type: String,
    }
})