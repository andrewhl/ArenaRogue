'use strict';

var _ = require('lodash');

var TurnEngine = function () {
  this.actions = [];
};

_.extend(TurnEngine.prototype, {
  queue: function (action) {
    this.actions.push(action);
  },
  getNextAction: function() {
    return this.actions[0];
  }
});

module.exports = {
  create: function () {
    return new TurnEngine();
  }
};
