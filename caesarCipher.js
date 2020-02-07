function caesarCipher(text, shift) {
  let ciphered = '';

  function upperCase(char) {
    ciphered += String.fromCharCode(((char - 65 + shift) % 26) + 65);
  }

  function lowerCase(char) {
    ciphered += String.fromCharCode(((char - 97 + shift) % 26) + 97);
  }

  for (let i = 0; i < text.length; i += 1) {
    const char = text.charCodeAt(i);
    if (char >= 65 && char <= 90) upperCase(char);
    else if (char >= 97 && char <= 122) lowerCase(char);
    else ciphered += text.charAt(i);
  }
  return ciphered;
}
export default caesarCipher;