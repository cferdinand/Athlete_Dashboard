const mongoose = require("mongoose");
const config = require("../config.js");

mongoose.connect(process.env.MONGODB_URI || config.mongodb_uri, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to db...");
});

const AthleteSchema = mongoose.Schema({
  Name: String,
  Date_of_Birth: String,
  Nationality: String,
  Location: String,
  Association: Array,
  Team: Array,
  Gender: String,
  Sports: Array,
  About: String,
  Interests: String,
  Charities: String,
  Social_Media_Handles: Object,
  Pets: String,
  Drinks_Alcohol: Boolean,
  Married: Boolean,
  Profile_Image: String
});

const Athlete = mongoose.model("Athletes", AthleteSchema);

module.exports = Athlete;
