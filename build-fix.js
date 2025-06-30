const { execSync } = require('child_process');

// Run the Angular build
console.log('Building Angular app...');
try {
  execSync('ng build --configuration production', { stdio: 'inherit' });
  console.log('Angular build completed successfully.');
} catch (error) {
  console.error('Angular build failed:', error);
  process.exit(1);
}

console.log('Build completed successfully!');