'use strict';

var exports = module.exports;

exports.create = function() {
  var instance;

  instance = {
    players: [],
    queue: [],
    turnIndex: 0,
    isActive: function (player) {
      return player === this.players[this.turnIndex];
    },
    bind: function() {
      var self = this;
      var players = Array.prototype.splice.call(arguments, 0);
      players.forEach(function(input) {
        self.players.push(input);
        input.on('move', function(event, dt) {
          if (self.isActive(input)) {
            console.log('move');
            self.queue.push(dt);
          }
        });
      });
    },
    start: function () {
      var self = this;
      window.setInterval(function () {
        self.turnIndex += 1;
        if (self.turnIndex === 2) {
          self.turnIndex = 0;
          self.execute();
        }
        console.log(self.turnIndex);
      }, 1000);
    },
    execute: function() {
      this.queue.forEach(function(action) {
        action();
      });
      this.queue = [];
    }
  };
  return instance;
};
