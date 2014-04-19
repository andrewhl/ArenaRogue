'use strict';

module.exports = {
  moveUp: function () {
    var newY = this.y - 1;
    if (this.trigger('beforeMove', { x: this.x, y: newY })) {
      this.y = newY;
      this.trigger('change');
    }
  },
  moveDown: function () {
    var newY = this.y + 1;
    if (this.trigger('beforeMove', { x: this.x, y: newY })) {
      this.y = newY;
      this.trigger('change');
    }
  },
  moveLeft: function () {
    var newX = this.x - 1;
    if (this.trigger('beforeMove', { x: newX, y: this.y })) {
      this.x = newX;
      this.trigger('change');
    }
  },
  moveRight: function () {
    var newX = this.x + 1;
    if (this.trigger('beforeMove', { x: newX, y: this.y })) {
      this.x = newX;
      this.trigger('change');
    }
  }
};
