(function() {
  'use strict';

  var creature = require('./creature');
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });


  function preload() {
    
  }

  var player;
  var cursors;

  function create() {
    player = creature(game, { text: '@', x: 4, y: 5 });
    cursors = game.input.keyboard.createCursorKeys();
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
