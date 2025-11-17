export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '\\w+\\.test\\.ts$',
  maxWorkers: 2,
  transform: {
    '^.+\\.ts$': ['ts-jest', { isolatedModules: true }],
  },
};
