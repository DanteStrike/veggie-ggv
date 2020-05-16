'use strict';

import gulp = require('gulp');
import configs = require('../configs');


const babel = require('gulp-babel');
const jsMin = require('gulp-uglify');

const {paths} = configs;

function buildJS(cb: () => void): void {
  gulp.src(paths.src.jsMain)
    .pipe(babel({presets: ['@babel/preset-env']}))
    .pipe(jsMin())
    .pipe(gulp.dest(paths.build.js));
  cb();
}


export = {
  buildJS
}
