'use strict';

var _     = require('lodash');
var grid  = require('./grid');

var exports = module.exports;

exports.defaults = {
  x: grid.width - 9,
  y: 1,
  width: 10,
  height: grid.height - 5,
  style: {
    backgroundColor: 0x9BB4C9,
    border: { width: 1, color: 0xFFFFFF }
  }
};

exports.create = function(opts) {
  var instance = _.extend({}, exports.defaults, opts);
  return instance;
};

// var text  = require('./text');
// var data = [];
// var infoPanel = {
//   setHeroName: function(name) {
//     this.heroName = name;
//     drawHeroName();
//   },
//   setHp: function(amount) {
//     this.hp = parseInt(amount, 10);
//     drawHeroHp();
//   }
// };
// Object.defineProperty(infoPanel, 'player', {
//   set: function(newPlayer) {
//     this._player = newPlayer;
//     this.setHeroName('Andrew');
//     this.setHp(10);
//   },
//   get: function() {
//     return this._player;
//   }
// });
// function drawHeroName() {
//   var coords = grid.getPixelCoords(infoPanel, { x: 1, y: 1 });
//   var name = text(infoPanel.game, { label: 'Name', text: infoPanel.heroName, x: coords.x, y: coords.y });
//   data.push(name);
//   return name;
// }
// function drawHeroHp() {
//   var coords = grid.getPixelCoords(infoPanel, { x: 1, y: 2 });
//   var hp = text(infoPanel.game, { label: 'HP', text: infoPanel.hp, x: coords.x, y: coords.y });
//   data.push(hp);
//   return hp;
// }
