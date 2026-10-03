const Category = require("../models/categoryModel");

const categoryController = {
  getCategories: (req, res) => {
    Category.getAll((err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  },
  addCategory: (req, res) => {
    const { name } = req.body;
    Category.create(name, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.status(201).send("Category Created Successfully");
    });
  },
};

module.exports = categoryController;
