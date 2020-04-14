//jshint strict: false
module.exports = function (config) {
  config.set({
    basePath: './src',
    files: ['index.ts', '**/*.ts'],
    preprocessors: {
      '**/*.ts': ['karma-typescript'],
    },
    reporters: ['progress', 'karma-typescript'],
    frameworks: ['jasmine', 'karma-typescript'],
    browsers: ['ChromeHeadless'],
    plugins: ['karma-typescript', 'karma-jasmine', 'karma-jasmine-html-reporter', 'karma-chrome-launcher'],
    karmaTypescriptConfig: {
      tsconfig: '../tsconfig.json',
    },
    client: {
      clearContext: false,
    },
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
  });
};
