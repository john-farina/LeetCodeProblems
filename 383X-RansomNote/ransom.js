const e = require("express");

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

Array.prototype.remove = function (index) {
  this.splice(index, 1);
};

function canConstruct(ransomNote, magazine) {
  let ransom = [];
  let mag = [];
  let newRansom = [];

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
        console.log("mag", magLetter);

        if (mag.length > 1) {
          newRansom.push(magLetter);
          mag.remove(magLetter);
          console.log("mag after splice", mag);
        } else {
          mag = [];
        }
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

// canConstruct("aa", "aab"); // true can make it
canConstruct("aab", "bbaa"); // FAILS because the first element gets removed when splicing the middle, not sure why
