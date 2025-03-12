// calculate.test.js
const calculate = require("./calculate");
test('adds two positive numbers', () => {
  expect(calculate.add(2, 3)).toBe(5);
});

test('adds two negative numbers', () => {
  expect(calculate.add(-2, -3)).toBe(-5);
});

test('adds a positive and a negative number', () => {
  expect(calculate.add(2, -3)).toBe(-1);
});

test('adds a number and zero', () => {
  expect(calculate.add(2, 0)).toBe(2);
});

test('subtracts two positive numbers', () => {
  expect(calculate.subtract(5, 3)).toBe(2);
});

test('subtracts two negative numbers', () => {
  expect(calculate.subtract(-2, -3)).toBe(1);
});

test('subtracts a positive and a negative number', () => {
  expect(calculate.subtract(2, -3)).toBe(5);
});

test('subtracts a number and zero', () => {
  expect(calculate.subtract(2, 0)).toBe(2);
});

test('divides two positive numbers', () => {
  expect(calculate.divide(6, 3)).toBe(2);
});

test('divides two negative numbers', () => {
  expect(calculate.divide(-6, -3)).toBe(2);
});

test('divides a positive and a negative number', () => {
  expect(calculate.divide(6, -3)).toBe(-2);
});

test('divides a number by zero', () => {
  expect(() => calculate.divide(6, 0)).toThrowError("Can't divide by 0");
});

test('multiplies two positive numbers', () => {
  expect(calculate.multiply(2, 3)).toBe(6);
});

test('multiplies two negative numbers', () => {
  expect(calculate.multiply(-2, -3)).toBe(6);
});

test('multiplies a positive and a negative number', () => {
  expect(calculate.multiply(2, -3)).toBe(-6);
});

test('multiplies a number and zero', () => {
  expect(calculate.multiply(2, 0)).toBe(0);
});