'use strict';

module.exports = {
  moveUp: function () {
    this.y -= 1;
    this.triggerMove();
  },
  moveDown: function () {
    this.y += 1;
    this.triggerMove();
  },
  moveLeft: function () {
    this.x -= 1;
    this.triggerMove();
  },
  moveRight: function () {
    this.x += 1;
    this.triggerMove();
  },
  move: function (point) {
    this.x = point.x;
    this.y = point.y;
    this.triggerMove();
  },
  triggerMove: function () {
    this.trigger('move', { x: this.x, y: this.y });
  }
};
