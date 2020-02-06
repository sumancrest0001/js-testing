const capitalizeString = require('./capitalize');

it('should return capitalized string', () => {
  const string = 'test';
  expect(capitalizeString(string)).toBe('Test');
});

it('should be false if not string', () => {
  const string = 12345;
  expect(capitalizeString(string)).toBeFalsy();
});

it('should be undefined if first element is number', () => {
  const string = '1cds';
  expect(capitalizeString(string)).toBe('1cds');
});