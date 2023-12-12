const { Sequelize, DataTypes } = require("sequelize");
const models = require("../models");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./database.db",
});

models(db, DataTypes);

const { news: News, newsAgency: NewsAgency } = db.models;

News.belongsTo(NewsAgency, { foreignKey: "newsAgencyId" });
NewsAgency.hasMany(News, { foreignKey: "newsAgencyId" });

db.sync({ force: true }).then(async () => {
  await addNewNewsAgency();
  await addTheNews();
  console.log("db is ready");
});


module.exports = { db, News, NewsAgency };

async function addTheNews() {
  await News.create({
    title: "The News-1",
    content: "Content The News",
    newsAgencyId: 1,
    date: "2020-12-12",
  });

  await News.create({
    title: "The News-2",
    content: "Content The News",
    newsAgencyId: 3,
    date: "2014-12-12",
  });

  await News.create({
    title: "The News-3",
    content: "Content The News",
    newsAgencyId: 2,
    date: "1998-12-12",
  });
}

async function addNewNewsAgency() {
  await NewsAgency.create({ name: "BBC" });
  await NewsAgency.create({ name: "Javan" });
  await NewsAgency.create({ name: "Tasnim" });
}