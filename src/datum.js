'use strict';

// var grid = require('./grid');
// var _ = require('lodash');

var datumPrototype = {

};

function datum(game, opts) {
  var text = game.add.text(opts.x, opts.y, opts.text, { font: '16px Arial', fill: '#FFFFFF' });

  var dt = Object.create(datumPrototype);
  dt.instance = text;
  dt.x = opts.x;
  dt.y = opts.y;

  return dt;
}

module.exports = datum;
