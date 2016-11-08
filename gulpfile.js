var gulp = require('gulp');
var concat = require('gulp-concat');
var path = require('path');
var merge = require('merge');
var uglify = require('gulp-uglify');

var folders = ['./src', './src/components']

gulp.task('scripts', function(){
  var tasks = folders.map(function(element){
    return gulp.src(element + '/*.js')
      .pipe(concat('bundle.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./'));
  });
  return merge(tasks);
});

gulp.task('default', ['scripts']);