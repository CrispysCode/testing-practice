const analyzeArray = require('./analyzeArray');

test('formats an array of numbers', () => {
  const input = [1, 8, 3, 4, 2, 6];
  const expected = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  };
  expect(analyzeArray(input)).toEqual(expected);
});