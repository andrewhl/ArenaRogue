'use strict';

var grid      = require('./grid');
var arena     = require('./arena');
var infoPanel = require('./info-panel');
var logPanel  = require('./log-panel');
var keyboard  = require('./keyboard');
var creature  = require('./creature');
var renderer  = require('./renderer');
var turnController  = require('./turn-controller');
var simpleAI  = require('./simple-ai');

var game = new Phaser.Game(
  grid.pixelWidth,
  grid.pixelHeight,
  Phaser.AUTO,
  'game',
  { preload: preload, create: create, update: update, render: render }
);

function preload() {
}

function create() {
  var arenaInst     = arena.create();
  var infoPanelInst = infoPanel.create();
  var logPanelInst  = logPanel.create();

  var playerInst    = creature.create({
    x: parseInt(arenaInst.width / 2, 10),
    y: parseInt(arenaInst.height / 2, 10)
  });
  var creatureInst  = creature.create({
    x: parseInt(arenaInst.width / 2, 10),
    y: 4,
    symbol: 'r'
  });

  renderer.init(game);
  renderer.drawMap(arenaInst);
  renderer.drawPanel(infoPanelInst);
  renderer.drawPanel(logPanelInst);
  renderer.drawCreature(arenaInst, playerInst);
  renderer.drawCreature(arenaInst, creatureInst);

  var input = keyboard(game);
  input.bind(playerInst);

  var ai = simpleAI.create({ target: playerInst });
  ai.bind(creatureInst);

  arenaInst.bindPlayer(input);
  arenaInst.bindEnemy(creatureInst);

  var turnCtrl = turnController.create();
  turnCtrl.bind(input, ai);
  turnCtrl.start();
}

function update() {
}

function render() {
}
