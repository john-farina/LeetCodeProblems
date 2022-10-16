/**
 * @param {number[]} digits
 * @return {number[]}
 */

function plusOne(digits) {
  let num = "";
  let parseNumPlusOne;
  let finalArray = [];

  digits.forEach((digit) => {
    num += digit;
  });

  parseNumPlusOne = (BigInt(num) + BigInt(1)).toString();

  for (let i = 0; i < parseNumPlusOne.length; i++) {
    finalArray.push(parseNumPlusOne[i]);
  }

  console.log(finalArray);
  return finalArray;
}

plusOne([1, 2, 3]); // [1,2,4]
plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
