'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename('./style.css'))
    .pipe(gulp.dest('./style'))
});

 
gulp.task('js', () =>
    gulp.src('./es6/script.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./scripts/'))
);

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./es6/script.js', gulp.series('js'));
});