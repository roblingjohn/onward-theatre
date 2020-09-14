const router = require("express").Router();
const eventController = require("../../controllers/eventController");

router.route("/").get(eventController.findAll);

router.route(":id")
.post(eventController.create)
// .get(eventController.findById)
