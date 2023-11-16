const router = require('express').Router();

const QrCodeRouter  = require('./qrCodeRouter.js');

router.use('/qrcode', QrCodeRouter);

module.exports = router;