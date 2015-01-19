'use strict';

var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');

module.exports = gulp.task('ngAnnotate', function () {
  return gulp.src(config.paths.dest.release.scripts + '/' + config.filenames.release.scripts)
    .pipe(ngAnnotate())
    .pipe(gulp.dest(config.paths.dest.release.scripts));
});
