var config = require('./webpack.config.js');

config.externals = config.externals || {};
config.externals.jsdom = 'window';
config.externals.cheerio = 'window';
config.externals['react/lib/ExecutionEnvironment'] = true;
config.externals['react/lib/ReactContext'] = 'window';
config.externals['react/addons'] = 'window';

module.exports = config;
