const devSkills = require("../models/dev-skills");

function index(req, res) {
    res.render("dev-skills/index",  {
        devskills: devSkills.getAll(),
    });
}

function getOne(req, res) {
    res.render("dev-skills/getOne", {
        devskill: devSkills.getOne(req.params.id),
    })
}

module.exports = {
    index,
    getOne,
}