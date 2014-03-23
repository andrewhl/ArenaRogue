'use strict';

var gulp       = require('gulp'),
    connect    = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    rename     = require('gulp-rename');

// Connect
gulp.task('connect', connect.server({
  root: ['app'],
  port: 9000,
  livereload: true
}));

gulp.task('scripts', function() {
  gulp.src('app/scripts/game.js')
    .pipe(browserify({ debug: true}))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./app/scripts'));
    
});

gulp.task('default', ['connect', 'scripts'], function() {
  gulp.watch([
    'app/*.html',
    'app/scripts/**/*.js'
  ], function(event) {
    return gulp.src(event.path)
      .pipe(connect.reload());
  });
  gulp.watch([
    'app/scripts/**/*.js'
  ], ['scripts']);
});
