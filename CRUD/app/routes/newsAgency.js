const express = require("express");
const router = express.Router();
const { addNewsAgency, getListNewsAgency } = require("../controllers/newsAgencyController");

router.get("/", getListNewsAgency);
router.post("/add", addNewsAgency);

module.exports = router;
