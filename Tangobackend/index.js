const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com', // Make sure to use the correct SMTP host
    port: 465, // Port for SSL
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'sendmail@targuwanagro.com', // Your Hostinger email
        pass: 'Targu5677%6', // Your Hostinger email password
    },
    });

    const mailOptions = {
        from: "sendmail@targuwanagro.com", // Sender's email
        to: 'svs.mohit@gmail.com', // Receiver's email
        subject: `Contact Form Submission from ${name}`,
        text: `You have a new contact form submission from:
            Name: ${name}
            Email: ${email}
            Phone:${phone}
            Message: ${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
            return res.status(500).json({ message: 'Failed to send email', error });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
