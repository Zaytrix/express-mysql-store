const express = require("express");
const categoryController = require("../controllers/categoryController")

const routes =  express.Router();

routes.get("/",categoryController.getCategories);

routes.post("/create",categoryController.addCategory)

module.exports = routes