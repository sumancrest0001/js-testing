function reverseString(string) {
  if (typeof string !== 'string') return '';
  let newString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    newString += string[i];
  }
  return newString;
}


module.exports = reverseString;
