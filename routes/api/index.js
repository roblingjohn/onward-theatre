const router = require("express").Router();
const eventController = require("../../controllers/eventController");

router
  .route("/events")
  .get(eventController.findAll)
  .post(eventController.create);

router
  .route("/events/:id")
  .post(eventController.create)
//   .get(eventController.findById);

module.exports = router;
