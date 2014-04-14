(function() {
  'use strict';

  var grid = require('./grid');
  var arena = require('./arena');
  var infoPanel = require('./info-panel');
  var logPanel = require('./log-panel');
  var keyboard = require('./keyboard');

  var game = new Phaser.Game(
    grid.pixelWidth,
    grid.pixelHeight,
    Phaser.AUTO,
    'game',
    { preload: preload, create: create, update: update, render: render }
  );

  var infoPanelWidth  = 10;
  var infoPanelHeight = grid.height - 5;
  var logPanelWidth  = grid.width;
  var logPanelHeight = 5;
  var arenaWidth      = grid.width - infoPanelWidth;
  var arenaHeight     = grid.height - logPanelHeight;

  function preload() {
  }

  function create() {
    var input = keyboard(game);

    
    arena.bindInput(input);
    arena.draw(game, { x: 1, y: 1, width: arenaWidth, height: arenaHeight });
    var player = arena.addPlayer({ x: arenaWidth / 2, y: arenaHeight });

    infoPanel.draw(game, { x: grid.width - infoPanelWidth, y: 1, width: infoPanelWidth, height: infoPanelHeight });
    infoPanel.player = player;

    logPanel.draw(game, { width: logPanelWidth, height: logPanelHeight });

  }

  function update() {
  }

  function render() {
  }

})();
