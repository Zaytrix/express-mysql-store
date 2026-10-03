const Product = require("../models/productModel");

const productController = {
  getProducts: (req, res) => {
    Product.getAll((err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  },
  addProduct: (req, res) => {
    const { title, price, category_id } = req.body;
    Product.create(title, price, category_id, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.status(201).send("Product Created Successfully");
    });
  },
  getProduct: (req, res) => {
    const { id } = req.params;
    Product.get(id, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.json(results);
    });
  },

  updateProduct: (req, res) => {
    const { id } = req.params;
    const { title, price, category_id } = req.body;

    Product.update(id, title, price, category_id, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.json({ message: "Product updated successfully" });
    });
  },
};
module.exports = productController;
