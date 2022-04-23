const express = require('express');

const urlController = require('../controller/url');

const router = express.Router();

//url: /api/add-rul
router.post('/add-url', urlController.addUrl);

module.exports = router;