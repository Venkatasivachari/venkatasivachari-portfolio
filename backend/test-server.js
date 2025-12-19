// Quick test script to check backend setup
const fs = require('fs');
const path = require('path');

console.log('🔍 Backend Diagnostic Check\n');

// Check 1: Node version
console.log('1. Node.js Version:', process.version);

// Check 2: Required files exist
const requiredFiles = [
  'server.js',
  'package.json',
  '.env'
];

console.log('\n2. Checking required files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`   ${exists ? '✅' : '❌'} ${file}`);
});

// Check 3: Check dependencies
console.log('\n3. Checking dependencies:');
try {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
  const requiredDeps = ['express', 'cors', 'dotenv', 'node-fetch'];
  
  requiredDeps.forEach(dep => {
    const exists = packageJson.dependencies && packageJson.dependencies[dep];
    console.log(`   ${exists ? '✅' : '❌'} ${dep}`);
  });
} catch (e) {
  console.log('   ❌ Error reading package.json:', e.message);
}

// Check 4: Try to load server
console.log('\n4. Testing server.js syntax:');
try {
  require('./server.js');
  console.log('   ✅ server.js loaded successfully');
} catch (e) {
  console.log('   ❌ Error loading server.js:', e.message);
  console.log('   Stack:', e.stack);
}

// Check 5: Environment variables
console.log('\n5. Environment variables:');
require('dotenv').config();
const envVars = ['PORT', 'FRONTEND_URL', 'EMAIL_USER', 'OPENAI_API_KEY'];
envVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    // Mask sensitive values
    const displayValue = varName.includes('KEY') || varName.includes('PASS') 
      ? value.substring(0, 10) + '...' 
      : value;
    console.log(`   ✅ ${varName} = ${displayValue}`);
  } else {
    console.log(`   ⚠️  ${varName} = NOT SET`);
  }
});

console.log('\n✅ Diagnostic complete!');
console.log('\nTo start the server, run: npm start');

