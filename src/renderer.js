'use strict';

var grid = require('./grid');
var game;

var exports = module.exports;

exports.init = function(gameInstance) {
  game = gameInstance;
};

exports.drawCreature = function(panel, creature) {
  var coords = grid.getPixelCoords(panel, creature);
  var text = game.add.text(coords.x, coords.y, creature.symbol, {
    font: '16px Arial',
    fill: '#FFFFFF'
  });

  creature.on('change', function() {
    var coords = grid.getPixelCoords(panel, creature);
    text.x = coords.x;
    text.y = coords.y;
  });
};

exports.drawMap = function(map) {
  var tileOffset = grid.tileSize / 2;
  for (var y = 1; y <= map.height; y += 1) {
    for (var x = 1; x <= map.width; x += 1) {
      var coords  = grid.getPixelCoords(map, x, y);
      var graphic = game.add.graphics(coords.x + tileOffset, coords.y + tileOffset);

      graphic.beginFill(0xFFFFFF);
      graphic.drawCircle(0, 0, 1);
      graphic.endFill();
    }
  }
};

exports.drawPanel = function(panel) {
  var graphic     = game.add.graphics(0, 0);
  var coords      = grid.getPixelCoords({ x: 1, y: 1 }, panel);
  var dims        = grid.getPixelDims(panel);
  var style       = panel.style;
  var border      = style.border;

  graphic.beginFill(style.backgroundColor);
  graphic.drawRect(coords.x, coords.y, dims.width, dims.height);

  if (border) {
    graphic.lineStyle(style.border.width, style.border.color, 1);
    graphic.lineTo(coords.x, coords.y);
    graphic.lineTo(coords.x, dims.height - border.width);
  }

  graphic.endFill();

  return graphic;
};
