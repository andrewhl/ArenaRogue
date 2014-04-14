'use strict';

// var _ = require('lodash');
var grid = require('./grid');
var datum = require('./datum');

var data = [];

var sidePanel = {
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
};

var coordHandler = {
};

function drawHeroName() {
  var coords = coordHandler.getPixelCoords(sidePanel, { x: 1, y: 1 });
  var name = datum(sidePanel.game, { text: sidePanel.heroName, x: coords.x, y: coords.y });

  data.push(name);
  return name;
}

module.exports = sidePanel;
