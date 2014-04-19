'use strict';

var gulp       = require('gulp');
var connect    = require('gulp-connect');


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

// Connect
gulp.task('connect', connect.server({
  root: ['app'],
  port: 9000,
  livereload: true
}));

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
