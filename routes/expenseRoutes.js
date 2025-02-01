const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseControllers");
const authMiddleware = require("../middleware/authMiddleware");

// Add Expense
router.post("/", authMiddleware, expenseController.addExpense);

// Get Expenses
router.get("/", authMiddleware, expenseController.getExpenses);

// Delete Expense
router.delete("/:id", authMiddleware, expenseController.deleteExpense);

// Update Expense
router.put("/:id", authMiddleware, expenseController.updateExpense);

module.exports = router;
