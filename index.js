const fs = require('fs');
const qrcode = require('qrcode');

function generateQRCode(link, outputFileName) {
  qrcode.toFile(outputFileName, link, (err) => {
    if (err) {
      console.error('Error generating QR code:', err);
    } else {
      console.log(`QR code image saved as ${outputFileName}`);
    }
  });
}

// Usage:
const link = ''; // Replace with your link
const outputFileName = 'qrcode.png'; // Replace with the desired output file name
generateQRCode(link, outputFileName);
