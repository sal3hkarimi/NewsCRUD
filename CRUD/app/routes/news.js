const express = require("express");
const {
  addNews,
  updateNews,
  deleteNews,
  findNews,
} = require("../controllers/newsController");
const router = express.Router();

router.get("/", findNews);
router.post("/add", addNews);
router.put("/:id", updateNews);
router.delete("/:id", deleteNews);

module.exports = router;
