const db = require('../config/db')

const Category =  {

getAll: (callback) => {

     const query = 'SELECT * FROM categories';
     db.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
},

create: (name, callback) => {
    const query = 'INSERT INTO categories (name) VALUES (?)';
    
    db.query(query, [name], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

}

module.exports = Category;