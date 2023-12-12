const { Model } = require("sequelize");
const NewsAgency = require("./NewsAgency");

class TheNews extends Model {}

const init = (sequelize, DataTypes) => {
  TheNews.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      newsAgencyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: NewsAgency,
          key: "id",
        },
      },
      date: {
        // type: DataTypes.DATE,
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: "news",
    }
  );
};

module.exports = { init, TheNews };
