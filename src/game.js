(function() {
  'use strict';

  var grid = require('./grid');
  var arena = require('./arena');
  var infoPanel = require('./info-panel');
  var creature = require('./creature');

  var game = new Phaser.Game(
    grid.pixelWidth,
    grid.pixelHeight,
    Phaser.AUTO,
    'game',
    { preload: preload, create: create, update: update, render: render }
  );
  var infoPanelHeight = parseInt(grid.height / 6, 10);
  var player;
  var monster;
  var cursors;


  function preload() {
  }

  function create() {
    // measurements are in tiles not in pixels
    arena.draw(game, { height: grid.height - infoPanelHeight  });
    infoPanel.draw(game, { height: infoPanelHeight });

    player = creature(game, { text: '@', x: 1, y: 1 });
    monster = creature(game, { text: 'r', x: 10, y: 10 });

    bindPlayerMovement(player);
  }

  function update() {
  }

  function render() {
  }

  function bindPlayerMovement(player) {
    cursors = game.input.keyboard.createCursorKeys();
    cursors.right.onDown.add(player.moveRight, player);
    cursors.left.onDown.add(player.moveLeft, player);
    cursors.up.onDown.add(player.moveUp, player);
    cursors.down.onDown.add(player.moveDown, player);
  }

})();
