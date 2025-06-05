const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const nodemailer = require('nodemailer')
const rateLimit = require('express-rate-limit')

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    status: 429,
    error: 'Too many requests, please try again later.'
  }
})
app.use('/api/contact', limiter)

// Nodemailer configuration
const { createTransport } = nodemailer
const transporter = createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill all required fields'
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    })
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
    <h2 style="color: #2c3e50; text-align: center; border-bottom: 2px solid #3498db; padding-bottom: 10px;">Desktop Support Engineer Inquiry</h2>
    
    <table style="width: 100%; margin-top: 20px; font-size: 15px; color: #333;">
      <tr>
        <td style="font-weight: bold; width: 30%;">Full Name:</td>
        <td>${name}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Email:</td>
        <td>${email}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Subject:</td>
        <td>${subject}</td>
      </tr>
    </table>

    <div style="margin-top: 25px; padding: 15px; background-color: #ecf0f1; border-left: 4px solid #3498db; border-radius: 5px;">
      <h3 style="margin-top: 0; color: #2c3e50;">Message</h3>
      <p style="white-space: pre-line; font-size: 14px; color: #34495e;">${message}</p>
    </div>

    <p style="margin-top: 30px; font-size: 12px; color: #7f8c8d; text-align: center;">
      This message was sent via your Desktop Support Engineer contact form.
    </p>
  </div>
`
    }

    await transporter.sendMail(mailOptions)

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!'
    })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
