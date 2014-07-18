'use strict';

var _ = require('lodash');

var TurnEngine = function () {
  this.creatures = [];
};

_.extend(TurnEngine.prototype, {
  addCreature: function (creature) {
    this.creatures.push(creature);
  },
  nextTick: function () {
    var self = this;
    this.creatures.forEach(function(creature) {
      var delay = creature.getDelay();
      if (delay === 0) {
        return self.onActionReady(creature);
      } else {
        delay = delay - 1;
        creature.setDelay(delay);
        return false;
      }
    });
  },
  onActionReady: function(creature) {
    var action = creature.getAction();
    creature.setDelay(action.cost);
    return action;
  }
});

module.exports = {
  create: function () {
    return new TurnEngine();
  }
};
