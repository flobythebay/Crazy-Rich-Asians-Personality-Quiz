module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define("game", {
    name: {
      type: Sequelize.STRING
    },
    answer1: {
      type: Sequelize.INTEGER
    },
    answer2: {
      type: Sequelize.INTEGER
    },
    answer3: {
      type: Sequelize.INTEGER
    },
    answer4: {
      type: Sequelize.INTEGER
    },
    answer5: {
      type: Sequelize.INTEGER
    },
    result: {
      type: Sequelize.INTEGER
    }
  });

  return Game;
};
