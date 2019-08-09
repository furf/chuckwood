const woodchuck = require('./index');

test('chucks wood', () => {
  expect(woodchuck.chuck('wood', 'chuck')).toBe('How much wood could a woodchuck chuck if a woodchuck could chuck wood?');
});
