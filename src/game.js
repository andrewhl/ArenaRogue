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

  var infoPanelWidth  = grid.width;
  var infoPanelHeight = 5;
  var arenaWidth      = grid.width;
  var arenaHeight     = grid.height - infoPanelHeight;

  var player;
  var monster;
  var cursors;


  function preload() {
  }

  function create() {
    // measurements are in tiles
    arena.draw(game, { x: 0, y: infoPanelHeight + 1, width: arenaWidth, height: arenaHeight });
    arena.addCreature({ text: '@', x: 0, y: 0 });
    infoPanel.draw(game, { width: infoPanelWidth, height: infoPanelHeight });

    // player = creature(game, { text: '@', x: 1, y: 1 });
    // monster = creature(game, { text: 'r', x: 10, y: 10 });

    // bindPlayerMovement(player);
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
