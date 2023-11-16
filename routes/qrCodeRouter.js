const router = require('express').Router();
const QrCodeController = require('../controllers/QrCodeController.js');

router.post('/', QrCodeController.generateQRCode);

module.exports = router;