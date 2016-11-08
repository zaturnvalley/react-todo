var gulp = require('gulp');
var concat = require('gulp-concat');
var path = require('path');
var merge = require('merge');

gulp.task('scripts', function(){
  return gulp.src('./src/*.js', './src/components/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/'));
})

gulp.task('default', ['scripts']);