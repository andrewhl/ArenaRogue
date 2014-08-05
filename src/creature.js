'use strict';

var _             = require('lodash');
var Monologue     = require('monologue.js');
var inputActions  = require('./input-actions');
var vitality      = require('./vitality');

var exports = module.exports;

exports.defaults = {
  x: 1,
  y: 1,
  symbol: '@',
  hp: 10,
  delay: 0,
  currentAction: null
};

function Creature(opts) {
  _.extend(this, exports.defaults, opts);
  this.actionQueue = [];
}

Monologue.mixInto(Creature);

_.extend(Creature.prototype, {
  executeCurrentAction: function() {
    var action = this.currentAction;
    if (action.command === inputActions.UP) {
      this.y -= 1;
      this.emit('move');
    }
    this.currentAction = this.actionQueue.splice(0, 1)[0];
    return true;
  },
  queueAction: function(action) {
    if (! this.currentAction) {
      this.currentAction = action;
      this.emit('actionReady');
    } else {
      this.actionQueue.push(action);
    }
  }
});

exports.create = function(options) {
  var instance = new Creature(options);

  _.extend(instance, vitality);
  Object.defineProperties(instance, {
    hasCurrentAction: {
      get: function() {
        return !!this.currentAction;
      }
    }
  });

  return instance;
};
