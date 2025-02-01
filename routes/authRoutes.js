const express = require("express");
const router = express.Router();
const authController = require("../controllers/authControllers");

router.get('/',authController.logout)
router.post("/", authController.register);
router.post("/", authController.login);
//router.post("/", authController.logout);

module.exports = router;
