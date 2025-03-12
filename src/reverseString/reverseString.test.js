const reverseString = require("./reverseString");

test('returns a string reversed', () => {
  expect(reverseString("string")).toBe("gnirts");
});