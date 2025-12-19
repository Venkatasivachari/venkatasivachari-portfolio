# Quick Setup Guide

## 🚀 Quick Start

### Option 1: Automated Setup (Windows)
```bash
# Run the installation script
install.bat
```

### Option 2: Manual Setup

1. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

3. **Configure Environment**
   ```bash
   # Copy environment template
   copy backend\env.example backend\.env
   
   # Edit backend\.env with your email settings
   ```

## 🔧 Configuration

### Email Setup (Required for Contact Form)
1. Open `backend\.env`
2. Update the following:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CONTACT_EMAIL=venkatasivachary@example.com
   ```

### Gmail App Password Setup
1. Enable 2-factor authentication on Gmail
2. Go to Google Account Settings > Security
3. Generate an "App Password" for this application
4. Use the app password in `EMAIL_PASS`

## 🚀 Running the Application

### Development Mode
```bash
# Terminal 1 - Frontend
npm start

# Terminal 2 - Backend
cd backend
npm start
```

### Production Build
```bash
# Build frontend
npm run build

# Start backend
cd backend
npm start
```

## 📁 Project Structure
```
sivaportfolio/
├── src/                    # React frontend
├── backend/               # Express.js backend
├── public/                # Static files
└── package.json          # Frontend dependencies
```

## 🛠️ Troubleshooting

### Common Issues

1. **Missing Dependencies**
   ```bash
   npm install
   cd backend && npm install
   ```

2. **Port Already in Use**
   - Frontend: Change port in package.json scripts
   - Backend: Change PORT in backend\.env

3. **Email Not Working**
   - Check EMAIL_USER and EMAIL_PASS in backend\.env
   - Ensure Gmail app password is correct
   - Check if 2FA is enabled on Gmail

4. **Build Errors**
   ```bash
   # Clear cache and reinstall
   npm cache clean --force
   rm -rf node_modules
   npm install
   ```

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify environment variables are set correctly
4. Check if ports 3000 and 5000 are available

## 🎯 Next Steps

1. Customize personal information in components
2. Add your projects and skills
3. Update contact information
4. Deploy to Vercel/Netlify (frontend) and Render/Heroku (backend)








