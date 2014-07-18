var creature = require('../src/creature');

var test = creature.create();

describe('creature', function() {
  it('should have 10hp', function () {
    expect(test.hp).toEqual(10);
  });

  it('should have a queue', function () {
    expect(test.queue).toEqual([]);
  });


});
