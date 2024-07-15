// imports
const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
// server
const server = express();
// router
// Middlewares
// body parser
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// Third-party middleware morgan
server.use(morgan("dev"));
// middleware to get static file from inside the public dir
server.use(express.static("public"));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

// listening to port 3000
server.listen(3000, () => {
  console.log("Server Started..");
});
