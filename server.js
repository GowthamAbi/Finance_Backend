const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const goalRoutes = require("./routes/goalRoutes");
const reportRoutes = require("./routes/reportRoutes");
const authMiddleware = require("./middleware/authMiddleware");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
  console.log("authMiddleware:", typeof authMiddleware);
  console.log("authMiddleware:", typeof authMiddleware);
console.log("authRoutes:", typeof authRoutes);
console.log("expenseRoutes:", typeof expenseRoutes);
console.log("budgetRoutes:", typeof budgetRoutes);
console.log("goalRoutes:", typeof goalRoutes);
console.log("reportRoutes:", typeof reportRoutes);

// Routes
app.use("/api/auth", authRoutes); // Public routes
app.use("/api/expenses", authMiddleware, expenseRoutes);
app.use("/api/budgets", authMiddleware, budgetRoutes);
app.use("/api/goals", authMiddleware, goalRoutes);
app.use("/api/reports", authMiddleware, reportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '127.0.0.1',() => console.log(`Server running @ http://127.0.0.1:${PORT}`));
