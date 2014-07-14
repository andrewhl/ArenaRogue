var creature = require('../src/creature');

test = creature.create();

describe('creature', function() {
  it('it should have 10hp', function () {
    expect(test.hp).toEqual(10);
  });
});
