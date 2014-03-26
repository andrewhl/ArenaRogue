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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYW5kcmV3L1Byb2plY3RzL0FyZW5hUm9ndWUvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2FuZHJldy9Qcm9qZWN0cy9BcmVuYVJvZ3VlL2FwcC9zY3JpcHRzL2NyZWF0dXJlLmpzIiwiL1VzZXJzL2FuZHJldy9Qcm9qZWN0cy9BcmVuYVJvZ3VlL2FwcC9zY3JpcHRzL2dhbWUuanMiLCIvVXNlcnMvYW5kcmV3L1Byb2plY3RzL0FyZW5hUm9ndWUvYXBwL3NjcmlwdHMvZ3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ3JpZCA9IHJlcXVpcmUoJy4vZ3JpZCcpO1xuXG5mdW5jdGlvbiBjcmVhdHVyZShnYW1lLCBvcHRzKSB7XG4gIHZhciBjb29yZHMgPSBncmlkLmdldENvb3JkcyhvcHRzLngsIG9wdHMueSksXG4gICAgICB0ZXh0ID0gZ2FtZS5hZGQudGV4dChjb29yZHMueCwgY29vcmRzLnksIG9wdHMudGV4dCwgeyBmb250OiAnMTZweCBBcmlhbCcsIGZpbGw6ICcjRkZGRkZGJyB9KSxcbiAgICAgIGN0ICAgPSBuZXcgQ3JlYXR1cmUoKTtcblxuICBjdC5ncmlkWCA9IG9wdHMueDtcbiAgY3QuZ3JpZFkgPSBvcHRzLnk7XG4gIGN0Lmluc3RhbmNlID0gdGV4dDtcblxuICByZXR1cm4gY3Q7XG59XG5cbmZ1bmN0aW9uIENyZWF0dXJlKCkge1xufVxuXG5fLmV4dGVuZChDcmVhdHVyZS5wcm90b3R5cGUsIHtcbiAgdXBkYXRlQ29vcmRzOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvb3JkcyA9IGdyaWQuZ2V0Q29vcmRzKHRoaXMuZ3JpZFgsIHRoaXMuZ3JpZFkpO1xuICAgIHRoaXMuaW5zdGFuY2UueCA9IGNvb3Jkcy54O1xuICAgIHRoaXMuaW5zdGFuY2UueSA9IGNvb3Jkcy55O1xuICB9LFxuICBtb3ZlTGVmdDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZ3JpZFggPT09IDEpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgdGhpcy5ncmlkWCAtPSAxO1xuICAgIHRoaXMudXBkYXRlQ29vcmRzKCk7XG4gIH0sXG4gIG1vdmVSaWdodDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZ3JpZFggPT09IGdyaWQud2lkdGgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgdGhpcy5ncmlkWCArPSAxO1xuICAgIHRoaXMudXBkYXRlQ29vcmRzKCk7XG4gIH0sXG4gIG1vdmVVcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZ3JpZFkgPT09IGdyaWQuaGVpZ2h0KSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHRoaXMuZ3JpZFkgKz0gMTtcbiAgICB0aGlzLnVwZGF0ZUNvb3JkcygpO1xuICB9LFxuICBtb3ZlRG93bjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZ3JpZFkgPT09IDEpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgdGhpcy5ncmlkWSAtPSAxO1xuICAgIHRoaXMudXBkYXRlQ29vcmRzKCk7XG4gIH1cbn0pO1xuXG5cblxuXG5cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdHVyZTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBncmlkID0gcmVxdWlyZSgnLi9ncmlkJyk7XG4gIHZhciBjcmVhdHVyZSA9IHJlcXVpcmUoJy4vY3JlYXR1cmUnKTtcbiAgdmFyIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoXG4gICAgZ3JpZC5waXhlbFdpZHRoLFxuICAgIGdyaWQucGl4ZWxIZWlnaHQsXG4gICAgUGhhc2VyLkFVVE8sXG4gICAgJ2dhbWUnLFxuICAgIHsgcHJlbG9hZDogcHJlbG9hZCwgY3JlYXRlOiBjcmVhdGUsIHVwZGF0ZTogdXBkYXRlLCByZW5kZXI6IHJlbmRlciB9XG4gICk7XG5cblxuICBmdW5jdGlvbiBwcmVsb2FkKCkge1xuICB9XG5cbiAgdmFyIHBsYXllcjtcbiAgdmFyIG1vbnN0ZXI7XG4gIHZhciBjdXJzb3JzO1xuICAvLyB2YXIgZ3JpZFRpbGVzO1xuICB2YXIgdGlsZVNpemUgPSAyMDtcbiAgdmFyIGFyZW5hV2lkdGggPSA4MDA7XG4gIHZhciBhcmVuYUhlaWdodCA9IDYwMDtcblxuICBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgcGxheWVyID0gY3JlYXR1cmUoZ2FtZSwgeyB0ZXh0OiAnQCcsIHg6IDEsIHk6IDEgfSk7XG4gICAgbW9uc3RlciA9IGNyZWF0dXJlKGdhbWUsIHsgdGV4dDogJ3InLCB4OiAxMCwgeTogMTAgfSk7XG4gICAgY3Vyc29ycyA9IGdhbWUuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuXG4gICAgdmFyIHdpZHRoQ291bnQgPSBhcmVuYVdpZHRoIC8gdGlsZVNpemUsXG4gICAgICAgIGhlaWdodENvdW50ID0gYXJlbmFIZWlnaHQgLyB0aWxlU2l6ZTtcblxuICAgIGZvciAodmFyIHkgPSAwOyB5IDwgaGVpZ2h0Q291bnQ7IHkgKyspIHtcbiAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgd2lkdGhDb3VudDsgeCArKykge1xuICAgICAgICB2YXIgeVBvcyA9ICh0aWxlU2l6ZSAqIHkpICsgKHRpbGVTaXplIC8gMiksXG4gICAgICAgICAgICB4UG9zID0gKHRpbGVTaXplICogeCkgKyAodGlsZVNpemUgLyAyKSxcbiAgICAgICAgICAgIGdyYXBoaWMgPSBnYW1lLmFkZC5ncmFwaGljcyh4UG9zLCB5UG9zKTtcblxuICAgICAgICBncmFwaGljLmJlZ2luRmlsbCgweEZGRkZGRik7XG4gICAgICAgIGdyYXBoaWMuZHJhd0NpcmNsZSgwLCAwLCAxKTtcbiAgICAgICAgZ3JhcGhpYy5lbmRGaWxsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3Vyc29ycy5yaWdodC5vbkRvd24uYWRkKHBsYXllci5tb3ZlUmlnaHQsIHBsYXllcik7XG4gICAgY3Vyc29ycy5sZWZ0Lm9uRG93bi5hZGQocGxheWVyLm1vdmVMZWZ0LCBwbGF5ZXIpO1xuICAgIGN1cnNvcnMudXAub25Eb3duLmFkZChwbGF5ZXIubW92ZVVwLCBwbGF5ZXIpO1xuICAgIGN1cnNvcnMuZG93bi5vbkRvd24uYWRkKHBsYXllci5tb3ZlRG93biwgcGxheWVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcblxuICB9XG5cbn0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBncmlkID0ge1xuICB0aWxlU2l6ZTogMjAsXG4gIHBpeGVsSGVpZ2h0OiA2MDAsXG4gIHBpeGVsV2lkdGg6IDgwMCxcbiAgZ2V0Q29vcmRzOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgdmFyIHhDb29yZCA9ICh4IC0gMSkgKiB0aGlzLnRpbGVTaXplLFxuICAgICAgICB5Q29vcmQgPSB0aGlzLnBpeGVsSGVpZ2h0IC0gKHkgKiB0aGlzLnRpbGVTaXplKTtcblxuICAgIHJldHVybiB7eDogeENvb3JkLCB5OiB5Q29vcmR9O1xuICB9XG59O1xuXG5ncmlkLmhlaWdodCA9IGdyaWQucGl4ZWxIZWlnaHQgLyBncmlkLnRpbGVTaXplO1xuZ3JpZC53aWR0aCAgPSBncmlkLnBpeGVsV2lkdGggLyBncmlkLnRpbGVTaXplO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdyaWQ7XG4iXX0=
