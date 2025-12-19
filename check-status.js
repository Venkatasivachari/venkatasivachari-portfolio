const fs = require('fs');
const path = require('path');

console.log('🔍 Checking Portfolio Status...\n');

// Check if all required files exist
const requiredFiles = [
  'package.json',
  'src/App.js',
  'src/index.js',
  'src/index.css',
  'src/contexts/ThemeContext.js',
  'src/components/Navbar.js',
  'src/components/Hero.js',
  'src/components/About.js',
  'src/components/Skills.js',
  'src/components/Courses.js',
  'src/components/Projects.js',
  'src/components/Services.js',
  'src/components/Participation.js',
  'src/components/ResumeGenerator.js',
  'src/components/Contact.js',
  'src/components/Footer.js',
  'src/components/ScrollProgress.js',
  'src/components/BackToTop.js',
  'src/components/AIChatbot.js',
  'src/components/Particles.js',
  'src/components/AnimatedCounter.js',
  'backend/server.js',
  'backend/package.json',
  'tailwind.config.js',
  'postcss.config.js',
  'public/index.html',
  'public/manifest.json'
];

let allFilesExist = true;
const missingFiles = [];

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
    missingFiles.push(file);
  }
});

console.log('\n📊 Status Summary:');
console.log(`Total files checked: ${requiredFiles.length}`);
console.log(`Files found: ${requiredFiles.length - missingFiles.length}`);
console.log(`Missing files: ${missingFiles.length}`);

if (allFilesExist) {
  console.log('\n🎉 All files are present! Portfolio is ready to run.');
  console.log('\n🚀 Next steps:');
  console.log('1. Run: npm install');
  console.log('2. Run: cd backend && npm install');
  console.log('3. Configure backend/.env with your email settings');
  console.log('4. Run: npm start (frontend)');
  console.log('5. Run: cd backend && npm start (backend)');
} else {
  console.log('\n⚠️  Some files are missing. Please check the missing files above.');
}

console.log('\n📁 Project Structure:');
console.log('├── src/ (React frontend)');
console.log('├── backend/ (Express.js API)');
console.log('├── public/ (Static files)');
console.log('└── Configuration files');








