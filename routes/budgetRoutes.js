const express = require("express");
const router = express.Router();
const budgetController = require("../controllers/budgetControllers");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/createBudget", authMiddleware, budgetController.createBudget);
router.get("/getBudgets", authMiddleware, budgetController.getBudgets);

module.exports = router;