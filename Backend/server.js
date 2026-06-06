import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import Contact from './models/Contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

// Email Configuration - Using SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP Connection Error:', error.message);
    console.error('Check your GMAIL_USER and GMAIL_PASSWORD in .env');
    console.error('Make sure 2-Step Verification is ON and you are using a Gmail App Password (16 chars)');
  } else {
    console.log('✅ SMTP Connection Verified - Ready to send emails to', process.env.GMAIL_USER);
  }
});

// Function to send email
const RECIPIENT_EMAIL = 'pkaran0510@gmail.com'; // Hardcoded recipient

const sendEmail = async (name, email, message) => {
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: RECIPIENT_EMAIL,
    subject: `🚀 New Contact from ${name} - Portfolio`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 30px; border-radius: 12px; border: 1px solid #00ffff33;">
        <h2 style="color: #00ffff; margin-bottom: 24px;">📬 New Portfolio Contact</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #aaa; width: 100px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #fff; font-weight: bold;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #aaa;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #333;"><a href="mailto:${email}" style="color: #00ffff;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #aaa; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #fff;">${message.replace(/\n/g, '<br>')}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; color: #555; font-size: 12px;">Sent via your Karan Orbit Portfolio · ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('✅ Email sent successfully! Message ID:', info.messageId);
  return info;
};

// Root Route
app.get('/', (req, res) => {
  res.json({ 
    message: 'KARAN PATEL Portfolio Backend API',
    status: 'Running',
    endpoints: {
      test: 'GET /api/test',
      contact: 'POST /api/contact'
    }
  });
});

// Test Route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

// Contact Form Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    
    console.log('Contact message saved:', { name, email, message });
    
    // Send email notification
    try {
      await sendEmail(name, email, message);
      console.log(`📧 Email sent to ${RECIPIENT_EMAIL}`);
    } catch (emailError) {
      console.error('❌ Email failed (data still saved to DB):', emailError.message);
      // Don't fail the request just because email failed
    }
    
    res.status(200).json({ 
      message: 'Message sent successfully',
      data: newContact
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start Server (local dev only)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Export for Vercel Serverless
export default app;
