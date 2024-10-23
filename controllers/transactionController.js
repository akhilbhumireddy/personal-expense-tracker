const transactionModel = require("../models/transactionModel");

// Add new transaction
exports.addTransaction = (req, res) => {
  const data = req.body;
  transactionModel.addTransaction(data, (err, id) => {
    if (err) return res.status(500).send("Failed to add transaction");
    res.status(201).send({ id });
  });
};

// Get all transactions with pagination
exports.getTransactions = (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const offset = (page - 1) * limit;

  transactionModel.getTransactions(limit, offset, (err, transactions) => {
    if (err) return res.status(500).send("Error fetching transactions");
    res.send(transactions);
  });
};

// Get transaction by ID
exports.getTransactionById = (req, res) => {
  const { id } = req.params;
  transactionModel.getTransactionById(id, (err, transaction) => {
    if (err) return res.status(500).send("Error fetching transaction");
    if (!transaction) return res.status(404).send("Transaction not found");
    res.send(transaction);
  });
};

// Update transaction
exports.updateTransaction = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  transactionModel.updateTransaction(id, data, (err, changes) => {
    if (err) return res.status(500).send("Error updating transaction");
    if (changes === 0) return res.status(404).send("Transaction not found");
    res.send("Transaction updated");
  });
};

// Delete transaction
exports.deleteTransaction = (req, res) => {
  const { id } = req.params;
  transactionModel.deleteTransaction(id, (err, changes) => {
    if (err) return res.status(500).send("Error deleting transaction");
    if (changes === 0) return res.status(404).send("Transaction not found");
    res.send("Transaction deleted");
  });
};

// Get summary
exports.getSummary = (req, res) => {
  transactionModel.getSummary((err, summary) => {
    if (err) return res.status(500).send("Error fetching summary");
    res.send(summary);
  });
};

// Get monthly summary
exports.getMonthlySummary = (req, res) => {
  transactionModel.getMonthlySummary((err, summary) => {
    if (err) return res.status(500).send("Error fetching monthly summary");
    res.send(summary);
  });
};

// Get category-based summary
exports.getCategorySummary = (req, res) => {
  transactionModel.getCategorySummary((err, summary) => {
    if (err) return res.status(500).send("Error fetching category summary");
    res.send(summary);
  });
};
