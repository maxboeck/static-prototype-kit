'use strict';

var gulp  = require('gulp');
var gutil   = require('gulp-util');
var svgSprite = require('gulp-svg-sprite');
var plumber = require('gulp-plumber');

var config = {
  mode: {
    inline: true,
    symbol: { // symbol mode to build the SVG
      dest: '.', // destination foldeer
      sprite: 'sprite.svg', //sprite name
      example: false // Build sample page
    }
  },
  svg: {
    xmlDeclaration: false, // strip out the XML attribute
    doctypeDeclaration: false // don't include the !DOCTYPE declaration
  }
};

gulp.task('icons', function() {
  return gulp.src('app/assets/icons/**/*.svg')
    .pipe(plumber({
      errorHandler: function(err) {
        gutil.log(gutil.colors.red(err));
        this.emit('end');
      }
    }))
    .pipe(svgSprite(config))
    .pipe(gulp.dest('dist/assets/icons'));
});
