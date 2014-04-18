'use strict';

var grid = {
  tileSize: 20,
  pixelHeight: 600,
  pixelWidth: 800,
  getPixelDims: function (dims) {
    var w, h;

    if (typeof dims === 'object') {
      w = dims.width;
      h = dims.height;
    } else {
      w = arguments[0];
      h = arguments[1];
    }

    return { width: w * this.tileSize, height: h * this.tileSize };
  },
  /**
   * Gets the pixel coordinates from a relative point to the given panel.
   * @param {{ x: number, y: number }} panel the panel
   * @param {{ x: number, y: number }|number} point the relative point,
   * or the x coordinate of the point
   * @param {number} [y] the y coordinate if not using a relative point
   * @return {{ x: number, y: number }} the pixel coordinates
   */
  getPixelCoords: function() {
    var absoluteCoords = convertRelativeCoordsToAbsolute.apply(this, arguments);
    return convertCoordsToPixels(absoluteCoords);
  }
};

function convertRelativeCoordsToAbsolute(panel, point) {
  var x, y;

  if (typeof point === 'object') {
    x = point.x;
    y = point.y;
  } else {
    x = arguments[1];
    y = arguments[2];
  }
  
  var abs = { x: x - 1 + panel.x, y: y - 1 + panel.y };
  if (panel.x > 1) {
    abs.x += 1;
  }
  if (panel.y > 1) {
    abs.y += 1;
  }
  return abs;
}

function convertCoordsToPixels(point) {
  var x, y;

  if (typeof point === 'object') {
    x = point.x;
    y = point.y;
  } else {
    x = arguments[0];
    y = arguments[1];
  }

  var xCoord = (x - 1) * grid.tileSize;
  var yCoord = (y - 1) * grid.tileSize;

  return {x: xCoord, y: yCoord};
}

grid.height = grid.pixelHeight / grid.tileSize;
grid.width  = grid.pixelWidth / grid.tileSize;

module.exports = grid;
