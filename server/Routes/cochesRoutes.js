
const express = require('express');
const router = express.Router();
const { handleCarsNews } = require("../Handlers/cochesHandler")


router.get('/cars-news', handleCarsNews);

module.exports = router;
