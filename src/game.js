(function() {
  'use strict';

  var grid = require('./grid');
  var creature = require('./creature');
  var infoPanel = require('./infoPanel');

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
  var arenaTiles = [];

  function create() {
    player = creature(game, { text: '@', x: 1, y: 1 });
    monster = creature(game, { text: 'r', x: 10, y: 10 });
    cursors = game.input.keyboard.createCursorKeys();


    for (var y = 0; y < grid.height; y ++) {
      for (var x = 0; x < grid.width; x ++) {
        var yPos = (grid.tileSize * y) + (grid.tileSize / 2),
            xPos = (grid.tileSize * x) + (grid.tileSize / 2),
            graphic = game.add.graphics(xPos, yPos);

        graphic.beginFill(0xFFFFFF);
        graphic.drawCircle(0, 0, 1);
        graphic.endFill();
        arenaTiles.push(graphic);
      }
    }
    
    infoPanel.draw(game);

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
