"use strict"
const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const server = require('browser-sync').create();
const prefixer = require('gulp-autoprefixer');
const {series} = require('gulp');
const rename = require('gulp-rename');
const minJs = require('gulp-uglify');
const imageMin = require('gulp-imagemin');
const svgMin =require('gulp-svgmin');
const jpgMin =require('gulp-jpeg-2000');

function Sass(){
    return gulp.src(['src/scss/style.scss'],{base:'scss'})
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(server.stream())
}

function Js() {
    return gulp.src(['src/js/*.js'], {base: 'src'})
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(minJs())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'))
}

function Images(){
    return gulp.src(['src/catalog-images/*'])
        .pipe(imageMin())
        .pipe(gulp.dest('build/catalog-images'))
}
//
// function Svg(){
//     return gulp.src(['src/catalog-svg/*'])
//         .pipe(svgMin())
//         .pipe(gulp.dest('build/catalog-svg'))
// }
//
// function Jpeg(){
//     return gulp.src(['src/catalog-jpeg/*'])
//         .pipe(imageMin())
//         .pipe(gulp.dest('build/catalog-jpeg'))
// }

function Server(){
    server.init({server:"./",browser:'firefox'});
    // gulp.watch('html/*.html').on('change', server.reload)
    gulp.watch('src/scss/**/*.scss',gulp.series(Sass,Js));
}

exports.start = series(Sass,Js,Server);