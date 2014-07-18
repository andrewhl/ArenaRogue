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
  turnBalance: 0.0,
  queue: [],
  delay: 0
};


exports.create = function(opts) {
  var instance = _.extend({}, exports.defaults, opts);
  _.extend(instance, vitality, movement, eventHandler);

  _.extend(instance, {
    getAction: function() {
      return { cost: 10 };
    },
    setAction: function(action) {
      instance.action = action;
    },
    getDelay: function() {
      return instance.delay;
    },
    setDelay: function(delay) {
      instance.delay = delay;
    }
  });

  return instance;
};


