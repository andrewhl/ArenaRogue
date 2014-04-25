'use strict';

var exports = module.exports;

exports.create = function(opts) {
  var instance = {};
  instance.target = opts.target;

  instance.bind = function(creature) {
    this.creature = creature;
  };

  // Add temporarily so that it matches a player interface
  instance.on = function () {};

  instance.creature.on('move', function() {
    instance.creature.moveDown();
  });
  
  instance.nextAction = function() {
    var move = function() {
      instance.creature.trigger('move');
    };
    return { action: move, turnCost: 1.0, creature: this.creature };
  };

  return instance;
};
