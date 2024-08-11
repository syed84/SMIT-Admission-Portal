const PDFDocument = require('pdfkit');
const QRCode = require('qrcode');
const userModel = require('../models/user.model');


const getIdCard = async (req, res) => {
    const { name, studentId, email, serialNo } = req.body;
    const user = await userModel.findOne({ email });

    const qrCodeUrl = await QRCode.toDataURL(`Name: ${name}, ID: ${studentId}, Email: ${email}, Serial No: ${serialNo}`);

    const doc = new PDFDocument();

    let filename = `${name}`;
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '.pdf"');
    res.setHeader('Content-type', 'application/pdf');

    doc.pipe(res);

    // Create the ID card content
    doc.fontSize(25).text('ID Card', 100, 50);
    doc.fontSize(20).text(`Name: ${name}`, 100, 100);
    doc.fontSize(20).text(`ID: ${studentId}`, 100, 130);
    doc.fontSize(20).text(`Email: ${email}`, 100, 160);
    doc.fontSize(20).text(`Serial No: ${serialNo}`, 100, 190);

    // Add QR Code
    doc.image(qrCodeUrl, 100, 220, { width: 100, height: 100 });

    doc.end();
}



module.exports = { getIdCard }