const db = require('../db');
// const { param } = require('../routes');

module.exports = {
  items: {
    get: (callback) => {
      // TODO: Cmarket의 모든 상품을 가져오는 함수를 작성하세요
      const queryString = `SELECT * FROM items`;

      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
  },
  orders: {
    get: (userId, callback) => {
      // TODO: 해당 유저가 작성한 모든 주문을 가져오는 함수를 작성하세요
      const queryString = `SELECT orders.id, orders.created_at, orders.total_price, items.name, items.price, items.image, order_items.order_quantity FROM items
      INNER JOIN order_items ON (order_items.item_id = items.id)
      INNER JOIN orders ON (orders.id = order_items.order_id)
      WHERE (orders.user_id = ?)`;
      const params = [userId];
      db.query(queryString, params, (err, result) => {
        callback(err, result);
      });
    },
    post: (userId, orders, totalPrice, callback) => {
      // TODO: 해당 유저의 주문 요청을 데이터베이스에 생성하는 함수를 작성하세요
      const queryString = `
      INSERT INTO orders (user_id, total_price) VALUES (?, ?);
      `;
      const params = [userId, totalPrice];
      db.query(queryString, params, (err, result) => {
        if (result) {
          const queryString2 = `INSERT INTO order_items (order_id, order_quantity, item_id) VALUES ?`;
          const params2 = orders.map((e) => [
            result.insertId,
            e.quantity,
            e.itemId,
          ]);
          return db.query(queryString2, [params2], (err2, result2) => {
            callback(err2, result2);
          });
        }
        callback(err, null);
      });
    },
  },
};
