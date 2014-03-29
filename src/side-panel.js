'use strict';

var _ = require('lodash');
var grid = require('./grid');

var sidePanel = {
  draw: function(game, options) {
    var graphic     = game.add.graphics(0, 0);
    var pixelWidth  = options.width * grid.tileSize;
    var pixelHeight = options.height * grid.tileSize;
    var startX      = grid.pixelWidth - pixelWidth;
    var startY      = options.y;
    var lineWidth   = 1;

    graphic.beginFill(0x9BB4C9);
    graphic.drawRect(startX, startY, grid.pixelWidth, pixelHeight);
    graphic.lineStyle(lineWidth, 0xFFFFFF, 1);
    graphic.lineTo(startX, startY);
    graphic.lineTo(startX, pixelHeight - lineWidth);
    graphic.endFill();

    // no reason to return the graphic really, but it doesn't hurt
    // and since we are injecting the "game" object anyway, it means
    // that returning an object that depends on "game" is not so bad.
    return graphic;
  }
};

module.exports = sidePanel;
