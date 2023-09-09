function rot13(str) {
  // Create a regular expression to match uppercase letters
  var re = /[A-Z]/;

  // Function to decode a single character
  function decodeChar(char) {
    // Check if the character is an uppercase letter
    if (re.test(char)) {
      // Convert the character to its ASCII code
      var charCode = char.charCodeAt(0);
      
      // Calculate the new character code after shifting by 13 places
      // Since there are 26 letters in the alphabet, shifting by 13 twice will decode the character
      // Modulo 26 is used to ensure that the new character code wraps around if it goes beyond 'Z'
      var decodedCharCode = ((charCode - 65 + 13) % 26) + 65;

      // Convert the new character code back to a character
      return String.fromCharCode(decodedCharCode);
    } else {
      // If the character is not an uppercase letter, return it unchanged
      return char;
    }
  }

  // Use the decodeChar function to decode each character in the input string
  var decodedStr = str.split('').map(decodeChar).join('');

  return decodedStr;
}

// Example usage:
var encodedString = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.";
var decodedString = rot13(encodedString);
console.log(decodedString); // Output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
