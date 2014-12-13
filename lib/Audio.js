var Platform = require('pex-sys').Platform;

module.exports = Platform.isPlask ? require('./PlaskAudio') : require('./HTMLAudio');