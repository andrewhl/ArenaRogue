var World = require('../src/world');
var Creature = require('../src/creature');

describe('world', function() {

  var world;

  beforeEach(function() {
    world = World.create();
    var creature = world.createCreature({name: 'Goblin'});
  });

  it('has an array of creatures', function() {
    expect(_.isArray(world.creatures)).toBe(true);
  });

  it('can register creatures', function() {
    expect(world.creatures[0].name).toBe('Goblin');
  });

});
