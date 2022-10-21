const e = require("express");

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  let ransom = [];
  let mag = [];
  let newRansom = [];

  console.log(ransom, mag, newRansom);

  for (let letter in ransomNote) {
    ransom.push(ransomNote[letter].toLowerCase());
  }

  for (let letter in magazine) {
    mag.push(magazine[letter].toLowerCase());
  }

  for (let ransomLetter of ransom) {
    for (let magLetter of mag) {
      if (magLetter === ransomLetter) {
        console.log("i got a match");
        newRansom.push(magLetter);
        mag.splice(magLetter, 1);
      } else {
        break;
      }
    }
  }

  console.log(ransom, mag, newRansom);

  if (ransom.length === newRansom.length) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

canConstruct("aa", "aab"); // true can make it
canConstruct("apples", "app"); // false can't make it
