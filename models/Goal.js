const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  deadline: { type: Date, required: true },
  progress: { type: Number, default: 0 },
});

module.exports = mongoose.model("Goal", goalSchema);