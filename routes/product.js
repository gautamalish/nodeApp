const express = require("express");
const router = express.Router();
const productController = require("../controller/product");
// API or Endpoints
router
  .get("/", productController.getAllProducts)
  .get("/:id", productController.getProduct)
  .post("/", productController.addProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);

  exports.router=router
