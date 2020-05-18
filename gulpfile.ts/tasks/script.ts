'use strict';

import gulp = require('gulp');
import rename = require('gulp-rename');
import configs = require('../configs');
import plumber = require('gulp-plumber');


const isDevelopmentMode = require('../helpers').isDevelopmentMode;
const ts = require('gulp-typescript');
const tsProject = ts.createProject('src/js/tsconfig.frontend.json');

const babel = require('gulp-babel');
const jsMin = require('gulp-uglify');

const {paths} = configs;

// function buildJS(cb: () => void): void {
//   gulp.src(paths.src.jsMain, {sourcemaps: isDevelopmentMode})
//     .pipe(plumber())
//     .pipe(babel({presets: ['@babel/preset-env']}))
//     .pipe(jsMin())
//     .pipe(rename({
//       basename: 'script',
//       suffix: '.min'
//     }))
//     .pipe(gulp.dest(paths.build.js, {sourcemaps: isDevelopmentMode}));
//   cb();
// }

function buildJS(cb: () => void): void {
  gulp.src('./src/js/main.ts', {sourcemaps: isDevelopmentMode})
    // .pipe(plumber())
    .pipe(tsProject())
    // // .pipe(babel({presets: ['@babel/preset-env']}))
    // // .pipe(jsMin())
    // .pipe(rename({
    //   basename: 'script',
    //   suffix: '.min'
    // }))
    .pipe(gulp.dest(paths.build.js, {sourcemaps: isDevelopmentMode}));
  cb();
}


export = {
  buildJS
}
