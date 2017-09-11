'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');

gulp.task('clean', del.bind(null, ['dist'], {dot: true}));

gulp.task('build', ['clean'], function(cb) {
  runSequence('html', 'scripts', 'styles', 'icons', cb);
});