'use strict';

// var grid = require('./grid');
// var _ = require('lodash');

var textPrototype = {

};

function text(game, opts) {
  var textValue = opts.text;
  if (opts.label) {
    textValue = opts.label + ': ' + textValue;
  }
  var text = game.add.text(opts.x, opts.y, textValue, { font: '16px Arial', fill: '#FFFFFF' });

  var dt = Object.create(textPrototype);
  dt.instance = text;
  dt.x = opts.x;
  dt.y = opts.y;

  return dt;
}

module.exports = text;
