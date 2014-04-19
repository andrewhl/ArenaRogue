(function() {
  'use strict';

  var grid = require('./grid');
  var arena = require('./arena');
  var infoPanel = require('./info-panel');
  var logPanel = require('./log-panel');
  var keyboard = require('./keyboard');
  var creature = require('./creature');
  var renderer = require('./renderer');

  var game = new Phaser.Game(
    grid.pixelWidth,
    grid.pixelHeight,
    Phaser.AUTO,
    'game',
    { preload: preload, create: create, update: update, render: render }
  );

  var arenaInst, infoPanelInst, logPanelInst, playerInst;

  function preload() {
  }

  function create() {
    // var input = keyboard(game);
    // var player = creature({ name: 'Andrew', hp: 10, text: '@' });

    // arena.bindInput(input);
    arenaInst     = arena.create();
    infoPanelInst = infoPanel.create();
    logPanelInst  = logPanel.create();
    playerInst    = creature.create({
      x: parseInt(arenaInst.width / 2, 10),
      y: parseInt(arenaInst.height / 2, 10)
    });

    renderer.init(game);
    renderer.drawMap(arenaInst);
    renderer.drawPanel(infoPanelInst);
    renderer.drawPanel(logPanelInst);
    renderer.drawCreature(arenaInst, playerInst);

    var input = keyboard(game);
    input.bind(playerInst);
  }

  function update() {
  }

  function render() {
  }

})();
