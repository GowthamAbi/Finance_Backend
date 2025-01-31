const Goal = require("../models/Goal");

// Create Goal
exports.createGoal = async (req, res) => {
  const { name, targetAmount, deadline } = req.body;
  try {
    const goal = new Goal({ userId: req.user.id, name, targetAmount, deadline });
    await goal.save();
    res.status(201).json(goal);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get Goals
exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.user.id });
    res.status(200).json(goals);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};