const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalControllers");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/createGoal", authMiddleware, goalController.createGoal);
router.get("/getGoals", authMiddleware, goalController.getGoals);

module.exports = router;