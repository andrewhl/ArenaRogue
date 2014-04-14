'use strict';

// var _ = require('lodash');
var grid = require('./grid');
var datum = require('./datum');

var data = [];

var infoPanel = {
  draw: function(game, options) {
    var graphic     = game.add.graphics(0, 0);
    var pixelWidth  = options.width * grid.tileSize;
    var pixelHeight = options.height * grid.tileSize;
    var startX      = grid.pixelWidth - pixelWidth;
    var startY      = options.y;
    var lineWidth   = 1;

    this.heroName = 'Andrew';
    this.game = game;
    this.x = options.x;
    this.y = options.y;

    graphic.beginFill(0x9BB4C9);
    graphic.drawRect(startX, startY, grid.pixelWidth, pixelHeight);
    graphic.lineStyle(lineWidth, 0xFFFFFF, 1);
    graphic.lineTo(startX, startY);
    graphic.lineTo(startX, pixelHeight - lineWidth);
    graphic.endFill();

    return graphic;
  },
  setHeroName: function(name) {
    this.heroName = name;
    drawHeroName();
  },
  setHp: function(amount) {
    this.hp = parseInt(amount, 10);
    drawHeroHp();
  }
};

Object.defineProperty(infoPanel, 'player', {
  set: function(newPlayer) {
    this._player = newPlayer;
    this.setHeroName('Andrew');
    this.setHp(10);
  },
  get: function() {
    return this._player;
  }
});


function drawHeroName() {
  var coords = grid.getPixelCoords(infoPanel, { x: 1, y: 1 });
  var name = datum(infoPanel.game, { label: 'Name', text: infoPanel.heroName, x: coords.x, y: coords.y });

  data.push(name);
  return name;
}

function drawHeroHp() {
  var coords = grid.getPixelCoords(infoPanel, { x: 1, y: 2 });
  var hp = datum(infoPanel.game, { label: 'HP', text: infoPanel.hp, x: coords.x, y: coords.y });

  data.push(hp);
  return hp;
}

module.exports = infoPanel;
