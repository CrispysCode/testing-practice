test('encrypts a word with mixed case', () => {
  expect(caesarCipher('heLLO', 3)).toBe('khOOR');
});