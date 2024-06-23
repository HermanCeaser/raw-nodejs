const path = require("path");

const productsPath = path.resolve(__dirname, "../data/task1/products.json");
const customersPath = path.resolve(__dirname, "../data/task1/customers.json");
const imagesPath = path.resolve(__dirname, "../data/task1/images.json");
const reviewsPath = path.resolve(__dirname, "../data/task1/reviews.json");

const dataPaths = {
  productsPath,
  customersPath,
  imagesPath,
  reviewsPath,
};

module.exports = {
  dataPaths,
};
