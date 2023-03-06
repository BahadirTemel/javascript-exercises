const caesar = function (plainText, key) {
  var cipherText = "";

  for (var i = 0; i < plainText.length; i++) {
    var ch = plainText.charCodeAt(i);

    if (ch >= 65 && ch <= 90) {
      // uppercase
      cipherText += String.fromCharCode(((ch - 65 + key + 26) % 26) + 65);
    } else if (ch >= 97 && ch <= 122) {
      // lowercase
      cipherText += String.fromCharCode(((ch - 97 + key + 26) % 26) + 97);
    } else {
      // non-alphabetic characters
      cipherText += plainText.charAt(i);
    }
  }

  return cipherText;
};

// Do not edit below this line
module.exports = caesar;
