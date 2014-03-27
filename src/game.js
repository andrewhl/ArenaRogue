(function() {
  'use strict';

  var grid = require('./grid');
  var arena = require('./arena');
  var creature = require('./creature');
  var infoPanel = require('./infoPanel');

  var game = new Phaser.Game(
    grid.pixelWidth,
    grid.pixelHeight,
    Phaser.AUTO,
    'game',
    { preload: preload, create: create, update: update, render: render }
  );


  function preload() {
  }

  var player;
  var monster;
  var cursors;

  function create() {
    arena.draw(game);
    infoPanel.draw(game);

    player = creature(game, { text: '@', x: 1, y: 1 });
    monster = creature(game, { text: 'r', x: 10, y: 10 });

    cursors = game.input.keyboard.createCursorKeys();
    cursors.right.onDown.add(player.moveRight, player);
    cursors.left.onDown.add(player.moveLeft, player);
    cursors.up.onDown.add(player.moveUp, player);
    cursors.down.onDown.add(player.moveDown, player);
  }

  function update() {
  }

  function render() {
  }

})();
