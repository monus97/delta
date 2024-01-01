const express = require("express");
const router = express.Router();
const itemData = require("../controller/itemController");

router.post("/add", itemData.addItem);
router.get("/allitems", itemData.getAllItems);

module.exports = router;
