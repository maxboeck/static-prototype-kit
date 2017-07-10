'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var tildeImporter = require('node-sass-tilde-importer');
var $ = require('gulp-load-plugins')();

var AUTOPREFIXER_BROWSERS = [
  '> 1%', 
  'last 3 versions', 
  'Firefox ESR', 
  'Opera 12.1', 
  'Explorer 8'
];

gulp.task('styles', () => {
  return gulp.src('app/assets/styles/main.scss')
    .pipe($.plumber({
      errorHandler: function (err) {
        $.util.log($.util.colors.red(err));
        this.emit('end');
      }
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10,
      importer: tildeImporter,
      onError: browserSync.notify
    }))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe($.sourcemaps.write())
    .pipe($.rename({extname: '.css'}))
    .pipe(gulp.dest('dist/assets/styles'))
    .pipe(browserSync.reload({stream: true}));
});