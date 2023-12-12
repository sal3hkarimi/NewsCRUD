module.exports = (sequelize, DataTypes) => {
  require("./News").init(sequelize, DataTypes);
  require("./NewsAgency").init(sequelize, DataTypes);
};
