const ceasarCipher = require('./caesarCipher');

test('encrypts a word with mixed case', () => {
  expect(ceasarCipher('heLLO', 3)).toBe('khOOR');
});

test('ensures text wrapping with large shift', () => {
  expect(ceasarCipher('xyz', 3)).toBe('abc');
});

test('preserves punctuation', () => {
  expect(ceasarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});