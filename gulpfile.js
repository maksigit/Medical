'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const browserSync = require('browser-sync').create();
const csso = require('gulp-csso');
const rename = require('gulp-rename');

gulp.task('styles', function () {
    var proccesors = [
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker(),
    ];
    return gulp.src('src/styles/all.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(proccesors))
        .pipe(sourcemaps.write())
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/styles'));
});
gulp.task('norm', function () {
    return gulp.src('src/styles/normalize.css')
        .pipe(gulp.dest('build/styles'));
});
gulp.task('scripts', function () {
    return gulp.src('src/scripts/*.js')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/scripts'));
});
gulp.task('img', function () {
    return gulp.src('src/images/*.*')
        .pipe(gulp.dest('build/images/'));
});
gulp.task('pug', function () {
    return gulp.src('src/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/'));
});

gulp.task('serve', function (){
    browserSync.init({
        server: 'build'
    });
    browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function (){
    gulp.watch('src/styles/**/*.*', gulp.series('styles'));
    gulp.watch('src/*.pug', gulp.series('pug'));
    gulp.watch('src/scripts/**/*.*', gulp.series('scripts'));
    gulp.watch('src/images/**', gulp.series('img'));
});

gulp.task('build', gulp.series('pug', 'norm', 'styles', 'scripts', 'img', gulp.parallel('watch', 'serve')));


