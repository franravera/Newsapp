
const express = require('express');
const router = express.Router();
const { handleHealthNews} = require ("../Handlers/saludHandler")


router.get('/health-news', handleHealthNews);

module.exports = router;
