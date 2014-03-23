'use strict';

function creature(game, opts) {
  var text = game.add.text(opts.x, opts.y, opts.text, { font: '24px Arial', fill: '#FFFFFF' }),
      ct   = new Creature();

  ct.instance = text;

  return ct;

}

function Creature() {
}

Creature.prototype.moveLeft = function() {
  this.instance.x -= 20;
};

Creature.prototype.moveRight = function() {
  this.instance.x += 20;
};

Creature.prototype.moveUp = function() {
  this.instance.y -= 20;
};

Creature.prototype.moveDown = function() {
  this.instance.x += 20;
};









module.export = creature;
