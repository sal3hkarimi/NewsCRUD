// const { NewsAgency } = require("../database/sqlite");

const { NewsAgency } = require("../models/NewsAgency");

exports.getListNewsAgency = async (req, res) => {
  const newAgencyList = await NewsAgency.findAll();
  res.json({
    status: "success",
    data: newAgencyList,
  });
};

exports.addNewsAgency = async (req, res) => {
  const { name } = req.body;
  try {
    const addNewNewsAgency = await NewsAgency.create({ name });
    if (addNewNewsAgency.id) {
      return res.json({
        status: "success",
        data: addNewNewsAgency,
      });
    }
    res.json({
      status: "error",
      message: "please right set data!",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
