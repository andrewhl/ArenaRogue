'use strict';

var _             = require('lodash');
var inputActions  = require('./input-actions');
var eventHandler  = require('./event-handler');

var mappings = {};
mappings[inputActions.UP]    = [Phaser.Keyboard.K, Phaser.Keyboard.UP];
mappings[inputActions.DOWN]  = [Phaser.Keyboard.J, Phaser.Keyboard.DOWN];
mappings[inputActions.LEFT]  = [Phaser.Keyboard.H, Phaser.Keyboard.LEFT];
mappings[inputActions.RIGHT] = [Phaser.Keyboard.L, Phaser.Keyboard.RIGHT];

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

var exports = module.exports;

exports.create = function(game) {
  var instance = {};
  _.extend(instance, eventHandler);

  game.input.keyboard.onDownCallback = function (event) {
    var action = optimizedMappings[event.keyCode];
    if (action) {
      event.preventDefault();
      instance.trigger(action);
    }
  };

  function getMovePoint(action, creature) {
    var data = { x: creature.x, y: creature.y };
    if (action === inputActions.UP) {
      data.y -= 1;
    } else if (action === inputActions.DOWN) {
      data.y += 1;
    } else if (action === inputActions.LEFT) {
      data.x -= 1;
    } else if (action === inputActions.RIGHT) {
      data.x += 1;
    }
    return data;
  }

  instance.triggerMove = function(actionName, creature) {
    var data = getMovePoint(actionName, creature);
    if (this.trigger('beforeMove', data)) {
      var move = function() {
        creature.move(getMovePoint(actionName, creature));
      };
      var action = { action: move, turnCost: 1.0, creature: this.creature };
      instance.queue.push(action);
      instance.trigger('actionQueued');
    }
  };

  instance.bind = function (creature) {
    var self = this;
    self.creature = creature;
    var moveActions = [
      inputActions.UP,
      inputActions.DOWN,
      inputActions.LEFT,
      inputActions.RIGHT
    ];
    moveActions.forEach(function(action) {
      self.on(action, function (event) {
        self.triggerMove(event.name, creature);
      });
    });
  };

  instance.queue = [];

  instance.nextAction = function(actionRequest) {
    if (instance.queue.length > 0) {
      var action = instance.queue.splice(0, 1)[0];
      actionRequest(action);
    } else {
      instance.nextActionRequest = actionRequest;
    }
  };

  instance.on('actionQueued', function () {
    if (instance.nextActionRequest) {
      var action = instance.queue.splice(0, 1)[0];
      instance.nextActionRequest(action);
      instance.nextActionRequest = null;
    }
  });

  return instance;
};
