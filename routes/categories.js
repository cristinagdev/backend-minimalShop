const router = require("express").Router();
const {
  getCategoryByName,
  getAll,
  createCategories,
} = require("../controllers/category");

router.get("/:name", getCategoryByName);
router.get("/", getAll);
router.post("/", createCategories);

module.exports = router;
