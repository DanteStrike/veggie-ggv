'use strict';

import gulp = require('gulp');
import rename = require('gulp-rename');
import configs = require('../configs');
import plumber = require('gulp-plumber');


const isDevelopmentMode = require('../helpers').isDevelopmentMode;

const babel = require('gulp-babel');
const jsMin = require('gulp-uglify');

const {paths} = configs;

function buildJS(cb: () => void): void {
  gulp.src(paths.src.jsMain, {sourcemaps: isDevelopmentMode})
    .pipe(plumber())
    .pipe(babel({presets: ['@babel/preset-env']}))
    .pipe(jsMin())
    .pipe(rename({
      basename: 'script',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.build.js, {sourcemaps: isDevelopmentMode}));
  cb();
}


export = {
  buildJS
}
