const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
// API or Endpoints
router
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getUser)
  .post("/", userController.addUser)
  .put("/:id", userController.replaceUser)
  .patch("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

exports.router = router;
