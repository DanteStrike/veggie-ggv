'use strict';

import gulp = require('gulp');
import configs = require('../configs');


const babel = require('gulp-babel');
const jsMin = require('gulp-uglify-es').default;

const {paths} = configs;

function buildJS(cb: () => void): void {
  gulp.src(paths.src.jsMain)
    // .pipe(babel({
    //   presets: ['env']
    // }))
    // .pipe(jsMin())
    .pipe(gulp.dest(paths.build.js));
  cb();
}


export = {
  buildJS
}
