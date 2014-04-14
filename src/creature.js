'use strict';

var grid = require('./grid');
// var _ = require('lodash');

var creaturePrototype = {
  moveLeft: function() {
    this.x -= 1;
    updateCoords(this);
  },
  moveRight: function() {
    this.x += 1;
    updateCoords(this);
  },
  moveUp: function() {
    this.y -= 1;
    updateCoords(this);
  },
  moveDown: function() {
    this.y += 1;
    updateCoords(this);
  }
};

function updateCoords(creature) {
  var coords = grid.getPixelCoords(creature.arena, creature.x, creature.y);
  creature.instance.x = coords.x + creature.tileOffsetX;
  creature.instance.y = coords.y + creature.tileOffsetY;
}

function creature(arena, opts) {
  var text = arena.game.add.text(0, 0, opts.text, { font: '16px Arial', fill: '#FFFFFF' });

  var ct   = Object.create(creaturePrototype);
  ct.arena = arena;
  ct.instance = text;
  ct.x = opts.x;
  ct.y = opts.y;
  ct.tileOffsetX = (grid.tileSize - text.width) / 2;
  ct.tileOffsetY = (grid.tileSize - text.height) / 2;
  Object.defineProperty(ct, 'position', {
    get: function () {
      return { x: this.x, y: this.y };
    }
  });

  updateCoords(ct);

  return ct;
}


module.exports = creature;
