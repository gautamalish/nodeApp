// imports
const express = require("express");
const exp = require("constants");
const morgan = require("morgan");
const productController = require("./controller/product");
// server
const server = express();
// Middlewares
// body parser
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// Third-party middleware morgan
server.use(morgan("dev"));
// middleware to get static file from inside the public dir
server.use(express.static("public"));

// API or Endpoints
server.get("/products", productController.getAllProducts);
server.get("/products/:id", productController.getProduct);
server.post("/products", productController.addProduct);
server.put("/products/:id", productController.replaceProduct);
server.patch("/products/:id", productController.updateProduct);
server.delete("/products/:id", productController.deleteProduct);

// listening to port 3000
server.listen(3000, () => {
  console.log("Server Started..");
});
