'use strict';

var gulp       = require('gulp');
var connect    = require('gulp-connect');
var rename     = require('gulp-rename');
var browserify = require('gulp-browserify');

// Connect
gulp.task('connect', connect.server({
  root: ['app'],
  port: 9000,
  livereload: true
}));

gulp.task('scripts', function() {
  gulp.src('src/game.js', { read: false })
    .pipe(browserify({ debug: true}))
    .pipe(rename('arena-rogue-game.js'))
    .pipe(gulp.dest('app'));
});

gulp.task('default', ['connect', 'scripts'], function() {
  gulp.watch([
    'app/*.html',
    'src/**/*.js'
  ], function(event) {
    return gulp.src(event.path)
      .pipe(connect.reload());
  });

  gulp.watch('src/**/*.js', ['scripts']);
});
