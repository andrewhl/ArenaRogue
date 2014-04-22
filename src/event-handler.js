'use strict';

var exports = module.exports;

exports.on = function(actionName, cb) {
  if (!this.listeners) { this.listeners = {}; }

  var actionListeners = this.listeners[actionName] || [];
  actionListeners.push(cb);
  this.listeners[actionName] = actionListeners;

  return this;
};

exports.trigger = function(actionName, data) {
  var self = this;
  if (!self.listeners) { return self; }

  var event  = {
    active: true,
    name: actionName,
    preventDefault: function() {
      this.active = false;
    }
  };
  var params = [event, data];
  var actionListeners = self.listeners[actionName] || [];
  actionListeners.forEach(function (cb) {
    cb.apply(self, params);
  });

  return event.active;
};
