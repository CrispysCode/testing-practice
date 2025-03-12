const capitalize = require('./capitalize');

test('returns a string with the first character capitalized', () => {
  expect(capitalize("string")).toBe("String");
});