'use strict';

var gulp = require('gulp');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var browserifyShim = require('browserify-shim');
var to5ify = require('6to5ify');

module.exports = gulp.task('watchify', function () {
    var bundler = watchify({
        entries: [config.paths.src.modules]
    });
    bundler
        .transform(browserifyShim)
        .transform(to5ify.configure({modules: "common"}))
        .on("error", function (err) {
            console.log("Error : " + err.message);
        })
        .on('update', rebundle);

    function rebundle() {
        return bundler.bundle({debug: true})
            .pipe(source(config.filenames.build.scripts))
            .pipe(gulp.dest(config.paths.dest.build.scripts));
    }

    return rebundle();
});
