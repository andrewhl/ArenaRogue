'use strict';

var _ = require('lodash');
var eventHandler = require('./event-handler');

var defaults = {
  x: 1,
  y: 1,
  symbol: '@'
};

var exports = module.exports;

var movement = {
  moveUp: function () {
    this.y -= 1;
    this.trigger('change');
  },
  moveDown: function () {
    this.y += 1;
    this.trigger('change');
  },
  moveLeft: function () {
    this.x -= 1;
    this.trigger('change');
  },
  moveRight: function () {
    this.x += 1;
    this.trigger('change');
  }
};

exports.create = function(opts) {
  var instance = _.extend({}, defaults, opts);
  _.extend(instance, movement, eventHandler);
  return instance;
};
