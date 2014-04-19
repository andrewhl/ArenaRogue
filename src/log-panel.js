'use strict';

var _     = require('lodash');
var grid  = require('./grid');

var exports = module.exports;

exports.defaults = {
  x: 1,
  y: grid.height - 4,
  width: grid.width,
  height: 5,
  style: { backgroundColor: 0xAAAAAA }
};

exports.create = function(opts) {
  var instance = _.extend({}, exports.defaults, opts);
  return instance;
};
