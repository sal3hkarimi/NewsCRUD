const newsRouter = require("./news");
const newsAgencyRouter = require("./newsAgency");

module.exports = (app) => {
  app.use("/api/v1/news", newsRouter);
  app.use("/api/v1/news-agency", newsAgencyRouter);
};
