'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserifyShim = require('browserify-shim');
var ngAnnotate = require('gulp-ng-annotate');
var to5ify = require('6to5ify');
module.exports = gulp.task('browserify', function () {
    return browserify({
        entries: [config.paths.src.modules]
    })
        .transform(browserifyShim)
        .transform(to5ify.configure({modules: 'common'}))
        .bundle()
        .pipe(source(config.filenames.release.scripts))
        .pipe(gulp.dest(config.paths.dest.release.scripts));
});
