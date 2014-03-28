(function() {
  'use strict';

  var grid = require('./grid');
  var arena = require('./arena');
  var infoPanel = require('./info-panel');
  var keyboard = require('./keyboard');

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

  function preload() {
  }

  function create() {
    var input = keyboard(game);

    arena.bindInput(input);
    arena.draw(game, { x: 1, y: infoPanelHeight + 1, width: arenaWidth, height: arenaHeight });
    arena.addPlayer({ x: 1, y: 1 });

    infoPanel.draw(game, { width: infoPanelWidth, height: infoPanelHeight });
  }

  function update() {
  }

  function render() {
  }

})();
