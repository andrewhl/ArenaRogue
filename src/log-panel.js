'use strict';

var grid = require('./grid');
var _ = require('lodash');

var defaults = {
  x: 1,
  y: grid.height - 4,
  width: grid.width,
  height: 5,
  style: { backgroundColor: 0xAAAAAA }
};
var exports = {};

exports.create = function(opts) {
  var instance = _.extend({}, defaults, opts);
  return instance;
};

module.exports = exports;
