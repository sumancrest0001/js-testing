const reverseString = require('./reverse');

test('should return the reverse string', () => {
  const string = 'microverse';
  expect(reverseString(string)).toBe('esrevorcim')
})

test('should return empty if input is not a string', () => {
  const string = 12345;
  expect(reverseString(string)).toBe('')
})

test('should return empty if input is empty string', () => {
  const string = '';
  expect(reverseString(string)).toEqual('')
})

