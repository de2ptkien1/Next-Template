const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/lang/(.*)$': '<rootDir>/lang/$1',
    '^@/store/(.*)$': '<rootDir>/store/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  modulePathIgnorePatterns: ["<rootDir>/docker-volumes-data/","<rootDir>/__tests__/initialConfig", "<rootDir>/.next/"],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)