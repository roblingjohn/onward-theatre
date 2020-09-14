const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
require("./database");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({ success: true });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(routes);

app.get("*"),
  (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  };

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/onward-theatre", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to database.");
  })
  .catch((err) => {
    console.log("Unable to connect to database.");
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Epxress server running on http://localhost:${PORT}`);
});
