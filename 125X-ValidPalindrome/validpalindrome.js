/**
 * @param {string} s
 * @return {boolean}
 */

// get a string and remove {spaces, period, comma, etc} all lowercase
// doesnt remove all none printable strings not sure a proper way to do it but this is basically the way

function isPalindrome(s) {
  let cleanString = "";
  let reverseString = "";

  for (let i = 0; i < s.length; i++) {
    if (
      s[i] !== " " &&
      s[i] !== "," &&
      s[i] !== "." &&
      s[i] !== ":" &&
      s[i] !== ";" &&
      s[i] !== "@"
    ) {
      cleanString += s[i].toLowerCase();
      reverseString = s[i].toLowerCase() + reverseString;
      cleanString.replace(/[^\x20-\x7E]/g, "");
      reverseString.replace(/[^\x20-\x7E]/g, "");
    }
  }

  if (cleanString === reverseString) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

isPalindrome("Race abb Car");
isPalindrome("A man, a plan, a canal: Panama#@%$^7*");
