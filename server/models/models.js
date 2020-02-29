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
    return db
      .findByIdAndUpdate(
        { _id: classified.id || new mongoose.mongo.ObjectID() },
        classified,
        {
          upsert: true,
          new: true
        }
      )
      .then(data => {
        return data;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
