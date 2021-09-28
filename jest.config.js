module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // node | jsdom
  snapshotSerializers: ['miniprogram-simulate/jest-snapshot-plugin'],
  setupFiles: ['./test/setup.js']
}
