'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();
var webpack = require('webpack-stream');

gulp.task('scripts', function() {
  return gulp.src('app/assets/scripts/main.js')
    .pipe($.plumber({
      errorHandler: function (err) {
        $.util.log($.util.colors.red(err));
        this.emit('end');
      }
    }))
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('dist/assets/scripts'))
    .pipe(browserSync.reload({stream: true}));
});