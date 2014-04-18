'use strict';

var grid = require('./grid');
var _ = require('lodash');
var creature = require('./creature');
var inputActions = require('./input-actions');

var arenaPosition;
var arenaDimensions;
var creatures = [];
var player;
var defaults = {
  x: 1,
  y: 1,
  width: grid.width - 10,
  height: grid.height - 5
};
var exports = {};

exports.create = function(opts) {
  var instance = _.extend({}, defaults, opts);
  return instance;
};

exports.addCreature = function (opts) {
  var ct   = creature(exports, { text: opts.text, x: opts.x, y: opts.y });
  creatures.push(ct);
  return ct;
};

exports.addPlayer = function (player, opts) {
  player = exports.addCreature(_.merge(player, opts));
  return player;
};

exports.bindInput = function (input) {
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
};

module.exports = exports;
