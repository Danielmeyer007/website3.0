const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const devDependencies = packageJson.devDependencies || {};

const missingDependencies = [];

for (const [dep, version] of Object.entries(devDependencies)) {
  try {
    execSync(`npm ls ${dep}@${version}`, { stdio: 'ignore' });
  } catch (error) {
    missingDependencies.push(`${dep}@${version}`);
  }
}

if (missingDependencies.length > 0) {
  console.log('Missing development dependencies:');
  missingDependencies.forEach(dep => console.log(dep));
} else {
  console.log('All development dependencies are installed.');
}
