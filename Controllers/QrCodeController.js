const fs = require("fs");
const qrcode = require("qrcode");

class QrCode {
  static async generateQRCode(req, res) {
    try {
      if (!req.body.text) throw new Error("Text is required!");
      const pngBuffer = await qrcode.toBuffer(req.body.text);
      res.type("png");
      res.send(pngBuffer);
    } catch (error) {
      console.error("Error generating QR code:", error.message);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = QrCode;
