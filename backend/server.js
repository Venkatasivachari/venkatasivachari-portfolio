const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Validation middleware
const contactValidation = [
  body('name').trim().isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('subject').trim().isLength({ min: 5, max: 100 }).withMessage('Subject must be between 5 and 100 characters'),
  body('message').trim().isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters')
];

const resumeValidation = [
  body('name').trim().isLength({ min: 2, max: 50 }).withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('title').trim().isLength({ min: 2, max: 100 }).withMessage('Job title is required')
];

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Contact form submission
app.post('/api/contact', contactValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const { name, email, subject, message } = req.body;

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent from your portfolio website contact form.
          </p>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Venkata Siva Chary',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for your message. I've received your inquiry about "${subject}" and will get back to you as soon as possible.</p>
          <p>In the meantime, feel free to check out my latest projects and skills on my portfolio website.</p>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3b82f6; margin-top: 0;">Quick Links:</h3>
            <ul>
              <li><a href="https://venkatasivachary.vercel.app/#projects" style="color: #3b82f6;">View My Projects</a></li>
              <li><a href="https://venkatasivachary.vercel.app/#skills" style="color: #3b82f6;">Check My Skills</a></li>
              <li><a href="https://github.com/venkatasivachary" style="color: #3b82f6;">GitHub Profile</a></li>
              <li><a href="https://www.linkedin.com/in/venkata-siva-chary/" style="color: #3b82f6;">LinkedIn Profile</a></li>
            </ul>
          </div>
          <p>Best regards,<br>Venkata Siva Chary</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `
    };

    await transporter.sendMail(autoReplyOptions);

    res.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Resume generation
app.post('/api/generate-resume', resumeValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const { name, email, title, summary, experience, education, skills, projects } = req.body;

    // Create PDF
    const doc = new PDFDocument();
    const buffers = [];
    
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      const pdfData = Buffer.concat(buffers);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="${name}-resume.pdf"`);
      res.send(pdfData);
    });

    // PDF Content
    doc.fontSize(24).text(name, 50, 50);
    doc.fontSize(12).text(title, 50, 80);
    doc.text(email, 50, 100);
    
    let yPosition = 130;

    if (summary) {
      doc.fontSize(16).text('Professional Summary', 50, yPosition);
      yPosition += 30;
      doc.fontSize(10).text(summary, 50, yPosition, { width: 500 });
      yPosition += 60;
    }

    if (experience) {
      doc.fontSize(16).text('Experience', 50, yPosition);
      yPosition += 30;
      doc.fontSize(10).text(experience, 50, yPosition, { width: 500 });
      yPosition += 60;
    }

    if (education) {
      doc.fontSize(16).text('Education', 50, yPosition);
      yPosition += 30;
      doc.fontSize(10).text(education, 50, yPosition, { width: 500 });
      yPosition += 60;
    }

    if (skills) {
      doc.fontSize(16).text('Skills', 50, yPosition);
      yPosition += 30;
      doc.fontSize(10).text(skills, 50, yPosition, { width: 500 });
      yPosition += 60;
    }

    if (projects) {
      doc.fontSize(16).text('Projects', 50, yPosition);
      yPosition += 30;
      doc.fontSize(10).text(projects, 50, yPosition, { width: 500 });
    }

    doc.end();

  } catch (error) {
    console.error('Resume generation error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to generate resume. Please try again later.' 
    });
  }
});

// Analytics endpoint (for tracking portfolio views)
app.post('/api/analytics', (req, res) => {
  try {
    const { page, timestamp, userAgent } = req.body;
    
    // Here you would typically save to a database
    console.log('Analytics:', { page, timestamp, userAgent });
    
    res.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ success: false });
  }
});

// Newsletter subscription
app.post('/api/newsletter', [
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const { email } = req.body;

    // Here you would typically save to a database
    console.log('Newsletter subscription:', email);

    res.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter!' 
    });

  } catch (error) {
    console.error('Newsletter error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to subscribe. Please try again later.' 
    });
  }
});

// AI Chat endpoint (OpenAI / generic LLM provider)
app.post('/api/chat', [
  body('message').trim().isLength({ min: 1 }).withMessage('Message is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { message, history = [] } = req.body;

    // If no API key configured, return a friendly fallback
    if (!process.env.OPENAI_API_KEY) {
      return res.json({
        success: true,
        fromFallback: true,
        reply:
          "AI chat backend is not configured with an API key yet.\n\n" +
          "However, here's some information about Venkata Siva Chary:\n" +
          "- B.Tech student focusing on AI, full stack, and Java.\n" +
          "- Key projects: CGPA Calculator Web App, AI Job Recommendation System, Personal Portfolio, Resume Generator AI Tool.\n" +
          "- Strong in Python, React, JavaScript, FastAPI/Express, MySQL, MongoDB.\n" +
          "Please ask the site owner to set OPENAI_API_KEY in backend/.env for real-time AI answers."
      });
    }

    const apiUrl = process.env.OPENAI_API_URL || 'https://api.openai.com/v1/chat/completions';
    const model = process.env.OPENAI_MODEL || 'gpt-3.5-turbo';

    // Build chat history: system + previous messages + new user message
    const messagesPayload = [
      {
        role: 'system',
        content:
          'You are an AI assistant embedded in the personal portfolio of "Venkata Siva Chary". ' +
          'Answer ONLY about his skills, projects, education, services, and how to contact or hire him. ' +
          'Be concise and friendly. If asked something unrelated, gently bring the topic back to his profile.'
      },
      ...history.map((m) => ({
        role: m.isBot ? 'assistant' : 'user',
        content: m.text
      })),
      { role: 'user', content: message }
    ];

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model,
        messages: messagesPayload,
        temperature: 0.3
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      return res.status(500).json({
        success: false,
        message: 'AI service error. Please try again later.'
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || "I'm not sure how to answer that right now.";

    res.json({
      success: true,
      reply
    });
  } catch (error) {
    console.error('Chat endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process chat message.'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!' 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email configured: ${process.env.EMAIL_USER ? 'Yes' : 'No'}`);
  console.log(`🌐 CORS enabled for: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});

module.exports = app;








