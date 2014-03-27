'use strict';

var _ = require('lodash');
var grid = require('./grid');

var infoPanel = {
  draw: function(game, options) {
    var opts = _.extend({ height: 0 }, options);
    var graphic = game.add.graphics(0, 0);
    var pixelHeight = opts.height * grid.tileSize;
    var startY  = grid.pixelHeight - pixelHeight;

    graphic.beginFill(0xAAAAAA);
    graphic.drawRect(0, startY, grid.pixelWidth, pixelHeight);
    graphic.endFill();

    // no reason to return the graphic really, but it doesn't hurt
    // and since we are injecting the "game" object anyway, it means
    // that returning an object that depends on "game" is not so bad.
    return graphic;
  }
};

module.exports = infoPanel;
