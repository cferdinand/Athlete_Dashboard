const mongoose = require("mongoose");
const config = require("../config.js");

mongoose.connect(process.env.MONGODB_URI || config.mongodb_uri, {
  useNewUrlParser: true,
  useFindAndModify: false
});
console.log(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to db...");
});

const AthleteSchema = mongoose.Schema({
  name: String,
  date_of_birth: String,
  nationality: String,
  location: String,
  associations: Array,
  teams: Array,
  gender: String,
  sports: Array,
  about: String,
  interests: String,
  charities: String,
  social_media: Object,
  pets: String,
  drinks_alcohol: Boolean,
  married: Boolean,
  profile_image: String
});

const Athlete = mongoose.model("Athletes", AthleteSchema);

module.exports = Athlete;
