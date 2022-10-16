/**
 * @param {string} s
 * @return {number}
 */

function romanToInt(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    let letterAfter = s[i + 1];
    if (letter === "I") {
      if (letterAfter === "V" || letterAfter === "X") {
        total += -2;
      }

      total += 1;
    } else if (letter === "V") {
      total += 5;
    } else if (letter === "X") {
      if (letterAfter === "L" || letterAfter === "C") {
        total += -20;
      }

      total += 10;
    } else if (letter === "L") {
      total += 50;
    } else if (letter === "C") {
      if (letterAfter === "D" || letterAfter === "M") {
        total += -200;
      }

      total += 100;
    } else if (s[i] === "D") {
      total += 500;
    } else if (s[i] === "M") {
      total += 1000;
    }
  }
  console.log("TOTAL", total, s);
  return total;
}
romanToInt("III"); // TOTAL 3, III
romanToInt("LVIII"); // TOTAL 58 LVIII
romanToInt("MCMXCIV"); // TOTAL 1994 MCMXCIV
romanToInt("XXIX"); // TOTAL 29 XXIX
