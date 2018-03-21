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
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const removeFiles = require('gulp-remove-files');
const ifElse = require('gulp-if-else');
const fileExist = require('file-exists');
const pathExist = require('path-exists');

var pathsCss   = [
    'node_modules/swiper/dist/css/swiper.min.css',
    'node_modules/normalize.css/normalize.css'
];

var pathsJs   = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/swiper/dist/js/swiper.min.js'
];
var condition = true;

gulp.task('styles', function () {
    var proccesors = [
        mqpacker(),
        autoprefixer({browsers: ['last 2 version']})
    ];
    return gulp.src('src/styles/all.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(proccesors))
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/styles'));
});
gulp.task('libscss', function () {
    return gulp.src(pathsCss)
        .pipe(concat('libs.min.css'))
        .pipe(gulp.dest('build/styles'));
});
gulp.task('scripts', function () {
    return gulp.src('src/scripts/*.js')
        .pipe(concat('jsini.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'));
});
gulp.task('libjs', function () {
    return gulp.src(pathsJs)
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'))
});
gulp.task('img', function () {
    return gulp.src('src/images/*.*')
        .pipe(gulp.dest('build/images/'));
});
gulp.task('delSvg', function () {
    return pathExist('src/svg/_sprite.svg').then(exists => {
        if (exists) {
            return gulp.src('src/svg/_sprite.svg').pipe(removeFiles());
        }
    });
});

gulp.task('svg', function () {
    return gulp.src('src/svg/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "../../images/_sprite.svg",
                    render:  {
                        scss: {
                            dest:     '../../styles/_svg-sprite.scss'
                        }
                    },
                    example: true
                }
            }
        }))
        .pipe(cheerio({
            run:           function($) {
                $('svg').css('display', 'none');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(gulp.dest('src/svg/'));
});
gulp.task('pug', function () {
    return gulp.src('src/pug/*.pug')
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
    gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('src/scripts/**/*.*', gulp.series('scripts'));
    gulp.watch('src/images/**/*.*', gulp.series('img'));
    gulp.watch('src/svg/**/*.*', gulp.series('svg'));
});

gulp.task('build', gulp.series('delSvg', 'svg','pug', 'libscss', 'styles', 'libjs', 'scripts', 'img', gulp.parallel('watch', 'serve')));


