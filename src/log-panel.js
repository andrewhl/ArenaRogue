'use strict';

var _ = require('lodash');
var grid = require('./grid');
// var datum = require('./datum');

var logPanel = {
  draw: function(game, options) {
    var opts = _.extend({ height: 0 }, options);
    var graphic = game.add.graphics(0, 0);
    var pixelHeight = opts.height * grid.tileSize;
    var startY  = grid.pixelHeight - pixelHeight;
    this.heroName = 'Andrew';

    graphic.beginFill(0xAAAAAA);
    graphic.drawRect(0, startY, grid.pixelWidth, pixelHeight);
    graphic.endFill();

    return graphic;
  }
};

module.exports = logPanel;
