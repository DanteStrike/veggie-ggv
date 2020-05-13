'use strict';

import browserSync = require('browser-sync');
import configs = require('../configs');


function startLiveServer(cb: () => void): void {
  browserSync(configs.liveServerConfig);
  cb();
}

function reloadLiveServer(cb: () => void): void {
  browserSync.reload();
  cb();
}


export = {
  startLiveServer,
  reloadLiveServer
}
