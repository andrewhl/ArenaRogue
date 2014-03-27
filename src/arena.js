'use strict';

var _ = require('lodash');
var grid = require('./grid');

var arenaTiles = [];

function draw(game, options) {
  var opts = _.extend({ height: grid.height }, options);

  for (var y = 0; y < opts.height; y ++) {
    for (var x = 0; x < grid.width; x ++) {
      var yPos = (grid.tileSize * y) + (grid.tileSize / 2),
          xPos = (grid.tileSize * x) + (grid.tileSize / 2),
          graphic = game.add.graphics(xPos, yPos);

      graphic.beginFill(0xFFFFFF);
      graphic.drawCircle(0, 0, 1);
      graphic.endFill();
      arenaTiles.push(graphic);
    }
  }
}

module.exports = {
  draw: draw
};
