require('./gulp/config');
var scriptObj = {};
scriptObj[config.paths.src.testScripts] = ['browserify'];
scriptObj[config.paths.src.testAssets] = ['browserify'];
module.exports = function (karma) {
    karma.set({
        frameworks: ['browserify', 'jasmine'],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine',
            'karma-browserify',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher'
        ],
        files: [config.paths.src.testAssets, config.paths.src.testScripts],
        preprocessors: scriptObj,
        browserify: {
            debug: true,
            transform: ['browserify-shim','6to5ify' ]
        }
    });
};