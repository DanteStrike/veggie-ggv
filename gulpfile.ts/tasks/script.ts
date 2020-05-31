'use strict';

import gulp = require('gulp');
import configs = require('../configs');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');

const isDevelopmentMode = require('../helpers').isDevelopmentMode;

const uglify = require('gulp-uglify');

const {paths} = configs;


function buildJS(cb: () => void): void {
  browserify({
    basedir: '.',
    debug: isDevelopmentMode,
    entries: [paths.src.jsMain],
    cache: {},
    packageCache: {}
  })
  .plugin(tsify, {
    project: paths.src.frontEndTSConfig
  })
  .transform('babelify', {
    presets: ['@babel/preset-env'],
    extensions: ['.ts']
  })
  .bundle()
  .on('error', console.error.bind(console))
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(paths.build.js, {sourcemaps: isDevelopmentMode}));
  cb();
}


export = {
  buildJS
}
