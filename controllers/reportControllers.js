const Expense = require("../models/Expense");
const Budget = require("../models/Budget");
const Goal = require("../models/Goal");
const generatePdf = require("../utils/generatePdf");
const generateCsv = require("../utils/generateCsv");

// Generate Expense Report
exports.generateExpenseReport = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id });
    const pdf = generatePdf(expenses);
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdf);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Generate CSV Report
exports.generateCsvReport = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id });
    const csv = generateCsv(expenses);
    res.setHeader("Content-Type", "text/csv");
    res.send(csv);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};