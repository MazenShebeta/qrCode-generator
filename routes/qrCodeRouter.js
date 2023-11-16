const router = require('express').Router();
const QrCodeController = require('../controllers/QrCodeController');

router.post('/', QrCodeController.generateQRCode);

module.exports = router;