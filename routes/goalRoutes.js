const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalControllers");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, goalController.createGoal);
router.get("/", authMiddleware, goalController.getGoals);

module.exports = router;
