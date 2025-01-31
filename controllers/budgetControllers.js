const Budget = require("../models/Budget");

// Create Budget
exports.createBudget = async (req, res) => {
  const { category, limit } = req.body;
  try {
    const budget = new Budget({ userId: req.user.id, category, limit });
    await budget.save();
    res.status(201).json(budget);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get Budgets
exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({ userId: req.user.id });
    res.status(200).json(budgets);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};