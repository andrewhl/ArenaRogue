'use strict';

var _ = require('lodash');
var grid = require('./grid');
var creature = require('./creature');

var arenaGame;
var arenaPosition;
var arenaTiles = [];
var creatures = [];


function draw(game, options) {
  arenaGame = game;
  arenaPosition = { x: options.x, y: options.y };

  for (var y = options.y; y < options.height; y ++) {
    for (var x = options.x; x < options.width; x ++) {
      var yPos = (grid.tileSize * y) + (grid.tileSize / 2),
          xPos = (grid.tileSize * x) + (grid.tileSize / 2),
          graphic = game.add.graphics(xPos, yPos);

      graphic.beginFill(0xFFFFFF);
      graphic.drawCircle(0, 0, 1);
      graphic.endFill();
      arenaTiles.push(graphic);
    }
  }
}

function addCreature(opts) {
  var ct = creature(arenaGame, { text: opts.text, x: opts.x + arenaPosition.x, y: opts.y + arenaPosition.y });
  creatures.push(ct);
  return ct;
}

module.exports = {
  draw: draw,
  addCreature: addCreature
};
