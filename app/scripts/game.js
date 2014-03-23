(function() {
  'use strict';

  var grid = require('./grid');
  var creature = require('./creature');
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
  // var gridTiles;
  var tileSize = 20;
  var arenaWidth = 800;
  var arenaHeight = 600;

  function create() {
    player = creature(game, { text: '@', x: 1, y: 1 });
    monster = creature(game, { text: 'r', x: 10, y: 10 });
    cursors = game.input.keyboard.createCursorKeys();

    var widthCount = arenaWidth / tileSize,
        heightCount = arenaHeight / tileSize;

    for (var y = 0; y < heightCount; y ++) {
      for (var x = 0; x < widthCount; x ++) {
        var yPos = (tileSize * y) + (tileSize / 2),
            xPos = (tileSize * x) + (tileSize / 2),
            graphic = game.add.graphics(xPos, yPos);

        graphic.beginFill(0xFFFFFF);
        graphic.drawCircle(0, 0, 1);
        graphic.endFill();
      }
    }

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
