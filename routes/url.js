const express = require('express');

const urlController = require('../controller/url');

const router = express.Router();

router.post('/add-url', urlController.addUrl);

module.exports = router;