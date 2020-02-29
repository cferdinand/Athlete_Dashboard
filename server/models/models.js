const db = require("../../db/index.js");
const mongoose = require("mongoose");

module.exports = {
  retrieveAthletes: () => {
    return db
      .find()
      .then(data => {
        return data;
      })
      .catch(err => {
        console.error(err);
      });
  },
  updateOrAdd: classified => {
    if (!classified._id) {
      classified._id = new mongoose.mongo.ObjectID();
    }
    return db
      .findByIdAndUpdate(classified._id, classified, {
        upsert: true,
        new: true
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
