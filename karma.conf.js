require('./gulp/config');
module.exports = function (config) {
    config.set({
        frameworks: ['browserify','jasmine'],
        browsers:['PhantomJS'],
        preprocessors: {
            'src/modules/app/index.js': [ 'browserify' ]
        },
        browserify: {
            debug: true,
            transform: [ '6to5ify','browserify-shim' ]
        }
    });
};