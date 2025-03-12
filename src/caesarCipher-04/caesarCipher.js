function caesarCipher(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) { // uppercase letters
      charCode = (charCode - 65 + shift) % 26 + 65;
    } else if (charCode >= 97 && charCode <= 122) { // lowercase letters
      charCode = (charCode - 97 + shift) % 26 + 97;
    } else { // non-alphabetical characters
      result += text[i];
      continue;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}
module.exports = caesarCipher;