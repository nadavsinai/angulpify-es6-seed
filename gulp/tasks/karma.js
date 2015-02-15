(function () {
    'use strict';
    var gulp = require('gulp'), karma = require('gulp-karma');

    var testFiles = [
        config.paths.src.scripts
    ];

    gulp.task('test', function () {
        // Be sure to return the stream
        return gulp.src(testFiles)
            .pipe(karma({
                configFile: 'karma.conf.js',
                action: 'run'
            }))
            .on('error', function (err) {
                // Make sure failed tests cause gulp to exit non-zero
                throw err;
            });
    });

    gulp.task('tdd', function () {
        gulp.src(testFiles)
            .pipe(karma({
                configFile: '../karma.conf.js',
                action: 'watch'
            }));
    });
})();