'use strict';

var _       = require('lodash');
var exports = module.exports;

exports.create = function() {
  var instance;

  instance = {
    players: [],
    activePlayers: [],
    inactivePlayers: [],
    queue: [],
    turnIndex: 0,
    isActive: function (player) {
      return player === this.players[this.turnIndex];
    },
    initTurnBalance: function (inputs, balance) {
      inputs.forEach(function(input) {
        input.turnBalance = balance;
      });
    },
    bind: function() {
      var self = this;
      var players = Array.prototype.splice.call(arguments, 0);
      players.forEach(function(input) {
        self.players.push(input);
      });
    },
    setupActivePlayers: function() {
      var self = this;
      self.players.forEach(function(input) {
        self.activePlayers.push(input);
      });
    },
    getCurrentActions: function(done) {
      var self = this;

      if (self.currentActionIndex >= self.activePlayers.length) {
        done();
        return;
      }
      var input = self.activePlayers[self.currentActionIndex];

      if (input.creature.turnBalance >= 1.0) {
        self.currentActionIndex += 1;
        self.getCurrentActions(done);
        return;
      }

      input.nextAction(function(action) {
        self.queue.push(action);
        self.currentActionIndex += 1;
        self.getCurrentActions(done);
      });
    },
    calculateTurnBalance: function() {
      var self = this;
      self.queue.forEach(function(action) {
        var turnCost = action.turnCost;
        action.creature.turnBalance += turnCost;
      });
    },
    calculateInactivePlayers: function() {
      var self = this;
      var inactivePlayers = _.remove(self.activePlayers, function(input) {
        return input.turnBalance >= 1.0;
      });
      self.inactivePlayers.push(inactivePlayers);
    },
    calculateActivePlayers: function() {
      var self = this;
      var activePlayers = _.remove(self.inactivePlayers, function(input) {
        return input.turnBalance < 1.0;
      });
      self.activePlayers.push(activePlayers);
    },
    reduceTurnBalance: function(turnReduction) {
      var self = this;

      self.inactivePlayers.forEach(function(input) {
        input.creature.turnBalance -= turnReduction;
      });
    },
    start: function () {
      var self = this;
      self.initTurnBalance(self.players, 0.0);
      self.setupActivePlayers();
      self.startTurn();
    },
    startTurn: function () {
      var self = this;
      self.prepareTurn(function() {
        self.processTurn(function () {
          self.startTurn();
        });
      });
    },
    prepareTurn: function(done) {
      var self = this;

      if (self.activePlayers.length === 0) {
        done();
        return;
      }

      self.currentActionIndex = 0;
      self.getCurrentActions(function() {
        self.calculateTurnBalance();
        self.calculateInactivePlayers();
        //self.prepareTurn(done);
      });
    },
    processTurn: function() {
      var self = this;

      if (self.players.length === 1) { return; }
      self.executeActions();
      self.reduceTurnBalance(1.0);
      self.calculateActivePlayers();
    },
    executeActions: function() {
      this.queue.forEach(function(actionObj) {
        actionObj.action();
      });
      this.queue = [];
    }
  };
  return instance;
};
