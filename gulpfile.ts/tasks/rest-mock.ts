'use strict';

import gulp = require('gulp');
import configs = require('../configs');


const {paths} = configs;

function copyJSONFiles(cb: () => void): void {
  gulp.src(paths.src.restMocks)
    .pipe(gulp.dest(paths.build.restMocks));
  cb();
}


export = {
  buildRestMocks: copyJSONFiles
};
