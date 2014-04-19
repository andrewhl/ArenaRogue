'use strict';

var _             = require('lodash');
var actions       = require('./input-actions');
var eventHandler  = require('./event-handler');

var mappings = {};
mappings[actions.UP]    = [Phaser.Keyboard.K, Phaser.Keyboard.UP];
mappings[actions.DOWN]  = [Phaser.Keyboard.J, Phaser.Keyboard.DOWN];
mappings[actions.LEFT]  = [Phaser.Keyboard.H, Phaser.Keyboard.LEFT];
mappings[actions.RIGHT] = [Phaser.Keyboard.L, Phaser.Keyboard.RIGHT];

var optimizedMappings = (function () {
  var result = {};
  var action, keyCodes, keyCode, i, f;

  for (action in mappings) {
    keyCodes = mappings[action];
    for (i = 0, f = keyCodes.length; i < f; i += 1) {
      keyCode = keyCodes[i];
      result[keyCode] = action;
    }
  }

  return result;
})();


module.exports = function keyboard(game) {
  var instance = {};
  _.extend(instance, eventHandler);

  game.input.keyboard.onDownCallback = function (event) {
    var action = optimizedMappings[event.keyCode];
    if (action) {
      event.preventDefault();
      instance.trigger(action);
    }
  };

  instance.bind = function (creature) {
    this.on('up', function () {
      creature.moveUp();
    });
    this.on('down', function () {
      creature.moveDown();
    });
    this.on('left', function () {
      creature.moveLeft();
    });
    this.on('right', function () {
      creature.moveRight();
    });
  };

  return instance;
};
