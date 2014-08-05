'use strict';

var _     = require('lodash');
var grid  = require('./grid');

var arenaPrototype = {
  bindPlayer: function(player) {
    var self = this;
  },
  bindEnemy: function(creature) {
    var self = this;
    self.enemies.push(creature);
    creature.on('destroy', function() {
      _.remove(self.enemies, creature);
    });
  }
};

function outOfBounds(arena, coords) {
  return coords.x > arena.width || coords.x < 1 ||
    coords.y > arena.height || coords.y < 1;
}


var exports = module.exports;

exports.defaults = {
  x: 1,
  y: 1,
  width: grid.width,
  height: grid.height
};

exports.create = function(opts) {
  var instance = Object.create(arenaPrototype);
  instance.enemies = [];
  return _.extend(instance, exports.defaults, opts);
};
