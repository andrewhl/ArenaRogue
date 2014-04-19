'use strict';

module.exports = {
  setHp: function(hp) {
    this.hp = hp;
    if (this.hp <= 0) {
      this.trigger('destroy');
    }
  }
};
