import gulp = require('gulp');
import configs = require('../configs');
import htmlTasks = require ('./html');
import styleTasks = require('./style');
import imgTasks = require('./image');
import jsTasks = require('./script');
import restMockTasks = require('./rest-mock');
import liveServer = require('./live-server');


const {paths} = configs;
const {buildHTML} = htmlTasks;
const {buildCSS} = styleTasks;
const {buildImg} = imgTasks;
const {buildJS} = jsTasks;
const {buildRestMocks} = restMockTasks;
const {reloadLiveServer} = liveServer;

function turnOnWatcher(cb: () => void): void {
  gulp.watch(paths.src.htmlPages, gulp.series(buildHTML, reloadLiveServer));
  gulp.watch(paths.src.jsAll, gulp.series(buildJS, reloadLiveServer));
  gulp.watch(paths.src.img, gulp.series(buildImg, reloadLiveServer));
  gulp.watch(paths.src.scssAll, gulp.series(buildCSS, reloadLiveServer));
  gulp.watch(paths.src.restMocks, gulp.series(buildRestMocks, reloadLiveServer));
  cb()
}


export = {
  turnOnWatcher
}
