const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");
const { authenticateJWT } = require("../middleware/authMiddleware");

router.post(
  "/transactions",
  authenticateJWT,
  transactionController.addTransaction
);
router.get(
  "/transactions",
  authenticateJWT,
  transactionController.getTransactions
);
router.get(
  "/transactions/:id",
  authenticateJWT,
  transactionController.getTransactionById
);
router.put(
  "/transactions/:id",
  authenticateJWT,
  transactionController.updateTransaction
);
router.delete(
  "/transactions/:id",
  authenticateJWT,
  transactionController.deleteTransaction
);
router.get("/summary", authenticateJWT, transactionController.getSummary);
router.get(
  "/summary/monthly",
  authenticateJWT,
  transactionController.getMonthlySummary
);
router.get(
  "/summary/category",
  authenticateJWT,
  transactionController.getCategorySummary
);

module.exports = router;
