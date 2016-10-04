module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    preprocessors: {
      '**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
       stripPrefix: 'src/'
    },
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'src/app/github-explorer/templates/*.html',
      'spec/**/*.js',
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
