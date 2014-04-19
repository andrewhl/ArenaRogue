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

function outOfBounds(arena, coords) {
  return coords.x > arena.width || coords.x < 1 ||
    coords.y > arena.height || coords.y < 1;
}

var arenaPrototype = {
  bindPlayer: function(player) {
    var self = this;
    player.on('beforeMove', function(event, dt) {
      if (outOfBounds(self, dt)) {
        event.preventDefault();
        return false;
      }
      var enemy = _.find(self.enemies, { x: dt.x, y: dt.y });
      if (enemy) {
        event.preventDefault();
        enemy.setHp(enemy.hp - 2);
        return false;
      }
    });
  },
  bindEnemy: function(creature) {
    var self = this;
    self.enemies.push(creature);
    creature.on('destroy', function() {
      _.remove(self.enemies, creature);
    });
  }
};

exports.create = function(opts) {
  var instance = Object.create(arenaPrototype);
  instance.enemies = [];
  return _.extend(instance, defaults, opts);
};
