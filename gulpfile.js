‘use strict’;

var gulp = require(‘gulp’);

var sass = require(‘gulp-sass’);

//compile
gulp.task(‘sass’, function () {
gulp.src(‘src/scss/custom.scss’)
.pipe(sass().on(‘error’, sass.logError))
.pipe(gulp.dest(‘dist/css’));
});


 gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', ['sass']); 
  // Other watchers
})