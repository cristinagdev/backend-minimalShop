const productModel = require("../models/products");
const fs = require("fs");

const getAllProducts = (req, res) => {
  productModel
    .find()
    .then((productFound) => res.status(200).json(productFound))
    .catch((error) => res.status(400).json({ error: "Something went wrong." }));
};

const getProductById = (req, res) => {
  const { id } = req.params;
  productModel
    .findById(id)
    .then((productFound) => res.status(200).json(productFound))
    .catch((error) => res.status(400).json({ error: "Something went wrong." }));
};

const getProductByCategory = (req, res) => {
  const { category } = req.params;
  productModel
    .find({ category })
    .then((productFound) => res.status(200).json(productFound))
    .catch((error) => res.status(400).json({ error: "Something went wrong." }));
};

const getProductByPrice = (req, res) => {
  const { maxPrice } = req.params;
  const minPrice = 10;
  productModel
    .find({
      price: { $gt: minPrice, $lt: maxPrice },
      available: true,
    })
    .then((productFound) => res.status(200).json(productFound))
    .catch((error) => res.status(400).json({ error: "Something went wrong." }));
};

const getProductByRating = (req, res) => {
  const { rating } = req.params;
  productModel
    .find({ rating })
    .then((productFound) => res.status(200).json(productFound))
    .catch((error) => res.status(400).json({ error: "Something went wrong." }));
};

const getPopularProducts = (req, res) => {
  productModel
    .find({ rating: 5 })
    .then((productFound) => res.status(200).json(productFound))
    .catch((error) => res.status(400).json({ error: "Something went wrong." }));
};

const createProduct = (req, res) => {
  const extension = "." + req.file.mimetype.split("/")[1];
  const newPath = req.file.path + extension;
  fs.renameSync(req.file.path, newPath);

  req.body.img = `${req.file.filename}${extension}`;

  productModel
    .create(req.body)
    .then((saved) => res.status(200).json(saved))
    .catch((error) => res.status(400).json({ error: "Something went wrong." }));
};

const updateProducts = async (req, res) => {
  const extension = "." + req.file.mimetype.split("/")[1];
  const newPath = req.file.path + extension;
  fs.renameSync(req.file.path, newPath);

  req.body.img = `${req.file.filename}${extension}`;
  const product = await productModel
    .findByIdAndUpdate(req.params.productId, req.body, { new: true })
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(400).json({ error: "Something went wrong." }));
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  getProductByCategory,
  getProductByPrice,
  getProductByRating,
  getPopularProducts,
  updateProducts,
};
