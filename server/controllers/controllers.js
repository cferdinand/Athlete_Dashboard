const models = require("../models/models.js");

module.exports = {
  getAthletes: (req, res) => {
    models
      .retrieveAthletes()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        console.error(err);
        res.sendStatus(404);
      });
  },
  updateOrAddAthletes: (req, res) => {
    let classified = req.body;
    models
      .updateOrAdd(classified)
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => {
        console.error(err);
        res.sendStatus(404);
      });
  }
};
