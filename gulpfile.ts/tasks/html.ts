'use strict';

import gulp = require('gulp');
import configs = require('../configs');


const {paths} = configs;

function copyHTMLPages(cb: () => void): void {
  gulp.src(paths.src.htmlPages)
    .pipe(gulp.dest(paths.build.htmlPages));
  cb();
}


export = {
  buildHTML: copyHTMLPages
};
