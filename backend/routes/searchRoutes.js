const express = require("express");
const { processQuery } = require("../controllers/searchController");
const router = express.Router();

router.post("/", processQuery);

module.exports = router;
