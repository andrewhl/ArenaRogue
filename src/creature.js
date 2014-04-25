'use strict';

var _             = require('lodash');
var eventHandler  = require('./event-handler');
var movement      = require('./movement');
var vitality      = require('./vitality');

var exports = module.exports;

exports.defaults = {
  x: 1,
  y: 1,
  symbol: '@',
  hp: 10,
  turnBalance: 0.0
};

exports.create = function(opts) {
  var instance = _.extend({}, exports.defaults, opts);
  _.extend(instance, vitality, movement, eventHandler);
  return instance;
};
