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
    getCurrentActions: function() {
      var self = this;
      self.activePlayers.forEach(function(input) {
        if (input.creature.turnBalance < 1.0) {
          self.queue.push(input.nextAction());
        }
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
      self.prepareTurn();
      self.processTurn();
    },
    prepareTurn: function() {
      var self = this;
      var stillActivePlayers = true;
      var result;

      while (stillActivePlayers) {
        result = (self.activePlayers.length === 0) ? false : true;
        self.getCurrentActions();
        self.calculateTurnBalance();
        self.calculateInactivePlayers();

        stillActivePlayers = result;

        self.prepareTurn();
      }
    },
    processTurn: function() {
      var self = this;
      var monstersLive = true;
      var result;

      while (monstersLive) {
        // This condition isn't correct. Won't work if monsters kill the hero.
        result = (self.players.length === 1) ? false : true;

        self.executeActions();
        self.reduceTurnBalance(1.0);
        self.calculateActivePlayers();
        self.prepareTurn();

        monstersLive = result;

        self.processTurn();
      }
    },
    executeActions: function() {
      this.queue.forEach(function(action) {
        action();
      });
      this.queue = [];
    }
  };
  return instance;
};
