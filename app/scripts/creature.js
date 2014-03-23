'use strict';

var grid = require('./grid');

function creature(game, opts) {
  var coords = grid.getCoords(opts.x, opts.y),
      text = game.add.text(coords.x, coords.y, opts.text, { font: '16px Arial', fill: '#FFFFFF' }),
      ct   = new Creature();

  ct.gridX = opts.x;
  ct.gridY = opts.y;
  ct.instance = text;

  return ct;
}

function Creature() {
}

_.extend(Creature.prototype, {
  updateCoords: function () {
    var coords = grid.getCoords(this.gridX, this.gridY);
    this.instance.x = coords.x;
    this.instance.y = coords.y;
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
