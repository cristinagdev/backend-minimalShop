const router = require("express").Router();
const {
  getAllProducts,
  createProduct,
  getProductById,
  getProductByCategory,
  getProductByPrice,
  getProductByRating,
  getPopularProducts,
  updateProducts,
} = require("../controllers/products");
const multer = require("multer");
const upload = multer({ dest: "files/" });

router.get("/", getAllProducts);
router.get("/categories/:category", getProductByCategory);
router.get("/rating/:rating", getProductByRating);
router.get("/price/:maxPrice", getProductByPrice);
router.get("/bestsellers", getPopularProducts);
router.get("/:id", getProductById);

router.put("/:productId", upload.single("img"), updateProducts);

router.post("/", upload.single("img"), createProduct);

module.exports = router;
