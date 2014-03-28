'use strict';

var actions = require('./input-actions');
var listeners = {};

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
    event.preventDefault();
    if (event.keyCode === Phaser.Keyboard.K) {
      trigger(actions.UP);
    } else if (event.keyCode === Phaser.Keyboard.J) {
      trigger(actions.DOWN);
    }
  };

  return { on: on };
}

keyboard.actions = actions;
module.exports = keyboard;
