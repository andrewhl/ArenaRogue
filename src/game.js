(function() {
  'use strict';

  var grid = require('./grid');
  var arena = require('./arena');
  var sidePanel = require('./side-panel');
  var infoPanel = require('./info-panel');
  var keyboard = require('./keyboard');

  var game = new Phaser.Game(
    grid.pixelWidth,
    grid.pixelHeight,
    Phaser.AUTO,
    'game',
    { preload: preload, create: create, update: update, render: render }
  );

  var sidePanelWidth  = 10;
  var sidePanelHeight = grid.height - 5;
  var infoPanelWidth  = grid.width;
  var infoPanelHeight = 5;
  var arenaWidth      = grid.width - sidePanelWidth;
  var arenaHeight     = grid.height - infoPanelHeight;

  function preload() {
  }

  function create() {
    var input = keyboard(game);

    arena.bindInput(input);
    arena.draw(game, { x: 1, y: 1, width: arenaWidth, height: arenaHeight });
    arena.addPlayer({ x: arenaWidth / 2, y: arenaHeight });

    sidePanel.draw(game, { x: grid.width - sidePanelWidth, y: 1, width: sidePanelWidth, height: sidePanelHeight });
    infoPanel.draw(game, { width: infoPanelWidth, height: infoPanelHeight });

    // sidePanel.setHeroName('Andrew');
    // infoPanel.initData();
    // addDatum(game, { x: 0, y: 1, text: '1' });
  }

  function update() {
  }

  function render() {
  }

})();
