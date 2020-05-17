'use strict';

import gulp = require('gulp');
import rename = require('gulp-rename');
import configs = require('../configs');
import plumber = require('gulp-plumber');


const isDevelopmentMode = require('../helpers').isDevelopmentMode;

const sass = require('gulp-sass');
const cssMin = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csscomb = require('gulp-csscomb');

const {paths} = configs;

function buildNormolizCSS(cb: () => void): void {
  gulp.src(paths.src.normolizeCSS)
    .pipe(cssMin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.build.css));
  cb();
}

function compileTestMainCSS(cb: () => void): void {
  gulp.src(paths.src.scssMain)
    .pipe(sass())
    .pipe(postcss([autoprefixer({
      overrideBrowserslist: ['ie >= 11', 'last 2 version']
    })]))
    .pipe(csscomb())
    .pipe(gulp.dest(`${paths.src.compiledCSS}/`));
  cb();
}

function compileMainCSS(cb: () => void): void {
  gulp.src(paths.src.scssMain, {sourcemaps: isDevelopmentMode})
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer({
      overrideBrowserslist: ['ie >= 11', 'last 2 version']
    })]))
    .pipe(csscomb())
    .pipe(cssMin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.build.css, {sourcemaps: isDevelopmentMode}));
  cb();
}


export = {
  buildCSS: gulp.parallel(buildNormolizCSS, compileMainCSS),
  compileTestMainCSS
}
