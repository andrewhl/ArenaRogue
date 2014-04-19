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

exports.create = function(opts) {
  var instance = _.extend({}, defaults, opts);
  instance.bindPlayer = function(player) {
    player.on('beforeMove', function(event, dt) {
      if (dt.x > instance.width || dt.x < 1 || dt.y > instance.height || dt.y < 1) {
        event.preventDefault();
        return false;
      }
    });
  };
  return instance;
};


// exports.bindInput = function (input) {
//   input.on(inputActions.UP, function () {
//     if (player.y === arenaPosition.y) { return false; }
//     player.moveUp();
//   });
//   input.on(inputActions.DOWN, function () {
//     if (player.y === (arenaPosition.y + arenaDimensions.height - 1)) { return false; }
//     player.moveDown();
//   });
//   input.on(inputActions.LEFT, function () {
//     if (player.x === arenaPosition.x) { return false; }
//     player.moveLeft();
//   });
//   input.on(inputActions.RIGHT, function () {
//     if (player.x === (arenaPosition.x + arenaDimensions.width - 1)) { return false; }
//     player.moveRight();
//   });
// };
