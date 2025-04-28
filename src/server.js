import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["POST"]
}));

app.post("/send-email", async (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: "Tüm alanları doldurmanız gerekiyor." });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "MİU Games Sitesinden Yeni Bir Mesaj",
        text: `İsim: ${firstName}\nSoyad: ${lastName}\nE-posta: ${email}\nMesaj: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("E-posta başarıyla gönderildi!");
        res.status(200).json({ message: "E-posta başarıyla gönderildi!" });
    } catch (error) {
        console.error(" E-posta gönderme hatası:", error);
        res.status(500).json({ error: "E-posta gönderilirken hata oluştu." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
