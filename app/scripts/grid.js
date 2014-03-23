'use strict';

var grid = {
  tileSize: 20,
  pixelHeight: 600,
  pixelWidth: 800,
  getCoords: function(x, y) {
    var xCoord = (x - 1) * this.tileSize,
        yCoord = this.pixelHeight - (y * this.tileSize);

    return {x: xCoord, y: yCoord};
  }
};

grid.height = grid.pixelHeight / grid.tileSize;
grid.width  = grid.pixelWidth / grid.tileSize;

module.exports = grid;