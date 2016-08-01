'use strict';

var bulk = require('bulk-require');
const path = require('path');

var running = bulk(path.join(__dirname, '..'), 'types/**/*.js');
var rocPlugin = require('roc-plugin').load(running);
module.exports = rocPlugin;
