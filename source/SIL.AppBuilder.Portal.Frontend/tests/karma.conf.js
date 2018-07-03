
var path = require("path");
var root = path.resolve(__dirname, '..');

console.log('root path: ', root);

var isParallel = process.env.PARALLEL === 'true';

var conditionalPlugins = isParallel ? [ 'karma-parallel' ] : [];
var conditionalFrameworks = isParallel ? [ 'parallel' ] : [];

module.exports = function(config) {
  config.set({
    singleRun: false,
    retryLimit: 5, // hack around concurrency issues....
    basePath: '',
    frameworks: [ ...conditionalFrameworks, 'mocha' ],
    reporters: [ 'mocha' ],
    browsers: ['Chrome'],
    mime: { 'text/x-typescript': ['ts','tsx'] },

    port: 9876,
    colors: true,
    concurrency: 1,
    logLevel: 'DEBUG',

    files: [
      { pattern: path.resolve(root, 'tests/index.ts'), watched: false }
    ],

    exclude: [
      `${root}/dist`,
      `${root}/.cache`,
    ],

    preprocessors: {
      [`${root}/tests/index.ts`]: ['webpack']
    },

    client: {
      mocha: {
        reporter: 'html',
        globals: false,
        timeout: 5000,
        fullTrace: true,
        opts: root + '/tests/mocha.opts'
      },
    },

    webpack: require(__dirname + '/webpack.config.js'),
    webpackMiddleware: { stats: 'minimal' },
    plugins: [
      ...conditionalPlugins,
      'karma-mocha',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
    ],
    parallelOptions: {
      // default to # CPUs - 1
      // executors: 4,
    }
  });

  if (process.env.CI) {
    config.customLaunchers = {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox', // required to run without privileges in Docker
          '--disable-web-security',
          '--enable-gpu'
        ]
      }
    };

    config.browsers = ['ChromeHeadlessNoSandbox']
    config.colors = true;
  }
};
