const router = require('express').Router();
const QrCodeController = require('../Controllers/QrCodeController.js');

router.post('/', QrCodeController.generateQRCode);

module.exports = router;