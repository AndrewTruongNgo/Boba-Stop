const mysql = require('mysql');

const db_config = {
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
}

let connection = mysql.createPool(db_config);

// connection.connect((error) => {
//   if (error) {
//     console.log('ERROR database connection failed', error)
//   } else {
//     console.log('Database connection successful!')
//   }
// });

// const reconnect = () => {
//   connection = mysql.createConnection(db_config);
//   connection.connect((error) => {
//     if (error) {
//       console.log('ERROR database connection failed', error)
//     } else {
//       console.log('Database connection successful!')
//     }
//   });
// }

const findAllStores = (callback) => {
  connection.query('SELECT * FROM stores', (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const findStore = (storeID, callback) => {
  connection.query(`SELECT * FROM stores WHERE store_ID = ${storeID}`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const updateLikes = (store, callback) => {
  connection.query(`UPDATE stores SET likes = ${store.likes}, liked = ${store.liked} WHERE store_id = ${store.storeID}`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const findComments = (storeID, callback) => {
  connection.query(`SELECT comments.name, comments.comment, comments.store_id FROM comments INNER JOIN stores ON stores.store_id = comments.store_id WHERE comments.store_id = ${storeID}`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const insertComment = (comment, callback) => {
  connection.query(`INSERT INTO comments (name, comment, store_id) VALUES ('${comment.username}', '${comment.comment}', ${comment.storeID})`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const insertSubscriber = (phoneNumber, callback) => {
  connection.query(`INSERT INTO subscribers (phone_number) VALUES ('${phoneNumber.phoneNumber}')`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.findAllStores = findAllStores;
module.exports.findStore = findStore;
module.exports.updateLikes = updateLikes;
module.exports.findComments = findComments;
module.exports.insertComment = insertComment;
module.exports.insertSubscriber = insertSubscriber;
// module.exports.reconnect = reconnect;
