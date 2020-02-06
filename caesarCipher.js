function caesarCipher(text, shift) {
  var ciphered = "";

  function upperCase(char) {
    ciphered += String.fromCharCode((char - 65 + shift) % 26 + 65)
  };

  function lowerCase(char) {
    ciphered += String.fromCharCode((char - 97 + shift) % 26 + 97)
  };

  for (var i = 0; i < text.length; i++) {
    var char = text.charCodeAt(i);
    if (65 <= char && char <= 90) upperCase(char);
    else if (97 <= char && char <= 122) lowerCase(char);
    else ciphered += text.charAt(i);
  }
  return ciphered;
}

module.exports = caesarCipher;