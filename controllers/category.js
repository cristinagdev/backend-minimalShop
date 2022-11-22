const categoryModel = require("../models/category");

const getCategoryByName = (req, res) => {
  const { name } = req.params;
  categoryModel
    .find({ name: name })
    .then((found) => res.status(200).json(found))
    .catch((error) => res.status(400).json({ error: "Something went wrong." }));
};

const getAll = (req, res) => {
  categoryModel
    .find()
    .then((category) => res.status(200).json(category))
    .catch((error) => res.status(400).json({ error: "Something went wrong." }));
};

const createCategories = (req, res) => {
  categoryModel
    .insertMany([
      {
        name: "Sofas",
      },
      {
        name: "Chairs",
      },
      {
        name: "shelves",
      },
      {
        name: "lamps",
      },
      {
        name: "decor",
      },
    ])
    .then((saved) => res.status(200).json(saved))
    .catch((error) => res.status(400).json({ error: "Something went wrong." }));
};

module.exports = { getCategoryByName, getAll, createCategories };
