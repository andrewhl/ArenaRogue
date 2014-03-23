(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function creature(game, opts) {
  var text = game.add.text(opts.x, opts.y, opts.text, { font: '24px Arial', fill: '#FFFFFF' }),
      ct   = new Creature();

  ct.instance = text;

  return ct;

}

function Creature() {
}

Creature.prototype.moveLeft = function() {
  this.instance.x -= 20;
};

Creature.prototype.moveRight = function() {
  this.instance.x += 20;
};

Creature.prototype.moveUp = function() {
  this.instance.y -= 20;
};

Creature.prototype.moveDown = function() {
  this.instance.x += 20;
};









module.export = creature;

},{}],2:[function(require,module,exports){
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

},{"./creature":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYW5kcmV3L1Byb2plY3RzL0FyZW5hUm9ndWUvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2FuZHJldy9Qcm9qZWN0cy9BcmVuYVJvZ3VlL2FwcC9zY3JpcHRzL2NyZWF0dXJlLmpzIiwiL1VzZXJzL2FuZHJldy9Qcm9qZWN0cy9BcmVuYVJvZ3VlL2FwcC9zY3JpcHRzL2Zha2VfOTNkMTVmZDcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0dXJlKGdhbWUsIG9wdHMpIHtcbiAgdmFyIHRleHQgPSBnYW1lLmFkZC50ZXh0KG9wdHMueCwgb3B0cy55LCBvcHRzLnRleHQsIHsgZm9udDogJzI0cHggQXJpYWwnLCBmaWxsOiAnI0ZGRkZGRicgfSksXG4gICAgICBjdCAgID0gbmV3IENyZWF0dXJlKCk7XG5cbiAgY3QuaW5zdGFuY2UgPSB0ZXh0O1xuXG4gIHJldHVybiBjdDtcblxufVxuXG5mdW5jdGlvbiBDcmVhdHVyZSgpIHtcbn1cblxuQ3JlYXR1cmUucHJvdG90eXBlLm1vdmVMZWZ0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaW5zdGFuY2UueCAtPSAyMDtcbn07XG5cbkNyZWF0dXJlLnByb3RvdHlwZS5tb3ZlUmlnaHQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbnN0YW5jZS54ICs9IDIwO1xufTtcblxuQ3JlYXR1cmUucHJvdG90eXBlLm1vdmVVcCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmluc3RhbmNlLnkgLT0gMjA7XG59O1xuXG5DcmVhdHVyZS5wcm90b3R5cGUubW92ZURvd24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbnN0YW5jZS54ICs9IDIwO1xufTtcblxuXG5cblxuXG5cblxuXG5cbm1vZHVsZS5leHBvcnQgPSBjcmVhdHVyZTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBjcmVhdHVyZSA9IHJlcXVpcmUoJy4vY3JlYXR1cmUnKTtcbiAgdmFyIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoODAwLCA2MDAsIFBoYXNlci5BVVRPLCAnZ2FtZScsIHsgcHJlbG9hZDogcHJlbG9hZCwgY3JlYXRlOiBjcmVhdGUsIHVwZGF0ZTogdXBkYXRlLCByZW5kZXI6IHJlbmRlciB9KTtcblxuXG4gIGZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gICAgXG4gIH1cblxuICB2YXIgcGxheWVyO1xuICB2YXIgY3Vyc29ycztcblxuICBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgcGxheWVyID0gY3JlYXR1cmUoZ2FtZSwgeyB0ZXh0OiAnQCcsIHg6IDQsIHk6IDUgfSk7XG4gICAgY3Vyc29ycyA9IGdhbWUuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICAgIC8vIGdhbWUucGh5c2ljcy5lbmFibGUocGxheWVyLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgaWYgKGN1cnNvcnMubGVmdC5pc0Rvd24pIHtcbiAgICAgIHBsYXllci5tb3ZlTGVmdCgpO1xuICAgIH0gZWxzZSBpZiAoY3Vyc29ycy5yaWdodC5pc0Rvd24pIHtcbiAgICAgIHBsYXllci5tb3ZlUmlnaHQoKTtcbiAgICB9IGVsc2UgaWYgKGN1cnNvcnMudXAuaXNEb3duKSB7XG4gICAgICBwbGF5ZXIubW92ZVVwKCk7XG4gICAgfSBlbHNlIGlmIChjdXJzb3JzLmRvd24uaXNEb3duKSB7XG4gICAgICBwbGF5ZXIubW92ZURvd24oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG5cbiAgfVxuXG59KSgpO1xuIl19
