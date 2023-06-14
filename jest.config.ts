import nextJest from 'next/jest';
import type { Config } from 'jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
  ], //Jest가 테스트 파일을 검색하는 데 사용할 패턴을 지정
  moduleNameMapper: {
    // Handle module aliases
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
  },
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.{ts, tsx}',
    '!**/node_modules/**',
    '!**/*.stories',
  ], //테스트에 포함할 정보의 범위 지정 및 제외
  verbose: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};

export default createJestConfig(customJestConfig);
