const router = require('express').Router();

const QrCodeRouter  = require('./qrCodeRouter');

router.use('/qrcode', QrCodeRouter);

module.exports = router;