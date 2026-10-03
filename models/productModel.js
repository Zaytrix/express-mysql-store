const db = require("../config/db");

const Product = {
  getAll: (callback) => {
    const query = `SELECT products.*, categories.name AS category_name 
                       FROM products 
                       LEFT JOIN categories ON products.category_id = categories.id`;
    db.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  create: (title, price, category_id, callback) => {
    const query =
      "INSERT INTO products (title, price, category_id) VALUES (?, ?, ?)";
    db.query(query, [title, price, category_id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },
  get: (id, callback) => {
    const query = `SELECT products.*, categories.name AS category_name 
                 FROM products 
                 LEFT JOIN categories ON products.category_id = categories.id
                 WHERE products.id = ?`;
    db.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },
};

module.exports = Product;
