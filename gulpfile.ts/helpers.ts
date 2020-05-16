const argv = require('yargs').argv;

export = {
  isDevelopmentMode: argv.production === undefined
}
