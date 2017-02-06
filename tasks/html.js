'use strict';

var gulp  = require('gulp');
var njr   = require('gulp-nunjucks-render');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

//import any JSON data to inject into your static templates
var demo = require('../app/data/DEMO_DATA.json');

gulp.task('html', function() {
  gulp.src('app/views/**/*.html')
    .pipe($.plumber({
      errorHandler: function (err) {
        $.util.log($.util.colors.red(err));
        this.emit('end');
      }
    }))
    .pipe($.data(function(){
      return {data: demo};
    }))
    .pipe(njr({
      //set the paths where nunjucks looks for templates
      path: [
        'app/components',
        'app/layout'
      ]
    }))
    .pipe(gulp.dest('dist'))
    .on('end', function(){
      browserSync.reload();
    });
});