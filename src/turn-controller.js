'use strict';

var exports = module.exports;

exports.create = function() {
  var instance;

  instance = {
    inputs: [],
    queue: [],
    turnIndex: 0,
    isActive: function (input) {
      return input === this.inputs[this.turnIndex];
    },
    bind: function() {
      var self = this;
      var inputs = Array.prototype.splice.call(arguments, 0);
      inputs.forEach(function(input) {
        self.inputs.push(input);
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
      }, 5000);
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
