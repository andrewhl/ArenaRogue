'use strict';

module.exports = {
  moveUp: function () {
    var newY = this.y - 1;
    if (this.trigger('beforeMove', { x: this.x, y: newY })) {
      this.y = newY;
      this.trigger('move');
    }
  },
  moveDown: function () {
    var newY = this.y + 1;
    if (this.trigger('beforeMove', { x: this.x, y: newY })) {
      this.y = newY;
      this.trigger('move');
    }
  },
  moveLeft: function () {
    var newX = this.x - 1;
    if (this.trigger('beforeMove', { x: newX, y: this.y })) {
      this.x = newX;
      this.trigger('move');
    }
  },
  moveRight: function () {
    var newX = this.x + 1;
    if (this.trigger('beforeMove', { x: newX, y: this.y })) {
      this.x = newX;
      this.trigger('move');
    }
  }
};
