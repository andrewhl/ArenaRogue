'use strict';

var _ = require('lodash');
var grid = require('./grid');
var creature = require('./creature');

var arenaGame;
var arenaPosition;
var arenaTiles = [];
var creatures = [];

function translatePosition(point, y) {
  var x = point;
  if (!y) { y = point.y; x = point.x; }

  return { x: x - 1 + arenaPosition.x, y: y - 1 + arenaPosition.y };
}

function draw(game, options) {
  arenaGame = game;
  arenaPosition = { x: options.x, y: options.y };

  var tileOffset = grid.tileSize / 2;
  for (var y = 1; y <= options.height; y += 1) {
    for (var x = 1; x <= options.width; x += 1) {
      var coords  = grid.getCoords(translatePosition(x, y));
      var graphic = game.add.graphics(coords.x + tileOffset, coords.y + tileOffset);

      graphic.beginFill(0xFFFFFF);
      graphic.drawCircle(0, 0, 1);
      graphic.endFill();

      arenaTiles.push(graphic);
    }
  }
}

function addCreature(opts) {
  var pos  = translatePosition(opts);
  var ct = creature(arenaGame, { text: opts.text, x: pos.x, y: pos.y });
  creatures.push(ct);
  return ct;
}

module.exports = {
  draw: draw,
  addCreature: addCreature
};
