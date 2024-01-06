const devSkills = [
    { id: 0, devskill: "Javascript", done: true },
    { id: 1, devskill: "DOM", done: true },
    { id: 2, devskill: "Python", done: false },
  ];
  
  function getAll() {
    return devSkills;
  }
  
  function getOne(id) {
    id = parseInt(id);
    return devSkills.find((devskills) => devskills.id  === id);
  }

  module.exports = {
    getAll,
    getOne,
  };