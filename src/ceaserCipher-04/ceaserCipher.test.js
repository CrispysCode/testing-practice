test('encrypts a word with mixed case', () => {
  expect(caesarCipher('heLLO', 3)).toBe('khOOR');
});

test('ensures text wrapping with large shift', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves punctuation', () => {
  expect(ceaserCipher('Hello, World!', 3)).toBe('Khor, Zruog!');
});