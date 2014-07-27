var TurnEngine = require('../src/turn-engine');
var World = require('../src/world');

describe('turn-engine', function () {

  var engine;
  var world;
  var creature;

  beforeEach(function () {
    engine = TurnEngine.create();
    world = World.create();
    creature = world.createCreature({name: 'Goblin'});
  });

  it('has a list of items', function() {
    expect(_.isArray(engine.items)).toBe(true);
  });

  it('can add a creature', function() {
    engine.addCreature(creature);
    expect(engine.items.length).toBe(1);
  });

  describe('#nextTick', function () {

    beforeEach(function () {
      this.goblin = world.createCreature({ name: 'Goblin' });
      engine = TurnEngine.create();
    });

    it('subtracts 1 from the delay on the item', function () {
      this.goblin.queueAction({ cost: 10 });
      engine.addCreature(this.goblin);

      engine.nextTick();

      expect(engine.items[0].delay).toBe(9);
    });

    describe('when delay hits 0', function() {

      beforeEach(function() {
        this.goblin = world.createCreature({ name: 'Goblin' });
        this.goblin.queueAction( { cost: 0 })

        engine = TurnEngine.create();
        engine.addCreature(this.goblin);
      });

      it('tells the creature to execute the current action', function () {
        spyOn(this.goblin, 'executeCurrentAction');

        engine.nextTick();

        expect(this.goblin.executeCurrentAction).toHaveBeenCalled();
      });

      it('sets the creature delay to the next action cost', function () {
        this.goblin.queueAction( { cost: 10 } );

        engine.nextTick();

        expect(engine.items[0].delay).toBe(10);
      });

    });
  });

});
