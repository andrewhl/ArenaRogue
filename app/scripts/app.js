(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var grid = require('./grid');

function creature(game, opts) {
  var coords = grid.getCoords(opts.x, opts.y),
      text = game.add.text(coords.x, coords.y, opts.text, { font: '16px Arial', fill: '#FFFFFF' }),
      ct   = new Creature();

  ct.gridX = opts.x;
  ct.gridY = opts.y;
  ct.instance = text;

  return ct;
}

function Creature() {
}

_.extend(Creature.prototype, {
  updateCoords: function () {
    var coords = grid.getCoords(this.gridX, this.gridY);
    this.instance.x = coords.x;
    this.instance.y = coords.y;
  },
  moveLeft: function() {
    if (this.gridX === 1) { return false; }
    this.gridX -= 1;
    this.updateCoords();
  },
  moveRight: function() {
    if (this.gridX === grid.width) { return false; }
    this.gridX += 1;
    this.updateCoords();
  },
  moveUp: function() {
    if (this.gridY === grid.height) { return false; }
    this.gridY += 1;
    this.updateCoords();
  },
  moveDown: function() {
    if (this.gridY === 1) { return false; }
    this.gridY -= 1;
    this.updateCoords();
  }
});









module.exports = creature;

},{"./grid":3}],2:[function(require,module,exports){
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

},{"./creature":1,"./grid":3}],3:[function(require,module,exports){
'use strict';

var grid = {
  tileSize: 20,
  pixelHeight: 600,
  pixelWidth: 800,
  getCoords: function(x, y) {
    var xCoord = (x - 1) * this.tileSize,
        yCoord = this.pixelHeight - (y * this.tileSize);

    return {x: xCoord, y: yCoord};
  }
};

grid.height = grid.pixelHeight / grid.tileSize;
grid.width  = grid.pixelWidth / grid.tileSize;

module.exports = grid;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYW5kcmV3L1Byb2plY3RzL0FyZW5hUm9ndWUvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2FuZHJldy9Qcm9qZWN0cy9BcmVuYVJvZ3VlL2FwcC9zY3JpcHRzL2NyZWF0dXJlLmpzIiwiL1VzZXJzL2FuZHJldy9Qcm9qZWN0cy9BcmVuYVJvZ3VlL2FwcC9zY3JpcHRzL2dhbWUuanMiLCIvVXNlcnMvYW5kcmV3L1Byb2plY3RzL0FyZW5hUm9ndWUvYXBwL3NjcmlwdHMvZ3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBncmlkID0gcmVxdWlyZSgnLi9ncmlkJyk7XG5cbmZ1bmN0aW9uIGNyZWF0dXJlKGdhbWUsIG9wdHMpIHtcbiAgdmFyIGNvb3JkcyA9IGdyaWQuZ2V0Q29vcmRzKG9wdHMueCwgb3B0cy55KSxcbiAgICAgIHRleHQgPSBnYW1lLmFkZC50ZXh0KGNvb3Jkcy54LCBjb29yZHMueSwgb3B0cy50ZXh0LCB7IGZvbnQ6ICcxNnB4IEFyaWFsJywgZmlsbDogJyNGRkZGRkYnIH0pLFxuICAgICAgY3QgICA9IG5ldyBDcmVhdHVyZSgpO1xuXG4gIGN0LmdyaWRYID0gb3B0cy54O1xuICBjdC5ncmlkWSA9IG9wdHMueTtcbiAgY3QuaW5zdGFuY2UgPSB0ZXh0O1xuXG4gIHJldHVybiBjdDtcbn1cblxuZnVuY3Rpb24gQ3JlYXR1cmUoKSB7XG59XG5cbl8uZXh0ZW5kKENyZWF0dXJlLnByb3RvdHlwZSwge1xuICB1cGRhdGVDb29yZHM6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29vcmRzID0gZ3JpZC5nZXRDb29yZHModGhpcy5ncmlkWCwgdGhpcy5ncmlkWSk7XG4gICAgdGhpcy5pbnN0YW5jZS54ID0gY29vcmRzLng7XG4gICAgdGhpcy5pbnN0YW5jZS55ID0gY29vcmRzLnk7XG4gIH0sXG4gIG1vdmVMZWZ0OiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5ncmlkWCA9PT0gMSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB0aGlzLmdyaWRYIC09IDE7XG4gICAgdGhpcy51cGRhdGVDb29yZHMoKTtcbiAgfSxcbiAgbW92ZVJpZ2h0OiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5ncmlkWCA9PT0gZ3JpZC53aWR0aCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB0aGlzLmdyaWRYICs9IDE7XG4gICAgdGhpcy51cGRhdGVDb29yZHMoKTtcbiAgfSxcbiAgbW92ZVVwOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5ncmlkWSA9PT0gZ3JpZC5oZWlnaHQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgdGhpcy5ncmlkWSArPSAxO1xuICAgIHRoaXMudXBkYXRlQ29vcmRzKCk7XG4gIH0sXG4gIG1vdmVEb3duOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5ncmlkWSA9PT0gMSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB0aGlzLmdyaWRZIC09IDE7XG4gICAgdGhpcy51cGRhdGVDb29yZHMoKTtcbiAgfVxufSk7XG5cblxuXG5cblxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0dXJlO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGdyaWQgPSByZXF1aXJlKCcuL2dyaWQnKTtcbiAgdmFyIGNyZWF0dXJlID0gcmVxdWlyZSgnLi9jcmVhdHVyZScpO1xuICB2YXIgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShcbiAgICBncmlkLnBpeGVsV2lkdGgsXG4gICAgZ3JpZC5waXhlbEhlaWdodCxcbiAgICBQaGFzZXIuQVVUTyxcbiAgICAnZ2FtZScsXG4gICAgeyBwcmVsb2FkOiBwcmVsb2FkLCBjcmVhdGU6IGNyZWF0ZSwgdXBkYXRlOiB1cGRhdGUsIHJlbmRlcjogcmVuZGVyIH1cbiAgKTtcblxuXG4gIGZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gICAgXG4gIH1cblxuICB2YXIgcGxheWVyO1xuICB2YXIgY3Vyc29ycztcbiAgLy8gdmFyIGdyaWRUaWxlcztcbiAgdmFyIHRpbGVTaXplID0gMjA7XG4gIHZhciBhcmVuYVdpZHRoID0gODAwO1xuICB2YXIgYXJlbmFIZWlnaHQgPSA2MDA7XG5cbiAgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHBsYXllciA9IGNyZWF0dXJlKGdhbWUsIHsgdGV4dDogJ0AnLCB4OiAxLCB5OiAxIH0pO1xuICAgIGN1cnNvcnMgPSBnYW1lLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcblxuICAgIHZhciB3aWR0aENvdW50ID0gYXJlbmFXaWR0aCAvIHRpbGVTaXplLFxuICAgICAgICBoZWlnaHRDb3VudCA9IGFyZW5hSGVpZ2h0IC8gdGlsZVNpemU7XG5cbiAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGhlaWdodENvdW50OyB5ICsrKSB7XG4gICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHdpZHRoQ291bnQ7IHggKyspIHtcbiAgICAgICAgdmFyIHlQb3MgPSAodGlsZVNpemUgKiB5KSArICh0aWxlU2l6ZSAvIDIpLFxuICAgICAgICAgICAgeFBvcyA9ICh0aWxlU2l6ZSAqIHgpICsgKHRpbGVTaXplIC8gMiksXG4gICAgICAgICAgICBncmFwaGljID0gZ2FtZS5hZGQuZ3JhcGhpY3MoeFBvcywgeVBvcyk7XG4gICAgICAgIFxuICAgICAgICBncmFwaGljLmJlZ2luRmlsbCgweEZGRkZGRik7XG4gICAgICAgIGdyYXBoaWMuZHJhd0NpcmNsZSgwLCAwLCAxKTtcbiAgICAgICAgZ3JhcGhpYy5lbmRGaWxsKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGdhbWUucGh5c2ljcy5lbmFibGUocGxheWVyLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgaWYgKGN1cnNvcnMubGVmdC5pc0Rvd24pIHtcbiAgICAgIHBsYXllci5tb3ZlTGVmdCgpO1xuICAgIH0gZWxzZSBpZiAoY3Vyc29ycy5yaWdodC5pc0Rvd24pIHtcbiAgICAgIHBsYXllci5tb3ZlUmlnaHQoKTtcbiAgICB9IGVsc2UgaWYgKGN1cnNvcnMudXAuaXNEb3duKSB7XG4gICAgICBwbGF5ZXIubW92ZVVwKCk7XG4gICAgfSBlbHNlIGlmIChjdXJzb3JzLmRvd24uaXNEb3duKSB7XG4gICAgICBwbGF5ZXIubW92ZURvd24oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG5cbiAgfVxuXG59KSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ3JpZCA9IHtcbiAgdGlsZVNpemU6IDIwLFxuICBwaXhlbEhlaWdodDogNjAwLFxuICBwaXhlbFdpZHRoOiA4MDAsXG4gIGdldENvb3JkczogZnVuY3Rpb24oeCwgeSkge1xuICAgIHZhciB4Q29vcmQgPSAoeCAtIDEpICogdGhpcy50aWxlU2l6ZSxcbiAgICAgICAgeUNvb3JkID0gdGhpcy5waXhlbEhlaWdodCAtICh5ICogdGhpcy50aWxlU2l6ZSk7XG5cbiAgICByZXR1cm4ge3g6IHhDb29yZCwgeTogeUNvb3JkfTtcbiAgfVxufTtcblxuZ3JpZC5oZWlnaHQgPSBncmlkLnBpeGVsSGVpZ2h0IC8gZ3JpZC50aWxlU2l6ZTtcbmdyaWQud2lkdGggID0gZ3JpZC5waXhlbFdpZHRoIC8gZ3JpZC50aWxlU2l6ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBncmlkO1xuIl19
