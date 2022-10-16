/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  let string = x.toString();
  let reverseString = "";

  for (let i = 0; i < string.length; i++) {
    reverseString = string[i] + reverseString;
  }

  if (x === Number(reverseString)) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

isPalindrome(101); //true
isPalindrome(200); //false
