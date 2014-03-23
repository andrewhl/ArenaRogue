'use strict';

var grid = require('./grid');
var _ = require('lodash');

function creature(game, opts) {
  var text = game.add.text(0, 0, opts.text, { font: '16px Arial', fill: '#FFFFFF' });
  var ct   = new Creature();

  ct.instance = text;
  ct.gridX = opts.x;
  ct.gridY = opts.y;
  ct.tileOffsetX = (grid.tileSize - text.width) / 2;
  ct.tileOffsetY = (grid.tileSize - text.height) / 2;
  ct.updateCoords();

  return ct;
}

function Creature() {
}

_.extend(Creature.prototype, {
  updateCoords: function () {
    var coords = grid.getCoords(this.gridX, this.gridY);
    this.instance.x = coords.x + this.tileOffsetX;
    this.instance.y = coords.y + this.tileOffsetY;
  },
  moveLeft: function() {
    if (this.gridX === 1) { return false; }
    this.gridX -= 1;
    this.updateCoords();
  },
  moveRight: function() {
    if (this.gridX === grid.width) { return false; }
    this.gridX += 1;
    this.updateCoords();
  },
  moveUp: function() {
    if (this.gridY === grid.height) { return false; }
    this.gridY += 1;
    this.updateCoords();
  },
  moveDown: function() {
    if (this.gridY === 1) { return false; }
    this.gridY -= 1;
    this.updateCoords();
  }
});


module.exports = creature;
