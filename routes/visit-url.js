const express = require("express");

const urlController = require("../controller/url");

const router = express.Router();

router.get("/:urlId", urlController.visitUrl);

module.exports = router;
