'use strict';

var listeners = {};
var actions   = {
  UP: 'up'
};

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
    if (event.keycode === Phaser.Keyboard.K) {
      trigger(actions.UP);
    }
  };

  return { on: on };
}

keyboard.actions = actions;
module.exports = keyboard;
