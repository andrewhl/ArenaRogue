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
  var cursors;
  // var gridTiles;
  var tileSize = 20;
  var arenaWidth = 800;
  var arenaHeight = 600;

  function create() {
    player = creature(game, { text: '@', x: 1, y: 1 });
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
    // game.physics.enable(player, Phaser.Physics.ARCADE)
  }

  function update() {
    if (cursors.left.isDown) {
      player.moveLeft();
    } else if (cursors.right.isDown) {
      player.moveRight();
    } else if (cursors.up.isDown) {
      player.moveUp();
    } else if (cursors.down.isDown) {
      player.moveDown();
    }
  }

  function render() {

  }

})();
