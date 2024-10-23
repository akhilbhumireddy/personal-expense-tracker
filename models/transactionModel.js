const db = require("../config/db");

// Add new transaction
const addTransaction = (data, callback) => {
  const { type, category, amount, date, description } = data;
  db.run(
    `INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`,
    [type, category, amount, date, description],
    function (err) {
      callback(err, this.lastID);
    }
  );
};

// Get all transactions with pagination
const getTransactions = (limit, offset, callback) => {
  db.all(
    `SELECT * FROM transactions LIMIT ? OFFSET ?`,
    [limit, offset],
    (err, rows) => {
      callback(err, rows);
    }
  );
};

// Get transaction by ID
const getTransactionById = (id, callback) => {
  db.get(`SELECT * FROM transactions WHERE id = ?`, [id], (err, row) => {
    callback(err, row);
  });
};

// Update transaction
const updateTransaction = (id, data, callback) => {
  const { type, category, amount, date, description } = data;
  db.run(
    `UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?`,
    [type, category, amount, date, description, id],
    function (err) {
      callback(err, this.changes);
    }
  );
};

// Delete transaction
const deleteTransaction = (id, callback) => {
  db.run(`DELETE FROM transactions WHERE id = ?`, [id], function (err) {
    callback(err, this.changes);
  });
};

// Summary
const getSummary = (callback) => {
  db.all(
    `SELECT 
            type, 
            SUM(amount) as total
        FROM transactions 
        GROUP BY type`,
    [],
    (err, rows) => {
      callback(err, rows);
    }
  );
};

// Monthly Summary
const getMonthlySummary = (callback) => {
  db.all(
    `SELECT strftime('%Y-%m', date) as month, SUM(amount) as total 
         FROM transactions 
         WHERE type = 'expense' 
         GROUP BY month`,
    [],
    (err, rows) => {
      callback(err, rows);
    }
  );
};

// Category Summary
const getCategorySummary = (callback) => {
  db.all(
    `SELECT category, SUM(amount) as total 
         FROM transactions 
         WHERE type = 'expense' 
         GROUP BY category`,
    [],
    (err, rows) => {
      callback(err, rows);
    }
  );
};

module.exports = {
  addTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  getSummary,
  getMonthlySummary,
  getCategorySummary,
};
