const nextJest = require('next/jest')

/** @type {import('jest').Config} */
// Provide the path to your Next.js app to load next.config.js and .env files
const createJestConfig = nextJest({ dir: './' })

// Custom Jest configuration
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Path to your jest.setup.js file
  testEnvironment: 'jsdom', // Use jsdom to simulate a browser-like environment
  // Other custom configurations can go here
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
}

// Export the Jest configuration
module.exports = createJestConfig(customJestConfig)
