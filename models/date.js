module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Date", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
      len: [1],
    },
  });
};
