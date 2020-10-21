const express = require("express");
// const connectDB = require("./config/db");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
// require("./database");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

let Event = require("./models/Event");

app.use(cors());
app.use(bodyParser.json());

// connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

app.get("/api/config", (req, res) => {
  res.json({ success: true });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*"),
    (req, res) => {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
    };
}

app.use(routes);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/onward-theatre", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to the database Onward Theatre");
  })
  .catch((err) => {
    console.log("unable to connect to the database");
    console.log(err);
  });
const connection = mongoose.connection;

// connection.once("open", function () {
//   console.log("MongoDB database connection established successfully");
// });

//   .then(() => {
//     console.log("Successfully connected to database.");
//   })
//   .catch((err) => {
//     console.log("Unable to connect to database.");
//     console.log(err);
//   });

app.listen(PORT, () => {
  console.log(`Epxress server running on http://localhost:${PORT}`);
});
