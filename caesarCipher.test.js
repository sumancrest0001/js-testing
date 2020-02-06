const caesarCipher = require('./caesarCipher');

describe('Cipher encryption algorithm', () => {
  const string = 'This is a testing string';
  const string2 = 'This is: a, testing string!';
  const string3 = 'THIS is: a, TESTING string!';
  const string4 = 'THIS is: z, TESTING string!';
  const shift = 1;

  test('should return an ecrypted string', () => {
    expect(caesarCipher(string, shift)).toEqual('Uijt jt b uftujoh tusjoh');
  });

  test('should not encrypt symbols', () => {
    expect(caesarCipher(string2, shift)).toEqual('Uijt jt: b, uftujoh tusjoh!');
  });

  test('should respect Uppercase letters', () => {
    expect(caesarCipher(string3, shift)).toEqual('UIJT jt: b, UFTUJOH tusjoh!');
  });

  test('should wrap from z to a', () => {
    expect(caesarCipher(string4, shift)).toEqual('UIJT jt: a, UFTUJOH tusjoh!');
  });
});