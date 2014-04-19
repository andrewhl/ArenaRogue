'use strict';

var grid = require('./grid');
var _ = require('lodash');

var defaults = {
  x: 1,
  y: 1,
  width: grid.width - 10,
  height: grid.height - 5
};

var exports = module.exports;

var arenaPrototype = {
  bindPlayer: function(player) {
    var self = this;
    player.on('beforeMove', function(event, dt) {
      if (dt.x > self.width || dt.x < 1 || dt.y > self.height || dt.y < 1) {
        event.preventDefault();
        return false;
      }
      self.enemies.forEach(function(enemy) {
        if (dt.x === enemy.x && dt.y === enemy.y) {
          event.preventDefault();
          return false;
        }
      });
    });
  },
  bindEnemy: function(creature) {
    this.enemies.push(creature);
  }
};

exports.create = function(opts) {
  var instance = Object.create(arenaPrototype);
  instance.enemies = [];
  return _.extend(instance, defaults, opts);
};
