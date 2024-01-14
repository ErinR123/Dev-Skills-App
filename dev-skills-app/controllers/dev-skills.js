const devSkills = require("../models/dev-skills");

function index(req, res) {
  res.render("dev-skills/index", {
    devskills: devSkills.getAll(),
  });
}

function getOne(req, res) {
  res.render("dev-skills/getOne", {
    devskill: devSkills.getOne(req.params.id),
  });
}

function newSkill(req, res) {
  res.render("dev-skills/new", {
    devskill: "new skill",
  });
}

function deleteOne(req, res) {
    devSkills.deleteOne(req.params.id);
    res.redirect("/dev-skills");
  }

module.exports = {
  index,
  getOne,
  newSkill,
  deleteOne,
};
