const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const itemController = require("../controllers/stats");
const isAuth = require('../middleware/is-auth');

// search name
router.get("/:itemName", isAuth, itemController.getItem);


module.exports = router;
