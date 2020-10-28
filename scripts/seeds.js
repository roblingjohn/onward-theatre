const mongoose = require("mongoose");
const db = require("../models");
const moment = require("moment-timezone");

moment.tz.setDefault("America/New_York");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/onward-theatre",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
);
const eventSeeds = [
  {
    start: new Date("2020-10-30 19:00"),
    end: new Date("2020-10-30 20:00"),
    eventName: "Group Therapy",
    tagline: "A really cool improv group",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, distinctio. Molestiae odio voluptatum, perferendis hic tempora quo labore, ab nihil totam quas vero incidunt, earum harum ea animi dicta sed.",
    eventType: "Improv",
  },
  {
    start: new Date("2020-10-30 20:00"),
    end: new Date("2020-10-30 21:00"),
    eventName: "Cold Hearted Motherfuckers",
    tagline: "Devon and JJ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nesciunt ut ea consequatur? Culpa impedit incidunt ad consectetur? Repellat tempora architecto quos ipsum amet adipisci perferendis aliquid quia cumque ratione.",
    eventType: "Improv",
  },
  {
    start: new Date("2020-10-30 21:00"),
    end: new Date("2020-10-30 22:00"),
    eventName: "Murder Show",
    tagline: "Someone got murdered. How did it happen?",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus fuga libero voluptatum modi nisi tempore eaque sed repellendus voluptatibus, similique inventore recusandae. Magnam optio eaque quo dolores ab ipsam.",
    eventType: "Improv",
  },
  {
    start: new Date("2020-10-31 23:00"),
    end: new Date("2020-10-31 23:59"),
    eventName: "Improvised Drinking Game",
    tagline: "Totally not a ripoff of Improv Asshole",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim unde aliquam culpa ullam autem incidunt minima dolore amet a veritatis, tenetur recusandae harum impedit, esse, molestias quae. Sapiente, adipisci fugit?",
    eventType: "Improv",
  },
];
db.Event.remove({})
  .then(() => db.Event.collection.insertMany(eventSeeds))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
