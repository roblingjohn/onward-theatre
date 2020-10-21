const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Event.find(req.query)
      .then((dbEvents) => {
        res.json(dbEvents);
      })
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Event.create(req.body)
      .then((dbEvents) => res.json(dbEvents))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Event.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbEvents) => res.json(dbEvents))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Event.findById({ _id: req.params.id })
      .then((dbEvents) => dbEvents.remove())
      .then((dbEvents) => res.json(dbEvents))

      .catch((err) => res.status(422).json(err));
  },
};
