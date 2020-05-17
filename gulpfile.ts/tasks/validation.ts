import htmlValidator = require('gulp-w3c-html-validator');
import cssValidator = require('gulp-w3c-css');
import gulp = require('gulp');
import configs = require('../configs');

const {paths} = configs;


function validateHTMLPages(cb: () => void) {
  gulp.src(paths.src.htmlPages)
    .pipe(htmlValidator())
    .pipe(htmlValidator.reporter());
  cb();
}

function validateMainCSS(cb: () => void) {
  gulp.src(`${paths.src.compiledCSS}/style.css`)
    .pipe(cssValidator());
  cb();
}

export = {
  validateHTMLPages,
  validateMainCSS
}
