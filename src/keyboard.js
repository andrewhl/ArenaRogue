'use strict';

var actions = require('./input-actions');
var listeners = {};

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

function on(actionName, cb) {
  var actionListeners = listeners[actionName] || [];
  actionListeners.push(cb);
  listeners[actionName] = actionListeners;
}

function trigger(actionName) {
  var actionListeners = listeners[actionName] || [];
  actionListeners.forEach(function (cb) {
    cb();
  });
}

function keyboard(game) {
  game.input.keyboard.onDownCallback = function (event) {
    var action = optimizedMappings[event.keyCode];
    if (action) {
      event.preventDefault();
      trigger(action);
    }
  };

  return { on: on };
}

keyboard.actions = actions;
module.exports = keyboard;
