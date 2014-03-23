'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect');

// Connect
gulp.task('connect', connect.server({
  root: ['app'],
  port: 9000,
  livereload: true
}));

gulp.task('default', ['connect'], function() {
  gulp.watch([
    'app/*.html',
    'app/scripts/**/*.js'
  ], function(event) {
    return gulp.src(event.path)
      .pipe(connect.reload());
  });
});
