const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseControllers");
const authMiddleware = require("../middleware/authMiddleware");

// Add Expense
router.post("/addExpense", authMiddleware, expenseController.addExpense);

// Get Expenses
router.get("/getExpenses", authMiddleware, expenseController.getExpenses);

// Delete Expense
router.delete("/deleteExpense/:id", authMiddleware, expenseController.deleteExpense);

// Update Expense
router.put("/updateExpense/:id", authMiddleware, expenseController.updateExpense);

module.exports = router;