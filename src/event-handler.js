'use strict';

var exports = module.exports;

exports.on = function(actionName, cb) {
  if (!this.listeners) { this.listeners = {}; }

  var actionListeners = this.listeners[actionName] || [];
  actionListeners.push(cb);
  this.listeners[actionName] = actionListeners;

  return this;
};

exports.trigger = function(actionName) {
  if (!this.listeners) { return this; }

  var actionListeners = this.listeners[actionName] || [];
  var params = Array.prototype.splice.call(arguments, 1);
  actionListeners.forEach(function (cb) {
    cb.call(this, params);
  });

  return this;
};
