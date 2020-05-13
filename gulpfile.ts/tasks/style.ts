'use strict';

import gulp = require('gulp');
import configs = require('../configs');


const sass = require('gulp-sass');
const cssMin = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csscomb = require('gulp-csscomb');

const {paths} = configs;

function buildNormolizCSS(cb: () => void): void {
  gulp.src(paths.src.normolizeCSS)
    .pipe(cssMin())
    .pipe(gulp.dest(paths.build.css));
  cb();
}

// function prettifyAllSCSS(cb: () => void): void {
//   gulp.src(paths.src.scssAll)
//     .pipe(csscomb());
//   cb();
// }

function compileMainCSS(cb: () => void): void {
  gulp.src(paths.src.scssMain)
    .pipe(sass())
    .pipe(postcss([autoprefixer({
      overrideBrowserslist: ['ie >= 11', 'last 2 version']
    })]))
    .pipe(csscomb())
    .pipe(gulp.dest(paths.src.compiledCSS));
  cb();
}

function minifyAndCopyMainCSS(cb: () => void): void {
  gulp.src(`${paths.src.compiledCSS}/style.css`)
    .pipe(cssMin())
    .pipe(gulp.dest(paths.build.css));
  cb();
}


export = {
  buildCSS: gulp.parallel(buildNormolizCSS, gulp.series(compileMainCSS, minifyAndCopyMainCSS)),
}
