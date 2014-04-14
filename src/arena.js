'use strict';

var _ = require('lodash');
var grid = require('./grid');
var creature = require('./creature');
var inputActions = require('./input-actions');

var arenaPosition;
var arenaDimensions;
var arenaTiles = [];
var creatures = [];
var player;
var arena = {
  draw: draw,
  addCreature: addCreature,
  addPlayer: addPlayer,
  bindInput: bindInput
};

function draw(game, options) {
  arena.game = game;
  arenaPosition = { x: options.x, y: options.y };
  arenaDimensions = { width: options.width, height: options.height };

  arena.x = arenaPosition.x;
  arena.y = arenaPosition.y;

  var tileOffset = grid.tileSize / 2;
  for (var y = 1; y <= options.height; y += 1) {
    for (var x = 1; x <= options.width; x += 1) {
      var coords  = grid.getPixelCoords(arenaPosition, x, y);
      var graphic = game.add.graphics(coords.x + tileOffset, coords.y + tileOffset);

      graphic.beginFill(0xFFFFFF);
      graphic.drawCircle(0, 0, 1);
      graphic.endFill();

      arenaTiles.push(graphic);
    }
  }
}

function addCreature(opts) {
  var ct   = creature(arena, { text: opts.text, x: opts.x, y: opts.y });
  creatures.push(ct);
  return ct;
}

function addPlayer(opts) {
  player = addCreature(_.merge(opts, { text: '@' }));
}

function bindInput(input) {
  input.on(inputActions.UP, function () {
    if (player.y === arenaPosition.y) { return false; }
    player.moveUp();
  });
  input.on(inputActions.DOWN, function () {
    if (player.y === (arenaPosition.y + arenaDimensions.height - 1)) { return false; }
    player.moveDown();
  });
  input.on(inputActions.LEFT, function () {
    if (player.x === arenaPosition.x) { return false; }
    player.moveLeft();
  });
  input.on(inputActions.RIGHT, function () {
    if (player.x === (arenaPosition.x + arenaDimensions.width - 1)) { return false; }
    player.moveRight();
  });
}

module.exports = arena;
