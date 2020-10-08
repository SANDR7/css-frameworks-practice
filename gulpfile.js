const gulp = require('gulp');
const { task } = require('gulp');
const sass = require('gulp-sass');

function style() {
    // 1. where is my scss files
    return gulp.src('./src/*.scss')
    // 2. pass that file through sass compiler
    .pipe(sass())
    // 3. where do I save the compiled css?
    .pipe(gulp.dest('./dist/css'))
}

exports.style = style;