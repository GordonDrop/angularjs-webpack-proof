// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // The regexp pattern or array of patterns that Jest uses to detect test files
  testRegex: [/.+\.spec\.js$/],
  roots: ['src'],
  setupFilesAfterEnv: ['angular', 'angular-mocks'],
  verbose: true,
  moduleFileExtensions: ['js', 'html'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.html$': 'html-loader-jest',
  },
};
