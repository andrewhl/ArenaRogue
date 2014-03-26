'use strict';

var grid = require('./grid');

var infoPanel = {
  pixelHeight: grid.pixelHeight / 6,
  pixelWidth: grid.pixelWidth,
  startXPos: function() {
    return grid.pixelHeight - this.pixelHeight;
  },
  draw: function(game) {
    var graphic = game.add.graphics(0, 0);
    graphic.beginFill(0xAAAAAA);
    graphic.drawRect(0, this.startXPos(), this.pixelWidth, this.pixelHeight);
    graphic.endFill();
  }
};

module.exports = infoPanel;
