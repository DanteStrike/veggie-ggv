'use strict';

import gulp = require('gulp');
import configs = require('../configs');


const {paths} = configs;

function copyFonts(cb: () => void): void {
  gulp.src(paths.src.font)
    .pipe(gulp.dest(paths.build.font));
  cb();
}


export = {
  buildFonts: copyFonts
};
