const letterCombinations = require('./part2');

describe('letterCombinations', () => {
  test('should return all possible combinations for input "23"', () => {
    const result = letterCombinations('23');
    const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    expect(result).toEqual(expected);
  });

  test('should return an empty array for an empty input', () => {
    const result = letterCombinations('');
    const expected = [];
    expect(result).toEqual(expected);
  });

  test('should return ["a", "b", "c"] for input "2"', () => {
    const result = letterCombinations('2');
    const expected = ['a', 'b', 'c'];
    expect(result).toEqual(expected);
  });

  // Add more test cases as needed
});
