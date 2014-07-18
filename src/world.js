'use strict';

var _ = require('lodash');
var Creature = require('./creature');

var World = function () {
  this.creatures = [];
}

_.extend(World.prototype, {
  register: function (creature) {
    this.creatures.push(creature);
  },
  createCreature: function(opts) {
    var creature = Creature.create(opts);
    this.register(creature);
    return creature;
  }
});

module.exports = {
  create: function () {
    return new World();
  }
};

