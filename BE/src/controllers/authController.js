import { userModel } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

const tempCodes = {};

// Nodemailer transporter yaradılır (gmail nümunəsi)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Login controller
export const loginController = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email və ya şifrə yanlışdır" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Email və ya şifrə yanlışdır" });
    }
    const token = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_KEY);
    res.send(token);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Register controller
export const registerController = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
      role: "user",
    });
    await newUser.save();
    const token = jwt.sign({ username: username, role: "user" }, process.env.JWT_KEY);
    res.send(token);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Forgot password: generate & email code
export const forgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "Email tapılmadı" });

    // 4 rəqəmli kod yaradılır
    const code = Math.floor(1000 + Math.random() * 9000).toString();

    // Kod və müddət yaddaşa yazılır (15 dəqiqəlik keçərlilik)
    tempCodes[email] = { code, expires: Date.now() + 15 * 60 * 1000 };

    // Email göndərmə ayarları
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Şifrə bərpası üçün kod',
      text: `Şifrə bərpası üçün 4 rəqəmli kodunuz: ${code}`
    };

    // Email göndərilir
    await transporter.sendMail(mailOptions);

    res.json({ message: "Kod emailinizə göndərildi" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Verify reset code
export const verifyResetCodeController = (req, res) => {
  const { email, code } = req.body;

  if (!tempCodes[email]) {
    return res.status(400).json({ message: "Kod tapılmadı və ya vaxtı keçib" });
  }
  if (tempCodes[email].expires < Date.now()) {
    delete tempCodes[email];
    return res.status(400).json({ message: "Kodun vaxtı keçib" });
  }
  if (tempCodes[email].code !== code) {
    return res.status(400).json({ message: "Kod yanlışdır" });
  }
  res.json({ message: "Kod təsdiqləndi" });
};

// Reset password controller
export const resetPasswordController = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!tempCodes[email]) {
      return res.status(400).json({ message: "Reset icazəsi yoxdur" });
    }
    if (tempCodes[email].expires < Date.now()) {
      delete tempCodes[email];
      return res.status(400).json({ message: "Kodun vaxtı keçib" });
    }

    // Yeni şifrəni hash edirik
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Verilənlər bazasında şifrəni yeniləyirik
    await userModel.updateOne({ email }, { password: hashedPassword });

    // İcazəni silirik
    delete tempCodes[email];

    res.json({ message: "Şifrə uğurla yeniləndi" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
