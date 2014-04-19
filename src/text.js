'use strict';

module.exports = function text(game, opts) {
  var textValue = opts.text;
  if (opts.label) {
    textValue = opts.label + ': ' + textValue;
  }

  var inst = game.add.text(opts.x, opts.y, textValue, {
    font: '16px Arial',
    fill: '#FFFFFF'
  });

  return {
    instance: inst,
    x: opts.x,
    y: opts.y
  };
};
