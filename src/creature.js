'use strict';

var _             = require('lodash');
var Monologue     = require('monologue.js');
var eventHandler  = require('./event-handler');
var movement      = require('./movement');
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
    // world.receiveAction(this.currentAction);
    this.currentAction = this.actionQueue.splice(0, 1)[0];
    return true;
  },
  queueAction: function(action) {
    if (! this.currentAction) {
      this.currentAction = action;
    } else {
      this.actionQueue.push(action);
    }
  }
});

exports.create = function(opts) {
  var instance = new Creature(opts);

  _.extend(instance, vitality, movement, eventHandler);
  Object.defineProperties(instance, {
    hasCurrentAction: {
      get: function() {
        return !!this.currentAction;
      }
    }
  });

  return instance;
};
