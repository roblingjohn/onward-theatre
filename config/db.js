const mongoose = require("mongoose");
const config = require("config");
const db = `mongodb+srv://${username}:${password}@cluster0.pde5d.mongodb.net/onward-theatre?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;