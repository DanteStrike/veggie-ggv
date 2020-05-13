'use strict';

import gulp = require('gulp');
import configs = require('../configs');


const imageMin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const svgSprite = require('gulp-svg-sprite');

const {paths, svgSpriteConfig} = configs;

function buildImg(cb: () => void): void {
  gulp.src(paths.src.img)
    .pipe(imageMin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(paths.build.img));
  cb();
}

function createSVGSprite(cb: () => void): void {
  gulp.src(paths.src.svgIcons)
    .pipe(svgSprite(svgSpriteConfig))
    .pipe(gulp.dest(paths.src.svgSprite));
  cb();
}

function copySVGToImage(cb: () => void): void {
  gulp.src(paths.src.createdSprite)
      .pipe(gulp.dest(paths.src.img));
  cb();
}


export = {
  generateSVG: gulp.series(createSVGSprite, copySVGToImage),
  buildImg
}
