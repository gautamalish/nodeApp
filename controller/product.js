const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  res.json(product);
};

exports.addProduct = (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.json(req.body);
};

exports.replaceProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id });
  res.status(202).json();
};
exports.updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  const oldProduct = products[productIndex];
  products.splice(productIndex, 1, { ...oldProduct, ...req.body });
  res.status(202).json();
};
exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(204).json(product);
};
