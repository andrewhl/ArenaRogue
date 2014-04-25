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

  // instance.target.on('move', function() {
  //   instance.creature.trigger('move', )
  // })
  
  instance.nextAction = function() {
    return { action: 'move', turnCost: 1.0, creature: this.creature };
  };

  return instance;
};
