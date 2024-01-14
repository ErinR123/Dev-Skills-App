const devSkills = [
  {
    id: 0,
    devskill: "Javascript",
    done: true,
    doclink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 1,
    devskill: "DOM",
    done: true,
    doclink:
      "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
  },
  {
    id: 2,
    devskill: "Python",
    done: false,
    doclink: "https://developer.mozilla.org/en-US/docs/Glossary/Python",
  },
];
function getAll() {
  return devSkills;
}

function getOne(id) {
  id = parseInt(id);
  return devSkills.find((devskills) => devskills.id === id);
}

function add(skillText) {
  const newSkill = {
    id: devSkills.length,
    devskill: skillText,
    done: false,
    doclink: " ",
  };
  devSkills.push(newSkill);
}

function deleteOne(id) {
  id = parseInt(id);
  const index = devSkills.findIndex((devskill) => devskill.id === id);
  devSkills.splice(index, 1);
}

module.exports = {
  getAll,
  getOne,
  add,
  deleteOne,
};
