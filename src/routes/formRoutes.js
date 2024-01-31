import express from "express";
import nodemailer from "nodemailer";
import { SendEmailTemplate } from "../emailTemplate.js";

import 'dotenv/config';

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        if(!name || !email || !subject || !message)
        {
            return res.status(404).json({ok: false, message: "Please enter all the required fields"});
        }
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `Message from ${email} through portfolio`,
            html: SendEmailTemplate(name, email, subject, message),
        };

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                return res.status(500).json({ ok: false, msg: "Failed to send mail" });
            } else {
                return res.status(200).json({ ok: true, msg: "form submitted successfully" });
            }
        });

    } catch (error) {
        console.error('Error sending mail', error);
        res.status(500).send('Internal Server error')
    }
});

export default router;