export default {
    rootDir: '../../', 
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/tests/functionnal/setup.js'],
    testMatch: [
        '<rootDir>/tests/unit/*.test.js',
        '<rootDir>/tests/functionnal/*.test.js',
    ],
    transform: {}, // Eviter les erreurs de syntaxe ES6 
}