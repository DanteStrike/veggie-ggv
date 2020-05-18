'use strict';

import gulp = require('gulp');
import htmlTasks = require ('./tasks/html');
import styleTasks = require('./tasks/style');
import fontTasks = require('./tasks/font');
import imgTasks = require('./tasks/image');
import jsTasks = require('./tasks/script');
import restMockTasks = require('./tasks/rest-mock');
import liveServer = require('./tasks/live-server');
import filesystemTasks = require('./tasks/filesystem');
import watcher = require('./tasks/watcher');
import validationTasks = require('./tasks/validation');


const isDevelopmentMode = require('./helpers').isDevelopmentMode;

const {buildHTML} = htmlTasks;
const {buildCSS, compileTestMainCSS} = styleTasks;
const {buildFonts} = fontTasks;
const {buildImg, generateSVG} = imgTasks;
const {buildJS} = jsTasks;
const {buildRestMocks} = restMockTasks;
const {startLiveServer} = liveServer;
const {removeBuildFolder} = filesystemTasks;
const {turnOnWatcher} = watcher;
const {validateHTMLPages, validateMainCSS} = validationTasks;

const build = gulp.parallel(buildHTML, buildCSS, buildFonts, buildImg, buildJS, buildRestMocks);
const start = gulp.series(build, startLiveServer, turnOnWatcher);

console.log(`Builder mode: ${isDevelopmentMode ? `Development` : `Production`}`);


exports.generateSVG = generateSVG;
exports.build = build;
exports.start = start;
exports.clean = removeBuildFolder;
exports.server = startLiveServer;
exports.compileTestMainCSS = compileTestMainCSS;
exports.validateHTMLPages = validateHTMLPages;
exports.validateMainCSS = validateMainCSS;
exports.buildJS = buildJS;
