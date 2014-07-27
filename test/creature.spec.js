var creature = require('../src/creature');

describe('creature', function() {

  var creature1;

  beforeEach(function () {
    creature1 = creature.create();
  });

  it('should have 10hp', function () {
    expect(creature1.hp).toEqual(10);
  });

  describe('#queueAction', function () {

    describe('current action is null', function() {

      beforeEach(function() {
        creature1.currentAction = null;
      });

      it('makes the next item in the action queue the current action', function () {
        expect(creature1.actionQueue.length).toBe(0);
        creature1.queueAction({ cost: 6 });
        expect(creature1.actionQueue.length).toBe(0);
      });

    });

  });

  describe('#executeCurrentAction', function() {

    beforeEach(function () {
      creature1 = creature.create();
    });

    it('should replace the current action with the next action', function() {
      creature1.currentAction = { cost: 7 };
      creature1.queueAction( { cost: 15 } );

      console.log(creature1.actionQueue);
      creature1.executeCurrentAction();
      console.log(creature1.actionQueue);

      expect(creature1.currentAction.cost).toBe(15);
    });

    it('should shift the queue by one', function() {
      var action1 = { cost: 10 };
      var action2 = { cost: 15 };
      creature1.actionQueue = [ action1, action2 ];

      creature1.executeCurrentAction();

      expect(creature1.actionQueue[0]).toBe(action2);
      expect(creature1.actionQueue.length).toBe(1);
    });
  });

});
