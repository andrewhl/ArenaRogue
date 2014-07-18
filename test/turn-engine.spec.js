var TurnEngine = require('../src/turn-engine');
var World = require('../src/world');
var Creature = require('../src/creature');

describe('turn-engine', function () {

  var engine;
  var world;
  var creature;

  beforeEach(function () {
    engine = TurnEngine.create();
    world = World.create();
    creature = world.createCreature({name: 'Goblin'});
  });

  it('has a list of creatures', function() {
    expect(_.isArray(engine.creatures)).toBe(true);
  });

  it('can add a creature', function() {
    engine.addCreature(creature);
    expect(engine.creatures[0].name).toBe('Goblin');
  });

  describe('#nextTick', function () {

    beforeEach(function () {
      this.creature1 = world.createCreature({name: 'Goblin'});
      this.creature2 = world.createCreature({name: 'Rat'});

      engine.addCreature(this.creature1);
      engine.addCreature(this.creature2);
    });

    it('gets the current delay from the creatures', function() {
      spyOn(this.creature1, 'getDelay').and.callThrough();
      spyOn(this.creature2, 'getDelay').and.callThrough();

      engine.nextTick();

      expect(this.creature1.getDelay).toHaveBeenCalled();
      expect(this.creature2.getDelay).toHaveBeenCalled();
    });

    it('gets the next action from the creatures if the delay is 0', function () {
      this.creature1.setDelay(0);
      this.creature2.setDelay(0);

      spyOn(this.creature1, 'getAction').and.callThrough();
      spyOn(this.creature2, 'getAction').and.callThrough();

      engine.nextTick();

      expect(this.creature1.getAction).toHaveBeenCalled();
      expect(this.creature2.getAction).toHaveBeenCalled();
    });

    it('subtracts 1 from the delay on the creature', function () {
      this.creature1.setDelay(10);

      engine.nextTick();

      expect(this.creature1.getDelay()).toBe(9);
    });

    it('sets the creature delay to the action cost', function () {
      var action = {cost: 10};
      this.creature1.setAction(action);
      this.creature1.setDelay(0);

      engine.nextTick();

      expect(this.creature1.getDelay()).toBe(10);
    })
  });

  describe('#onActionReady', function () {

    beforeEach(function () {
      this.creature1 = world.createCreature({name: 'Goblin'});
      this.creature2 = world.createCreature({name: 'Rat'});

      engine.addCreature(this.creature1);
      engine.addCreature(this.creature2);
    });

    it('gets called when a creature delay is 0', function () {
      this.creature1.setDelay(0);

      spyOn(engine, 'onActionReady').and.callThrough();

      engine.nextTick();

      expect(engine.onActionReady).toHaveBeenCalled();
    });

    it('does not get called when a creature has a delay greater than 0', function () {
      this.creature1.setDelay(1);


      spyOn(engine, 'onActionReady').and.callThrough();

      engine.nextTick();

      console.log(this.creature1.getDelay());

      expect(engine.onActionReady).not.toHaveBeenCalled();
    });
  });

});
