const orderModel = require("../models/order");

const createOrder = async (req, res) => {
  const { name, surname, email, address, city, postcode, items, total } =
    req.body;
  const newOrder = {
    user: `${name.trim()} ${surname.trim()}`,
    email: email,
    address: `${address.trim()} ${city.trim()} ${postcode.trim()}`,
    items: items,
    total: total,
  };
  const order = orderModel(newOrder);

  order
    .save()
    .then((ordered) => res.status(200).json(ordered))
    .catch((error) =>
      res.status(400).json({ error: "Something went wrong. Try again later" })
    );
};

module.exports = { createOrder };
