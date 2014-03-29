'use strict';

var grid = require('./grid');
var _ = require('lodash');

var creaturePrototype = {
  updateCoords: function () {
    var coords = grid.getCoords(this.x, this.y);
    this.instance.x = coords.x + this.tileOffsetX;
    this.instance.y = coords.y + this.tileOffsetY;
  },
  moveLeft: function() {
    this.x -= 1;
    this.updateCoords();
  },
  moveRight: function() {
    this.x += 1;
    this.updateCoords();
  },
  moveUp: function() {
    this.y += 1;
    this.updateCoords();
  },
  moveDown: function() {
    this.y -= 1;
    this.updateCoords();
  }
};

function creature(game, opts) {
  var text = game.add.text(0, 0, opts.text, { font: '16px Arial', fill: '#FFFFFF' });

  var ct   = Object.create(creaturePrototype);
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

  ct.updateCoords();

  return ct;
}


module.exports = creature;
