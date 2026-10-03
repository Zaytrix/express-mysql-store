const express = require("express");
const productController = require("../controllers/productController");

const routes = express.Router();
routes.put("/:id", productController.updateProduct);

routes.get("/:id", productController.getProduct);

routes.get("/", productController.getProducts);

routes.post("/create", productController.addProduct);
module.exports = routes;
