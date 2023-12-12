const { where } = require("sequelize");
const { TheNews } = require("../models/News");
const { NewsAgency } = require("../models/NewsAgency");

/**
 * Format Add new the news
 * http://localhost:3200/api/v1/news/?newsAgencyId=2&date=1998-12-12
 */
exports.findNews = async (req, res) => {
  try {
    const { date, newsAgencyId } = req.query;

    if (date && newsAgencyId) {
      const getNewsByDateAndNewsAgn = await NewsAgency.findOne({
        where: { id: newsAgencyId },
        include: { model: TheNews, where: { date } },
      });
      return res.json({
        status: "success",
        data: getNewsByDateAndNewsAgn.news,
      });
    }

    if (date) {
      const getNewsByDate = await TheNews.findAll({ where: date });
      return res.json({
        status: "success",
        data: getNewsByDate,
      });
    }

    if (newsAgencyId) {
      const getNewsByNewsAgency = await NewsAgency.findOne({
        where: { id: newsAgencyId },
        include: { model: TheNews },
      });

      return res.json({
        status: "success",
        data: getNewsByNewsAgency.news,
      });
    }

    const allNews = await TheNews.findAll();
    res.json({
      status: "success",
      data: allNews,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Format Add new the news
{
  "title":"New The News",
  "content":"Content The News",
  "newsAgencyId":1,
  "date":"2023-12-12"
}
 */
exports.addNews = async (req, res) => {
  try {
    const { title, content, newsAgencyId, date } = req.body;
    const addTheNews = await TheNews.create({
      title,
      content,
      newsAgencyId,
      date,
    });
    if (addTheNews.id) {
      return res.json({
        status: "success",
        data: addTheNews,
      });
    }
    res.json({
      status: "error",
      message: "Failed to add new the news!",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

exports.updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const updateTheNews = await TheNews.update(
      {
        ...req.body,
      },
      { where: { id } }
    );

    if (updateTheNews[0]) {
      return res.json({
        status: "success",
        message: "The news successfully updated!",
      });
    }

    res.json({
      status: "error",
      message: `Not found The news with Id: ${id}`,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTheNews = await TheNews.destroy({ where: { id } });

    if (deleteTheNews) {
      return res.json({
        status: "success",
        message: "The news successfully delete!",
      });
    }

    res.json({
      status: "error",
      message: `Not found The news with Id: ${id}`,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
