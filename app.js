require("dotenv").config();
require("./config/dbConfig");

const express = require("express");
const app = express();
const cors = require("cors");
const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");
const orderRouter = require("./routes/orders");

app.use(cors());
app.use(express.json());
app.use(express.static("./files"));
app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/order", orderRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server listening on port", port);
});

module.exports = app;
