'use strict';

var _ = require('lodash');
var eventHandler = require('./event-handler');

var defaults = {
  x: 1,
  y: 1,
  symbol: '@',
  hp: 10
};

var exports = module.exports;

var movement = {
  moveUp: function () {
    var newY = this.y - 1;
    if (this.trigger('beforeMove', { x: this.x, y: newY })) {
      this.y = newY;
      this.trigger('change');
    }
  },
  moveDown: function () {
    var newY = this.y + 1;
    if (this.trigger('beforeMove', { x: this.x, y: newY })) {
      this.y = newY;
      this.trigger('change');
    }
  },
  moveLeft: function () {
    var newX = this.x - 1;
    if (this.trigger('beforeMove', { x: newX, y: this.y })) {
      this.x = newX;
      this.trigger('change');
    }
  },
  moveRight: function () {
    var newX = this.x + 1;
    if (this.trigger('beforeMove', { x: newX, y: this.y })) {
      this.x = newX;
      this.trigger('change');
    }
  }
};

var vitality = {
  setHp: function(hp) {
    this.hp = hp;
    if (this.hp <= 0) {
      this.trigger('destroy');
    }
  }
};

exports.create = function(opts) {
  var instance = _.extend({}, defaults, opts);
  _.extend(instance, vitality, movement, eventHandler);
  return instance;
};
