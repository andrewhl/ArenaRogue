'use strict';

var gulp       = require('gulp');
var connect    = require('gulp-connect');
var karma      = require('karma').server;
var _          = require('lodash');

// Scripts
var browserify = require('gulp-browserify');
var rename     = require('gulp-rename');

gulp.task('scripts', function() {
  return gulp
    .src('src/game.js', { read: false })
    .pipe(browserify({ debug: true}))
    .pipe(rename('arena-rogue-game.js'))
    .pipe(gulp.dest('app'));
});

var karmaCommonConf = {
  browsers: ['Chrome'],
  frameworks: ['browserify', 'jasmine'],
  files: [
    'node_modules/lodash/dist/lodash.min.js',
    'app/components/**/*.min.js',
  ],
  browserify: {
    debug: true,
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ]
  },
  preprocessors: {
    '/**/*.browserify': 'browserify'
  }
};

gulp.task('test', function () {
  karma.start(_.assign({}, karmaCommonConf, {singleRun: true}));
});

gulp.task('tdd', function () {
  karma.start(_.assign({}, karmaCommonConf, {watch: true}));
});

// Connect
gulp.task('connect', function () {
  return connect
    .server({
      root: ['app'],
      port: 9000,
      livereload: true
    });
});

// Watch
gulp.task('watch', function() {
  gulp.watch([
    'app/*.html',
    'app/arena-rogue-game.js'
  ], function(event) {
    return gulp.src(event.path)
      .pipe(connect.reload());
  });

  gulp.watch('src/**/*.js', ['scripts']);
});

// Default
gulp.task('default', ['connect', 'scripts', 'watch']);
