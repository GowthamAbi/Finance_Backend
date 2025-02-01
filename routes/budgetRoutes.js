const express = require("express");
const router = express.Router();
const budgetController = require("../controllers/budgetControllers");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, budgetController.createBudget);
router.get("/", authMiddleware, budgetController.getBudgets);

module.exports = router;
