var TurnEngine = require('../src/turn-engine');

describe('turn-engine', function () {

  var engine;

  beforeEach(function () {
    engine = TurnEngine.create();
  });

  it('queues actions', function() {
    engine.queue('action');
    expect(engine.actions.length).toBe(1);
  });

  it('returns the next action', function() {
    engine.queue('action');
    expect(engine.getNextAction()).toBe('action');
  });
});
