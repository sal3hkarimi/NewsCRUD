const { Model } = require("sequelize");

class NewsAgency extends Model {}

const init = (sequelize, DataTypes) => {
  const modelName = "newsAgency";

  NewsAgency.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName,
      timestamps: true,
    }
  );
};



module.exports = { init, NewsAgency };
