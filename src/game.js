'use strict';

var grid       = require('./grid');
var arena      = require('./arena');
var keyboard   = require('./keyboard');
var creature   = require('./creature');
var renderer   = require('./renderer');
var turnEngine = require('./turn-engine');
var world      = require('./world');


var game = new Phaser.Game(
  grid.pixelWidth,
  grid.pixelHeight,
  Phaser.AUTO,
  'game',
  { preload: preload, create: create, update: update, render: render }
);

var tEngine;

function preload() {
}

function create() {
  var arenaInst     = arena.create();
  var worldInst     = world.create();

  var playerInst    = worldInst.createCreature({
    x: parseInt(arenaInst.width / 2, 10),
    y: parseInt(arenaInst.height / 2, 10)
  });

  renderer.init(game);
  renderer.drawMap(arenaInst);
  renderer.drawCreature(arenaInst, playerInst);

  var player = keyboard.create(playerInst, game);
  arenaInst.bindPlayer(player);

  tEngine = turnEngine.create();
  tEngine.addCreature(playerInst);
}

function update() {
  tEngine.nextTick();
}

function render() {

}
