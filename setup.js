const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create project directory
const projectDir = path.join(__dirname, 'ali-trafikskola');
if (!fs.existsSync(projectDir)) {
  fs.mkdirSync(projectDir, { recursive: true });
}

console.log('Creating Next.js app...');
const process = spawn('npx', ['create-next-app@latest', '.', '--typescript', '--tailwind', '--eslint'], {
  cwd: projectDir,
  stdio: 'inherit', 
});

// This script doesn't handle the interactive prompts, you'll need to answer them manually