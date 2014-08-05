'use strict';

var _ = require('lodash');

var TurnEngine = function () {
  this.currentIndex = 0;
  this.items = [];
};

_.extend(TurnEngine.prototype, {
  addCreature: function (creature) {
    var self = this;
    creature.on('actionReady', function (event) {
      var item = self.getCurrentItem();
      if (item.creature === creature) {
        self.internalTick();
      }
    });
    self.items.push( { creature: creature, delay: null } );
    return true;
  },
  nextTick: function () {
    var self = this;
    if (!self.tickDone()) {
      return;
    }

    self.currentIndex = 0;

    while(this.internalTick());
  },
  internalTick: function () {
    var self = this;
    var item = self.getCurrentItem();

    if (!item) {
      return false;
    }

    var creature = item.creature;

    if (item.delay === null) {
      if (creature.currentAction === null) {
        return false;
      }
      item.delay = creature.currentAction.cost;
    }

    if (item.delay === 0) {
      if (creature.hasCurrentAction) {
        creature.executeCurrentAction();
        self.currentIndex += 1;
        return self.updateItemDelay(item);
      }
    } else {
      item.delay = item.delay - 1;
      self.currentIndex += 1;
    }

    return true;
  },
  tickDone: function() {
    return this.currentIndex === this.items.length;
  },
  updateItemDelay: function(item) {
    var self = this;
    if (item.creature.hasCurrentAction) {
      item.delay = item.creature.currentAction.cost;
    } else {
      return false;
    }
    return true;
  },
  getCurrentItem: function() {
    return this.items[this.currentIndex];
  }
});

module.exports = {
  create: function () {
    return new TurnEngine();
  }
};
