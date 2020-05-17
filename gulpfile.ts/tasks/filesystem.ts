'use strict';

import rimraf = require('rimraf');
import configs = require('../configs');


const {paths} = configs;

function removeBuildFolder (cb: () => void): void {
  rimraf(paths.build.base, cb);
}


export = {
  removeBuildFolder
};
