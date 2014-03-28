'use strict';

var grid = {
  tileSize: 20,
  pixelHeight: 600,
  pixelWidth: 800,
  getCoords: function(point) {
    var x, y;

    if (typeof point === 'object') {
      x = point.x;
      y = point.y;
    } else {
      x = arguments[0];
      y = arguments[1];
    }

    var xCoord = (x - 1) * this.tileSize;
    var yCoord = this.pixelHeight - (y * this.tileSize);

    return {x: xCoord, y: yCoord};
  }
};

grid.height = grid.pixelHeight / grid.tileSize;
grid.width  = grid.pixelWidth / grid.tileSize;

module.exports = grid;
