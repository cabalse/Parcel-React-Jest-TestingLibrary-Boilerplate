import type {Config} from 'jest';

const config: Config = {
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.[jt]sx?$": "babel-jest",
    },
    transformIgnorePatterns: ["node_modules/?!(react-icons)"],
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
};

export default config;