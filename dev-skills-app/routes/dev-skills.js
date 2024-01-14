var express = require("express");
var router = express.Router();
var devskillsController = require("../controllers/dev-skills");
const Skill = require('../models/dev-skills');


router.get("/", devskillsController.index);
router.get("/new", devskillsController.newSkill);
router.get("/:id", devskillsController.getOne);
router.delete("/:id", devskillsController.deleteOne);

router.delete("/", devskillsController.deleteOne);
router.post('/', (req, res) => {
    Skill.add(req.body.skill);  

    res.redirect('/dev-skills');  
});

module.exports = router;