const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// route → controller mapping
router.get("/hello", userController.getHello);
router.get("/users", userController.getUsers);

module.exports = router;
