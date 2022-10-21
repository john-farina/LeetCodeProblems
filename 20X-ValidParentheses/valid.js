/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
  let firstFin;
  let secondFin;
  let thirdFin;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      firstFin = false;
    } else if (s[i] === "{") {
      secondFin = false;
    } else if (s[i] === "[") {
      thirdFin = false;
    }

    if (s[i] === ")") {
      firstFin = true;
    } else if (s[i] === "}") {
      secondFin = true;
    } else if (s[i] === "]") {
      thirdFin = true;
    }
  }
}
