var express = require("express");
var router = express.Router();
var devskillsController = require("../controllers/dev-skills");

router.get("/", devskillsController.index);
router.get("/:id", devskillsController.getOne);

module.exports = router;