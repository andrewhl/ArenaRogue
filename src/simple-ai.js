'use strict';

var exports = module.exports;

exports.create = function(opts) {
  var instance;
  instance.target = opts.target;
  
  instance.bind = function(creature) {
    instance.creature = creature;
  };

  instance.target.on('move', function() {
    instance.creature.trigger('move', )
  })

  return instance;
};
