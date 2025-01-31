const Expense = require("../models/Expense");

// Add Expense
exports.addExpense = async (req, res) => {
  const { amount, category, description } = req.body;
  try {
    const expense = new Expense({
      userId: req.user.id,
      amount,
      category,
      description,
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get Expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    if (expense.userId.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await expense.remove();
    res.status(200).json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update Expense
exports.updateExpense = async (req, res) => {
  const { amount, category, description } = req.body;
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    if (expense.userId.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    expense.amount = amount;
    expense.category = category;
    expense.description = description;
    await expense.save();

    res.status(200).json(expense);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};