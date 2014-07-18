var World = require('../src/world');

describe('world', function() {

  var world;

  beforeEach(function() {
    world = World.create();
    world.createCreature({name: 'Goblin'});
  });

  it('has an array of creatures', function() {
    expect(_.isArray(world.creatures)).toBe(true);
  });

  it('can register creatures', function() {
    expect(world.creatures[0].name).toBe('Goblin');
  });

});
