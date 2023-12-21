const fs = require('fs');
const dotenv = require('dotenv');

// Load .env file
const envConfig = dotenv.parse(fs.readFileSync('.env'));

// Convert to Angular environment format with line breaks
const angularProdEnvConfig = {
  production: false,
  ...envConfig,
};

// Convert the object to a string with line breaks
const angularEnvString = `export const environment = ${JSON.stringify(angularProdEnvConfig, null, 2)};`;

// Write to environment file
fs.writeFileSync('./src/environments/environment.ts', angularEnvString);

console.log('Environment file generated successfully.');
