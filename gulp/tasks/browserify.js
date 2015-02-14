'use strict';

var gulp = require('gulp');
var watchify = require('watchify');
var gutil = require('gulp-util');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var browserifyShim = require('browserify-shim');
var to5ify = require('6to5ify');
var changed = require('gulp-changed'),
    gif = require('gulp-if'),
    _ = require('lodash'),
    cache = {},
    watchAndcheck;
//
// Task defaults
var options = _.defaults({
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true // Required watchify args
        // Required watchify args
    },
    watchify.args
);

var notify = function (filename) {
    gutil.log(gutil.colors.green('√') + ' ' + filename);
};

var bundler = function (filename) {
    var b = browserify(_.extend(options, {entries: filename}));
// transforms
    b.transform({ global: true },browserifyShim);
    b.transform(to5ify.configure({modules: "common"}));
// events
    b.on("error", function (err) {
        console.log("Error : " + err.message);
    });
    b.on('bundle', notify.bind(null, 'BUNDLE ' + filename));
    if (watchAndcheck) {
        b = watchify(b);
        // events
        b.on('update', taskMaker.bind(this, watchAndcheck));
        // cache for use during watch
        cache[filename] = b;
    }
    return b.bundle();
};

var taskMaker = function (watch) {
    // leverage vinyl-transform to turn
// readable stream into vinyl object
    var bundel = transform(function (filename) {
        // return previous bundle
        if (cache[filename]) {
            return cache[filename].bundle();
        }
        return bundler(filename);
    });

    watchAndcheck = (watch) ? watch : false;
    return gulp.src([config.paths.src.modules])
        // don't check on first run ( i.e initialisation )
        // but do for subsequent calls via bundle.on('update')
        .pipe(gif(watchAndcheck, changed(config.paths.src.scripts), {
            extension: '.js'
        }))
        .pipe(bundel)
        .pipe(gulp.dest(config.paths.dest.build.scripts))
};
gulp.task('watchify', taskMaker.bind(this, true));
gulp.task('browserify', taskMaker);
