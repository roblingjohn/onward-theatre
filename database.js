const mongoose = require("mongoose");
const username = process.env.ATLAS_USERNAME;
const password = process.env.ATLAS_PASSWORD;

const connection = `mongodb+srv://${username}:${password}@cluster0.pde5d.mongodb.net/<dbname>?retryWrites=true&w=majority`;
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
