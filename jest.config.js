// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testURL: 'http://localhost',
  clearMocks: true,               // 每次测试之间自动清除模拟调用和实例
  coverageDirectory: "coverage",  // 输出覆盖率
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.spec.js'],
};
